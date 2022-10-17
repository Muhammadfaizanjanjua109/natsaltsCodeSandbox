import React from "react";
import style from "./css/Navbar.module.css";
import logo from "../../Assets/images/logo.png";
function Navbar() {
  return (
    <>
      <nav className={style.navbar}>
        <i className={`fa fa-bars m-2 mr-3 ${style.menu_icon}`}></i>
        <div className={`${style.logo}`}>
          <img className=" m-2 mr-3" src={`${logo}`} alt="logo" />
          <p className={`${style.text}`}> Natsalts</p>
        </div>
        <div
          className={`${style.item} " " ${style.search} ${
            style.right
          } ${(style.tabindex = "0")} `}
        >
          <div className={`${style.search_group}`}>
            <select>
              <option value="all">All</option>
              <option value="all">Mens</option>
              <option value="all">Womens</option>
              <option value="all">Winter</option>
              <option value="all">Summer</option>
            </select>
            <input type="text" />
            <i className={`${"fa fa-search m-2"}  ${style.search_icon}`}></i>
          </div>
        </div>

        <a href="" className={`${style.item}`}>
          <div className={`${style.group}`}>
            <i className={` ${"fa fa-user-circle fa-lg  m-2 mr-3"} `}></i>
            <div className={`${style.detail}`}>
              Account
              <div className={`${style.sub}`}>Sign In</div>
            </div>
          </div>
        </a>

        <a href="" className={`${style.item}`}>
          <div className={`${style.group}`}>
            <i className={`${"fa fa-cart-plus fa-lg  m-2 mr-3"}`}></i>
            <div className={`${style.detail}`}>
              Cart
              <div className={`${style.sub}  mr-3`}>Rs 0.0</div>
            </div>
          </div>
        </a>
      </nav>
    </>
  );
}

export default Navbar;
