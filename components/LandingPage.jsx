import ToggleButton from "./ToggleButton";

export default function LandingPage() {
  return (
    <div className="flex flex-col h-screen justify-between bg-white text-black font-sans">
      {/* Header Section */}
      <header className="flex justify-between items-center p-4">
        <div>
          <img src="/assets/ZTFR.png" alt="ztr-logo" />
        </div>
        <div className="flex items-center gap-4">
          <img src="/assets/user-icon.png" alt="user icon" />
          <img src="/assets/uk-flag.png" alt="UK Flag" />
        </div>
      </header>

      <main className="flex">
        {/* Side Panels */}
        <ToggleButton />

        {/* Main Content */}
        <div className="flex-1 flex flex-col justify-center items-center tracking-wider">
          <div className="justify-items-end">
            <h1 className="text-[62px] font-semibold">LET'S DO</h1>
            <h2 className="text-[190px]">THIS</h2>
            <p className="mt-4 text-sm text-gray-500 text-center">
              UPLOAD FILES OR FOLDERS BY DROPPING THEM ANYWHERE IN THIS WINDOW
            </p>
          </div>
        </div>

        <div className="bg-black text-white items-center justify-items-center desktop:w-[157px] desktop:h-[489px] rounded-l-xl">
          <img
            src="/assets/logo.png"
            alt="logo"
            className="translate-y-[210%]"
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="text-[10px] flex justify-between px-2">
        <div>
          <p>© ZITRANSFER 2023</p>
          <div className="flex gap-5">
            <p> All Rights Reserved </p>
            <p>ZITRANSFER IS PART OF THE ZIMO GROUP</p>
          </div>
        </div>
        <div>
          <p>
            ZITRANSFER USER ADVANCE ENCRPTION STANDARD (AES) 256-BIT TO PROTECT
            THE CONFISENTIALITY OF THE DATA YOU UPLOAD
          </p>
        </div>
      </footer>
    </div>
  );
}
