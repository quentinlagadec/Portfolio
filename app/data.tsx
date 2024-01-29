const CompetencesData = [
    {
        img_path:"/sql.png",
        title:"Sql",
        note:3,
        bgColor:"bg-purple-500"
    },
    {
        img_path:"/psql.png",
        title:"Psql",
        note:3,
        bgColor:"bg-violet-500"
    },
    {
        img_path:"/mongodb.png",
        title:"MongoDB",
        note:2,
        bgColor:"bg-lime-800"
    },
    {
        img_path:"/javaScripts.png",
        title:"JavaScript",
        note:2,
        bgColor:"bg-yellow-200"
    },
    {
        img_path:"/ts.png",
        title:"Typescrypt",
        note:2,
        bgColor:"bg-green-400"
    },
    {
        img_path:"/html.png",
        title:"HTML",
        note:4,
        bgColor:"bg-rose-800"
    },
    {
        img_path:"/css.png",
        title:"CSS",
        note:3,
        bgColor:"bg-emerald-400"
    },
    {
        img_path:"/php.png",
        title:"PHP",
        note:5,
        bgColor:"bg-purple-950"
    },
    {
        img_path:"/shopify.png",
        title:"Shopify",
        note:4,
        bgColor:"bg-green-400"
    },
    {
        img_path:"/bash.png",
        title:"Bash",
        note:1,
        bgColor:"bg-indigo-500"
    },
    {
        img_path:"/react.png",
        title:"React",
        note:2,
        bgColor:"bg-slate-900"
    },
    {
        img_path:"/git.png",
        title:"Git",
        note:3,
        bgColor:"bg-orange-100"
    },
    {
        img_path:"/angular.png",
        title:"Angular",
        note:2,
        bgColor:"bg-rose-950"
    },
    {
        img_path:"/docker.png",
        title:"Docker",
        note:1,
        bgColor:"bg-blue-200"
    },
]

const ProjetData = [
    {
        title:"Portfolio écologique",
        techno:["html", "css", "nodejs"],
        content:`J'ai conçu mon portfolio en utilisant des bases de HTML et CSS, puis j'ai intégré Next.js pour gérer les différents éléments. L'utilisation de Next.js m'a également amené à incorporer TypeScript pour optimiser certaines fonctions de mes composants.`
    },
    {
        title:"Portfolio",
        techno:["html", "css"],
        content:`Mon Portfolio était fait uniquement en HTML CSS.`
    },
    {
        title:"Module remboursement et échange d'articles",
        techno:["php", "sql", "shopify"],
        content:`Au cours de mon alternance, j'ai développé un module d'échange d'articles et de remboursement avec la plateforme e-commerce Shopify. Ce projet a impliqué l'utilisation de PHP et SQL, avec une API pour faciliter les transactions.`
    }
]

const ExperienceData = [
    {
        title: "Travail dans les champs",
        content: `De juillet à août des années 2018, 2019 et 2020, j'ai acquis une expérience significative en travaillant dans les champs, spécifiquement avec la culture de choux-fleurs et de courgettes. Mon rôle été la récolte des cultures.`
    },
    {
        title: "Saisonier Bonduelle",
        content: `Au cours de mon expérience chez Bonduelle de juillet à août 2021-2022, j'ai démontré ma polyvalence en travaillant sur diverses lignes de production. Mes missions comprenaient la mise en place des bocaux sur les palettes, l'envoi des bocaux vides, ainsi que le triage méticuleux des petits pois et des carottes. Cette expérience m'a permis de développer des compétences polyvalentes dans un environnement de production alimentaire, où la précision et l'efficacité sont essentielles.`
    },
    {
        title: "Alternance",
        content: `Depuis janvier 2023, j'évolue en tant que développeur PHP au sein de l'entreprise Lener Cordier, où j'ai accumulé près d'un an d'expérience en alternance. Mon rôle consiste à contribuer activement au développement et à la maintenance de projets utilisant le langage PHP. J'ai eu l'opportunité de participer à la conception et à l'optimisation de fonctionnalités, à la gestion des bases de données, ainsi qu'à la résolution efficace des problèmes inhérents au développement web. Mon passage chez Lener Cordier a significativement renforcé mes compétences en programmation PHP, enrichissant ainsi ma compréhension des technologies liées au développement web.`
    }
]

const NavLinks = [
    {
        href: "/Competences",
        title: "Compétences"
    },
    {
        href: "/Projets",
        title: "Projets"
    },
    {
        href: "/Experiences",
        title: "Expériences"
    },
    {
        href: "/Memoire",
        title: "Mémoire"
    }
]

export {ProjetData, ExperienceData, CompetencesData, NavLinks};