'use client'

import { useGithubContext } from "@/GithubContextStore/ContextStore";
import { Button, Input } from "@nextui-org/react";
import { FormEvent } from "react";
import { CiSearch } from "react-icons/ci";



export default function SearchInput() {
  const { username, setUsername, fetchGithubProfile, page, setPage, setRepos, setUser} = useGithubContext();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      fetchGithubProfile(username, page)
      
    }
   
    
    
  return (
    <>
        <form onSubmit={handleSubmit} className="flex gap-2">  
            <Input
                type="text" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)}
                startContent = {<CiSearch size={24}/>}
                placeholder="Enter Github username..." 
                className="" />
            <Button className="" type="submit">
                Search
            </Button>
        </form>
    </>
  )
}
