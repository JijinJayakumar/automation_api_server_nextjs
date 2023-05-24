import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      HOME
      <Link href="/auth/register">REGISTER</Link> |
      <Link href="/auth/login">LOGIN</Link>
    </main>
  );
}
