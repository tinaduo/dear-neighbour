import CopyBlock from "../../../../components/CopyBlock";
import ImageGrid from "../../../../components/ImageGrid";
import NextProject from "../../../../components/NextProject";
import ProjectHero from "../../../../components/ProjectHero";

export default function Melange() {
  return (
    <main className="flex flex-col gap-32 px-4 md:px-16 lg:px-32 pt-16 pb-32">
      <ProjectHero
        year="2023"
        title="Mélange"
        tags={["Web Design", "Branding"]}
        paragraph1="Mélange is a concept for an online poster platform built around helping people find art that feels right for them. Instead of leaning into one style, we focused on curating a range of voices and visuals—so that anyone could find something that fits their space and reflects their taste."
        paragraph2="We focused on creating a simple, thoughtful experience that made space for a range of styles and stories. From the way products are displayed to how artists are introduced, every detail was shaped to help people find pieces that feel like their own."
        heroImage="/images/melange/melange-hero.png"
      />
      <ImageGrid
        images={[
          {url: "/images/melange/melange-wordmark.png", alt: "Project Image 1", size: "large"},
          {url: "/images/melange/rainbow-background.gif", alt: "Project Image 2"},
          {url: "/images/melange/melange-white-logo.png", alt: "Project Image 3"},
          {url: "/images/melange/melange-slogan.png", alt: "Project Image 4", size: "wide"}
        ]}
      />
      <CopyBlock
        number={1}
        header={"Our Discovery"}
        content={
          <p>Getting seen as an emerging creative is hard, and it’s just as tough discovering art that feels personal and true to people. We found an opportunity to create a space that celebrates diverse styles and perspectives, while also helping people find pieces that speak to them.</p>
        }
      />
      <ImageGrid
        images={[
          {url: "/images/melange/melange-wordmark.png", alt: "Project Image 1", size: "wide"},
          {url: "/images/melange/melange-white-logo.png", alt: "Project Image 2", size: "large"},
          {url: "/images/melange/melange-white-logo.png", alt: "Project Image 3"},
          {url: "/images/melange/melange-slogan.png", alt: "Project Image 4"}
        ]}
      />
      <CopyBlock
        number={2}
        header={"What We Learned"}
        content={
          <div className="flex flex-col gap-4">
            <p>We noticed that while many poster platforms offer some variety, they often lean into a specific visual style, whether that’s bold illustration, maximalism, or editorial photography. Those aesthetics resonate with a lot of people, but we wanted to create something that felt even more personal.</p>
            <p>Our goal was to design a space where people could discover pieces that truly reflect their own taste, whether that means something experimental and loud or soft and minimal.</p>
          </div>
        }
      />
      <ImageGrid
        size="wide"
        images={[
          {url: "/images/melange/melange-wordmark.png", alt: "Project Image 1", size: "half"},
          {url: "/images/melange/melange-slogan.png", alt: "Project Image 2", size: "half"},
        ]}
      />
      <CopyBlock
        number={3}
        header={"What We Created"}
        content={
          <div className="flex flex-col gap-4">
            <p>We built Mélange to feel like a creative destination—one that puts intention, individuality, and discovery at the centre. Every detail, from the curated artist lineup to the tone of the copy, was designed to make people feel seen in their choices.</p>
            <p>Instead of pushing one style, we focused on making it easy to find what speaks to you—art that fits not just your home, but your world.</p>
          </div>
        }
      />
      <ImageGrid
        size="tall"
        images={[
          {url: "/images/melange/melange-wordmark.png", alt: "Project Image 1", size: "half"},
          {url: "/images/melange/melange-slogan.png", alt: "Project Image 2", size: "half"},
          {url: "/images/melange/melange-slogan.png", alt: "Project Image 3", size: "large"},
          {url: "/images/melange/melange-white-logo.png", alt: "Project Image 4", size: "square"},
        ]}
      />
      <NextProject/>
    </main>
  );
}
