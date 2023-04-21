import { Followers, Heading, Overview } from "./components";

export default function Home() {
  return (
    <main
      className={`min-w-full container  min-h-[100vh]  flex flex-col gap-[46px] justify-center items-center px-6 md:px-12 lg:px-[165px]`}
    >
      <Heading />
      <Followers />
      <Overview />
    </main>
  );
}
