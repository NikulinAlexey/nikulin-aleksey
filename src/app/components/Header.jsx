import Link from "next/link";
import Container from "./Container";
import Image from "next/image";

import logo from "@/images/logo.png";
import Menu from "./Menu/Menu";
import Burger from "./Burger";

export default function Header({ className }) {
  return (
    <header className={`pb-4 ${className ? className : ""}`}>
      <Container className="flex justify-between items-center p-4 rounded-t-2xl bg-[#979797]">
        <Link href="/">
          <Image className="w-9 h-9" src={logo} alt="" width={36} height={36}/>
        </Link>
        <Menu />
        <Burger />
      </Container>
    </header>
  );
}
