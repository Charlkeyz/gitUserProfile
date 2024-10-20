'use client'

import { useGithubContext } from "@/GithubContextStore/ContextStore";
import { FormEvent } from "react";
import { CiSearch } from "react-icons/ci";



export default function SearchInput() {
  const { username, setUsername, fetchGithubProfile, page, setPage} = useGithubContext();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      setPage(1)
      // console.log("Form submitted with username:", username); 
      fetchGithubProfile(username, 1)
      setUsername('')
    }
    
    
  return (
    <>
        <form onSubmit={handleSubmit} className="flex justify-between rounded-md border shadow-sm dark:text-white ">  
            <input 
                type="text" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter Github username..." 
                className="flex-grow p-2 rounded-l text-black focus:outline-none dark:text-white dark:bg-black" />
            <button className="px-4 py-2 bg-blue-500 text-white rounded-r flex items-center">
                <CiSearch size={24}/>
            </button>
        </form>
    </>
  )
}
