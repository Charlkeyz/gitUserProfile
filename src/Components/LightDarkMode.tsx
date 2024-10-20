'use client'
import { MdOutlineLightMode } from "react-icons/md";
import { CiDark } from "react-icons/ci";
import { useGithubContext } from "@/GithubContextStore/ContextStore";

export default function LightDarkMode() {
    const {theme,  toggleTheme} = useGithubContext()
  return (
    <>
       <button
            onClick={toggleTheme}
            className="p-2 rounded bg-blue-500 text-white">
            {theme === 'light' ? <CiDark size={24} /> : <MdOutlineLightMode size={24} />}
        </button>
    </>
  )
}
