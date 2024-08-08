"use client";

import { useState } from "react";
export default function Burger({ className }) {
  const [burgerClicked, setBurgerClicked] = useState(false);

  return (
    <button
      type="button"
      className={`burger ${className ? className : ""}`}
      aria-label={`${burgerClicked ? "Закрыть меню" : "Открыть меню"}`}
    >
      <span className="burger__slice"></span>
    </button>
  );
}
