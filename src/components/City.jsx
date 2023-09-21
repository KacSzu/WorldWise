/* eslint-disable no-unused-vars */
import { useParams, useSearchParams } from "react-router-dom";
import styles from "./City.module.css";
import { useEffect, useState } from "react";
import { useCities } from "../contexts/CitiesContext";
import Spinner from "./Spinner";
import Button from "./Button";
import BackButton from "./BackButton";
// Doesn't work, i don't know why :(

// const flagemojiToPNG = (flag) => {
//   let countryCode = Array.from(flag, (codeUnit) => codeUnit.codePointAt())
//     .map((char) => String.fromCharCode(char - 127397).toLowerCase())
//     .join("");
//   return (
//     <img src={`https://flagcdn.com/24x18/${countryCode}.png`} alt="flag" />
//   );
// };
const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

function City() {
  const { isLoading, getCity, currentCity } = useCities();
  const { id } = useParams();
  useEffect(
    function () {
      getCity(id);
    },
    [id]
  );

  const { cityName, emoji, date, notes } = currentCity;

  return (
    <div className={styles.city}>
      {isLoading && <Spinner />}
      {!isLoading && (
        <>
          <div className={styles.row}>
            <h6>City name</h6>
            <h3>
              <span>{emoji}</span> {cityName}
            </h3>
          </div>
          <div className={styles.row}>
            <h6>You went to {cityName} on</h6>
            <p>{formatDate(date || null)}</p>
          </div>
          {notes && (
            <div className={styles.row}>
              <h6>Your notes</h6>
              <p>{notes}</p>
            </div>
          )}
          <div className={styles.row}>
            <h6>Learn more</h6>
            <a
              href={`https://en.wikipedia.org/wiki/${cityName}`}
              target="_blank"
              rel="noreferrer"
            >
              Check out {cityName} on Wikipedia &rarr;
            </a>
          </div>
          <div>
            <BackButton />
          </div>
        </>
      )}
    </div>
  );
}

export default City;
