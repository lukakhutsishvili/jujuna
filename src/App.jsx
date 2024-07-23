import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import "./i18n";
import Header from "./components/mainSections/Header";
import Jujuna from "./components/mainSections/Jujuna";
import MobileBar from "./components/mainSections/MobileBar";
import ModalMenu from "./components/Modal";
import News from "./components/mainSections/News";
import CockTail from "./components/mainSections/CockTail";
import FeedBack from "./components/mainSections/FeedBack";
import Footer from "./components/mainSections/Footer";
import AboutUs from "./components/mainSections/AboutUs";
import Bottle from "./components/mainSections/Bottle";
import AnimatedSection from "./components/AnimatedSection";

export const context = createContext({
  isOpen: false,
  setIsOpen: () => {},
  country: "",
  setCountry: () => {},
  position: { latitude: null, longitude: null },
  setPosition: () => {},
  theme: false,
  setTheme: () => {},
});

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState({ latitude: null, longitude: null });
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") === "true"
  );

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setPosition({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    } else {
      console.log("Geolocation is not available in your browser.");
    }
  }, []);

  const fetchCountry = async () => {
    try {
      const response = await axios.get(
        `https://geocode.maps.co/reverse?lat=${position.latitude}&lon=${position.longitude}&api_key=669cffa729270195390960qwo4ce108`
      );
      const CountryCode = response.data.address.country;
      setCountry(CountryCode);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (position.latitude && position.longitude) {
      fetchCountry();
    }
  }, [position]);

  useEffect(() => {
    if (theme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme.toString());
  }, [theme]);

  return (
    <context.Provider
      value={{
        isOpen,
        setIsOpen,
        country,
        setCountry,
        position,
        setPosition,
        theme,
        setTheme,
      }}
    >
      <div className="dark:bg-blue-950">
        <Header />
        <AnimatedSection>
          <Jujuna />
        </AnimatedSection>
        <AnimatedSection>
          <AboutUs />
        </AnimatedSection>
        <AnimatedSection>
          <News />
        </AnimatedSection>
        <AnimatedSection>
          <Bottle />
        </AnimatedSection>
        <AnimatedSection>
          <CockTail />
        </AnimatedSection>
        <AnimatedSection>
          <MobileBar />
        </AnimatedSection>
        <AnimatedSection>
          <FeedBack />
        </AnimatedSection>
        <Footer />
        <ModalMenu />
      </div>
    </context.Provider>
  );
}

export default App;
