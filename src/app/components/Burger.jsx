"use client";

import { useState } from "react";
export default function Burger({ className }) {
  const [burgerClicked, setBurgerClicked] = useState(false);

  return (
    <button
      onClick={() => setBurgerClicked(!burgerClicked)}
      type="button"
      className={`burger ${burgerClicked ? "_active" : ""}`}
      aria-label={`${burgerClicked ? "Закрыть меню" : "Открыть меню"}`}
    >
      <span className="burger__slice"></span>
    </button>
  );
}
