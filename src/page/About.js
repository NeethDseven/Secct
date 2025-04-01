import React from 'react';
import Header from "../component/Header";

function About() {
    return (
        <div className="App">
            <Header className="App-header"/>
            <img src="/img/imageBaniere.webp" alt="Banière" className="w-full h-[500px]"/>
        <h1>À propos de nous</h1>
        <p><span> Tout a commencé en  1984 </span> avec la création du premier site de production Les Crudettes à
            Cavaillon.
                À partir de cette date on vous passe les détails, mais en gros ce fut une gentille et belle ascension, doucement mais sûrement, parce qu’une entreprise aussi ça se cultive et que ça a besoin de temps et d’investissement pour germer, pousser et puis s’élever.</p>
            <p><span> Depuis 2013 </span>, nous avons rejoint le groupe LSDH, avec lequel nous partageons la vision : Passion, Ambition et Humanité. Un élan supplémentaire à notre développement.
            </p>
            <p>Alors <span> 37 ans plus tard </span> nous voilà là. Un peu fiers mais pas trop, juste ce qu’il faut. Quand on se retourne, on est content du chemin parcouru et des terres labourées. Mais comme ce n’est pas dans cette direction-là qu’on va (en arrière), on continue de regarder devant, direction le plaisir lié aux innovations et à la création. Et c’est très excitant. Vraiment.
            </p>
            <p>En fait <span>-si vous voulez tout savoir-</span> on s’est fixé comme mission de vous proposer ce qu’il y a de meilleur et de plus cru. Des salades mais aussi des crudités donc. Et comme on aime bien varier les plaisirs et innover, notre offre s’enrichit de plus en plus<span>pour s’adapter à vos vies autant qu’à vos envies</span>. Aujourd’hui des salades snacking, des soupes froides et plein de petits trucs en plus pour rendre vos salades sexy en diable. Et demain des jus plus frais que frais, des mélanges de saveurs audacieux et délicieux. Bref, on a hâte de vous présenter ça !</p>
        </div>
    );
}

export default About;