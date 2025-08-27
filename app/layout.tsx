import { Poppins } from "next/font/google";
import "./global.css";
import { PropsWithChildren } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"], // pick weights you need
  variable: "--font-poppins",
});

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
