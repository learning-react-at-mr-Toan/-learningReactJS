import React from "react";
import { useState } from "react";
import Skills from "./components/Skills/Skills";
import Banner from "./components/Banner/Banner";
import Description from "./components/Description/Description";
import Education from "./components/FolderTree/Education/Education";
import Experience from "./components/FolderTree/Experience/Experience";
import Portfolio from "./components/Portfolio/Portfolio";
import Interest from "./components/Interest/Interest";
import Pricing from "./components/Pricing/Pricing";
import Blog from "./components/Blog/Blog";
import ChangeColor from "./components/ChangeColor/ChangeColor";
import Contact from "./components/Contact/Contact";
import Loading from "../../components/Loading/Loading";
import "./Home.scss";
import Testimonials from "./components/Testimonials/Testimonials";

const Home = () => {
  const [isColor, setIsColor] = useState("green");
  const [value, setValue] = useState(false);

  return (
    <div id='body' className={`home ${isColor} ${value ? "home--height" : ""}`}>
      <Loading />
      <Banner />
      <Description />
      <Education setValue={setValue} />
      <Skills />
      <Experience setValue={setValue} />
      <Portfolio />
      <Interest />
      <Testimonials />
      <Pricing />
      <Blog />
      <Contact />
      <ChangeColor setIsColor={setIsColor} />
    </div>
  );
};
export default Home;
