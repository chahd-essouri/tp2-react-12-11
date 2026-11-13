import styles from "./Destination.module.css";

import {useState} from 'react';


function Destination(props) {
    const[afficher,setAfficher]=useState(false);
    function toggleAfficher(){
        setAfficher(!afficher);
    }
    
    return (
        <div className={styles.destination}>
            <img
                className={styles.image}
                src={props.image}
                alt={props.nom}
            />
            <h2 className={styles.titre}>{props.nom}</h2>
            <h3 className={styles.pays}>{props.pays}</h3>
            <button onClick={toggleAfficher}>
                {afficher ?"Masquer":"afficher"}
            </button>
            {afficher &&<p className={styles.Description}>
                {props.description}
            </p>}
             <h3 className={styles.prix}>{props.prix} 
                DT
             </h3>
                  
        </div>
    );
}

export default Destination;