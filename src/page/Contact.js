import React from "react";

function Contact() {
    return (
        <div>
            <h1>Notre service consommateur à votre écoute</h1>
            <p>Les Crudettes<br />
            ZI St Barthélémy - BP 75<br />
            45110 Chateauneuf sur Loire<br />
            Téléphone : 02 38 58 78 00<br />
            Fax : 02 38 58 78 05</p>

            <h2>Besoin d'information ? Des remarques ?</h2>
            <p>Vous avez besoin d'informations sur un produit Les Crudettes ?<br />
            Vous avez une remarque à nous faire ?<br />
            Remplissez le formulaire ci-dessous.</p>

            <form>
                <label>Nom*<br />
                    <input type="text" name="nom" required />
                </label><br />
                <label>Prénom*<br />
                    <input type="text" name="prenom" required />
                </label><br />
                <label>Adresse*<br />
                    <input type="text" name="adresse" required />
                </label><br />
                <label>Code postal*<br />
                    <input type="text" name="codePostal" required />
                </label><br />
                <label>Ville*<br />
                    <input type="text" name="ville" required />
                </label><br />
                <label>E-mail*<br />
                    <input type="email" name="email" required />
                </label><br />
                <label>Téléphone*<br />
                    <input type="tel" name="telephone" required />
                </label><br />
                <label>Nom du produit et grammage (exemple : Epinard 350g)*<br />
                    <input type="text" name="produit" required />
                </label><br />
                <label>Date Limite de Consommation*<br />
                    <input type="date" name="dlc" required />
                </label><br />
                <label>N° de Lot (exemple : BH51 ou KHA)*<br />
                    <input type="text" name="lot" required />
                </label><br />
                <label>Lieu d'achat*<br />
                    <input type="text" name="lieuAchat" required />
                </label><br />
                <label>Votre demande*<br />
                    <textarea name="demande" required></textarea>
                </label><br />
                <label>Les pièces jointes ne doivent pas dépasser 4mo.<br />
                    Types de fichier supportés : pdf, jpg, png et gif.<br />
                    Pièce jointe n°1<br />
                    <input type="file" name="pieceJointe1" accept=".pdf,.jpg,.png,.gif" />
                </label><br />
                <label>Pièce jointe n°2<br />
                    <input type="file" name="pieceJointe2" accept=".pdf,.jpg,.png,.gif" />
                </label><br />
                <label>Pièce jointe n°3<br />
                    <input type="file" name="pieceJointe3" accept=".pdf,.jpg,.png,.gif" />
                </label><br />
                <label>
                    <input type="checkbox" name="accept" required />
                    En cochant cette case, j'accepte que les données que je saisis soient stockées et exploitées dans le cadre de ma demande conformément à la charte pour la protection des données.
                </label><br />
                <button type="submit">Envoyer</button>
            </form>

            <p>* Champs obligatoires</p>
            <p>Vous souhaitez postuler, rendez-vous sur notre rubrique : de vrais et beaux métiers.</p>
        </div>
    );
}

export default Contact;