import { component$ }          from "@builder.io/qwik";
import styles                  from "./footer.module.css";

export default component$(() => {

  return (
    <footer>
      <div class="container">
        <a href="https://www.izk.co/" target="_blank" class={styles.anchor}>
          <span>Made @ IZK</span>
          </a>
      </div>
    </footer>
  );
});
