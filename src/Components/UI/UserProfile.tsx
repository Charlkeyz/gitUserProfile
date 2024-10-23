'use client'
import { useGithubContext } from '@/GithubContextStore/ContextStore'
import { Avatar, Card, CardBody, CardFooter, CardHeader, Spinner } from '@nextui-org/react';
import React from 'react'
import { ImSpinner } from "react-icons/im";

type UserProfileProps = {
  className?: string;
}
export default function UserProfile({className}: UserProfileProps) {
  const {loading, user} = useGithubContext()
  
  return (
    <>
        <div className={`flex flex-col justify-center items-center mt-6 ${className}`}>
          {loading ? (
            <Spinner className='mt-32'/>
            ) : user ? (
              <Card shadow='sm' className='p-4 lg:w-1/2 w-full flex flex-col justify-center '>
                <CardHeader className='flex flex-col'>
                  <Avatar src={user.avatarUrl} alt="Profile image" className=" mb-4 mx-auto w-24 h-24"/>
                  <h2 className="text-xl font-bold text-gray-800 dark:text-white text-center">{user.login}</h2>
                </CardHeader>
                <CardBody>
                  <p className="text-center text-xs ">{user.bio}</p>
                  <p className="text-center mt-5">{user.location || 'No Location'}</p>
                </CardBody>
                <CardFooter className='flex justify-center'>
                  <p className="mt-4 text-gray-800 dark:text-white">Public Repositories: {user.publicRepo}</p>
                </CardFooter>   
              </Card>
              
          ) : (
            <p className="text-gray-500">No user data available. Search for a GitHub user.</p>
          )}
        </div>
        
    </>
  )
} 
