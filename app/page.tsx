import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-white/30 selection:text-white ">
      {/*main section*/}
      <main>
        <section id="home" className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5 pointer-events-none"></div>
          <div className="container mx-auto px-4 md:px-6">
            {/*Hero section*/}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
              {/*Hero section-text part*/}
              <div className ="md:col-span-8 space-y-8" style={{ opacity: 1, transform: "none" }}>
                {/*main-part*/}
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm" style={{ opacity: 1, transform: "none" }}>
                    Looking for opportunities
                  </div>
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight" style={{opacity:1}}>Hi, I am Pulkit</h1>
                  <p className="text-xl md:text-2xl lg:text-3xl text-gray-400 font-light" style={{opacity:1}}>Fullstack Developer and Blockchain Enthusiast</p>
                  <p className="text-gray-500 max-w-xl text-base md:text-lg leading-relaxed" style={{opacity:1}} >I build and create multiple Web-Based application with modern technology </p>
                </div>
                {/*view work and contact me*/}
                <div className="flex flex-wrap gap-3 md:gap-4" style={{ opacity: 1, transform: "none" }}>
                  <a href="#">
                    <button
                      style={{
                        // @ts-ignore
                        "--spread": "90deg",
                        "--shimmer-color": "#ffffff",
                        "--radius": "100px",
                        "--speed": "3s",
                        "--cut": "0.05em",
                        "--bg": "rgba(0, 0, 0, 1)"
                      } as React.CSSProperties} className="group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/10 px-6 py-3 text-white [background:var(--bg)] [border-radius:var(--radius)] dark:text-black transform-gpu transition-transform duration-300 ease-in-out active:translate-y-px shadow-xl"
                    >
                      <div className="-z-30 blur-[2px] absolute inset-0 overflow-visible [container-type:size]">
                        <div className="absolute inset-0 h-[100cqh] animate-shimmer-slide [aspect-ratio:1] [border-radius:0] [mask:none]">
                          <div className="absolute -inset-full w-auto rotate-0 animate-spin-around [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))] [translate:0_0]">
                          </div>
                        </div>
                      </div>
                      <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-base px-1"> View Work </span>
                      <div className="insert-0 absolute size-full rounded-2xl px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#ffffff1f] transform-gpu transition-all duration-300 ease-in-out group-hover:shadow-[inset_0_-6px_10px_#ffffff3f] group-active:shadow-[inset_0_-10px_10px_#ffffff3f]"></div>
                    </button>
                  </a>
                  <a
                    href="#"
                    className="px-5 py-2.5 border border-white/10 rounded-full text-sm flex items-center gap-2 hover:bg-white/5 transition-colors"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0)", transform: "none" }}
                  >Contact me </a>
                </div>
              </div>
              {/*Hero section-image part*/}
              <div className="md:col-span-4 flex justify-center md:justify-end" style={{ opacity: 1, transform: "none" }}>
                <div className="relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl opacity-70 animate-pulse"></div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-md opacity-70"></div>
                  <div className="relative rounded-full overflow-hidden border-2 border-white/20 shadow-lg shadow-blue-500/10" style={{ transform: "none" }}><img src="/profile-pic.png" alt="This is my profile image" className="w-48 h-48 md:w-56 md:h-56 object-cover" /></div>
                </div>
              </div>
            </div>
            {/*about section*/}
            <div className="mt-16 md:mt-24" >
              <div className="max-w-4xl" style={{ opacity: 1, transform: "none" }}>
                <div className="mb-8 mt-16" style={{opacity:1, transform:"none"}}><h2 className="text-2xl md:text-3xl font-bold text-white" style={{ opacity: 1 }}>About Me</h2></div>
                <p className="text-gray-400 text-base md:text-lg leading-relaxed" style={{ opacity: 1, transform: "none" }}>React & Next.js developer building sleek, functional UIs with Tailwind, ShadCN, and Firebase. Skilled in admin panels, dynamic web apps, and delivering under tight deadlines. Passionate about clean design, practical solutions, and learning by building.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="skills"></section>
        <section></section>
        <section></section>
        <section></section>
        <section></section>
      </main> 
      {/*Navbar*/}
      <div></div>
    </div>
  );
}
