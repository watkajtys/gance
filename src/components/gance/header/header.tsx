import {component$} from "@builder.io/qwik";
import styles       from "./header.module.css";

export default component$(() => {
  return (
      <header class={styles.header}>
        <div class={["container", styles.wrapper]}>
          <div class={styles.logo}>
            <a href="/" title="jennifer gance">
              <h1>Jennifer Gance</h1>
              <h2>coach & consultant</h2>
            </a>
          </div>
          <ul>
            <li class={styles.menu}>
              <a
                  href="/corporate"
                  target="_blank"
              >
                Corporate
              </a>
              <a
                  href="/about"
                  target="_blank"
              >
                About
              </a>
              <a
                  href="/contact"
                  target="_blank"
              >
                Contact
              </a>

              <a href="mailto:jennifer@jennifergance.com" class={styles.button}>
                Free Consultation
              </a>
            </li>
          </ul>
        </div>
      </header>
  );
});
