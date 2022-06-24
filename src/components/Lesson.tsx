import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Link, useParams } from 'react-router-dom';


interface LessonProps{
    title: string;
    slug: string;
    availableAt: Date;
    type: 'live' | 'class';
}


export default function Lesson(props: LessonProps) {

    const {slug} = useParams<{slug: string}>()

    const isLessonAvailable = isPast(props.availableAt);
    const availableDateFormatted = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
        locale: ptBR,
    } )

    const activeLesson = slug === props.slug;

    return(
       <Link to={`/Inicio/lesson/${props.slug}`} className='group'>
            <span className="text-gray-300">
               {availableDateFormatted}
            </span>

            <div className={`rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 ${activeLesson ? 'bg-green-500' : ''} `}>
                <header className="flex items-center justify-between">
                    
                  {isLessonAvailable ? (  
                    <span className={`text-sm text-blue-500 font-medium flex items-center gap-2 ${activeLesson ? 'text-white ' : ''}`}> 
                    <i className="fa-solid fa-circle-check"></i>
                    Conteúdo Liberado
                    </span>
                    ) :  (<span className="text-sm text-orange-500 font-medium flex items-center gap-2"> 
                    <i className="fa-solid fa-lock"></i>
                    Em Breve
                    </span>)
                   }

                    <span className={`text-xs rounded px-2 py-[0.125rem] text-white border border-green-300 font-bold ${activeLesson ? 'border-white' : ''}`}>
                    {props.type === 'live' ? 'Ao vivo' : 'Aula Pratica'}
                    </span>

                </header>

                <strong className={`mt-4 block ${activeLesson ? 'text-white' : 'text-gray-200'}`}>
                    {props.title}
                </strong>
            </div>
       </Link>
    )
}
