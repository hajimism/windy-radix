import { Inter } from "next/font/google";

import { StyleSheet } from "./stylesheet";

import "@/style/tailwind.css";

export const metadata = {
  title: "Windy Radix",
  description: "Radix UI Components styled in Tailwind taste.",
};

const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <StyleSheet />
      </head>
      <body
        style={{ display: "flex", justifyContent: "center", padding: "1rem" }}
        className={inter.className}
      >
        {children}
      </body>
    </html>
  );
}
