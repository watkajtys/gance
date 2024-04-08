import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Hero    from "~/components/gance/hero/hero";
import Introduction from "~/components/gance/introduction/introduction";
import Marquee from "~/components/gance/marquee/marquee";

export default component$(() => {
  return (
    <>
      <Hero />
      <Introduction />
      <div class={'container container-center'}>
        <h2 class={'__center_text'}>Expanding Consciousness At Innovative Organizations</h2>
        <Marquee />
      </div>

    </>
  );
});

export const head: DocumentHead = {
  title: "Jennnifer Gance Coaching & Consulting",
  meta: [
    {
      name: "description",
      content: "Jennifer Gance supports organizations who are interested in raising and expanding their consciousness through focused personal and professional development.",
    },
  ],
};
