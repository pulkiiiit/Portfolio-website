"use client";
import GitHubCalendar from "react-github-calendar";
import Image from "next/image";
import { ArrowRight, Mail , Github, Linkedin, X, House, Code, Briefcase, Medal, MedalIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-white/30 selection:text-white ">
      {/*main section*/}
      <main className="max-w-4xl mx-auto px-4 pb-24" style={{ opacity: 1 }}>
        <section id="home" className=" relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5 pointer-events-none"></div>
          <div className=" flex  flex-col items-center  container mx-auto px-4 md:px-6">
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
                  <div className="relative rounded-full overflow-hidden border-2 border-white/20 shadow-lg shadow-blue-500/10" style={{ transform: "none" }}><Image src="/profile-pic.png" alt="This is my profile image" width={224}  height={224} className="w-48 h-48 md:w-56 md:h-56 object-cover" /></div>
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
        <section id="skills" className="px-4 md:px-6">
          <div className="mb-8 mt-16" style={{ opacity: 1, transform: "none" }}>
            <h2 className="text-2xl md:text-3xl font-bold text-white" style={{ opacity: 1 }}>Skills</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8" style={{opacity: 1}}>
            <div className="space-y-2 md:space-y-3" style={{opacity:1 , transform: "none"}}>
              <h3 className="text-xs md:text-sm text-white/60 uppercase tracking-wider">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 md:px-3 py-1 bg-white/5 text-white border border-white/10 rounded-full text-xs hover:bg-white/10 transition-colors">HTML/CSS</span>
                <span className="px-2 md:px-3 py-1 bg-white/5 text-white border border-white/10 rounded-full text-xs hover:bg-white/10 transition-colors">JAVASCRIPT</span>
                <span className="px-2 md:px-3 py-1 bg-white/5 text-white border border-white/10 rounded-full text-xs hover:bg-white/10 transition-colors">TYPESCRIPT</span>
                <span className="px-2 md:px-3 py-1 bg-white/5 text-white border border-white/10 rounded-full text-xs hover:bg-white/10 transition-colors">REACT</span>
                <span className="px-2 md:px-3 py-1 bg-white/5 text-white border border-white/10 rounded-full text-xs hover:bg-white/10 transition-colors">NEXT/JS</span>
                <span className="px-2 md:px-3 py-1 bg-white/5 text-white border border-white/10 rounded-full text-xs hover:bg-white/10 transition-colors">tAILWIND CSS</span>
              </div>
            </div>
            <div className="space-y-2 md:space-y-3" style={{opacity:1 , transform: "none"}}>
              <h3 className="text-xs md:text-sm text-white/60 uppercase tracking-wider">backend</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 md:px-3 py-1 bg-white/5 text-white border border-white/10 rounded-full text-xs hover:bg-white/10 transition-colors">HTML/CSS</span>
                <span className="px-2 md:px-3 py-1 bg-white/5 text-white border border-white/10 rounded-full text-xs hover:bg-white/10 transition-colors">JAVASCRIPT</span>
                <span className="px-2 md:px-3 py-1 bg-white/5 text-white border border-white/10 rounded-full text-xs hover:bg-white/10 transition-colors">TYPESCRIPT</span>
                <span className="px-2 md:px-3 py-1 bg-white/5 text-white border border-white/10 rounded-full text-xs hover:bg-white/10 transition-colors">REACT</span>
                <span className="px-2 md:px-3 py-1 bg-white/5 text-white border border-white/10 rounded-full text-xs hover:bg-white/10 transition-colors">NEXT/JS</span>
                <span className="px-2 md:px-3 py-1 bg-white/5 text-white border border-white/10 rounded-full text-xs hover:bg-white/10 transition-colors">tAILWIND CSS</span>
              </div>
            </div><div className="space-y-2 md:space-y-3" style={{opacity:1 , transform: "none"}}>
              <h3 className="text-xs md:text-sm text-white/60 uppercase tracking-wider">database</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 md:px-3 py-1 bg-white/5 text-white border border-white/10 rounded-full text-xs hover:bg-white/10 transition-colors">HTML/CSS</span>
                <span className="px-2 md:px-3 py-1 bg-white/5 text-white border border-white/10 rounded-full text-xs hover:bg-white/10 transition-colors">JAVASCRIPT</span>
                <span className="px-2 md:px-3 py-1 bg-white/5 text-white border border-white/10 rounded-full text-xs hover:bg-white/10 transition-colors">TYPESCRIPT</span>
                <span className="px-2 md:px-3 py-1 bg-white/5 text-white border border-white/10 rounded-full text-xs hover:bg-white/10 transition-colors">REACT</span>
                <span className="px-2 md:px-3 py-1 bg-white/5 text-white border border-white/10 rounded-full text-xs hover:bg-white/10 transition-colors">NEXT/JS</span>
                <span className="px-2 md:px-3 py-1 bg-white/5 text-white border border-white/10 rounded-full text-xs hover:bg-white/10 transition-colors">tAILWIND CSS</span>
              </div>
            </div>
            <div className="space-y-2 md:space-y-3" style={{opacity:1 , transform: "none"}}>
              <h3 className="text-xs md:text-sm text-white/60 uppercase tracking-wider">devops</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 md:px-3 py-1 bg-white/5 text-white border border-white/10 rounded-full text-xs hover:bg-white/10 transition-colors">HTML/CSS</span>
                <span className="px-2 md:px-3 py-1 bg-white/5 text-white border border-white/10 rounded-full text-xs hover:bg-white/10 transition-colors">JAVASCRIPT</span>
                <span className="px-2 md:px-3 py-1 bg-white/5 text-white border border-white/10 rounded-full text-xs hover:bg-white/10 transition-colors">TYPESCRIPT</span>
                <span className="px-2 md:px-3 py-1 bg-white/5 text-white border border-white/10 rounded-full text-xs hover:bg-white/10 transition-colors">REACT</span>
                <span className="px-2 md:px-3 py-1 bg-white/5 text-white border border-white/10 rounded-full text-xs hover:bg-white/10 transition-colors">NEXT/JS</span>
                <span className="px-2 md:px-3 py-1 bg-white/5 text-white border border-white/10 rounded-full text-xs hover:bg-white/10 transition-colors">tAILWIND CSS</span>
              </div>
            </div>
            <div className="space-y-2 md:space-y-3" style={{opacity:1 , transform: "none"}}>
              <h3 className="text-xs md:text-sm text-white/60 uppercase tracking-wider">blockchain</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 md:px-3 py-1 bg-white/5 text-white border border-white/10 rounded-full text-xs hover:bg-white/10 transition-colors">HTML/CSS</span>
                <span className="px-2 md:px-3 py-1 bg-white/5 text-white border border-white/10 rounded-full text-xs hover:bg-white/10 transition-colors">JAVASCRIPT</span>
                <span className="px-2 md:px-3 py-1 bg-white/5 text-white border border-white/10 rounded-full text-xs hover:bg-white/10 transition-colors">TYPESCRIPT</span>
                <span className="px-2 md:px-3 py-1 bg-white/5 text-white border border-white/10 rounded-full text-xs hover:bg-white/10 transition-colors">REACT</span>
                <span className="px-2 md:px-3 py-1 bg-white/5 text-white border border-white/10 rounded-full text-xs hover:bg-white/10 transition-colors">NEXT/JS</span>
                <span className="px-2 md:px-3 py-1 bg-white/5 text-white border border-white/10 rounded-full text-xs hover:bg-white/10 transition-colors">tAILWIND CSS</span>
              </div>
            </div>
          </div>
        </section>
        <section id="github-activity" className="py-8 px-4 md:px-6">
          <div className="mb-8 mt-16" style={{opacity: 1, transform:"none"}}>
            <h2 className="text-2xl md:text-3xl font-bold text-white"  style={{opacity: 1}}> GitHub Activity </h2>
          </div>
          <div className="bg-white/5 p-3 md:p-5 rounded-lg border border-white/10" style={{opacity: 1, transform:"none"}}>
            <div className="flex justify-between mb-3 md:mb-4">
              <h3 className="text-base md:text-lg font-medium"> GitHub Contributions</h3>
            </div>
            <div>
              <GitHubCalendar username="pulkiiiit" />
            </div>
            <div className="mt-3 md:mt-4 text-center">
              <a href="https://github.com/pulkiiiit" target="_blank" rel="noopener noreferrer" className="text-xs md:text-sm text-blue-400 hover:text-blue-300 transition-colors underline">View on GitHub</a>
            </div>
          </div>
        </section>
        <section id="projects" className="py-8 px-4 md:px-6">
          <div className="mb-8 mt-16" style={{opacity:1, transform:"none"}}>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Check out some of my work</h2>
          </div>
          <p className="text-gray-400 mb-8 text-sm md:text-base">I&apos;ve built some projects. Take a look at some of my recent work.</p>
          {/* Project 1 */}
          <div className="space-y-12  md:space-y-16" style={{opacity:1}}>
            <div className="group" style={{opacity:1 , transform:"none"}}>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
                <div className="md:col-span-5 aspect-video overflow-hidden rounded-lg bg-white/5 relative">
                <Image src="/frame-finder.png" alt="frame-finder preview" width={400}  height={600} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" /></div>
                <div className="md:col-span-7 space-y-3 md:space-y-4">
                  <h3 className="text-lg md:text-xl font-bold text-white">Frame Finder</h3>
                  <p className="text-gray-400 text-xs md:text-sm">FrameFinder, India&apos;s first multi-vendor B2C eyewear ecommerce platform</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-2 py-1 rounded-full bg-white/5 text-gray-400">Nextjs</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-white/5 text-gray-400">Tailwind CSS</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-white/5 text-gray-400">Shad CN</span>
                  </div>
                  <div className="flex items-center gap-3 md:gap-4 pt-2">
                    <a href="#" target="_blank" rel="noopener norefereer" className="text-gray-400 flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>GitHub</a>
                    <a href="https://www.framefinder.co/" target="_blank" rel="noopener norefereer" className="text-gray-400 flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-external-link">
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14 21 3"></path>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    </svg>Live Demo</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-12">
            <button className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full">
            <span>Rest are coming up</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"></path></svg></button>
          </div>
        </section>
        <section id="experience" className="py-8 px-4 md:px-6">
          <div className="mb-8 mt-16" style={{opacity:1, transform:"none"}}>
            <h2 className="text-2xl md:text-3xl font-bold text-white" style={{opacity:1}}>Work Experience</h2>
          </div>
          <div className="space-y-8 md:space-y-12" style={{opacity:1}}>
            {/* experience item */}
            <div className="flex gap-3 md:gap-4 group" style={{opacity:1, transform:"none"}}>
              <div className="shrink-0">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-white/10 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(255, 255, 255, 0.1)", transform: "none" }}>
                <span className="text-xs">P</span></div>
              </div>
              <div className="space-y-2 border-white/5 pb-6 md:pb-8 w-full">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center"> <h3 className="font-bold text-base md:text-lg">Junoior Dev Intern - <span className="text-gray-400">Panthar InfoHub</span></h3>
              <span className="text-gray-500 text-xs md:text-sm mt-1 md:mt-0"> Jan 2025 - Mar-2025</span></div>
              <ul className="text-gray-400 text-xs md:text-sm list-disc ml-4 space-y-1">
                <li>Developed responsive and interactive web applications using React and Next.js</li>
              </ul>
              <div></div>
              </div>
            </div>
          </div>
        </section>
        <section id="Contributery" className="py-12 px-4 md:px-6">
          <div className="mb-8 mt-16" style={{opacity:1 , transform: "none"}}>
            <h2 className="text-2xl md:text-3xl font-bold text-white" style={{opacity:1}}> Contributery Work</h2>
          </div>
          <p className="text-gray-400 mb-8 md:mb-12 text-base md:text-lg max-w-2xl" style={{opacity:1 , transform: "none"}} > I love to be part of some groups in which people love to develop</p>
          <div className="space-y-6 md:space-y-8" style={{opacity:1}}>
            <div className="group relative" style={{opacity:1 , transform: "none"}}>
              <div className="relative bg-gradient-to-r from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 hover:border-white/20 transition-all duration-300" style={{ backgroundColor: "rgba(0, 0, 0, 0)", transform: "none" }} >
            <div className="flex items-start gap-4 mb-4">
              <div
                className="shrink-0 w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-white/15 to-white/5 rounded-xl flex items-center justify-center border border-white/10"
                style={{ backgroundColor: "rgba(0, 0, 0, 0)", transform: "none" }}
              ><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-medal text-gray-300"><path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15"></path><path d="M11 12 5.12 2.2"></path><path d="m13 12 5.88-9.8"></path><path d="M8 7h8"></path><circle cx="12" cy="17" r="5"></circle><path d="M12 18v-2h-.5"></path></svg></div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-2 lg:gap-4">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg md:text-xl text-white leading-tight">Google Devloper Group</h3>
                    <p className="text-gray-300 font-medium mt-1 text-sm md:text-base">Event Management Lead</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm md:text-base shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-calendar text-gray-500">
                  <path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2" /><path d="M3 10h18"></path></svg>
                  <span className="font-medium">Oct 2024 - May 2025</span></div>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.01] to-transparent rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div></div>
            </div>
          </div>
          <div></div>
        </section>
        <section id="contact" className="py-8 mb-16 px-4 md:px-6">
          <div className="mb-8 mt-16" style={{opacity:1 , transform:"none"}}>
            <h2 className="text-2xl md:text-3xl font-bold text-white" style={{opacity:1}}> Get in touch </h2>
          </div>
          <p className="text-gray-400 mb-6 md:mb-8 text-sm md:text-base" style={{opacity:1 , transform:"none"}}>
            Want to work together? Feel free to reach out for collaborations or just a friendly hello.
          </p>
          <div className="grid grid-cols-1 gap-4 md:gap-8" style={{opacity:1}}>
            <div className="space-y-4 md:space-y-6">
              <a href="mailto:pulkitshukla001@gmail.com" className="flex items-center  gap-6 text-gray-300 hover:text-white transition-colors group bg-white/5 p-3 md:p-4 rounded-lg border border-white/10 hover:border-white/20" style={{opacity:1 ,                  transform:"none"}}>
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <Mail/></div>
                <div>
                  <div className="font-medium text-sm md:text-base">Email</div>
                  <span className="text-xs md:text-sm text-gray-400">pulkitshukla001@gmail.com</span>
                </div>
                <ArrowRight className="ml-auto"/>
              </a>
              <a href="https://github.com/pulkiiiit" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group bg-white/5 p-3 md:p-4 rounded-lg border border-white/10 hover:border-white/20" style={{opacity:1 , transform:"none"}}>
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <Github/></div>
                <div>
                  <div className="font-medium text-sm md:text-base">GitHub</div>
                  <span className="text-xs md:text-sm text-gray-400">github.com/pulkiiiit</span>
                </div>
                <ArrowRight className="ml-auto"/>
              </a>
              <a href="https://www.linkedin.com/in/pulkit-shukla-207437308/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group bg-white/5 p-3 md:p-4 rounded-lg border border-white/10 hover:border-white/20" style={{opacity:1 , transform:"none"}}>
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <Linkedin/></div>
                <div>
                  <div className="font-medium text-sm md:text-base">LinkedIn</div>
                  <span className="text-xs md:text-sm text-gray-400">linkedin.com/in/pulkit-shukla-207437308/</span>
                </div>
                <ArrowRight className="ml-auto"/>
              </a>
              <a href="https://x.com/pulkiiiit" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group bg-white/5 p-3 md:p-4 rounded-lg border border-white/10 hover:border-white/20" style={{opacity:1 , transform:"none"}}>
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <X/></div>
                <div>
                  <div className="font-medium text-sm md:text-base">X</div>
                  <span className="text-xs md:text-sm text-gray-400">x.com/pulkiiiit</span>
                </div>
                <ArrowRight className="ml-auto"/>
              </a>
            </div>
          </div>
        </section>
      </main> 
      {/*Navbar*/}
      <div className="fixed bottom-4 left-0 right-0 z-50">
        <div className="flex flex-col items-center justify-center" style={{opacity:1 , transform:"none"}}>
          <div className="flex h-16 w-fit items-end justify-center gap-2 rounded-full px-4 pb-3 justify-center bg-black/80 backdrop-blur-md border border-white/20 rounded-full shadow-lg shadow-blue-500/10">
          <div className="group relative flex h-10 w-10 origin-bottom items-center justify-center rounded-full transition-all duration-300 ease-in-out hover:h-12 hover:w-12 hover:mb-2">
            <a aria-label="Home" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 w-9 size-12 rounded-full hover:bg-white/10 transition-all duration-300" href="#home">
            <div>
              <House/></div></a>
          </div>
          <div className="group relative flex h-10 w-10 origin-bottom items-center justify-center rounded-full transition-all duration-300 ease-in-out hover:h-12 hover:w-12 hover:mb-2">
            <a aria-label="Home" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 w-9 size-12 rounded-full hover:bg-white/10 transition-all duration-300" href="#skills">
            <div>
              <Code/></div></a>
          </div>
          <div className="group relative flex h-10 w-10 origin-bottom items-center justify-center rounded-full transition-all duration-300 ease-in-out hover:h-12 hover:w-12 hover:mb-2">
            <a aria-label="Home" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 w-9 size-12 rounded-full hover:bg-white/10 transition-all duration-300" href="#projects">
            <div>
              <Briefcase/></div></a>
          </div>
          <div className="group relative flex h-10 w-10 origin-bottom items-center justify-center rounded-full transition-all duration-300 ease-in-out hover:h-12 hover:w-12 hover:mb-2">
            <a aria-label="Home" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 w-9 size-12 rounded-full hover:bg-white/10 transition-all duration-300" href="#experience">
            <div>
              <MedalIcon/></div></a>
          </div>
          <div className="group relative flex h-10 w-10 origin-bottom items-center justify-center rounded-full transition-all duration-300 ease-in-out hover:h-12 hover:w-12 hover:mb-2">
            <a aria-label="Home" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 w-9 size-12 rounded-full hover:bg-white/10 transition-all duration-300" href="#contact">
            <div>
              <Mail/></div></a>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
