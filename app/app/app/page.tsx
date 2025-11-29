export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white p-8">
      <h1 className="text-5xl md:text-7xl font-bold text-red-600 mb-8">
        JoePusherPrivateVault
      </h1>
      <p className="text-xl md:text-2xl mb-12 text-center max-w-2xl">
        Exclusive 4K Videos & Photo Albums – Crypto Only
      </p>
      <div className="space-x-6">
        <a href="/subscribe" className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded text-xl">
          Subscribe $19.99/mo
        </a>
        <a href="/ppv" className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded text-xl">
          PPV Videos $12.99+
        </a>
        <a href="/admin" className="bg-gray-700 hover:bg-gray-600 px-6 py-admin py-3 rounded">
          Admin →
        </a>
      </div>
    </main>
  )
}
