import Link from 'next/link'


export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="mt-16">
        <h1 className="text-3xl font-bold mb-8">Homepage</h1>
        <Link 
          href="/dashboard"
          className="bg-purple-200 py-4 px-8 rounded-lg font-semibold shadow-md hover:bg-purple-300 duration-150 text-sm"
        >
          Dashboard
        </Link>
      </div>
    </div>
  );
}
