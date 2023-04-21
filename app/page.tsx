import { Followers, Heading, Overview } from "./components";

export default function Home() {
  return (
    <main
      className={`w-full container mx-auto min-h-[100vh]  flex flex-col gap-[46px] justify-center items-center px-6 md:px-12 lg:px-[165px]`}
    >
      <Heading />
      <Followers />
      <Overview />
    </main>
  );
}
