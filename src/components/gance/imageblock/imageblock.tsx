import {component$} from "@builder.io/qwik";
import styles       from "./imageblock.module.css";
import Logo1 from "~/media/logo1.png?jsx";
import Logo2 from "~/media/logo2.png?jsx";
import Logo3 from "~/media/logo3.png?jsx";
import Logo4 from "~/media/logo4.png?jsx";
import Logo5 from "~/media/logo5.png?jsx";
import Logo6 from "~/media/logo6.jpeg?jsx";
import Logo7 from "~/media/logo7.png?jsx";
import Logo8 from "~/media/logo8.jpeg?jsx";
import Logo9 from "~/media/logo9.jpg?jsx";

export default component$(() => {
  return (
        <div class={styles.imageblock}>
          <Logo1/>
          <Logo2/>
          <Logo3/>
          <Logo4/>
          <Logo5/>
          <Logo6/>
          <Logo7/>
          <Logo9/>
          <Logo8/>
        </div>
  )
});