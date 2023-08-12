import React from 'react';

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">Things you maybe want to know about me!</p>

        <br />

        <p className="text-xl mb-4">
          From a young age, my love for computers led me to become a full stack
          developer. With a decade of experience in software development, I
          specialize in MERN stack, MEAN stack, WordPress, and Strapi.
        </p>

        <p className="text-xl mb-4">
          Notably, I created a marketplace for the innovative startup "Green Box
          TN," showcasing my problem-solving abilities and positive impact on
          users.
        </p>
        <p className="text-xl mb-4">
          I thrive in team environments, contributing both coding skills and
          design expertise with proficiency in Photoshop.
        </p>
        <p className="text-xl mb-4">
          Passionate about continuous growth, I stay updated with research and
          embrace a systematic approach to projects, optimizing efficiency.
        </p>
        <p className="text-xl mb-4">
          Beyond coding, I enjoy spending time with friends, fishing, and
          indulging in my love for anime.
        </p>
        <p className="text-xl mb-4">
          Excited to take on new challenges and make a positive impact through
          innovative solutions.
        </p>
      </div>
    </div>
  );
};

export default About;
