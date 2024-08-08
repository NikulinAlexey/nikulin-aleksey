import SvgIcon from "../../SvgIcon";
import Link from "next/link";

export default function MenuItem({linkPath, linkText, iconName, iconClassName}) {
  return (
    <div className="flex gap-4 items-center">
      <SvgIcon
        name={iconName}
        height={20}
        width={20}
        className={iconClassName}
      />
      <Link href={linkPath}>{linkText}</Link>
    </div>
  );
}
