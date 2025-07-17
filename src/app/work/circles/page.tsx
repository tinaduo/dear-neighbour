import CopyBlock from "../../../../components/CopyBlock";
import ImageGrid from "../../../../components/ImageGrid";
import NextProject from "../../../../components/NextProject";
import ProjectHero from "../../../../components/ProjectHero";

export default function Circles() {
  return(
    <main className="flex flex-col gap-32 px-4 md:px-16 lg:px-32 pt-16 pb-32">
      <ProjectHero
        year={2024}
        title={"Circles"}
        tags={["Ux Research", "App Design"]}
        paragraph1="In a world full of feeds, stories, and endless scrolls, it’s easy to lose the joy of simply sharing a moment with close friends. This project first started as a reflection on how we stay close to the people who matter most. For us, it was more than just a design challenge — it was something we’ve felt deeply."
        paragraph2="We weren’t looking to reinvent social media. We just wanted to make sharing feel a little more human again. So we imagined a space built for closeness — not likes, not algorithms — just real memories, shared with the people who mean the most to us."
        heroImage="/images/circles/hero.png"
      />
      <ImageGrid
        images={[
          {url: "/images/circles/circles1.png", alt: "img1", size: "wide"},
          {url: "/images/circles/circles2.png", alt: "img2", size: "large"},
          {url: "/images/circles/circles3.png", alt: "img3"},
          {url: "/images/circles/circles4.png", alt: "img4"},
        ]}
      />
      <CopyBlock
        number={1}
        header="Our Discovery"
        content={
          <p>
            The way we share with friends is kind of all over the place. Photos get compressed in chats, lost in stories, or buried in the scroll. It’s either too public or too chaotic, with nothing in between. We wanted to create something that made sharing feel easy again. Something a little more like it used to be.
          </p>
        }
      />
      <ImageGrid
        images={[
          {url: "/images/circles/circles5.png", alt: "img5", size: "large"},
          {url: "/images/circles/circles6.png", alt: "img6", size: "wide"},
          {url: "/images/circles/circles7.png", alt: "img7"},
          {url: "/images/circles/circles8.png", alt: "img8"},
        ]}
      />
      <CopyBlock
        number={2}
        header="What We Learned"
        content={
          <p>
            People aren’t looking for more ways to share. They’re looking for the right place to do it. A space that feels private by default, built around trust, not audience size. We saw that most tools weren’t designed for closeness. They were designed for reach.
          </p>
        }
      />
      <ImageGrid
        size="tall"
        images={[
          {url: "/images/circles/circles9.png", alt: "img9", size: "half"},
          {url: "/images/circles/circles10.png", alt: "img10", size: "half"},
          {url: "/images/circles/circles11.png", alt: "img11", size: "large"},
          {url: "/images/circles/circles12.png", alt: "img12", size: "square"},
        ]}
      />
      <CopyBlock
        number={3}
        header="What We Created"
        content={
          <p>
            What we made was simple. A space where sharing feels easy again, and where the people you share with actually matter. Circles isn’t about growing an audience or chasing visibility. It’s about keeping things close, keeping memories in full quality, and creating something that feels more like passing a photo to a friend than posting it for everyone
          </p>
        }
      />
      video
      <NextProject url="/work/melange/"/>
    </main>
  )
}