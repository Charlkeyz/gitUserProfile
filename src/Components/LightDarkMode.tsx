'use client'
import { MdOutlineLightMode } from "react-icons/md";
import { CiDark } from "react-icons/ci";
import { useGithubContext } from "@/GithubContextStore/ContextStore";
import { Button, Switch } from "@nextui-org/react";

export default function LightDarkMode() {
    const {theme,  toggleTheme} = useGithubContext()
  return (
    <>
       <div className="flex flex-col items-center gap-2">
          <Button
              size="sm"
              onClick={toggleTheme}>
              {theme === 'light' ? <MdOutlineLightMode size={24} /> : <CiDark size={24} />}
          </Button>
          {
            theme === 'light' ? <p className="text-xs font-bold">Light Mode</p> : <p className="text-xs font-bold">Dark Mode</p>
          }
       </div>
        
    </>
  )
}
