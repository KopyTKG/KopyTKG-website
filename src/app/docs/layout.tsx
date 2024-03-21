import React from 'react'
import { Github } from 'lucide-react'

export default function DocsLayout({ children }: { children: React.ReactNode }) {
 return (
  <div className="min-h-screen">
   <nav className="sticky top-0 h-14 bg-black/40 min-w-full">
    <div className="flex justify-between h-full text-white max-w-6xl mx-auto items-center px-10 xl:px-0 ">
     <div className="flex gap-5">
      <a
       className="text-slate-500 hover:text-white duration-75 ease-in-out flex items-center gap-2"
       href="/">
       Home
      </a>
      <a className="text-slate-500 hover:text-white duration-75 ease-in-out" href="/docs">
       Docs
      </a>
     </div>
     <div>
      <a href="https://github.com/kopytkg" target="_blank" rel="noreferrer">
       <Github
        width={30}
        className="hover:bg-white/50 rounded-lg p-[.25rem] w-7 h-7  fill-white ease-in-out duration-200"
       />
      </a>
     </div>
    </div>
   </nav>
   <div className="text-white max-w-6xl mx-auto px-10 text-justify pt-5">{children}</div>
  </div>
 )
}