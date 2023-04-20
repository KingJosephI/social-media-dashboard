// import { Inter } from "next/font/google";
import { Followers, Heading, Overview } from "./components";

// const inter = Inter({
//   subsets: ["latin"],
//   weight: ["400", "500", "700", "800", "900"],
// });

export default function Home() {
  return (
    <main className={`flex flex-col items-center gap-[46px]`}>
      <Heading />
      <Followers />
      <Overview />
    </main>
  );
}
