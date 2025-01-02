export default function Meeting() {
  return (
    <div className="relative flex flex-col h-screen bg-white text-black font-sans">
      {/* Header Section */}
      <header className="flex justify-between items-center p-4">
        <div className="text-2xl font-bold">ZTR</div>
        <div className="flex items-center gap-4">
          <button className="text-sm">Profile</button>
          <div className="w-6 h-6">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_Kingdom.svg/320px-Flag_of_the_United_Kingdom.svg.png"
              alt="UK Flag"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex">
        {/* Left Upload Section */}
        <div className="w-1/3 flex flex-col justify-center items-center bg-black text-white p-6">
          <div className="text-2xl font-bold mb-4">+</div>
          <div className="text-center text-sm mb-4">
            <p>UPLOAD FILES</p>
            <p>OR</p>
            <p>SELECT A FOLDER</p>
          </div>
          <p className="text-lg font-semibold mb-4">UP TO 1TB</p>
          <p className="text-xs text-gray-300">FREE</p>

          {/* Form */}
          <form className="w-full mt-6">
            <div className="mb-4">
              <label
                htmlFor="title"
                className="block text-xs text-gray-400 mb-1"
              >
                Title
              </label>
              <input
                id="title"
                type="text"
                className="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded"
                placeholder="Enter title"
              />
            </div>
            <div>
              <label
                htmlFor="notes"
                className="block text-xs text-gray-400 mb-1"
              >
                Notes
              </label>
              <input
                id="notes"
                type="text"
                className="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded"
                placeholder="Add some notes"
              />
            </div>
          </form>
        </div>

        {/* Center Section */}
        <div className="w-2/3 flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold">LET'S DO</h1>
          <h2 className="text-6xl font-extrabold mt-2">THIS</h2>
          <p className="mt-4 text-sm text-gray-500 text-center">
            Upload files or folders by dropping them anywhere on this window
          </p>
        </div>
      </main>

      {/* Side Panels */}
      <aside className="absolute top-0 right-0 h-full w-12 flex items-center justify-center bg-black text-white rotate-90 origin-top-right">
        <p className="text-xs tracking-widest">MENU</p>
      </aside>

      {/* Footer */}
      <footer className="absolute bottom-0 w-full text-xs text-gray-500 text-center py-2">
        © 2025 ZTR Group | All Rights Reserved
      </footer>
    </div>
  );
}
