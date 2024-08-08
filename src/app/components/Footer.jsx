import Container from "./Container";

export default function Footer({ className }) {
  return (
    <footer className={`py-4 ${className ? className : ''}`}>
      <Container>
        footer
      </Container>
    </footer>
  );
}
