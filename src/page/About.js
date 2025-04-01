import React from 'react';
import {TitleStyle} from "../component/title-style";
import "../styles/about-style.css"


function About() {
    return (
        <div className="page-about flex flex-col items-center mt-8">
            <TitleStyle value="une veritable histoire" color="bg-sky-500"/>

            <div className="test mb-4 mt-4">
                <div>
                    <p><span> Tout a commencé en 1984 </span> avec la création du premier site de production Les
                        Crudettes à
                        Cavaillon. À partir de cette date on vous passe les détails, mais en gros ce fut une gentille et
                        belle ascension, doucement mais sûrement, parce qu’une entreprise aussi ça se cultive et que ça
                        a
                        besoin de temps et d’investissement pour germer, pousser et puis s’élever.</p>
                    <p><span> Depuis 2013 </span>, nous avons rejoint le groupe LSDH, avec lequel nous partageons la
                        vision
                        : Passion, Ambition et Humanité. Un élan supplémentaire à notre développement.</p>
                    <p>Alors <span> 37 ans plus tard </span> nous voilà là. Un peu fiers mais pas trop, juste ce qu’il
                        faut.
                        Quand on se retourne, on est content du chemin parcouru et des terres labourées. Mais comme ce
                        n’est
                        pas dans cette direction-là qu’on va (en arrière), on continue de regarder devant, direction le
                        plaisir lié aux innovations et à la création. Et c’est très excitant. Vraiment.</p>
                    <p>En fait <span>si vous voulez tout savoir</span> on s’est fixé comme mission de vous proposer ce
                        qu’il y a de meilleur et de plus cru. Des salades mais aussi des crudités donc. Et comme on aime
                        bien varier les plaisirs et innover, notre offre s’enrichit de plus en plus <span>pour s’adapter à vos vies autant qu’à vos envies</span>.
                        Aujourd’hui des salades snacking, des soupes froides et plein de petits trucs en plus pour
                        rendre
                        vos salades sexy en diable. Et demain des jus plus frais que frais, des mélanges de saveurs
                        audacieux et délicieux. Bref, on a hâte de vous présenter ça !</p>
                    <p>D’abord, parce que Les Crudettes proposent des salades vertes et des salades composées fraîches
                        et
                        prêtes à manger, tous les jours de l’année, à tous les consommateurs en France (et aussi des
                        crudités, des fruits, des herbes aromatiques, des jus de fruits, des soupes… toujours
                        frais).</p>
                    <p>Ensuite, parce qu’il est nécessaire de savoir dire les choses et les écouter, de façon
                        simple, directe, sincère et cohérente pour réussir ensemble. Notre travail
                        d’entrepreneur, c’est de construire un projet partagé avec les équipes internes, les
                        clients, les producteurs, avec pour objectif la création de valeur et le mieux-vivre
                        ensemble. Dit autrement, nous devons avoir les pieds sur terre, le cœur à l’ouvrage et
                        la tête dans les étoiles !</p>
                    <p>Enfin, parce que nous choisissons de regarder la réalité en face. Notre
                        responsabilité fondamentale en tant qu’entreprise agroalimentaire, c’est de
                        participer à créer le futur auquel nous aspirons collectivement, et de relever les
                        défis de la nutrition, de la santé, de l’environnement, de l’aménagement du
                        territoire, avec Ambition, Passion et Humanité.</p>
                </div>
                <img className="img1" src="/img/image(2).webp"/>
            </div>

            <TitleStyle value="nos salade s'engage" color="bg-lime-500"/>

            <div className="test mt-5">

                <video controls>
                    <source
                        src="https://www.lescrudettes.com/squelettes/interface2/nos-salades%20s-engagent.mp4"
                        type="video/mp4"
                    />
                    Votre navigateur ne supporte pas la lecture de vidéos.
                </video>
                <div>
                    <p>Derrière cette belle enseigne nous sommes plus de 600 personnes engagées pour vous
                        offrir ce qu’il y a de mieux. Parce-que ça a l’air simple comme ça de faire des
                        salades en sachet et autres crudités mais en fait c’est un peu plus complexe que ça.
                        Derrière la fraicheur de ces sachets se cache un processus complexe et maitrisé et
                        une qualité nutritionnelle indiscutablement indiscutable.</p>
                    <p>Depuis 37 ans Les Crudettes travaillent en partenariat avec des producteurs experts
                        de la terre, implantés au plus proche de nos usines selon les saisons afin de
                        disposer toute l’année d’une qualité irréprochable. Ce qui est important c’est que
                        ces mêmes producteurs travaillent dans le respect d’un cahier des charges rigoureux
                        « Filière Les Crudettes », et ce pour satisfaire l’exigence de vous, nos chers
                        clients.</p>

                </div>
            </div>
            <div className="test">
                <div>
                    <p>Cet engagement limite l’utilisation des fertilisants et des produits de traitements.
                        Grâce à des analyses fréquentes vous avez l’assurance que les salades que nous vous
                        proposons sont de qualité et cultivées selon des pratiques saines. Nous maitrisons
                        également la traçabilité de la parcelle au sachet grâce à une organisation
                        rigoureuse. Ensuite nous garantissons le maintien des salades au froid de la
                        cueillette jusqu’à votre magasin. Parce-que si la chaine du froid est coupée, tous
                        nos beaux efforts n’auront servis à rien !</p>
                    <p>Des questions vous en avez sur le procédé de fabrication. C'est normal. Nos usines
                        reproduisent à grande échelle les gestes habituels effectués par les humains. La
                        salade est donc d’abord épluchée manuellement (et pas avec les pieds !), c’est là
                        qu’on ne conserve que le meilleur. Ensuite les feuilles sont coupées ou laissées
                        entières selon leur variété, lavées, puis essorées. Intervient ensuite un procédé de
                        lavage breveté par Les Crudettes afin de laver les salades efficacement tout en
                        respectant leur fragilité. Le froid est leur seul moyen de conservation.</p>
                </div>
                <img className="img2" src="/img/image_1_.webp"/>
            </div>
            <div className="test test2">
                <img className="img3" src="/img/image-11.webp"/>
            <div>
                <p>Last but not least, <span>nos déchets verts sont recyclés</span> dans l’alimentation des animaux et dans le
                    compostage. Nous recyclons également nos emballages.</p>
                <em>(Vous aussi, pensez à trier vos emballages - nos emballages / produits peuvent faire l’objet d’une
                    consigne de tri. Pour en savoir plus : www.consignesdetri.fr.)</em>
                <p>Et (point important), nous apportons un soin particulier à l’eau que nous utilisons pour laver nos
                    légumes en l’économisant et en la restituant au milieu naturel.</p>
                <p>Voilà, vous savez tout !</p>
            </div>
            </div>
        </div>
    );
}

export default About;