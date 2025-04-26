import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import "../globals.css";

export const metadata = {
  title: "WealthNest",
  description:
    "WealthNest is a financial company which solves individuals portfolios and also provides with suitable interest rates to the business.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
