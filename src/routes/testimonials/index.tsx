import {component$}        from "@builder.io/qwik";
import type {DocumentHead} from "@builder.io/qwik-city";
import Hero from "~/components/gance/hero/hero";
import Testimonial from "~/components/gance/testimonial/testimonial";
import Stickynoteswide from "../../media/stickynoteswide.jpg?jsx";
import styles from "./testimonials.module.css";
import Twoguys from "../../media/twoguys.jpg?jsx";
import Womendress from "../../media/womendress.jpg?jsx";

export default component$(() => {
  return (
    <>
      <Hero text={'Testimonials'}/>
      <div class={['container', styles.grid]}>
        <Testimonial text={"Jennifer, you are absolutely part of this higher power I talked about. You appeared in my life exactly at the time I needed you"} caption={"- Maria, Accenture"}/>
        <Testimonial text={"Jennifer, thank you for all your guidance over the last 5 ½ months! You have left me with many nuggests of wisdom that I will be able to use not only in my professional life but also my personal life"} caption={"Carmen, Accenture"}/>
        <Stickynoteswide class={styles.fullWidthImage} alt={"Jennifer Gance Corporate Training"}/>
        <Testimonial text={"Jennifer is fantastic! So great at driving conversation and digging deeper. She touches on points/learnings we have discussed in prior conversations and she is so thoughtful about the action plans. THANK YOU!"} caption={"Maria, Accenture"}/>
        <Testimonial text={"Jennifer is a powerhouse coach and consultant. If you are looking for a coach to partner with you to create the space you need to sift through all of the fluff and discover your true power and purpose, look no further than Jennifer. With the energy to match all levels of executive needs, Jennifer perfectly intuits your underlying needs and inspires you to reach further than you ever imagined possible."} caption={"Ashlee : Leadership Development Strategist | Training Solutions Architect "}/>
        <Testimonial text={"I wish we had more time with Jennifer. Her approach to our team training was extremely helpful. She listened to our frustrations/issues and worked with us to develop an action plan. I’m excited to see our hard work, and utilize the new strategies, to drive our team to the highest performing level."} caption={"Director of Scheduling for US Anesthesia Partners, Denver"}/>
        <Testimonial text={"Jennifer has been an incredible asset to us in what she has done for our team and our professional development"} caption={"Vice President, Exclusive Designer Showrooms, Denver & Scottsdale."}/>
        <Twoguys class={styles.fullWidthImage} alt={"Jenn Gance coaching success"}/>
        <Testimonial text={"I really enjoyed having these trainings. Jennifer, you helped create a space where we could express our feelings and openly discuss issues within the department and training. I do feel more people could have spoken up, including me, but it was a great start for us"} caption={"Employee, US Anesthesia Partners, Denver"}/>
        <Testimonial text={"I feel the trainings were productive and engaging once we were able to get back into the office. Jennifer did a great job trying to pull the team together remotely and keep action items moving forward"} caption={"Employee, US Anesthesia Partners, Denver"}/>
        <Womendress class={styles.fullWidthImage} alt={"Corporate Training and coaching with Jenn Gance"}/>
        <Testimonial text={"Thank you for another great session and this follow-up.  Our time with you is invaluable and I am certain it is impacting our lives professionally and personally in an everlasting way"} caption={"Manager, NYC Showroom"}/>
        <Testimonial text={"Jennifer is insightful and non-judgmental. She skillfully asked pointed questions, guiding me through internal conflict enabling me to take action, where I was previously blocked and unwilling."} caption={"Shelley Z., Retail Professional"}/>
        <Testimonial text={"“Recently I found out that the firm I have worked for 30 years was being purchased. It was a shock, and I reached out to Jennifer. She helped me more that I can say. She was instrumental as I explored what I wanted to do next in my life. Mostly, she was supportive in a time that I really needed the positive reinforcement"} caption={"Peg M., Investment Banking"}/>
        <Testimonial text={"Jennifer I am so thankful to you for taking the time to do this today! I’m happy I reached out and from the bottom of my heart thank you for the opportunity. I feel a new sense of encouragement, community and connection"} caption={"Melissa L."}/>
        <Testimonial text={"Thank you so much for doing this [2022 Full Expression Retreat] retreat! It was so needed in the times we are in! I loved all of the exercises you had during this, especially the “Keep, Let go and Learned” exercise! The whole experience really helped me to reflect on how much I have grown and that I WILL continue to do so no matter what life throws at me! Thank you for being you, Jenn! With much love and gratitude!"} caption={"Sean"}/>
        <Testimonial text={"Working with Jenn has been a truly special experience. I found myself at a transition point and came to Jenn with everything I was feeling confused and weighed down by. With each session we began to delve deeper into the core of what’s next for my life. What I appreciated the most about our time together was what an incredible, judgement-free listener she is. She always maintained an open mind and held a soulful and gentle space for me to explore what it was I most deeply wanted. She asked meaningful questions that helped illuminate my deepest emotions. I felt understood and like I had room to embrace more of who I AM and who I’m BECOMING. I am forever grateful for my coaching sessions with Jenn"} caption={"Kat, Freelance Musician & Entrepreneur"}/>
        <Testimonial text={"I hired Jennifer to consult with me in preparation for a job interview, after I had been passed over for several jobs I had interviewed for. Jennifer performed a mock interview and provided me with some really helpful feedback regarding some of my responses and interview style. Jennifer also had helpful tips to make my resume more targeted and professional. Jennifer helped me to see some of my challenges as strengths, and helped me re-frame some extended time away from work to care for family in a way that made it more appealing to employers. I was offered both positions I subsequently applied for, and feel that Jennifer’s feedback had a huge impact on my performance at these interviews."} caption={"Milton B."}/>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Jennifer Gance Coaching & Consulting Testimonials",
  meta: [
    {
      name: "description",
      content: "Jennifer Gance supports organizations who are interested in raising and expanding their consciousness through focused personal and professional development.",
    },
  ],
}