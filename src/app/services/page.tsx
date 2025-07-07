import Image from "next/image";
import Footer from "../../../components/Footer";
import ServicesSection from "../../../components/ServicesSection";

export default function Services() {
  return (
    <>
      <main>
        <section className="flex flex-col items-center">
          <h1 className="text-center justify-center text-8xl font-medium font-['Roobert']">
            What We Offer
          </h1>
          <p className="text-center text-xl font-['FavoritMono'] mt-10 mb-8 max-w-8/12 text-gray">
            Not sure where to begin? You’re not alone. We’ve broken things down
            to keep it simple — here’s how we can support your business, what
            each service means, and how it might help bring your ideas to life.
          </p>
          <Image
            src="/images/placeholder/service-hero.webp"
            alt="Neighbourhood Logo"
            width={1000}
            height={400}
            className="mx-auto mt-8"
          />
        </section>
        <section className="flex flex-col gap-56">
          <ServicesSection
            title="Website Design"
            desc="Your website is often the first place someone learns about your business — so it should feel like you. Whether you’re just starting out or refreshing what you’ve got, we can help you build a site that’s simple, inviting, and easy to update. From single-page sites to multi-page setups, we’ll make sure your online home tells your story clearly and confidently."
            img="/images/placeholder/image.png"
            sections={[
              {
                title: "Starter",
                dropdownItems: ["ILALKSJDLALKDJSKALDA", "ASLDAHDASKHKAHDSJK"],
              },
              {
                title: "Basic",
                dropdownItems: ["ILALKSJDLALKDJSKALDA", "ASLDAHDASKHKAHDSJK"],
              },
            ]}
          />
          <ServicesSection
            title="Branding & Visual Identity"
            desc="Your brand is more than just a logo — it’s the feeling people get when they see your sign, visit your site, or hold your business card. We help you shape that feeling by creating a look, tone, and story that reflects who you are and what you care about. From colours and type to messaging and strategy, we’ll work together to build something you’re proud to share."
            img="/images/placeholder/image.png"
            sections={[
              {
                title: "branding",
                dropdownItems: ["ILALKSJDLALKDJSKALDA", "ASLDAHDASKHKAHDSJK"],
              },
              {
                title: "Rebranding",
                dropdownItems: ["ILALKSJDLALKDJSKALDA", "ASLDAHDASKHKAHDSJK"],
              },
            ]}
            reverse
          />
        </section>
      </main>
      <Footer />
    </>
  );
}
