import Link from "next/link";
import Container from "./Container";
import Image from "next/image";

import logo from "@/images/logo.png";
import Menu from "./Menu";

export default function Header({ className }) {
  return (
    <header className={`py-4 ${className ? className : ""}`}>
      <Container className="flex justify-between items-center">
        <Link href="/">
          <Image src={logo} alt="" />
        </Link>
        <Menu/>
      </Container>
    </header>
  );
}
