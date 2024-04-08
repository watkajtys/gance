import {component$} from "@builder.io/qwik";
import styles   from "./introduction.module.css";
import Headshot from "../../../media/headshot.jpeg?jsx";
import Corp from "../../../media/corp.jpeg?jsx";

export default component$(() => {
  return (
      <div class={["container", "container-white", "container-center", styles.introduction]}>
        <h3>Jennifer Gance, ICE-PCC</h3>
        <div class={["container", "container-flex", styles.textWrap]}>
          <Headshot alt="jennifer gance" class={styles.headshot}/>
          <div class={"pull-left"}>
            <p>I support organizations who are interested in raising and expanding their consciousness through focused
              personal and professional development.</p>
            <p>All change management is truly transformational when organizations are extremely intentional about it.
              Mixing professional coaching with personal and professional development is one of the most
              transformational methodologies for supporting organizations, teams and individuals with reaching their
              maximum growth potential.</p>

            <p>Coaching, combined with a tailored professional development plan, is designed to accomplish the company’s
              desired outcomes and takes consideration to all the unique personalities involved in the engagement.</p>

            <p>This methodology creates “buy-in” and gets employees excited to engage in a truly transformational
              experience that will bring out their highest potential professionally. As a bonus, they will also
              experience amazing results in their personal lives!</p>

            <small>Jennifer is a Professional Certified Coach (PCC) & a certified Team and Leadership Coach through an
              ICF (International Coaching Federation) accredited program.</small>
          </div>
        </div>

        <a href="mailto:jennifer@jennifergance.com" class={["cta-wide", "button"]}>Get Started</a>

        <div class={'section'}>
          <h3>Corporate Sector & Organizations</h3>
          <div class={["container", "container-flex", styles.textWrap]}>
            <div>
              <p>All services are tailored or unique organizational needs:</p>
              <ul class={["pull-left margin"]}>
                <li>Short & Long-term engagements - I’ve have engagements run from 3 months to 2+ years.</li>
                <li>Targeted workshops, Retreats, Lunch & Learns - 1/2 day, week long, etc.</li>
                <li>Emotional Intelligence assessment certification (EQ-i 2.0) - Individual and 360 assessments.</li>
                <li>DRiV Assessment - provides access and actionable approaches to what drives or drains behaviors.</li>
                <li>Energy Leadership Index (ELI) -Individual and 360 assessments that measure attitudes in terms of
                  energy.
                </li>
                <li>1:1 Coaching - executives, mid-level management, new managers and personal coaching.</li>
                <li>Consulting</li>
                <li>Much more!!!</li>
              </ul>
            </div>

            <Corp alt="jennifer gance" class={styles.headshot}/>
          </div>
        </div>
      </div>
  )
});