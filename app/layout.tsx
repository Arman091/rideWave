
import React from "react";
import "./global.css";

export default function RootLayout({
  children,
  modal, 
}: Readonly<{
  children:React.ReactNode,
  modal:React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        {children}
        {modal}
      </body>
    </html>
  );
}
