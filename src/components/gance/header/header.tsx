import {component$} from "@builder.io/qwik";
import styles       from "./header.module.css";
import MainLogo from "~/media/JGLogo.png?jsx";

export default component$(() => {
  return (
      <header class={styles.header}>
        <div class={["container", styles.wrapper]}>
          <div class={styles.logo}>
            <a href="/" title="jennifer gance">
              <MainLogo alt={"Jennifer Gance Coaching & Consulting"}/>
              <div class={"__hide_on_mobile"}>
                <h1>Jennifer Gance</h1>
                <h2>Coaching & Consulting</h2>
              </div>
            </a>
          </div>
          <ul>
            <li class={styles.menu}>
              <a
                  href="/about"
              >
                About
              </a>
              <a
                  href="/services"
              >
                Services
              </a>
              <a
                  href="/testimonials"
              >
                Testimonials
              </a>

              <a href="https://us4.list-manage.com/contact-form?u=c0f71ba84c0b47e885ab0cab1&form_id=9912b42e6cba6d343728cc4ced1b5e0d" class={[styles.button, "__hide_on_mobile"]}>
                Free Consultation
              </a>
            </li>
          </ul>
        </div>
      </header>
  );
});