import Header from "components/Header";
import React from "react";
import landingPage from "json/landingPage.json";
import Hero from "components/Hero";
export default function LandingPage(props) {
  return (
    <>
      <Header {...props}></Header>
      <Hero data={landingPage.hero} />
    </>
  );
}
