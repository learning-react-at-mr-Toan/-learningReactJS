import React, { Fragment } from "react";
import "./eduBox.scss";
// import MoreInfo from "./moreInfo";

const eduBox = ({ eduData }) => {
  const {
    jobName,
    jobSubTitle,
    jobTime,
    jobDesc,
    keywords,
    icon,
    moreClassName,
  } = eduData;
  function keyWord() {
    if (keywords) {
      return <span>{keywords}</span>;
    } else if (icon) {
      return <i className={icon}></i>;
    }
  }

  return (
    <div className='eduBox__wrap'>
      <div className='eduBox__content'>
        <div className='eduBox__job'>
          <p className='job__name'>{jobName}</p>
          <p className='job__subTitle'>{jobSubTitle}</p>
          <p className='job__time'>{jobTime}</p>
          <p className='job__desc'>{jobDesc}</p>
          <div className={`btn__more ${moreClassName}`}>
            <i className='fa-solid fa-ellipsis'></i>
            {/* <MoreInfo /> */}
          </div>
        </div>
      </div>
      <div className='edu__key'>{keyWord()}</div>
      <div className='edu__line'></div>
    </div>
  );
};

export default eduBox;
