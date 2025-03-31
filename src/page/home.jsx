import "../styles/home-style.css"
import {BiSolidLeaf} from "react-icons/bi";


function Home() {

    return (
        <div className="flex flex-col items-center">
            <div className="app-home m-5 p-5">
                <div className="text-home mr-5 flex flex-col items-center">
                    <h2 className="title-style bg-sky-500 mt-5 mb-5 w-fit">
                        <span className="flex items-center">
                            Une véritable histoire<BiSolidLeaf className="ml-2"/>
                        </span>
                    </h2>

                    <p>Tout a commencé en 1984 avec la création du premier site de production Les Crudettes à Cavaillon.
                        À partir de cette date on vous passe les détails, mais en gros ce fut une gentille et belle
                        ascension, doucement mais sûrement, parce qu’une entreprise aussi ça se cultive et que ça a
                        besoin de temps et d’investissement pour germer, pousser et puis s’élever.</p>
                    <p>Depuis 2013, nous avons rejoint le groupe LSDH, avec lequel nous partageons la vision : Passion,
                        Ambition et Humanité. Un élan supplémentaire à notre développement.</p>
                    <p>Alors 37 ans plus tard nous voilà là. Un peu fiers mais pas trop, juste ce qu’il faut. Quand on
                        se retourne, on est content du chemin parcouru et des terres labourées. Mais comme ce n’est pas
                        dans cette direction-là qu’on va (en arrière), on continue de regarder devant, direction le
                        plaisir lié aux innovations et à la création. Et c’est très excitant. Vraiment.</p>
                    <p>En fait - si vous voulez tout savoir - on s’est fixé comme mission de vous proposer ce qu’il y a
                        de meilleur et de plus cru. Des salades mais aussi des crudités donc. Et comme on aime bien
                        varier les plaisirs et innover, notre offre s’enrichit de plus en plus pour s’adapter à vos vies
                        autant qu’à vos envies. Aujourd’hui des salades snacking, des soupes froides et plein de petits
                        trucs en plus pour rendre vos salades sexy en diable. Et demain des jus plus frais que frais,
                        des mélanges de saveurs audacieux et délicieux. Bref, on a hâte de vous présenter ça !</p>
                    <button className="button-style bg-[#FFCC00] mx-auto px-5 py-2 m-5"><span>En savoir plus</span>
                    </button>

                </div>
                <img src="/img/champ.webp"/>

            </div>
            <h2 className="title-style bg-purple-500 mt-20 mb-5 w-fit">
        <span className="flex items-center">
        nos produits<BiSolidLeaf className="ml-2"/>
        </span>
            </h2>
            <div className="category-home flex w-4/5">
                <a href="#" className="flex flex-col items-center">
                    <img className="w-52" src="/img/saladed-crudited.webp" alt="photo de salade et crudité"/>
                    <p className="text-2xl font-bold mt-5">Salades et crudités</p>
                </a>
                <a href="#" className="flex flex-col items-center">
                    <img className="w-52" src="/img/legumes.webp" alt="photo de legumes"/>
                    <p className="text-2xl font-bold mt-5">Légumes</p>
                </a>
                <a href="#" className="flex flex-col items-center">
                    <img className="w-52" src="/img/herbes.webp" alt="photo de salade et crudité"/>
                    <p className="text-2xl font-bold mt-5">Herbes et autres</p>
                </a>
            </div>
        </div>
    )
}

export default Home;