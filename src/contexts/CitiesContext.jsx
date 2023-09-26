/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useState, useEffect, useContext } from "react";

const CitiesContext = createContext();
const BASE_URL = "http://localhost:8000";
function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});
  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        if (!res.ok) throw new Error("Something went wrong");
        const data = await res.json();
        setCities(data);
      } catch (err) {
        alert(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  async function getCity(id) {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/cities/${id}`);
      if (!res.ok) throw new Error("Something went wrong with fetching data");
      const data = await res.json();
      setCurrentCity(data);
    } catch (err) {
      alert(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  async function createCity(newCity) {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/cities`, {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      setCities((cities) => [...cities, data]);
    } catch (err) {
      alert("There were an error creating city");
    } finally {
      setIsLoading(false);
    }
  }
  async function deleteCity(id) {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/cities/${id}`, {
        method: "DELETE",
      });

      setCities((cities) => cities.filter((city) => city.id !== id));
    } catch (err) {
      alert("There were an error deleting data");
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <CitiesContext.Provider
      value={{
        cities,
        setCities,
        isLoading,
        currentCity,
        getCity,
        createCity,
        deleteCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("Cities context was used outside the CitiesProvider");
  return context;
}
export { CitiesProvider, useCities };
