export default function Burger({ burgerClicked, onClick }) {

  return (
    <button
      onClick={() => onClick(!burgerClicked)}
      type="button"
      className={`burger ${burgerClicked ? "_active" : ""}`}
      aria-label={`${burgerClicked ? "Закрыть меню" : "Открыть меню"}`}
    >
      <span className="burger__slice"></span>
    </button>
  );
}
