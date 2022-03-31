import React from "react";
import avatar from "../../../../../assets/images/profile.png";
import EmailIcon from "@mui/icons-material/Email";
import LanguageIcon from "@mui/icons-material/Language";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./card.scss";

const card = () => {
  return (
    <section className='card'>
      <div className='container'>
        <div className='card__wrap boxShadow'>
          <div className='card__content'>
            <div className='card__name'>
              <h4>bui van hoa</h4>
              <h6>Software Engineer & UI/UX Expert</h6>
            </div>
            <div className='card__infos'>
              <ul className='infos__list'>
                <li>
                  <EmailIcon />
                  <span>ongchunhostu1998@gmail.com</span>
                </li>
                <li>
                  <LanguageIcon />
                  <span>yourpersonalwsebsite.com</span>
                </li>
                <li>
                  <i className='fa-brands fa-skype'></i>
                  <span>
                    <a href='https://join.skype.com/invite/xZFCGR1NBK20'>
                      https://join.skype.com/invite/xZFCGR1NBK20
                    </a>
                  </span>
                </li>
                <li>
                  <CallIcon />
                  <span>+84 373 887 052</span>
                </li>
                <li>
                  <LocationOnIcon />
                  <span>D1 Street 36, 2 District, Ho Chi Minh City</span>
                </li>
              </ul>
            </div>
            <div className='card__icon'>
              <a
                href='https://www.facebook.com/profile.php?id=100015533373382'
                className='icon__fb'
              >
                <i className='fa-brands fa-facebook-f'></i>
              </a>
              <a href='https://twitter.com/hoabui1907' className='icon__tw'>
                <i className='fa-brands fa-twitter'></i>
              </a>
              <a href='https://contacts.google.com/?hl=vi' className='icon__gg'>
                <i className='fa-brands fa-google-plus-g'></i>
              </a>
              <a
                href='https://www.linkedin.com/in/h%C3%B3a-b%C3%B9i-080768234/'
                className='icon__in'
              >
                <i className='fa-brands fa-linkedin-in'></i>
              </a>
              <a className='icon__wf'>
                <i className='fa-solid fa-wifi'></i>
              </a>
            </div>
          </div>
          <div className='triangle'></div>
          <button className='btn__plus'>
            <i className='fa-solid fa-plus'></i>
          </button>
          <figure className='avatar'>
            <img src={avatar} alt='Avatar' />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default card;