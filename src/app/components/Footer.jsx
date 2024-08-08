import Container from "./Container";

export default function Footer({ className }) {
  return (
    <footer className={`pt-4 ${className ? className : ""}`}>
      <Container className="rounded-b-2xl bg-[#979797] py-4">footer</Container>
    </footer>
  );
}
