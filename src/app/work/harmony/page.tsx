import CopyBlock from "../../../../components/CopyBlock";
import ImageGrid from "../../../../components/ImageGrid";
import NextProject from "../../../../components/NextProject";
import ProjectHero from "../../../../components/ProjectHero";

export default function Harmony() {
  return(
    <main className="flex flex-col gap-32 px-4 md:px-16 lg:px-32 pt-16 pb-32">
      <ProjectHero
        year={2024}
        title={"Circles"}
        tags={["Ux Research", "App Design"]}
        paragraph1="In a world full of feeds, stories, and endless scrolls, it’s easy to lose the joy of simply sharing a moment with close friends. This project first started as a reflection on how we stay close to the people who matter most. For us, it was more than just a design challenge — it was something we’ve felt deeply."
        paragraph2="We weren’t looking to reinvent social media. We just wanted to make sharing feel a little more human again. So we imagined a space built for closeness — not likes, not algorithms — just real memories, shared with the people who mean the most to us."
        heroImage="/images/circles/home-card.png"
      />
      <CopyBlock
        number={1}
        header="Our Discovery"
        content={
          <p>
          </p>
        }
      />
      <CopyBlock
        number={2}
        header="What We Learned"
        content={
          <p>
          </p>
        }
      />
      <CopyBlock
        number={3}
        header="What We Created"
        content={
          <p>
          </p>
        }
      />
      <NextProject url="/work/circles"/>
    </main>
  )
}