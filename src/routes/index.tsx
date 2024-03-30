import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Counter from "~/components/gance/counter/counter";
import Hero    from "~/components/gance/hero/hero";
import Infobox from "~/components/gance/infobox/infobox";
import Starter from "~/components/gance/next-steps/next-steps";
import Introduction from "~/components/gance/introduction/introduction";

export default component$(() => {
  return (
    <>
      <Hero />
      <Introduction />
    </>
  );
});

export const head: DocumentHead = {
  title: "Jennifer Gance | Coaching for Leadership, Teams & Individuals",
  meta: [
    {
      name: "description",
      content: "Jennifer Gance supports organizations who are interested in raising and expanding their consciousness through focused personal and professional development.",
    },
  ],
};
