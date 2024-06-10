"use client"
import { Component } from "react";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";


class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">Trippy</h1>

        <div className="menu-icons" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? <RxHamburgerMenu/> : <IoMdClose/>}
          ></i>
        </div>
        <ul className={this.state.clicked ? " nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li>
                <Link className={item.cName} href={item.src}>
                  <i className={item.icons}></i>
                  {item.titles}
                </Link>
              </li>
            );
          })}
          <button>Sign Up</button>
        </ul>
      </nav>
    );
  }
}
export default Navbar;
