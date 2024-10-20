'use client'
import UserProfile from '@/Components/UI/UserProfile'
import { useGithubContext } from '@/GithubContextStore/ContextStore'
import { useParams } from 'next/navigation'
// import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

export default function UserProfilePage() {
    const {fetchGithubProfile} = useGithubContext()

    const {username} = useParams()
    console.log(username)

    useEffect(()=> {
        if(username){
            fetchGithubProfile(username as string, 1)
        }
    }, [username])
  return (
    <>
        <div className='flex justify-center w-screen h-screen'>
            <UserProfile/>
        </div>
    </>
  )
}
