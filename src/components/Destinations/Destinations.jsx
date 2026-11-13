import Destination from "../Destination/Destination";
import listeDestination from "../../Data/listeDestination";
import styles from"./Destinations.module.css";

function Destinations() {
 

  return (
    <section className={styles.container}>

      <h1 className={styles.title}>
        Nos destinations
      </h1>

      <div className={styles.destinations}>

        {listeDestination.map((destination) => (
          <Destination
            key={destination.id}
            image={destination.image}
            nom={destination.nom}
            pays={destination.pays}
            description={destination.description}
            prix={destination.prix}
          />
        ))}

      </div>

    </section>
  );
}

export default Destinations;
