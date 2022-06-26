import { DefaultUi, Player, Youtube } from "@vime/react";

import '@vime/core/themes/default.css'
import { gql, useQuery } from "@apollo/client";

const GET_LESSON_BY_SLUG_QUERY = gql`
query GEtLessonBySlug ($slug: String) {
  lesson(where: {slug: $slug}) {
    title
    videoId
    description
    teacher {
      avatarURL
      bio
      name
    }
  }
}
`

interface GetLessonBySlugResponse{
    lesson: {
        title: string;
        videoId: string;
        description: string;
        teacher: {
            avatarURL: string;
            bio: string;
            name: string;
        }

    }
}

interface VideoProps{
    lessonSlug: string;
}

export default function Video (props: VideoProps) {
    const {data} = useQuery<GetLessonBySlugResponse>(GET_LESSON_BY_SLUG_QUERY,{
        variables: {
            slug: props.lessonSlug,
        }
    })

    if (!data) {
        return(
            <div className="flex-1">
                <p>Carregando...</p> 
            </div>
        ) 
    }

    return(
        <section className="flex-1">

            <div className="flex justify-center">
                <div className="bg-slate-600 w-full h-full max-w-[1100px] max-h-[60vh] aspect-video">
                    <Player>
                        <Youtube videoId={data.lesson.videoId}/>
                        <DefaultUi/>
                    </Player>
                </div>
            </div>

            <div className="p-8 max-w-[1100px] mx-auto ">
                <div className="flex gap-16 md:flex-wrap " >
                    <div className="flex-1">
                        <h1 className="font-bold text-2xl">{data.lesson.title}</h1>
                        <p className="mt-4 leading-relaxed text-gray-200 font-bold ">{data.lesson.description}</p>
                    </div>
                    <div>
                        <a href="" className="bg-green-500 flex gap-2 items-center text-sm font-bold p-4 uppercase rounded hover:bg-green-700  transition-colors">
                            <i className="fa-brands fa-discord text-2xl"></i>
                            Comunidade no discord
                        </a>
                        <a href="" className="text-sm text-blue-500  flex gap-2 items-center justify-center font-bold px-6 py-4 mt-4  uppercase rounded border border-blue-500 hover:bg-blue-500 hover:text-gray-900 transition-colors">
                            <i className="fa-solid fa-bolt text-2xl"></i>
                            Acesse o desafio
                        </a>
                    </div>
                </div> 

                <div className="flex gap-4 mt-6">

                    <img src={data.lesson.teacher.avatarURL} alt="" className="rounded-full h-16 border-2 border-blue-500" />

                    <div className="flex flex-col">
                        <strong className="text-2xl ">{data.lesson.teacher.name}</strong>
                        <span className="text-sm text-gray-300">{data.lesson.teacher.bio}</span>
                    </div>

                </div>

                <div className="mt-20 gap-8 flex md:flex-wrap">
                    <a href="" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
                        <div className="bg-green-700 h-full p-6 flex items-center">
                            <i className="fa-solid fa-file-arrow-down text-4xl"></i>
                        </div>
                        <div className="py-6 leading-relaxed">
                            <strong className="text-2xl">Material complementar</strong>
                            <p className="text-sm text-gray-200 mt-2">Acesse o material complementar para acelerar o seu desenvolvimento</p>
                        </div>
                        <div className="h-full p-6 flex items-center">
                        <i className="fa-solid fa-chevron-right text-2xl "></i>
                        </div>
                    </a>

                   <a href="" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
                    <div className="bg-green-700 h-full p-6 flex items-center">
                        <i className="fa-solid fa-image text-4xl"></i>
                    </div>
                    <div className="py-6 leading-relaxed">
                        <strong className="text-2xl">Wallpaper Exclusivos</strong>
                        <p className="text-sm text-gray-200 mt-2">Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina</p>
                    </div>
                    <div className="h-full p-6 flex items-center">
                    <i className="fa-solid fa-chevron-right text-2xl "></i>
                    </div>
                   </a>
                </div>
            </div>
        </section>
    )
}
