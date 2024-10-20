'use client'
import UserProfile from '@/Components/UI/UserProfile'
import { useGithubContext } from '@/GithubContextStore/ContextStore'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

export default function UserProfilePage() {
    const {fetchGithubProfile} = useGithubContext()
    const router = useRouter()
    const {username} = router.query
    console.log(username)

    useEffect(()=> {
        if(username){
            fetchGithubProfile(username as string, 1)
        }
    }, [username])
  return (
    <>
        <UserProfile/>
    </>
  )
}
