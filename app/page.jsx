import Link from "next/link";

export default function Home() {
  return (
    <div>

    <div className="grid place-items-center h-screen">
        <div>
        <h1 className="text-2xl font-bold my-4">What is your monthly digital <br/>marketing budget?</h1>
        </div>
      <div className="flex flex-col gap-3">

       <Link href={"/form"}>
      <button className="w-60  text-black border-2 border-black cursor-pointer px-6 py-2">
        $1,0000/mo
      </button>
       </Link>
       <Link href={"/form"}>
      <button className="w-60  text-black border-2 border-black cursor-pointer px-6 py-2">
        $1,000 - $2,000
      </button>
      </Link>
      <Link href={"/form"}>
      <button className="w-60  text-black border-2 border-black cursor-pointer px-6 py-2">
      $2,000 - $5,000
      </button>
      </Link>
      <Link href={"/form"}>
      <button className="w-60  text-black border-2 border-black cursor-pointer px-6 py-2">
      $3,000 - $7,000
      </button>
      </Link>
      <Link href={"/form"}>
      <button className="w-60  text-black border-2 border-black cursor-pointer px-6 py-2">
      $4,000 - $6,000
      </button>
      </Link>
      <Link href={"/form"}>
      <button className="w-60  text-black border-2 border-black cursor-pointer px-6 py-2">
      $5,000 - $9,000
      </button>
      </Link>
      </div>
    </div>
    </div>
  );
}
