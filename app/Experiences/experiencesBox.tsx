"use client";
import { useState } from "react";

interface PageProps{
    title:string, 
    description:string
}

const ExperienceComponent = ({title, description}:PageProps) => {
    const [descriptionOpen, setDescriptionOpen] = useState(false);
    return (
    <div id={"box-"+title} className='grid grid-cols-2 items-center bg-neutral-900 max-[900px]:grid-cols-1'>
        <div className='flex-col mr-100'>
            <h1 className='mt-10 mb-6 text-4xl font-extrabold'>{title}</h1>
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
                <h1 className="font-extrabold">Détails de l'expériences</h1>
            </button>
            }
        </div>
        {descriptionOpen ?<div className="">
            <h2>{description}</h2>
        </div>:null}
    </div>
);}

export default ExperienceComponent