import {component$}   from "@builder.io/qwik";
import type {DocumentHead} from "@builder.io/qwik-city";
import styles from "~/components/gance/introduction/introduction.module.css";
import Hero from "~/components/gance/hero/hero";

export default component$(() => {
  return (
      <>
        <Hero text={'Services'}/>
          <div class={["container", "container-white", styles.introduction]}>
            <div class={["container", "container-no-padding", styles.textWrap]}>
              <div>
                <h3 class={'margin'}>1:1 Coaching</h3>
                <p>This is a service I provide for those looking for support in their own personal development.</p>
                <p>Women and men of all ages exploring professional and or personal development (executive, leadership, career, spiritual, relationships, other). I support individuals in whatever their journey is calling for.</p>
                <p><small>*All 1:1 engagements are offered a sliding scale. No one turned away for lack of funds.</small></p>
              </div>

              <div>
                <h3 class={'margin'}>Life Coaching & Spiritual Work</h3>
                <p>We are not in control. When we try to control, we are creating an illusion of control. That is it. And when it doesn’t go our way, we suffer. Our attachments lead to controlling, and controlling leads to expectations. All ultimately lead to suffering.</p>
                <p>I know that sounds harsh but it is true! There is a better and easier way to live though. It is truly living our lives from the inside out. </p>
              </div>

              <div>
                <h3 class={'margin'}>Executive & Leadership Coaching</h3>
                <p>My 1:1 work is direct, effective and intense. It is only for people who are really ready. As a leader, you not only have a certain level of intellect, but possess exquisite emotional maturity. True leadership is rising to the occasion when times are rough, not just when things are going good. This takes a level of self-care and radical responsibility. Let’s work together to build your executive and leadership muscles for these times!
                </p>
              </div>

              <div>
                <h3 class={'margin'}>Career Coaching</h3>
                <ul>
                  <li><p>Career growth & transitions</p></li>
                  <li><p>Resume building</p></li>
                  <li><p>Job Search</p></li>
                  <li><p>Interview preparation/mock interview</p></li>
                  <li><p>Burn out and well-being</p></li>
                </ul>
                <p>Getting right with who we are from the inside sets us up for “right” action that can feel effortless. Looking at our blind spots and closing our gaps will create a shift in your being, then the outer world absolutely HAS to shift! This is what some may call, “being in the flow.”</p>
              </div>

              <div>
                <h3 class={'margin'}>Organizational Clientele & Industry Expertise</h3>
                <p><b>Extended professional development engagements</b> - 3-months to 3-years+. All services are tailored the unique organizational needs:</p>
                <ul>
                  <li><p>Leadership and team coaching (1:1 and/or group)</p></li>
                  <li><p>Corporate Training</p></li>
                  <li><p>Tailored Learning and development</p></li>
                  <li><p>Consulting</p></li>
                  <li><p>And much more...</p></li>
                </ul>

                <ul>
                  <li><p>Healthcare</p></li>
                  <li><p>Creative Districts</p></li>
                  <li><p>Professional Showrooms for high-end design</p></li>
                  <li><p>Vendors specializing in high-end designing</p></li>
                  <li><p>Non-profits</p></li>
                  <li><p>Architecture and Engineering</p></li>
                  <li><p>Private equity firms</p></li>
                  <li><p>Investment banking</p></li>
                  <li><p>Commercial real estate (multi-family, affordable housing, LIHTC)</p></li>
                  <li><p>Corporate finance</p></li>
                  <li><p>Bond market & corporate trust services</p></li>
                  <li><p>Legal</p></li>
                  <li><p>Capital transactions</p></li>
                  <li><p>Underwriting</p></li>
                  <li><p>Insurance</p></li>
                </ul>
              </div>

              <div>
                <h3 class={'margin'}><b>Assessment Certifications</b></h3>
                <ul>
                  <li><p><b>Emotional Intelligence (EQ-i 2.0)</b> - Measures individual and 360 assessments.</p></li>
                  <li><p><b>DRiV Assessment </b> - provides access and actionable approaches to what drives or drains behaviors.</p></li>
                  <li><p><b>Energy Leadership Index (ELI)</b> - Individual and 360 assessments that measure attitudes in terms of energy.</p></li>
                  <li><p><b>Enneagram</b> - The Creative Consciousness Foundation. Course study 2022-2023: ‘The Enneagram of Awakening.’</p></li>
                  <li><p><b>DRiv assessment </b> - certification administered through OKA; identifies what drives and drains individuals.</p></li>
                </ul>

              </div>
            </div>

            <div class={'spacer'}></div>
            <a href="/public/Establishing%20Buy-In%20for%20Professional%20Development%20and%20Coaching.pdf" class={["cta-wide", "button"]} target={'_blank'}>Get your free guide to Establishing Buy-In with your Organization and Team for Professional Development!</a>

          </div>

      </>
  )
})

export const head: DocumentHead = {
  title: "Jennifer Gance Coaching & Consulting",
  meta: [
    {
      name: "description",
      content: "Jennifer Gance supports organizations who are interested in raising and expanding their consciousness through focused personal and professional development.",
    },
  ],
}