import React from "react";
import Field from "./SkillsField/SkillsField";
import { skills } from "../../../../utils/MockData";
import TitleSection from "../TitleSection/TitleSection";
import SkillsIcon from "../../../../assets/images/mixer.png";
import "./Skills.scss";

const Skills = () => {
  return (
    <section className='skills'>
      <div className='container'>
        <TitleSection title='skills' urlIcon={SkillsIcon} />
        <div className='skills__wrap'>
          {skills.map((data, index) => (
            <Field key={index} data={data} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
