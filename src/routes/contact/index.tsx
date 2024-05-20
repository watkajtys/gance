import {component$}         from "@builder.io/qwik";
import {DocumentHead, zod$, z} from "@builder.io/qwik-city";
import Hero                 from "~/components/gance/hero/hero";
import {routeAction$, Form}      from "@builder.io/qwik-city";


export const useContactSubmit = routeAction$(

})

export default component$(() => {
  const action= useContactSubmit();
  return (
    <>
      <Hero text={'Contact Jennifer'}/>
      <div class={["container", "container-white", "container-center"]}>
        <Form action={action}>
          <label for="full_name">Full Name</label>
          <input type="text" name="full_name"/>
          <label for="email">Email</label>
          <input type="email" name="email" required/>
          <label for="phone">Phone</label>
          <input type="tel" name="phone"/>

          <legend>I'm Interested In</legend>
          <div>
            <input type="checkbox" id="corporate" name="interests[]" value="corporate"/>
            <label for="corporate">Corporate Coaching</label>
          </div>
          <div>
            <input type="checkbox" id="corporateProgram" name="interests[]" value="corporateProgram"/>
            <label for="corporateProgram">Corporate Coaching Program</label>
          </div>
          <div>
            <input type="checkbox" id="individual" name="interests[]" value="individual"/>
            <label for="individual">Individual Coaching</label>
          </div>

          <label for="message">Message</label>
          <textarea name="message" id="message" rows={10} cols={30}></textarea>

          <button type="submit">Message</button>
        </Form>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Contact Jennifer Gance",
}