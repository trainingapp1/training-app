import React from "react";
import { Link } from "react-router-dom";
import AuthOptions from "../auth/AuthOptions";

export default function Header() {
  return (
    <header id="iheader">
      <Link to="/">
        <h1 className="ilogo">Get-Fit</h1>
      </Link>
      <AuthOptions />
    </header>
  );
}
