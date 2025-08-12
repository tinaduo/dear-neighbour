export default function Home() {
  return (
    <>
    <head>
      <title>Dear Neighbour – Vancouver Design Agency for Small Businesses</title>
        <meta name="description" content="Dear Neighbour is a Vancouver-based design agency helping small businesses with branding, websites, and digital marketing that reflect who they are." />
        <meta property="og:title" content="Dear Neighbour – Vancouver-Based Design Studio" />
        <meta property="og:description" content="We help small businesses build authentic brands through thoughtful design, websites, and digital marketing tailored to their story." />
        <meta property="og:image" content="/images/seo/home.png" />
        <meta property="og:type" content="website" />
    </head>
      <section className="flex flex-col md:flex-col-reverse items-center justify-center space-y-8">
        <img
          src="/images/placeholder/mobile-hero.png"
          alt="Neighbourhood Hero"
          width={300}
          height={100}
          className="mx-auto mb-8 block md:hidden w-full h-auto object-cover"
        />
        <img
          src="/images/postcards/home-hero-desktop-img.png"
          alt="Dear Neighbourhood Hero"
          width={1200}
          height={400}
          className="hidden md:block w-full h-auto object-cover rounded-lg"
        />
        <div className="flex flex-col items-center md:space-y-9">
          <h1 className="text-center justify-center text-6xl lg:text-8xl font-medium font-['Roobert'] text-dark-gray">
            Dear Neighbour,
          </h1>
          <p className="text-center text-lg md:text-xl font-['FavoritMono'] mt-4 mb-8 md:w-6/12">
              You’ve got a story worth sharing — and we’re here to help you tell it in your own way.
            <br className="md:hidden block" />
            <br className="md:hidden block" />
              {" "}We bring branding, design, and a little local magic to small Canadian businesses who’ve got something to say.
          </p>
        </div>
      </section>

      {/* services section */}
      <section className="flex flex-col-reverse xl:grid xl:grid-cols-10 xl:justify-center xl:items-center gap-8">
        <div className="col-span-5">
          <h2 className="text-[#1E1E1E] text-6xl font-medium font-['Roobert']">
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
                Print Materials
              </p>
            </div>
          </div>
          <p className="text-lg font-['FavoritMono'] mt-4 mb-8">
            Design that feels thoughtful. Support that feels personal. A
            little guidance to help your business look and feel more like you.
            <br />
            <br />
            Whether it’s a website, a logo, a sign out front, or a campaign to
            get the word out we’re here to make the creative side feel a
            little less overwhelming, and a lot more possible.
          </p>
          <a
            href="/"
            className="justify-center bg-[#1E1E1E] text-[#FAF8EF] text-xl rounded-lg font-['FavoritMono'] px-4 py-2 w-fit hover:bg-[#FAF8EF] hover:text-[#1E1E1E] transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More →
          </a>
        </div>
        <img
          className="rounded-lg object-cover col-span-4 col-start-7"
          src="/images/harmony/harmony-laptop.jpg"
        />
      </section>

      <section className="hidden md:grid grid-cols-9 relative">
        <div className="col-span-5 z-2 pt-12 mb-12">
          <img src="/images/home/paper.png" className="w-full"/>
          <div className="absolute top-44 left-40">
            <p className="font-light text-sm mb-6">dear neighbour</p>
            <h2 className="text-[#1E1E1E] text-6xl font-medium font-['Roobert']">
              Our Why
            </h2>
            <p className="w-3/7 mt-8 font-light">
              We started as a group of friends with a shared love for design — but what really brought us together was a deeper belief in community, the people behind small businesses. In creating something that helps others feel seen, supported, and celebrated! 
            </p>
          </div>
        </div>
        <img src="/images/home/picture.png" className="w-full col-span-5 col-start-5 absolute top-0 z-1"/>
      </section>

      {/* work section */}
      {/* couldnt be bothered to make components */}
      <section className="flex flex-col gap-12">
        <div className="hidden md:flex flex-col items-center">
          <h2 className="justify-center text-[#1E1E1E] text-6xl font-medium font-['Roobert']">
            Recent Work
          </h2>
          <p className="text-lg text-center font-['FavoritMono'] mt-4 w-1/2">
            You’ve got a story worth sharing — and we’re here to help you tell it in your own way. We bring branding, design, and a little local magic to small Canadian businesses who’ve got something to say.
          </p>
        </div>
        <div className="hidden md:grid grid-cols-2 grid-rows-2 gap-4">
          <div>
            <img
              src={"/images/circles/home-card.png"}
              alt={"Circles mockup"}
              className="rounded-lg"
            />
            <h5 className="text-[#1E1E1E] text-3xl font-medium font-['Roobert'] mt-4">Circles</h5>
            <a href="/work/circles" className="underline italic hover:text-gray-500">
              VIEW PROJECT
            </a>
          </div>
          <div className="row-span-2">
            <img
              src={"/images/harmony/home-card.png"}
              alt={"Harmony mockup"}
              className="rounded-lg"
            />
            <h5 className="text-[#1E1E1E] text-3xl font-medium font-['Roobert'] mt-4">Harmony</h5>
            <a href="/work/harmony" className="underline italic hover:text-gray-500">
              VIEW PROJECT
            </a>
          </div>
          <div>
            <img
              src={"/images/melange/home-card.png"}
              alt={"Circles mockup"}
              className="rounded-lg"
            />
            <h5 className="text-[#1E1E1E] text-3xl font-medium font-['Roobert'] mt-4">Mélange</h5>
            <a href="/work/melange" className="underline italic hover:text-gray-500">
              VIEW PROJECT
            </a>
          </div>
        </div>
      </section>

      {/* conclusion section */}
      <section className="flex flex-col gap-8 items-start w-full">
        <h2 className="text-[#1E1E1E] text-4xl font-medium font-['Roobert']">
          That’s us in a nutshell. Thanks for being here, and we can’t wait
          to learn more about you!
          <br />
          <br />
          With love,
          <br />
          Your dear neighbour 💌
        </h2>
        <p className="text-[#1E1E1E] text-base font-medium font-['FavoritMono'] uppercase pt-2">
          tina, chelsea, keona, nathan, & kyanna 
        </p>
      </section>
    </>
  );
}
