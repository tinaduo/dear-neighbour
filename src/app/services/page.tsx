import Image from "next/image";
import Head from "next/head";
import ServicesSection from "../../../components/ServicesSection";
import Marquee from "react-fast-marquee";

export default function Services() {
  return (
  <>
    <head>
      <title>Design Services – Branding, Web, and Digital Marketing | Dear Neighbour</title>
      <meta name="description" content="Discover how Dear Neighbour supports small businesses with branding, web design, and digital marketing—crafted to fit your voice and vision." />
      <meta property="og:title" content="Our Design Services | Dear Neighbour" />
      <meta property="og:description" content="From visual identity to responsive websites and digital strategy, we offer services that help small businesses grow authentically." />
      <meta property="og:image" content="/images/seo/services.png" />
      <meta property="og:type" content="website" />
    </head>
      <main>
        <section className="flex flex-col items-center">
          <h1 className="text-center justify-center text-8xl font-medium font-['Roobert']">
            What We Offer
          </h1>
          <p className="text-center text-xl font-['FavoritMono'] mt-10 mb-8 md:w-6/12 mx-16 tracking-tighter text-gray">
            Not sure where to begin? You’re not alone. We’ve broken things down
            to keep it simple — here’s how we can support your business, what
            each service means, and how it might help bring your ideas to life.
          </p>
          </section>
          <section className="flex justify-center items-center mb-20 w-screen">
          <Marquee
            className="w-fit h-fit flex items-center justify-center rounded-lg"
            speed={50}
            direction="right"
            autoFill={true}
            >
            <div className="flex flex-row gap-2.5 items-center justify-center">
              <img
                src="/images/marquee/marquee1.png"
                alt="Website Design's image"
                className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] object-cover rounded-lg pl-2.5"
              />
              <img
                src="/images/marquee/marquee2.png"
                alt="Branding's image"
                className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] object-cover rounded-lg"
              />
              <img
                src="/images/marquee/marquee3.png"
                alt="Digital Marketing's image"
                className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] object-cover rounded-lg"
              />
              <img
                src="/images/marquee/marquee4.png"
                alt="Print Materials's image"
                className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] object-cover rounded-lg"
              />
              <img
                src="/images/marquee/marquee5.png"
                alt="Website Design's image"
                className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] object-cover rounded-lg"
              />
              <img
                src="/images/marquee/marquee6.png"
                alt="Branding's image"
                className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] object-cover rounded-lg"
              />
            </div>
          </Marquee>
          </section>
        <section className="flex flex-col gap-56 mx-16 md:mx-[200px]">
          <ServicesSection
            title="Website Design"
            desc="Your website is often the first place someone learns about your business — so it should feel like you. Whether you’re just starting out or refreshing what you’ve got, we can help you build a site that’s simple, inviting, and easy to update. From single-page sites to multi-page setups, we’ll make sure your online home tells your story clearly and confidently."
            img="/images/melange/melange-product-page-desktop.png"
            sections={[
              {
                title: "Starter",
                dropdownItems: [
                  "1-page site  (4-6 sections)",
                  "Perfect for small businesses, artists, or pop-ups who need a simple, scrollable site to introduce themselves and their work. A single-page site is faster to build, easier to maintain, and a great way to share key info like your story, services, contact details, and social links all in one place.",
                ],
              },
              {
                title: "Basic",
                dropdownItems: [
                  "3-5 page site (6-12 sections)",
                  "Great for businesses ready to grow or offer more detail. A multi-page site gives you space to break up your content, like having separate pages for services, testimonials, about, and contact. Visitors can find what they need quickly and clearly. It also gives you more room to shape your story and improve SEO."
                ],
              },
            ]}
          />
          <ServicesSection
            title="Branding & Visual Identity"
            desc="Your brand is more than just a logo — it’s the feeling people get when they see your sign, visit your site, or hold your business card. We help you shape that feeling by creating a look, tone, and story that reflects who you are and what you care about. From colours and type to messaging and strategy, we’ll work together to build something you’re proud to share."
            img="/images/circles/circles-billboard.png"
            sections={[
              {
                title: "Branding",
                dropdownItems: [
                  "Brand strategy",
                  "Competitive analysis",
                  "Messaging",
                  "Logos",
                  "Full brand guide",
                ],
              },
              {
                title: "Rebranding",
                dropdownItems: [
                  "Logos",
                  "Brands look and feel (typography, colours)",
                  "Branding Guide",
                  "For new businesses or passion projects starting from scratch, we’ll help you build a brand that feels true to you—from the logo to the full visual system.",
                ],
              },
            ]}
            reverse
          />
          <ServicesSection
            title="Digital Marketing"
            desc="Getting your name out there can feel overwhelming, especially with so many new tools and platforms to choose from. We’re here to help you share your story clearly. Whether it’s social media posts, email updates, or helping folks find you on Google, we focus on what matters most: connecting with the right people in a way that feels real."
            img="/images/harmony/harmony-instagram.png"
            sections={[
              {
                title: "SEO & Analytics",
                dropdownItems: [
                  "Google Analytics",
                  "Semrush SEO Research",
                  "Email Marketing",
                  "On-page implementation",
                ],
              },
              {
                title: "Social Media & UX Copywriting",
                dropdownItems: [
                  "Branding Templates",
                  "Copywriting for post & captions",
                  "Content guidance",
                ],
              },
            ]}
          />
          <div className="flex md:flex-row flex-col gap-12 md:gap-20 items-center">
            <img
              src="/images/melange/melange-stickers.png"
              alt="Print Materials's image"
              className="md:w-[400px] md:max-h-[800px] w-full max-h-[300px] object-cover rounded-lg"
            />
            <div className="flex flex-col gap-10 justify-center">
              <h1 className="text-7xl font-medium font-['Roobert'] text-dark-gray">
                Print Materials
              </h1>
              <p className="font-['FavoritMono'] text-lg text-gray">
                Whether it’s a sign out front or a menu in someone’s hands,
                print has a way of showing up where your business lives. We
                design pieces that help bring your brand into the everyday — on
                the walls, in the windows, and wherever people connect with what
                you do. From sandwich boards to flyers to business cards, we’re
                here to help you make a lasting impression.
              </p>
              <ul className="list-disc text-dark-gray text-lg font-['FavoritMono'] pl-8">
                <li>Sandwich boards</li>
                <li>Menu rebranding</li>
                <li>Business cards</li>
                <li>Flyers & Posters</li>
                <li>Brochures & Pamphlets</li>
                <li> Vinyl signage </li>
              </ul>
            </div>
          </div>

          <section>
          <div className="flex flex-col justify-start items-center gap-8">
            <h1 className="text-center justify-center text-dark-gray text-8xl font-medium font-['Roobert']">
              Our door’s always open!
            </h1>
            <p className="text-center justify-center text-gray text-lg font-['FavoritMono'] w-8/12">
              Whether you have questions, an idea you're still working through,
              or just want to say hi — we're all ears. Reach out, and let’s chat
              about how we can bring your vision to life, one step at a time.
            </p>
            <a
              href="/contact"
              className="justify-center bg-[#1E1E1E] text-[#FAF8EF] text-xl font-['FavoritMono'] px-4 py-2 w-fit hover:bg-[#FAF8EF] hover:text-[#1E1E1E] transition-colors duration-300 rounded-md"
              rel="noopener noreferrer"
            >
              Say Hello! → 
            </a>
          </div>
        </section>
        </section>
      </main>
    </>
  );
}
