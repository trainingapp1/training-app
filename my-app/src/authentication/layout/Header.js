import React from "react";
import { Link } from "react-router-dom";
import AuthOptions from "../auth/AuthOptions";
import "../../style.css";

export default function Header() {
  return (
    <header id="iheader">
      <Link to="/">
        <h1 className="ilogo">Get-Fit</h1>
      </Link>
      <div className="auth">
      <AuthOptions />
      </div>
    </header>
  );
}
