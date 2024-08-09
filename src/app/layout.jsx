import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";

export const metadata = {
  title: "Nikulin Aleksey",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <div className="h-dvh grid grid-rows-layout overflow-hidden">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
