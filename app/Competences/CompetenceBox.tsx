'use client';
import Image from "next/image";

const star = <Image className="" src="/star_jaune.png" alt="photo d'etoile'" width={30} height={30}/>
interface PageProps{
    img_paht:string,
    title:string,
    note:number,
    bgColor:string
}

export const CompetenceComponent = ({img_paht, title, note, bgColor}:PageProps) => {
    let classDivName = 'items-center rounded-l-full '+bgColor
    return (
    <div className='flex items-center bg-neutral-900'>
        <div className='flex-1'>
            <h1 className='ml-5 mb-6 text-4xl font-extrabold'>{title}</h1>
            <div className='ml-2 flex items-center'>
                {printStars(note)}
            </div>
        </div>
        <div className={classDivName}>
            <Image className="mt-10 mb-7 ml-8" src={img_paht} alt={"logo de "+title} width={200} height={200}/>
        </div>
        
    </div>

);}

function printStars(note:number){
    const imageNote: JSX.Element[] = [];
    for (let i = 0; i < note; i++) {
        imageNote.push(star);
    }
    return imageNote
}
