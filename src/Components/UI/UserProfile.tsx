'use client'
import { useGithubContext } from '@/GithubContextStore/ContextStore'
import Image from 'next/image'
import React from 'react'
import { ImSpinner } from "react-icons/im";

export default function UserProfile() {
  const {loading, error, user} = useGithubContext()
  
  return (
    <>
        <div className="flex flex-col justify-center items-center mt-6">
          {loading ? (
            <ImSpinner className='animate-spin mt-20' size={30}/>
            ) : user ? (
              <div className="bg-white dark:bg-gray-800 p-6 rounded-md shadow-md w-full max-w-md flex flex-col gap-5">
                <img src={user.avatarUrl} alt="Profile image" className="w-24 h-24 rounded-full mb-4 mx-auto" />
                <h2 className="text-xl font-bold text-gray-800 dark:text-white text-center">{user.login}</h2>
                <p className="text-gray-700 dark:text-gray-300 text-center">{user.bio}</p>
                <p className="text-gray-500 dark:text-gray-400 text-center">{user.location || 'No Location'}</p>
                <p className="mt-4 text-gray-800 dark:text-white text-center">Public Repositories: {user.publicRepo}</p>
              </div>
          ) : (
            <p className="text-gray-500">No user data available. Search for a GitHub user.</p>
          )}
    </div>
    </>
  )
} 
