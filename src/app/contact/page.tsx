export default function Services() {
    return (
        <>
            <head>
                <title>Contact Dear Neighbour – Let’s Bring Your Vision to Life</title>
                <meta name="description" content="Contact Dear Neighbour to discuss your next project. We work with small businesses to build branding, websites, and marketing that matter." />
                <meta property="og:title" content="Contact | Dear Neighbour" />
                <meta property="og:description" content="Let’s collaborate on something meaningful—branding, websites, and marketing for small businesses." />
                <meta property="og:image" content="images/seo/home.png" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="[YOUR_PAGE_URL_HERE]" />
            </head>
            <div>
                <section className="flex flex-col items-center">
                <h1 className="text-center justify-center text-6xl text-8xl font-medium font-['Roobert']">
                    Let’s Work Together!
                </h1>
                <p className="text-center text-xl font-['FavoritMono'] mt-10 mb-8 max-w-8/12 tracking-tighter text-gray">
                    Have a question, a thought, or something you'd like to share? Say hello and we’ll take it from there!
                </p>
            </section>
            <section className="flex flex-col items-center relative">
                <img src="/images/postcards/sticky-note.png" alt="Sticky Note"/>
                <div className="flex flex-col items-center justify-center space-y-4 absolute bottom-0 top-0 pl-20">
                    <div>
                    <h6
                        className="opacity-80 text-center justify-center text-stone-900/75 text-2xl font-['FavoritMono']"
                    >
                        EMAIL                         
                    </h6>
                        <a
                            href="mailto:dear.neighbour@outlook.ca"
                            className="text-darkgrey hover:underline text-4xl font-['Roobert'] text-center"
                        >
                            dear.neighbour@outlook.ca
                        </a>
                    </div>
                    <div className="flex flex-col items-center mt-8">
                        <h6
                            className="opacity-80 text-center justify-center text-stone-900/75 text-2xl font-['FavoritMono']"
                        >
                            INSTAGRAM                         
                        </h6>
                        <a
                            href="https://www.instagram.com/@_dearneighbour/"
                            className="text-darkgrey hover:underline text-4xl font-['Roobert'] text-center"
                        >
                            @_dearneighbour
                        </a>
                    </div>
                </div>
            </section>
        </div>
        </>
    );
}
