'use client'
import { createContext, ReactNode, useContext, useState } from "react";
import axios from 'axios'

type UserProfile = {
    avatarUrl: string
    login: string
    bio: string
    location?: string
    publicRepo: number
} | null
type Repo = {
    repo_name: string
    description: string
    starCount: number
    forkCount: number
}

type GitHubContextType = {
    theme: string
    toggleTheme: () => void
    username: string
    setUsername: (username: string) => void
    user: UserProfile | null
    repos: Repo[]
    loading: boolean
    error: string
    setUser: (user: UserProfile | null) => void
    setRepos : (repos: Repo[]) => void
    page: number
    totalPages: number
    setPage: (page: number) => void
    fetchGithubProfile: (username:string, page:number) => void
    handlePageChange: (selectedItem: { selected: number }) => void;
}
type GitHubContextProps = {
    children: ReactNode
}

export const GitHubContext = createContext<GitHubContextType | null>(null)

export const useGithubContext = () => {
    const githubProfileContext = useContext(GitHubContext)
    
    if(githubProfileContext === null) {
        throw new Error("Timers context is null")
    }
    return githubProfileContext
}
export default function GithubContextProvider ({children}: GitHubContextProps) {
    const [theme, setTheme] = useState('light')
    const [username, setUsername] = useState('')
    const [user, setUser] = useState<UserProfile | null>(null)
    const [repos, setRepos] = useState<Repo[]>([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)
    




    const toggleTheme = () => {
        setTheme((prevTheme) => {
            const newTheme = prevTheme === 'light' ? 'dark' : 'light'
            
            if (newTheme === 'dark') {
            
                document.documentElement.classList.add('dark')
            } else {
                
                document.documentElement.classList.remove('dark')
            }
    
            return newTheme;
        });
    };
    const fetchGithubProfile = async(username: string, page: number) => {
        setLoading(true)
        setError('')
        

        try {
            const userDataResponse = await axios.get(`https://api.github.com/users/${username}`)
            const repoResponseData = await axios.get(`https://api.github.com/users/${username}/repos?per_page=30&page=${page}`)
            
            setUser({
                avatarUrl: userDataResponse.data.avatar_url,
                login: userDataResponse.data.login,
                bio: userDataResponse.data.bio,
                location: userDataResponse.data.location,
                publicRepo: userDataResponse.data.public_repos
            })

            const reposData = repoResponseData.data.map((repo:{
                name: string
                description: string
                stargazers_count: number
                forks_count: number
            }): Repo => ({
                repo_name: repo.name,
                description: repo.description,
                starCount: repo.stargazers_count,
                forkCount: repo.forks_count,    
            }))
            setRepos(reposData)

            const totalRepos = userDataResponse.data.public_repos
            setTotalPages(Math.ceil(totalRepos / 30))
 
            
            
            
        } catch (error) {
            
            setError('User not found or API request failed.')
            setRepos([])
            setUser(null)
              
        }finally{
            setLoading(false)
        }
    }
    

    const handlePageChange = ({ selected }: { selected: number }) => {
        const newPage = selected + 1
        setPage(newPage);
        fetchGithubProfile(username, newPage)
      };

    




    const value: GitHubContextType = {
        theme,
        toggleTheme,
        username,
        setUsername,
        totalPages,
        user,
        setRepos,
        repos,
        setUser,
        loading,
        error,
        page,
        setPage,
        fetchGithubProfile,
        handlePageChange
    }
    return(
        <GitHubContext.Provider value={value}>
            {children}
        </GitHubContext.Provider>
    )
}
