'use client'
import { useGithubContext } from "@/GithubContextStore/ContextStore";
import { ReactNode } from "react";

type Preview = {
    children: ReactNode;
  };
  
export default function Preview({ children }: Preview) {
  const {theme} = useGithubContext()
    return (
      <section className={`min-h-screen p-4 bg-gray-400 ${theme === 'dark' ? 'bg-black text-white' : 'bg-slate-50 text-black'} `}>
        <ul className="max-w-3xl mx-auto lg:w-7/10 ">{children}</ul>
      </section>
    );
  }
  