import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CitiesProvider } from "./contexts/CitiesContext";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import CityList from "./components/CityList";
import Form from "./components/Form";
import City from "./components/City";
import CountryList from "./components/CountryList";

function App() {
  return (
    <CitiesProvider>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Homepage />} />
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="login" element={<Login />} />
          <Route path="app" element={<AppLayout />} />
          <Route path="app" element={<AppLayout />}>
            <Route index element={<Navigate replace to="cities" />} />
            <Route path="cities" element={<CityList />}></Route>
            <Route path="cities/:id" element={<City />} />
            <Route path="countries" element={<CountryList />}></Route>
            <Route path="form" element={<Form />}></Route>
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </CitiesProvider>
  );
}
export default App;
