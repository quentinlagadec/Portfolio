import Navbar from "../Navbar";
import {CompetenceComponent} from "./CompetenceBox";
import { CompetencesData } from "../data";

export default function competances() {
    return (
    <main className='min-h-screen flex-col bg-neutral-900'>
        <Navbar/>
        <div className='grid grid-flow-row-dense grid-cols-2 mt-24 space-x-3 mx-auto px-12 py-4 max-[900px]:grid-cols-1 min-[1400px]:grid-cols-3'>
        {CompetencesData.map((data,index) => (
                <li key={index} className="list-none">
                    <CompetenceComponent img_paht={data.img_path} title={data.title} note={data.note} bgColor={data.bgColor}/>
                </li>
            ))}
        </div>
    </main>
);}
