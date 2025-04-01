import "../styles/home-style.css"
import {Btn} from "../component/btn";
import {TitleStyle} from "../component/title-style";


function Home() {

    return (
        <div className="flex flex-col items-center">
            <div className="app-home m-5 p-5 flex items-center">
                <div className="text-home mr-5 flex flex-col items-center">
                    <TitleStyle color="bg-sky-500" value="Une véritable histoire"/>
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
                    <Btn value="En savoir plus" link="/about"/>

                </div>
                <img src="/img/champ.webp" className="w-[350px] h-[300px] mt-auto"/>

            </div>

            <TitleStyle color="bg-purple-500" value="nos produits"/>

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