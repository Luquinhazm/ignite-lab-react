import { useParams } from "react-router-dom"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import Video from "../components/Video"



export default function HomePage(){

  const { slug } = useParams<{slug: string}>()

    return(
      <div className="flex flex-col min-h-screen">
        <Header/>
        <main className="flex flex-1 lg:flex-wrap">
            {slug ? <Video lessonSlug={slug}/> : <div className="flex-1"></div>}
            <Sidebar/>
        </main>
      </div>
    )
}