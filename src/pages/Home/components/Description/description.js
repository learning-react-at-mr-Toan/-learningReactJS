import React from "react";
import "./description.scss";

const desc = () => {
  function handleClickBtn() {
    const btn = document.getElementsByTagName("a");
    btn.style.boxShadow = "rgb(0 0 0 / 13%) 0px 3px 5px inset";
  }
  return (
    <section className='description'>
      <div className='container'>
        <div className='desc boxShadow'>
          <div className='desc__content'>
            <p>
              Hello! I’m Bui Van Hoa. Junior Web Developer with over 1 years of
              experience specializing in front end development. Experienced with
              all stages of the development cycle for dynamic web
              projects.Having an in-depth knowledge including advanced HTML5,
              CSS, CSS3, SASS, LESS, JSON, XML, Java, JavaScript, JQuery,
              Angular JS. Strong background in management and leadership.
            </p>
          </div>
          <div className='desc__btn'>
            <a href='#'>download cv</a>
            <a href='#'>contact me</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default desc;
