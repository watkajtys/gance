import {component$} from "@builder.io/qwik";
import styles       from "./hero.module.css";
import CityBG       from "../../../media/citybg.png?jsx";

export default component$(() => {
  return (
      <div class={[styles.hero]}>
        <CityBG class={styles["hero-image"]} alt="Image thunder"/>
        <div class={styles["hero-text"]}>
          <h1 class={styles.shadow}>
            Life and Leadership
          </h1>
        </div>
      </div>
  );
});
