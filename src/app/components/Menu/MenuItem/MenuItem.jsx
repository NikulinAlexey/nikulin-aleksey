import SvgIcon from "../../SvgIcon";
import Link from "next/link";

export default function MenuItem({linkPath, linkText, iconName, iconClassName}) {
  return (
    <Link href={linkPath} className="flex gap-2 items-center">
      <SvgIcon
        name={iconName}
        height={20}
        width={20}
        className={iconClassName}
      />
      <span>{linkText}</span>
    </Link>
  );
}
