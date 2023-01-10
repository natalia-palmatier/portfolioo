import React from "react";


export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 id="typewriter">Hi, I'm Natalia ♡ </h1>
          <h1 id="subheader">Irvine, CA</h1>
          <br></br>
          <p className="mb-8 leading-relaxed text-black">
          I am a software engineer with 3 years of experience in the industry. 
          Throughout my career, I have had the opportunity to work on a variety of projects, 
          and enjoy anything challenging that requires deeper thought. 
          I am always striving to improve and deliver high-quality products. 
          I guess you could say im ~ <em>committed</em> ~ *wink wink*
          </p>
          <img src="http://ghchart.rshah.org/f472b6/natalia-codes" alt="Natalia's Pink Github chart" class="my-chart" />
          <div className="flex justify-center">
            
            <a
              href="#projects"
              className="ml-4 inline-flex text-black bg-purple-300 border-0 py-2 px-6 focus:outline-none hover:bg-purple-200 hover:text-black rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./natnat.png"
          />
        </div>
      </div>
    </section>
  );
}
