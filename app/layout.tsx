import Header from "./components/header/header";
import { StoreProvider } from "./context/store";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Saints eMarket",
  description: "The greatest Saints Market",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <StoreProvider>
        <body className={inter.className}>
          <Header />
          {children}
        </body>
      </StoreProvider>
    </html>
  );
}
