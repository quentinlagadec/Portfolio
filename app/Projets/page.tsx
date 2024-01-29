import Navbar from "../Navbar";
import ProjetComponent from "./projetBox";
import { ProjetData } from "../data";

export default function projets() {return (
    <main className='min-h-screen flex-col bg-neutral-900'>
        <Navbar/>
        <div id="contentBody" className='items-center grid grid-flow-row-dense grid-cols-2 mt-24 mx-auto px-12 py-4 max-[1500px]:grid-cols-1'>
        {ProjetData.map((data,index) => (
            <li key={index} className="list-none">
                <ProjetComponent title={data.title} techno={data.techno} description={data.content}/>
                </li>
            ))}
        </div>
    </main>
);}
