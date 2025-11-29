export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-black text-white">
      <h1 className="text-6xl font-bold mb-8">JoePusherPrivateVault</h1>
      <p className="text-xl mb-8">Exclusive 4K Adult Videos & Photo Albums – Crypto Memberships & PPV</p>
      <div className="space-x-4">
        <a href="/admin" className="bg-blue-600 px-6 py-3 rounded text-white">Admin Login</a>
        <a href="/subscribe" className="bg-green-600 px-6 py-3 rounded text-white">Subscribe Now</a>
        <a href="/content" className="bg-purple-600 px-6 py-3 rounded text-white">Browse PPV</a>
      </div>
    </main>
  )
}
