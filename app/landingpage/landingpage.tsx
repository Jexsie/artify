export function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-white">
      <section className="flex flex-col items-center text-center py-20 border-2 rounded-lg shadow-lg mx-25 my-25 h-150 max-h-100vh" style={{ backgroundImage: `url('app/landingpage/javier-miranda-DH5ukXKhx4M-unsplash.jpg')`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white mt-40">Discover, Collect, and Trade Unique Digital Assets</h1>
        <p className="text-xl text-white mb-10">
          Explore a diverse marketplace of NFTs, from digital art to collectibles, all powered by the Hedera network.
        </p>
        <button className="bg-blue-400 hover:bg-gray-800 px-8 py-4 rounded-lg text-xl font-semibold">
          Get Started
        </button>
        </section>
        <section className="py-20 mr-40">
        <h2 className="text-3xl font-bold text-center mb-12 text-black">Featured Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="bg-gray-800 rounded-xl ">
            <div className="h-48 "></div>
            <div className="p-5">
              <h3 className="text-xl font-bold mb-2">Neon Dreams</h3>
              <p className="text-gray-400">Explore vibrant digital art</p>
            </div>
          </div>
          </div>
        </section>
    </div>
  );
}