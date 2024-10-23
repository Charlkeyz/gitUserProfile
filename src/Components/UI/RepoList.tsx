'use client'

import { useGithubContext } from "@/GithubContextStore/ContextStore"
import ReactPaginate from 'react-paginate';
import { FaCodeFork } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import Link from "next/link";
import { Card, CardBody, CardFooter, Pagination } from "@nextui-org/react";


export default function RepoList() {
const { repos, handlePageChange, page, user, totalPages} = useGithubContext()



  return (
   <>
      <div className="container mx-auto p-4 flex flex-col items-center">
            {
              user && (
                <h1 className="my-10 underline text-blue-500 font-bold">
                  <Link href={`/${user.login}`}>
                      {user.login}
                  </Link>
                </h1>
              )
            }
            {repos.length > 0 ? (
                <>
                {/* Repo Grid */}
                <h2 className="text-2xl font-bold text-center mb-6">Repository List</h2>
                <div className="gap-2 grid grid-cols-1 sm:grid-cols-3">
                      {repos.map((repo, index) => (
                        <Card shadow="sm" key={index} isPressable className="p-3">
                          <CardBody className="overflow-visible p-0">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                {repo.repo_name}
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 text-xs leading-5">
                              {repo.description || <span className="font-bold">No description available.</span>}
                            </p>
                          </CardBody>
                          <CardFooter className="text-small justify-between p-0 mt-3">
                            <span className="flex items-center gap-1"><FaRegStar size={15}/> {repo.starCount}</span>  
                            <span className="flex items-center gap-1"> <FaCodeFork size={13}/> {repo.forkCount}</span>                 
                          </CardFooter>
                        </Card>
                      ))}
                  </div>

          {/* Pagination */}
         <Pagination
         className="mt-3" 
         total={totalPages}
         showControls
         initialPage={page}
         boundaries={0}
         siblings={0}
         showShadow
         onChange={(page) => handlePageChange(page)}/>
        </>
      ) : (
        <p>No repositories found.</p>
      )}
    </div>
   </>
  )
}



