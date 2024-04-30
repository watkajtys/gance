import {component$} from "@builder.io/qwik";
import type {DocumentHead} from "@builder.io/qwik-city";
import styles from "~/components/gance/introduction/introduction.module.css";
import Headshot from "../../media/Gance-1a.jpg?jsx";
import Panel from "../../media/panel.png?jsx";

export default component$(() => {
  return (
      <>
        <div class={["container", "container-white", "container-center", styles.introduction]}>
          <h3>Meet Jennifer</h3>
          <div class={["container", "container-flex", "container-no-horizontal-padding", styles.textWrap]}>
            <Headshot alt="jennifer gance" class={styles.headshot}/>
            <div class={["pull-left", "shared-container-60"]}>
              <p>I have a strong desire to support conscious, mindful organizations as well as individuals who want a
                deeper way of conducting business and living their highest lives.</p>
              <p>I held many leadership roles in various industries through the years, and my employees loved to work
                for me! Notable industries I’ve worked in are insurance, investment banking, commercial real estate and
                corporate finance.</p>

              <p>People in all levels of the organizations throughout my career would use my office as a revolving door
                seeking insights and support surrounding their professional and personal development. They would say,
                “you are easy to talk to.” I also held everything they confided within strict confidentiality.</p>

              <p>That was when <u>I KNEW</u> I could bring more to others by creating my own company and bringing my skills to
                a variety of organizations and individuals around the globe. Since August of 2019, my work with
                organizations has been truly transformational. My clients have cited they experience a more positive,
                efficient workplace, happier clients, higher quality professional relationships, an increase in revenues
                and a more relaxed life in general!</p>

            </div>
          </div>

          <div>
            <h3 class={'margin'}>Credentials, Assessments, Education & Featured Publications:</h3>
            <ul class={["pull-left"]}>
              <li><p><b>Professional Certified Coach (PCC)</b> - Global International Coaching Federation (ICF)</p></li>
              <li><p><b>Certified Team and Leadership Coach</b> - Accredited through Global (ICF)</p></li>
              <li><p><b>Certified Professional Coach</b> - Institute of Professional Excellence in Coaching (iPEC).</p>
              </li>
              <li><p><b>Emotional Intelligence Practitioner</b> and the EQ-i 2.0 assessments from Multi-Healthy Systems,
                Inc. </p></li>
              <li><p><b>Published in Women of Denver Magazine</b>. <a href="/Women of Denver Article Publication 5.22.2020pg 1.pdf" target={"_blank"}>Embodiment and Magnetizing in Business</a></p>
              </li>
              <li><p><b>Bachelor of Business Management and Master of Accountancy</b>, both from Metropolitan State
                University of Denver</p></li>
            </ul>

            <Panel alt={"Jennifer Gance at Denver Startup Week"} class={styles.fullWidthImage}/>
          </div>
          <div class={'spacer'}></div>
          <a href="mailto:jennifer@jennifergance.com" class={["cta-wide", "button"]}>Email Me</a>

        </div>
      </>
  );
});

export const head: DocumentHead = {
  title: "About",
  meta : [
    {
      name   : "description",
      content: "Jennifer Gance is a Professional Certified Coach (PCC) & a certified Team and Leadership Coach through an ICF (International Coaching Federation) accredited program. She supports organizations who are interested in raising and expanding their consciousness through focused personal and professional development",
    },
  ],
};