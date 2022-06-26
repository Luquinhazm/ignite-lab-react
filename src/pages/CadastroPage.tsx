import { gql, useMutation } from "@apollo/client";
import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import imgURL from "../../src/assets/group-code.png"

const  CREATE_INSCRITO_MUTATION = gql`
    mutation CreateInscrito ($name:String!, $email: String!) {
        createSubscriber(data: {name: $name, email: $email}) {
            id
  }
}
`

interface mutationResponse{
    name: string,
    email: string
}


export default function CadastroPage(){

    const navigateCadastro = useNavigate()

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const [createInscrito] = useMutation<mutationResponse>(CREATE_INSCRITO_MUTATION)

    async function handleInscrito(event:FormEvent){
        event?.preventDefault()
       await createInscrito({
            variables:{
                name,
                email,
            }
        })
        
        navigateCadastro("/")
    }

    return(
    <div className="min-h-screen bg-blur bg-no-repeat bg-cover flex flex-col items-center">
        <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
            <div className="max-w-[640px]" >
                <Link to="/">
                    <Logo/>
                </Link>
                
                <h1 className="text-[2.5rem] mt-8 leading-tight">Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, <strong className="text-blue-500">com React</strong> </h1>

                <p className="leading-relaxed text-gray-200 mt-4">Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado</p>
            </div>
            <div className="p-8 bg-gray-700 border border-gray-500 rounded">
                <strong className="text-2xl mb-6 block">Inscreva-se gratuitamente</strong>
                <form 
                onSubmit={handleInscrito} 
                className="flex flex-col gap-2 w-full ">
                    <input 
                        className="bg-gray-900 rounded px-5 h-14 "
                        type="text" 
                        placeholder="Seu nome completo"
                        onChange={event=> setName(event.target.value)}
                     />

                    <input 
                        className="bg-gray-900 rounded px-5 h-14 " 
                        type="email" 
                        placeholder="Digite seu e-mail" 
                        onChange={event=> setEmail(event.target.value)}
                        id='#emailInput'
                        />

                    <button 
                    type="submit"
                    className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50 "
                    >
                        Garantia minha vaga
                    </button>
                    </form>
                </div>
            </div>
            <img src={imgURL} alt="" className="mt-10" />
        </div>
    )
}