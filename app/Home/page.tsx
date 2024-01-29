"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function HomeContent() {
    const [CvOpen, setCvOpen] = useState(false);
    return (<>
    <div className='grid grid-cols-1 sm:grid-cols-11 mt-[150px]' >
        <div className="col-span-6 place-self-center text-center sm:text-left ">
            <h1 className='mb-8 lg:text-5xl font-extrabold'>
                Bienvenue sur mon Portfolio
            </h1>
            <p className='text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-7 '>
                Je suis actuellement en alternance en troisième année d'informatique, poursuivant mes études à l'IUT de Lens en BUT informatique. Ce site a pour vocation de présenter les différentes technologies que j'ai acquises au cours de mon parcours académique.
                Vous y trouverez également une section dédiée à mes divers projets, mettant en lumière les compétences que j'ai développées au fil de mes études. Dans l'onglet "Expériences", je partage les détails de mon parcours professionnel, notamment mon expérience en alternance chez Lener Cordier.
                Pour en savoir davantage sur ma personne, je vous invite à explorer la section "À propos de moi". Vous y découvrirez plus d'informations sur mon profil, mes motivations et mes aspirations dans le domaine informatique.
            </p>
        </div>
    </div>
    </>
    )
};
