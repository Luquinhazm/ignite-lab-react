import { DefaultUi, Player, Youtube } from "@vime/react";

import '@vime/core/themes/default.css'

export default function Video () {
    return(
        <section className="flex-1">

            <div className="bg-white flex justify-center">
                <div className="bg-slate-600 w-full h-full max-w-[1100px] max-h-[60vh] aspect-video">
                    <Player>
                        <Youtube videoId=""/>
                        <DefaultUi/>
                    </Player>
                </div>
            </div>

            <div className="p-8 max-w-[1100px] mx-auto">
                <div className="flex gap-16">

                    <div className="flex-1">
                        <h1 className="font-bold text-2xl">Aula 01 - Criando o projeto e realizando o setup inicial</h1>
                        <p className="mt-4 leading-relaxed text-gray-200 font-bold ">Nessa aula vamos dar início ao projeto criando a estrutura base da aplicação utilizando ReactJS, Vite e TailwindCSS. Vamos também realizar o setup do nosso projeto no GraphCMS criando as entidades da aplicação e integrando a API GraphQL gerada pela plataforma no nosso front-end utilizando Apollo Client.</p>
                    </div>

                    <div>
                        <a href="" className="bg-green-500 text-sm font-bold p-4 uppercase rounded block hover:bg-green-700  transition-colors">Comunidade no discord</a>
                        <a href="" className="text-sm text-blue-500 font-bold px-6 py-4 mt-4  uppercase rounded block border border-blue-500 hover:bg-blue-500 hover:text-gray-900 transition-colors">Acesse o desafio</a>
                    </div>

                </div> 

                <div className="flex gap-4 mt-6">

                    <img src="https://github.com/Luquinhazm.png" alt="" className="rounded-full h-16 border-2 border-blue-500" />

                    <div className="flex flex-col">
                        <strong className="text-2xl ">Lucas Mendes</strong>
                        <span className="text-sm text-gray-300">Desenvolvedor Front-end</span>
                    </div>

                </div>

                <div className="mt-20 gap-8 flex">
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
                    <i className="fa-solid fa-file-arrow-down text-4xl"></i>
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
