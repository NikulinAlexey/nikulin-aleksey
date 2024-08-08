import Link from "next/link";

export default function Menu({}) {
  return (
    <nav className="max-w-[1440px] px-4 md:px-7 xl:px-32">
      <ul className="flex gap-4">
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/animations">Animations</Link>
        </li>
      </ul>
    </nav>
  );
}
