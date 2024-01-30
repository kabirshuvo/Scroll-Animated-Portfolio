import Footer from "./Components/Footer";
import Navbar from "./Components/Header/NavBar";
import NavAndFooter from "./Components/NavAndFooter";
import SectionLayout from "./Components/SectionLayout";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kamrul Hasan",
  description:
    "Hi, I'm Kamrul Hasan. Formaly known as MaddyFx. With my 11 years of Adobe Illustrator experience I'm Welcoming you to my portfolio. Here I Showcase My Best Designes, Most Experiences and My Dreams. Thnak you So much for your valuable time. Wish we would talk about my services or your problems. I have experience and soutions.",
};

const myArray = [
  "circle",
  "x-shape",
  "circle",
  "x-shape",
  "circle",
  "x-shape",
  "circle",
  "x-shape",
  "circle",
  "x-shape",
  "circle",
  "x-shape",
  "circle",
  "x-shape",
  "circle",
  "x-shape",
  "circle",
  "x-shape",
  "circle",
  "x-shape",
  "circle",
  "x-shape",
  "circle",
  "x-shape",
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    
      <body className={inter.className}>
   
        <div className="lines">
          <div className="line-1">
            <div className="shapes">
              {myArray.map((shape, index) => (
                <div key={index} className={shape}></div>
              ))}
            </div>
          </div>
          <div className="line-2">
            <div className="shapes">
              {myArray.map((shape, index) => (
                <div key={index} className={shape}></div>
              ))}
            </div>
          </div>
          <div className="line-3">
            <div className="shapes">
              {myArray.map((shape, index) => (
                <div key={index} className={shape}></div>
              ))}
            </div>
          </div>
          <div className="line-4">
            <div className="shapes">
              {myArray.map((shape, index) => (
                <div key={index} className={shape}></div>
              ))}
            </div>
          </div>
        </div>
       <NavAndFooter>
       <Navbar />
       </NavAndFooter>
        {children}
        <NavAndFooter>
        <Footer />
       </NavAndFooter>
      </body>
    </html>
  );
}

