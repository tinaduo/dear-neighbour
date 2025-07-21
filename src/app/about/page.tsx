import Footer from "../../../components/Footer";
import NavBar from "../../../components/NavBar";

export default function About() {
  return (
    <>
      <main>
        <section className="flex flex-col">
          <section>
            <div className="flex flex-col items-center justify-center gap-8">
              <h1 className="text-center justify-center text-8xl font-medium font-['Roobert']">
                Meet Your Neighbours!
              </h1>
              <p className="text-center text-xl md:w-[600px] font-['FavoritMono'] tracking-tighter text-gray">
                Just a small team trying to make things that bring people a
                little closer. To their neighbourhoods, their stories, and each
                other &lt;3
              </p>
            </div>
          </section>
          <img
            src="/images/about/team-polaroids-desktop.png"
            alt="Team Polaroids"
            className="hidden lg:block mx-auto mt-8"
          />
          <img
            src="/images/about/team-polaroids.png"
            alt="Team Polaroids"
            className="block lg:hidden mx-auto w-auto mt-8"
          />
        </section>

        <section className="flex flex-col items-center space-y-12 tracking-tighter">
          <p className="text-gray text-xl font-['FavoritMono'] lg:w-[770px]">
            Dear Neighbour,
            <br />
            <br />
            We believe in small things with big meaning. The way a local shop
            feels like home. The way a handwritten note can say more than a
            billboard ever could. We believe in showing up for each other in the
            hard moments and the hopeful ones, because that’s how strong
            communities are built.
            <br />
            <br />
            The three of us met in school, but what connected us was bigger than
            design. We kept coming back to the same conversations: how to
            support others, how to create space for underrepresented voices, how
            to build something that gives back.
            <br />
            <br />
            That’s what dear neighbour is really about!
            <br />
            <br />
            We believe in collaboration over competition. In lifting each other
            up. In making things with heart, not ego.
            <br />
            <br />
            And most of all, we believe that when we care for our communities,
            they care for us right back.
          </p>
          <section className="flex flex-col gap-8 w-full lg:w-[770px] items-start">
            <div>
              <h2 className="text-[#1E1E1E] text-4xl font-medium font-['Roobert']">
                With love,
                <br />
                Your dear neighbour 💌
              </h2>
              <p className="text-[#1E1E1E] text-base font-medium font-['FavoritMono'] uppercase pt-2">
                tina, chelsea, keona, nathan, & Kyanna
              </p>
            </div>
          </section>
        </section>
      </main>

      {/* <Footer /> */}
    </>
  );
}
