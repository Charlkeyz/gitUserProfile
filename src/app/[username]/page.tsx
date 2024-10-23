'use client'
import UserProfile from '@/Components/UI/UserProfile'
import { useGithubContext } from '@/GithubContextStore/ContextStore'
import { useParams } from 'next/navigation'
// import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
type UserProfilePageProps = {
    className : string
}
export default function UserProfilePage({className}: UserProfilePageProps) {
    const {fetchGithubProfile} = useGithubContext()

    const {username} = useParams()
    

    useEffect(()=> {
        if(username){
            fetchGithubProfile(username as string, 1)
        }
    }, [username])
  return (
    <>
        <div className='flex justify-center w-screen h-screen dark:bg-black'>
            <UserProfile className = "lg:w-3/4 p-4 w-full"/>
        </div>
    </>
  )
}
