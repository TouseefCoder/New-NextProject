import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import MoveTop from "@/components/MoveTop";
import { MyContextProvider } from "@/context/MyContext";
import UserContent from "@/components/MblScreenContent/UserInfo";
import CartContent from "@/components/MblScreenContent/Cart";
import MainNavContent from "@/components/MblScreenContent/MainNav";
import RightNav from "@/components/MblScreenContent/RightNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Watch Selling E-commerce Store",
  description: "Your one-stop shop for premium watches",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.className} antialiased`}>
        <MyContextProvider>
          {children}
          <MoveTop />
          <UserContent />
          <CartContent />
          <MainNavContent />
          <RightNav />
        </MyContextProvider>
      </body>
    </html>
  );
}
