import Image from "next/image";
import Footer from "../../../components/Footer";
import NavBar from "../../../components/NavBar";

export default function Services() {
  return (
    <>
    <NavBar />
    <main className="flex flex-col mx-4 items-center justify-center min-h-screen space-y-32 my-16">
      <section>
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
    </main>
    <Footer />
    </>
  );
}