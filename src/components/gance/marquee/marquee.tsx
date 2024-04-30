import {component$} from "@builder.io/qwik";
import styles       from "./marquee.module.css";
import Logo10 from "~/media/pastClients/Accenture.png?jsx";
import Logo1       from "~/media/pastClients/ACF.png?jsx";
import Logo2 from "~/media/pastClients/DLN.png?jsx";
import Logo3 from "~/media/pastClients/EV Studio.png?jsx";
import Logo4 from "~/media/pastClients/Rosemary Hallgarten.png?jsx";
import Logo5 from "~/media/pastClients/GTCD.png?jsx";
import Logo6 from "~/media/pastClients/TOWN .png?jsx";
import Logo7 from "~/media/pastClients/US Dept Health.png?jsx";
import Logo8 from "~/media/pastClients/USAP.png?jsx";
import Logo9 from "~/media/pastClients/WoWE.png?jsx";
import Logo11 from "~/media/pastClients/Salesforce.png?jsx";

export default component$(() => {
  return (
      <div class={'container container-no-padding'}>
        <ul class={styles.marquee} style={{"--count": "12"}}>
          <li style={{"--index": "1"}}>
            <Logo11 alt={"salesforce logo"}/>
          </li>
          <li style={{"--index": "2"}}>
            <Logo1 alt={"Administration For Children and Families logo"}/>
          </li>
          <li style={{"--index": "3"}}>
            <Logo2 alt={"Design Leadership Network logo"}/>
          </li>
          <li style={{"--index": "4"}}>
            <Logo3 alt={"EV Studio logo"}/>
          </li>
          <li style={{"--index": "5"}}>
            <Logo4 alt={"Rosemary Hallgarten"}/>
          </li>
          <li style={{"--index": "6"}}>
            <Logo5 alt={"Golden Triangle Creative District"}/>
          </li>
          <li style={{"--index": "7"}}>
            <Logo6 alt={"Town"}/>
          </li>
          <li style={{"--index": "8"}}>
            <Logo7 alt={"US Department of Health and Human Services"}/></li>
          <li style={{"--index": "9"}}>
            <Logo8 alt={"US Anesthesia Partners"}/>
            </li>
          <li style={{"--index" : "10"}}>
            <Logo9 alt={"Women of the World Endowment"}/>
          </li>
          <li style={{"--index": "11"}}>
            <Logo10 alt={"accenture"}/>
          </li>

        </ul>
      </div>
  )
})