import { gql, useQuery } from "@apollo/client";
import { useState, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import imgURL from "../../src/assets/group-code.png"

const READ_INSCRITO = gql`
    query IdIscrito  {
        subscribers (stage: DRAFT) {
            id
            email
  }
}
`
interface responseInscritos{
    subscribers:{
        id: string
        email: string
    }[]
}

export default function InscricaoPage(){
    const navigate = useNavigate()
    const [email, setEmail] = useState('');

    const {data} = useQuery<responseInscritos>(READ_INSCRITO)  

    function entrar(event:FormEvent){
        event?.preventDefault()
        const valueEmail = document.getElementById('#emailInput') as HTMLInputElement
        const usuarios = data?.subscribers.map( emails =>{
          return emails.email
        })

        if(usuarios?.includes(valueEmail.value)){
           navigate("/Inicio/lesson/abertura-do-evento-ignite-labs")
        }
    }

    return(
        <div className="min-h-screen bg-blur bg-no-repeat bg-cover flex flex-col items-center">
            <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto flex-wrap p-3 lg:justify-center">
                <div className="max-w-[640px]" >
                    <Logo/>
                    <h1 className="text-[2.5rem] mt-8 leading-tight">Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, <strong className="text-blue-500">com React</strong> </h1>
                    <p className="leading-relaxed text-gray-200 mt-4">Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado</p>
                </div>
                <div className="p-8 bg-gray-700 border border-gray-500 rounded lg:mt-6 ">
                    <strong className="text-2xl mb-6 block">Acesse a plataforma</strong>
                    <form  className="flex flex-col gap-2 w-full ">
                            <input 
                            className="bg-gray-900 rounded px-5 h-14 " 
                            type="email" 
                            placeholder="Digite seu e-mail" 
                            onChange={event=> setEmail(event.target.value)}
                            id='#emailInput'
                            />
                            <button 
                                onClick={entrar}
                                className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50 "
                                >
                                Entrar
                            </button>
                        <Link to="/cadastro" className="text-sm text-gray-200 text-center mt-2 opacity-50 cursor-pointer">Inscreva-se gratuitamente</Link>
                    </form>
                </div>
            </div>
            <img src={imgURL} alt="" className="mt-10" />
        </div>
    )
}