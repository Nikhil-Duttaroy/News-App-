import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { fetchWeatherAPI, getNewsAPI, getSourceAPI } from "./api";
// import * as Permissions from "expo-permissions";
import * as Location from "expo-location";

export const NewsContext = createContext();

const Context = ({ children }) => {
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState("general");
  const [source, setSource] = useState();
  const [index, setIndex] = useState(1);
  const [darkTheme, setDarkTheme] = useState(true);
  const [latitude, setLatitude] = useState([]);
  const [longitude, setLongitude] = useState([]);
  const [location, setLocation] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [temp, setTemp] = useState("");
  // const API_KEY = "b36e0e4bb83c8a51d442ff695647cee4";
const REACT_APP_API_URL = 'https://api.openweathermap.org/data/2.5'
const REACT_APP_API_KEY = "b36e0e4bb83c8a51d442ff695647cee4";

  const fetchNews = async (reset = category) => {
    const { data } = await axios.get(getNewsAPI(reset));
    setNews(data);
    setIndex(1);
  };

  const fetchNewsfromSource = async () => {
    try {
      const { data } = await axios.get(getSourceAPI(source));
      setNews(data);
      setIndex(1);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    fetchNews();
  }, [category]);

  useEffect(() => {
    fetchNewsfromSource();
  }, [source]);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        alert("Permission to access location was denied");
        return;
      }

      let { coords } = await Location.getCurrentPositionAsync({});

    if (coords) {
      const { latitude, longitude } = coords;
      let response = await Location.reverseGeocodeAsync({
        latitude,
        longitude
    });
    setLatitude(latitude)
    setLongitude(longitude)

for (let item of response) {
      let address = `${item.name}, ${item.street}, ${item.postalCode}, ${item.city},${item.country}`;
      let country1= `${item.country}`
      let city1=`${item.city}`
      setCountry(country1)
      setCity(city1)
      setAddress(address);
    }
    await fetch(
      `${REACT_APP_API_URL}/weather/?lat=${latitude}&lon=${longitude}&appid=${REACT_APP_API_KEY}&units=metric`
    )
      .then((res) => res.json())
      .then((result) => {
        setTemp(result?.main?.temp);
        console.log(result?.main?.temp);
        // console.log(latitude)
      });

  }
      // setLocation(location);
      // setLatitude(location.coords.latitude);
      // setLongitude(location.coords.longitude);

    //   let response = await Location.geocodeAsync(latitude,longitude)
    //   setAddress(response)
    //  alert(address)



    })();
  }, []);

  useEffect(() => {

  },[])







  
  return (
    <NewsContext.Provider
      value={{
        news,
        setCategory,
        index,
        setIndex,
        setSource,
        darkTheme,
        setDarkTheme,
        fetchNews,
        location,
        latitude,
        longitude,
        address,
        country,
        city,
        temp
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export default Context;
