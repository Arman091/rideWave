
import "./global.css";
import { PropsWithChildren } from "react";
import Footer from "@/components/footer";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className="min-h-screen">{children}</body>
      {/* <Footer/> */}
    </html>
  );
}
