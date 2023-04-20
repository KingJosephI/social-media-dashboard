// import Image from "next/image";
import { Inter } from "next/font/google";
import { Followers, Heading, Overview } from "./components";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Heading />
      <Followers />
      <Overview />
    </main>
  );
}
