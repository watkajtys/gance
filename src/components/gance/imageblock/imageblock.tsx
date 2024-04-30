import {component$} from "@builder.io/qwik";
import styles       from "./imageblock.module.css";
import Logo1 from "~/media/logo1.png?jsx";
import Logo2 from "~/media/logo2.png?jsx";
import Logo3 from "~/media/logo3.png?jsx";
import Logo4 from "~/media/logo4.png?jsx";
import Logo5 from "~/media/logo5.png?jsx";
import Logo6 from "~/media/logo6.jpeg?jsx";
import Logo8 from "~/media/logo8.jpeg?jsx";
import Logo9 from "~/media/logo9.jpg?jsx";

export default component$(() => {
  return (
        <div class={styles.imageblock}>
          <Logo1 alt={"ICF International Coaching Federation"}/>
          <Logo2 alt={"Professional Certified Coach"}/>
          <Logo3 alt={"IPEC Certified Professional Coach"}/>
          <Logo4 alt={"CORE Leadership Dynamics Certified"}/>
          <Logo5 alt={"OKA Certified"}/>
          <Logo6 alt={"Energy Leadership Index"}/>
          <Logo9 alt={"EQI Certified"}/>
          <Logo8 alt={"EQ360 Certified"}/>
        </div>
  )
});