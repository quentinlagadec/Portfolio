"use client";
import Image from "next/image";
import { useState } from "react";

interface PageProps{
    title:string, 
    techno:string[], 
    description:string
}

export default function ProjetComponent({title, techno, description}:PageProps) {
    const [descriptionOpen, setDescriptionOpen] = useState(false);
    return (
    <div id={"box-"+title} className='grid grid-cols-2 items-center bg-neutral-900 min-[900px]:grid-cols-1'>
        <div className='flex-col mr-100'>
            <h1 className='mt-10 mb-6 text-4xl font-extrabold'>{title}</h1>
            <div className='flex flex-1 items-center flex-row max-[450px]:flex-col'>
                {afficheTechno(techno)}
            </div>
            {descriptionOpen ? <>
                <button onClick={() =>{
                    setDescriptionOpen(false);
                    document.getElementById("contentBody")?.classList.remove("grid-cols-1")
                    document.getElementById("contentBody")?.classList.add("grid-cols-2")
                }}
                className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
                    <h1 className="font-extrabold">Fermer</h1>
                </button>
            </> : 
            <button onClick={() =>{
                setDescriptionOpen(true);
                document.getElementById("contentBody")?.classList.remove("grid-cols-2")
                document.getElementById("contentBody")?.classList.add("grid-cols-1")
                }} className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
                <h1 className="font-extrabold">Détails du Projet</h1>
            </button>
            }
        </div>
        {descriptionOpen ?<div className="">
            <h2>{description}</h2>
        </div>:null}
    </div>
);}

function afficheTechno(techno:string[]){
    const imagesTechno: JSX.Element[] = [];
    for (let entry of techno) {
        imagesTechno.push(<Image className="mt-10 mb-7 ml-8" src={"/"+entry+".png"} alt={"photo "+entry} width={100} height={100}/>);
    }
    return imagesTechno
}
