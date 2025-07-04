import React from 'react';
import Clock from './Clock';

const Footer: React.FC = () => (  
    <footer className="flex flex-col py-8 px-4 w-screen h-fit relative bg-[#1e1e1e]">
        <section className='flex flex-col gap-6'>
        <h1 className="text-6xl font-medium font-['Roobert'] text-[#FAF8EF]"> 
            Dear Neighbour
        </h1>
        <div className='flex flex-col gap-2'>
            <a
                href="https://www.instagram.com/_dearneighbour/"
                className="text-[#FAF8EF] text-xl font-['FavoritMono'] uppercase"
                target="_blank"
                rel="noopener noreferrer"
            >
                @_dearneighbour
            </a>
            <a
                href="mailto:dear.neighbour@outlook.com"
                className="text-[#FAF8EF] text-xl font-['FavoritMono'] uppercase"
                target="_blank"
                rel="noopener noreferrer"
            >
                @dear.neighbour@outlook.com
            </a>
        </div>
        </section>

        {/* time section */}
        <section className='flex flex-col gap-2 pt-24'>
            <Clock />
            <p  className="text-[#FAF8EF] text-xl font-['FavoritMono'] uppercase">
                Vancouver, British Columbia
            </p>
        </section>

        <p className="text-[#FAF8EF] text-base font-['FavoritMono'] uppercase pt-8">
            We respectfully acknowledge that the work we do takes place on the traditional, ancestral, and unceded territories of the Coast Salish peoples — including the lands of the xʷməθkʷəy̓əm (Musqueam), Sḵwx̱wú7mesh (Squamish), and səl̓ílwətaʔɬ (Tsleil-Waututh) Nations. 
            <br />
            <br />
            We are grateful to live, learn, and create on these lands, which include what is now known as Vancouver and Burnaby.
        </p>
    </footer>
);

export default Footer;