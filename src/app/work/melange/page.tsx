import ImageGrid from "../../../../components/ImageGrid";
import ProjectHero from "../../../../components/ProjectHero";

export default function Melange() {
  return (
    <main className="flex flex-col gap-16 px-4 md:px-16 lg:px-32 pt-16 pb-32">
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
    </main>
  );
}
