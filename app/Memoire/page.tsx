import Navbar from "../Navbar";

export default function Memoire() {return (
    <main className='min-h-screen flex-col bg-neutral-900'>
        <Navbar/>
        <div className='mt-24 mx-auto px-12 py-4'>
            <h1 className='mt-24 text-2xl font-extrabold'>En quoi utiliser NextJS permet de réaliser des sites Internet éco conçus ?</h1>
            <p  className='mt-24 text-base font-extrabold'>
            La technique de division du code, également connue sous le nom de code splitting, a été mise en œuvre pour charger uniquement le code essentiel à l'affichage initial d'une page. Cette approche, liée à l'utilisation de composants, permet de réduire le temps de chargement initial, économisant ainsi des ressources et de l'énergie.<br/>
            Des fonctionnalités d'optimisation automatique des images, telles que la compression et la conversion au format WebP, ont été intégrées. Cela contribue à réduire la bande passante nécessaire, améliorant ainsi la vitesse de chargement et diminuant la consommation d'énergie pour les utilisateurs.<br/>
            L'intégration de fonctionnalités SEO dans le déploiement du site web est essentielle, car elle permet de minimiser les ressources nécessaires tout en favorisant une meilleure visibilité en ligne.<br/>
            Le site intègre des fonctionnalités d'optimisation des performances, telles que la gestion automatique du prefetching et le support du protocole HTTP/2. Ces améliorations contribuent à accélérer le chargement des pages tout en réduisant la consommation d'énergie associée aux transferts de données.
            </p>
            <h1 className='mt-24 text-2xl font-extrabold'>Pourquoi mon site Internet est éco conçu ?</h1>
            <p  className='mt-24 text-base font-extrabold'>
            J'ai optimisé l'expérience utilisateur en utilisant des composants pour éviter de recharger l'intégralité du site à chaque action de l'utilisateur.<br/>
            Le choix d'un fond noir vise à minimiser la consommation d'énergie, car le noir requiert moins d'énergie que le blanc.<br/>
            Pour une meilleure efficacité, j'ai privilégié l'utilisation de balises d'images optimisées plutôt que les balises HTML img classiques.<br/>
            J'ai privilégié une conception ergonomique et simple, garantissant une compréhension facile du site. L'objectif est que les utilisateurs puissent accéder rapidement à l'information sans avoir à naviguer à travers de nombreuses pages.
            </p>
        </div>
    </main>
);}
