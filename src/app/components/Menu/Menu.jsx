import MenuItem from "./MenuItem/MenuItem";

export default function Menu({}) {
  return (
    <nav className="max-w-[1440px] px-4 md:px-7 xl:px-32">
      <ul className="flex gap-8">
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
