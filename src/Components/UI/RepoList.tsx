'use client'

import { useGithubContext } from "@/GithubContextStore/ContextStore"
import ReactPaginate from 'react-paginate';
import { FaCodeFork } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import Link from "next/link";


export default function RepoList() {
const { repos, error, handlePageChange, page, user, totalPages} = useGithubContext()


//     const startIndex = (page - 1) * reposPerPage;
//     const endIndex = startIndex + reposPerPage;
    
//     // Slice the repos based on current page
//     const currentRepos = repos.slice(startIndex, endIndex);
    
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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {repos.map((repo, index) => (
                    <div key={index} className="bg-white p-4 shadow-md rounded-md dark:bg-gray-800 flex flex-col gap-3">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          {repo.repo_name}
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                          {repo.description || 'No description available.'}
                        </p>
                        <p className="text-sm text-gray-500 flex gap-3">
                          <span className="flex items-center gap-1"><FaRegStar size={15}/> {repo.starCount}</span>  
                          <span className="flex items-center gap-1"> <FaCodeFork size={13}/> {repo.forkCount}</span>
                        </p>
                    </div>
                  ))}
              </div>

          {/* Pagination */}
          <div className="mt-8 flex justify-center items-center w-full overflow-hidden">
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              breakLabel={"..."}
              pageCount={totalPages}
              marginPagesDisplayed={2}
              pageRangeDisplayed={3}
              onPageChange={handlePageChange}
              containerClassName={'flex justify-center mt-4'}
              pageClassName={"page-item"}
              pageLinkClassName={'block py-2 px-4 border border-gray-300 rounded hover:bg-blue-500 hover:text-white transition-colors duration-200'}
              previousClassName={'mx-1'}
              previousLinkClassName={'block py-2 px-4 border border-gray-300 rounded hover:bg-blue-500 hover:text-white transition-colors duration-200'}
              nextClassName={'mx-1'}
              nextLinkClassName={'block py-2 px-4 border border-gray-300 rounded hover:bg-blue-500 hover:text-white transition-colors duration-200'}
              breakClassName={'mx-1'}
              breakLinkClassName={'block py-2 px-4 border border-gray-300 rounded'}
              activeClassName={'bg-blue-500 text-white'}
              forcePage={page - 1} // Ensure it highlights the correct page
            />
          </div>
        </>
      ) : (
        <p>No repositories found.</p>
      )}
    </div>
   </>
  )
}
