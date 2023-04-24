import React from "react";
import {
  faCartShopping,
  faCheck,
  faX,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/cookieProductCard.css";

const CookieProductCard = ({ name, img, desc, price }) => {
  return (
    <div className="wrapper">
      <div className="cookie-card">
        <div className="top"></div>
        <div className="bottom">
          <div className="left">
            <div className="details">
              <img
                className="cookie-card-img"
                alt={name}
                style={{ backgroundImage: `url(${img})` }}
              />
              <h2 className="cookie-card-title">{name}</h2>
              <p className="cookie-card-price">{price}</p>
            </div>
            <div className="buy">
              <FontAwesomeIcon icon={faCartShopping} />
            </div>
            <div className="right">
              <div className="done">
                <FontAwesomeIcon icon={faCheck} />
              </div>
              <div className="details">
                <h2 className="cookie-card-title">{name}</h2>
                <p>Added you your cart</p>
              </div>
              <div className="remove">
                <FontAwesomeIcon icon={faX} />
              </div>
            </div>
          </div>
        </div>
        <div className="inside">
          <div className="icon">
            <FontAwesomeIcon icon={faCircleInfo} />
          </div>
          <div className="contents">
            <table>
              <tr>
                <th className="cookie-card-description">{desc}</th>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieProductCard;
