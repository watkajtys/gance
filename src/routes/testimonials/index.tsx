import {component$}        from "@builder.io/qwik";
import type {DocumentHead} from "@builder.io/qwik-city";
import Hero from "~/components/gance/hero/hero";

export default component$(() => {
  return (
    <>
      <Hero text={'Testimonials'}/>
    </>
  );
});

export const head: DocumentHead = {
  title: "Jennnifer Gance Coaching & Consulting Testimonials",
  meta: [
    {
      name: "description",
      content: "Jennifer Gance supports organizations who are interested in raising and expanding their consciousness through focused personal and professional development.",
    },
  ],
}