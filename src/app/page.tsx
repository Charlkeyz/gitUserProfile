import SearchInput from "@/Components/SearchInput";
import Header from "@/Components/Header";
import Preview from "@/Components/Preview";
import UserProfile from "@/Components/UI/UserProfile";
import RepoList from "@/Components/UI/RepoList";



export default function Home() {
  return (
    <>
      <div>
        <Preview>
            <Header/>
            <SearchInput/>
            <UserProfile/>
            <RepoList/>
        </Preview>
          

      </div>
    </>
  )
}
