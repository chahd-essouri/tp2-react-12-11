import { useState } from "react";
import styles from "./Reservation.module.css";

function Formulaire (){
    const [nom,setNom]=useState("");
    const [email,setEmail]=useState("");
    const [telephone,setTelephone]=useState("");
    const [reservation,setReservation]=useState(null);
    const [error,setError]=useState({});
    const [ShowPopup,setShowPopup]=useState(false);

    function handleSubmit (e){
        e.preventDefault(); //pour arreter le fonctionnement par defaut de submit
        
        setNom("");
        setEmail("");
        setTelephone("");
    }
    function effacerErreur (champ){
        setError((prev) => {
            const nouvelleError = {...prev};
            delete nouvelleError[champ];
            return nouvelleError;
        })
    }

    function validerFormulaire (){
        let errorTemp = {};
        if (!nom.trim()){
            errorTemp.nom = "Le nom est requis";
        
    }


    function Reservation(){
        return (
            <section className={styles.container}>
                <h2> Reservez votre voyage ! </h2>
                <form onSubmit={handleSubmit} noValidate> // noValidate pour désactiver la validation par défaut du navigateur
                    <label> Nom et prénom: </label>
                    <input
                    type ="text"
                    className={error.nom ? styles.inputError : ""}
                    value={nom}
                    onChange={(e) => {
                        setNom (e.target.value);
                        effacerErreur("nom");
                        }}
                    placeholder="Entrez votre nom et prénom"
                    />
                    {
                        error.nom && (
                            <span className={styles.errorMessage}> {error.nom} </span>
                        )
                    }
                    
                    <br></br>

                    
                </form>
            </section>
        );
    }
}}