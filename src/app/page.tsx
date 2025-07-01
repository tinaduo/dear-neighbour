import Image from "next/image";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="flex flex-col mx-4 items-center justify-center min-h-screen space-y-40 my-16 2xl:mx-[195px]">
        <section>
          <Image
            src="/images/placeholder/mobile-hero.png"
            alt="Neighbourhood Logo"
            width={300}
            height={100}
            className="mx-auto mb-8"
          />
          <h1 className="text-center justify-center text-6xl font-medium font-['Roobert']">
            Dear Neighbour,
          </h1>
          <p className="text-center text-lg font-['FavoritMono'] mt-4 mb-8">
            You’ve got a story worth sharing and we’re here to help you tell it
            in your own way.
            <br />
            <br />
            We bring branding, design, and a little local magic to small
            Canadian businesses who’ve got something to say.
          </p>
        </section>

        {/* services section */}
        <section className="flex flex-col 2xl:flex-row-reverse 2xl:justify-between 2xl:items-center">
          <img
            className="w-[585px] h-[600px]"
            src="https://placehold.co/585x600"
          />
          <div className="2xl:pr-15">
          <h2 className="self-stretch justify-center text-[#1E1E1E] text-6xl font-medium font-['Roobert']">
            What We Offer
          </h2>
          <div className="flex flex-wrap justify-left gap-2 pt-4 w-8/12">
            <div className="p-2 outline-1 outline-[#1E1E1E] outline-dashed justify-center items-center w-fit">
              <p className="text-center justify-center text-[#1E1E1E] text-sm font-normal font-['FavoritMono'] uppercase">
                Website Design
              </p>
            </div>
            <div className="p-2 outline-1 outline-[#1E1E1E] outline-dashed justify-center items-center w-fit">
              <p className="text-center justify-center text-[#1E1E1E] text-sm font-normal font-['FavoritMono'] uppercase">
                Branding/Visual Identity
              </p>
            </div>
            <div className="p-2 outline-1 outline-[#1E1E1E] outline-dashed justify-center items-center w-fit">
              <p className="text-center justify-center text-[#1E1E1E] text-sm font-normal font-['FavoritMono'] uppercase">
                Digital Marketing
              </p>
            </div>
            <div className="p-2 outline-1 outline-[#1E1E1E] outline-dashed justify-center items-center w-fit">
              <p className="text-center justify-center text-[#1E1E1E] text-sm font-normal font-['FavoritMono'] uppercase">
                Print Collateral
              </p>
            </div>
          </div>
          <p className="text-lg font-['FavoritMono'] mt-4 mb-8">
            Design that feels thoughtful. Support that feels personal. A little
            guidance to help your business look and feel more like you.
            <br />
            <br />
            Whether it’s a website, a logo, a sign out front, or a campaign to
            get the word out we’re here to make the creative side feel a little
            less overwhelming, and a lot more possible.
          </p>
          <a
            href="/"
            className="justify-center bg-[#1E1E1E] text-[#FAF8EF] text-xl uppercase font-['FavoritMono'] px-4 py-2 w-fit hover:bg-[#FAF8EF] hover:text-[#1E1E1E] transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More →
          </a>
          </div>
        </section>

        {/* work section */}
        <section className="flex flex-col space-y-24">
          <div className="flex flex-col md:flex-row items-center">
          <img
            className="w-[585px] h-[600px] md:block"
            src="https://placehold.co/585x600"
          />
          <div className="md:pl-15 cols-span-2">
          <h2 className="self-stretch justify-center text-[#1E1E1E] text-6xl font-medium font-['Roobert']">
            Our Recent Work
          </h2>
          <p className="text-lg font-['FavoritMono'] mt-4 mb-8">
            We started as a group of friends with a shared love for design — but
            what really brought us together was a deeper belief in community. In
            the people behind small businesses. In creating something that helps
            others feel seen, supported, and celebrated.
            <br />
            <br />
            What began as school projects slowly became something more: a way
            for us to give back, to build with purpose, and to lift each other
            up through our work.
            <br />
            <br />
            <span className="font-bold font-['FavoritMono']">
              Here are a few of the pieces we’ve loved creating together!
            </span>
          </p>
          <a
            href="/"
            className="justify-center bg-[#1E1E1E] text-[#FAF8EF] text-xl uppercase font-['FavoritMono'] px-4 py-2 w-fit hover:bg-[#FAF8EF] hover:text-[#1E1E1E] hover:outline-1 hover:outline-[#1E1E1E] hover:outline-dashed transition-colors duration-300"
            rel="noopener noreferrer"
          >
            See our Projects →
          </a>
          </div>
          </div>
            <div className="grid-cols-2 gap-4 lg:grid hidden">
              <div className="cols-span-2 space-y-7">
                <div>
                <img
                  src="/images/circles/home-card.png"
                  alt="Circles Mockup"
                  className="w-fit h-fit object-cover"
                ></img>
                <h5 className="text-[#1E1E1E] text-3xl font-medium font-['Roobert']">
                  Circles
                </h5>
                <a
                  href="/works/circles" 
                  className="justify-center text-stone-900 text-xl font-normal font-['FavoritMono'] underline">
                  VIEW PROJECT
                </a>
                </div>
                <div>
                <img
                  src="/images/melange/home-card.png"
                  alt="Melange Mockup"
                  className="w-fit h-fit object-cover"
                ></img>
                <h5 className="text-[#1E1E1E] text-3xl font-medium font-['Roobert']">
                  Mélange
                </h5>
                <p className="justify-center text-stone-900 text-xl font-normal font-['FavoritMono'] underline">
                  VIEW PROJECT
                </p>
              </div>
              </div>
              <div className="cols-span-2">
                <img
                  src="/images/harmony/home-card.jpg"
                  alt="Harmony Mockup"
                  className="w-[755.08px] h-[736.83px] object-cover"
                ></img>
                <h5 className="text-[#1E1E1E] text-3xl font-medium font-['Roobert']">
                  Harmony
                </h5>
                <p className="justify-center text-stone-900 text-xl font-normal font-['FavoritMono'] underline">
                  VIEW PROJECT
                </p>
              </div>
            </div>
        </section>

        {/* conclusion section */}
        <section className="flex flex-col gap-8">
          <div>
            <h2 className="text-[#1E1E1E] text-4xl font-medium font-['Roobert']">
              That’s us in a nutshell. Thanks for being here, and we can’t wait to learn more about you! 
              <br />
              <br />
              With love,
              <br />
              Your dear neighbour 💌
            </h2>
            <p className="text-[#1E1E1E] text-m font-medium font-['FavoritMono'] uppercase">
              tina, chelsea, keona
            </p>
          </div>
          <img
            src="/images/placeholder/mobile-footer.png"
            alt="Conclusion Image"
            className="w-screen pt-12 object-cover"
          />
        </section>
      </main>
      <Footer />
    </>
  );
}
