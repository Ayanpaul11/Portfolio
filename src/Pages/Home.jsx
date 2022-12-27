import React from "react";
import Header from "./../Components/Home/Header";
import Bio from "./../Components/Home/Bio";
import Portfolio from "./../Components/Home/Portfolio";
import Services from "./../Components/Home/Services";

export default function Home() {
  return (
    <div>
      <Header />
      <br />
      <Bio />
      <br />
      <Portfolio />
      <br />
      <Services />
      <br />
      Contact
    </div>
  );
}
