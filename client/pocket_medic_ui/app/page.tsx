import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      Landing page
      <br />
      <Link href={"/auth"} className="text-primary-blue">
        join us
      </Link>
    </main>
  );
}
