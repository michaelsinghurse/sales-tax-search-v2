import React from "react";
import { useLocation } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  const loc = useLocation();

  return (
    <div id="notfound">
      <h1>Error 404 - Page Not Found!</h1>
      <p>The page <code>{loc.pathname}</code> does not exist on this site.</p>
    </div>
  );
}
