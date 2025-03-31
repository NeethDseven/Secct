import {FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare, FaYoutubeSquare} from "react-icons/fa";
import "./../styles/footer-style.css"

function Footer() {
    return (
        <div>
            <div className="flex-container items-center justify-around">
                <div className="text-footer text-center mb-4 mr-4">
                    <h5 className="text-2xl font-bold mb-4">On vous dit tout !</h5>
                    <p>Retrouvez les informations sur les qualités et caractéristiques environnementales de nos produits
                        en
                        application de la loi AGEC (Anti-gaspillage pour une économie circulaire) sur le site mutualisé
                        de
                        la
                        Société Coopérative d’Intérêt Collectif NumAlim www.numalim.fr.</p>
                </div>
                <ul className="mb-4 flex flex-col items-center mr-4 text-center">
                    <li><a href="#">Contactez-nous</a></li>
                    <li><a href="#">Recrutement</a></li>
                    <li>Mentions légales</li>
                    <li>Nos engagements</li>
                    <li>Plan du site</li>
                    <li>Cookies Charte pour la protection des données</li>
                </ul>
                <ul className="icons mt-4 mb-4">
                    <li><FaInstagramSquare/></li>
                    <li><FaFacebookSquare/></li>
                    <li><FaLinkedin/></li>
                    <li><FaTwitterSquare/></li>
                    <li><FaYoutubeSquare/></li>
                </ul>
            </div>
            <p className="text-center">© Les Crudettes - Réalisation Atmedia</p>
        </div>
    );
}

export default Footer;