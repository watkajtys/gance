import {component$} from "@builder.io/qwik";
import styles       from "./hero.module.css";
import CityBG       from "../../../media/citybg.png?jsx";

export default component$(() => {
  return (
      <div class={[styles.hero]}>
        <CityBG class={styles["hero-image"]} alt="Image thunder"/>
        <div class={styles["hero-text"]}>
          <h1 class={styles.shadow}>
            Leadership, Teams & Individuals
          </h1>
          <p>Tailored Learning and Development</p>
        </div>
      </div>
  );
});
