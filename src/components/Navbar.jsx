import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react"
import "./Navbar.css"


export default function () {
    return (
      <div className="container">
        <div className="navbar">
          <div className="link">
            <Link to="/">Shop</Link>
            <Link to="/cart">
              <ShoppingCart size={20} />
            </Link>
          </div>
        </div>
      </div>
    );
}
