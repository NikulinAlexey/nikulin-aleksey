import MenuItem from "./MenuItem/MenuItem";

export default function Menu({ burgerClicked }) {
  return (
    <nav
      className={`menu absolute right-0 p-4 translate-x-[100%] md:static md:p-0 md:bg-transparent md:translate-none ${
        burgerClicked ? "_active" : ""
      }`}
    >
      <ul className="flex gap-8 flex-col md:flex-row">
        <li>
          <MenuItem linkPath="about" linkText="About" iconName="about" />
        </li>
        <li>
          <MenuItem
            linkPath="animations"
            linkText="Animations"
            iconName="gyro"
            iconClassName=""
          />
        </li>
      </ul>
    </nav>
  );
}
