import {component$} from "@builder.io/qwik";
import styles       from "./marquee.module.css";
import Logo1       from "~/media/pastClients/ACF.png?jsx";
import Logo2 from "~/media/pastClients/DLN.png?jsx";
import Logo3 from "~/media/pastClients/EV Studio.png?jsx";
import Logo4 from "~/media/pastClients/Rosemary Hallgarten.png?jsx";
import Logo5 from "~/media/pastClients/GTCD.png?jsx";
import Logo6 from "~/media/pastClients/TOWN .png?jsx";
import Logo7 from "~/media/pastClients/US Dept Health.png?jsx";
import Logo8 from "~/media/pastClients/USAP.png?jsx";
import Logo9 from "~/media/pastClients/WoWE.png?jsx";

export default component$(() => {
  return (
      <div class={'container'}>
        <ul class={styles.marquee} style={{"--count": "10"}}>
          <li style={{"--index": "1"}}>
            <Logo1/>
          </li>
          <li style={{"--index": "2"}}>
            <Logo2/>
          </li>
          <li style={{"--index": "3"}}>
            <Logo3/>
          </li>
          <li style={{"--index": "4"}}>
            <Logo4/>
          </li>
          <li style={{"--index": "5"}}>
            <Logo5/>
          </li>
          <li style={{"--index": "6"}}>
            <Logo6/>
          </li>
          <li style={{"--index": "7"}}>
            <Logo7/></li>
          <li style={{"--index": "8"}}>
            <Logo8/>
            </li>
          <li style={{"--index" : "9"}}>
            <Logo9/>
          </li>

        </ul>
      </div>
  )
})