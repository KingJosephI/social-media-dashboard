import { Followers, Heading, Overview } from "./components";

export default function Home() {
  return (
    <main className={`flex flex-col items-center gap-[46px]`}>
      <Heading />
      <Followers />
      <Overview />
    </main>
  );
}
