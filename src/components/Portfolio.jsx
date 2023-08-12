import React from "react";
import tgbt from "../assets/portfolio/tgbt.jpg";

import navbar from "../assets/portfolio/navbar.jpg";
import portofolio from "../assets/portfolio/portofolio.jpg";


const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: tgbt,
      link: "http://thegreenboxtn.shop/",
    },
    {
      id: 2,
      src: portofolio,
      link: "https://islembaaziz.netlify.app/",
      code: "https://github.com/Luiji69/my-react-portfolio.git",
    },
    {
      id: 3,
      src: navbar,
      link: "http://thegreenboxtn.shop/",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
              <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Preview 
                </a>
                {code ? ( // Check if code property exists
                  <a
                    href={code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  >
                    Code
                  </a>
                ) : (
                  // If code property is missing or falsy, make the link unclickable
                  <span className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 cursor-not-allowed">
                    Code
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
