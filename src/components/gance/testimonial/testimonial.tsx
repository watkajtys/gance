import {component$} from "@builder.io/qwik";
import styles       from "./testimonial.module.css";

interface TestimonialProps {
  text: string;
  caption: string;
}

export default component$<TestimonialProps>((props) => {
  return (
      <div>
        <div class={styles.testimonial}>
          <h4 class={styles.text}>
            {props.text}
          </h4>
          <p>
            <small>{props.caption}</small>
          </p>
        </div>
      </div>
  );
});