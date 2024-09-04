import React, { useState } from "react";

const Info = () => {
  const [info, setInfo] = useState("aboutMe");
  return (
    <div className="flex flex-col justify-center items-center w-11/12 mr-auto ml-auto m-3">
      <div className="flex justify-around items-center mb-4 h-12 w-11/12 bg-[#171717] rounded-2xl">
        <button
          className="infos bg-transparent m-1 text-[13px] p-2 rounded-2xl pr-4 pl-4 focus:bg-[#28292e] focus:shadow-[10px_10px_20px_#000] focus:text-sm hover:bg-[linear-gradient(to left, salmon 50%, lightblue 50%) right] "
          onClick={() => setInfo("aboutMe")}
        >
          About Me
        </button>
        <button
          className="infos bg-transparent m-1 text-[13px] p-2 rounded-2xl pr-4 pl-4 focus:bg-[#28292e] focus:text-sm focus:shadow-[10px_10px_20px_#000]"
          onClick={() => setInfo("experience")}
        >
          Experience
        </button>
        <button
          className=" infos bg-transparent m-1 text-[13px] p-2 rounded-2xl pr-4 pl-4 focus:bg-[#28292e] focus:text-sm focus:shadow-[10px_10px_20px_#000]"
          onClick={() => setInfo("recommended")}
        >
          Recommended
        </button>
      </div>
      <div className="scroll-container snap-y overflow-y-auto text-[#828588]">
        <p
          style={{ display: info === "aboutMe" ? "block" : "none" }}
          className="w-full snap-start text-[14px] text-justify"
        >
          Hello, I'm Aditya Tadas, a recent graduate with a BTech degree in
          Mechanical Engineering from DBATU University. Throughout my academic
          journey, I developed a strong interest in technology and transitioned
          my focus to front-end development. My primary skills lie in React.js,
          JavaScript, HTML, and CSS.
          <br /><br />
          <span>
            I have worked on a few exciting projects, including a finance
            tracker and a podcast platform. The finance tracker helps users
            manage and monitor their expenses and savings effectively, while the
            podcast platform allows users to discover and listen to a variety of
            podcasts. These projects not only honed my technical skills but also
            taught me valuable lessons in project management and user experience
            design. I'm passionate about creating intuitive and responsive user
            interfaces and am eager to contribute to a dynamic team where I can
            continue to grow as a developer. I’m excited about the opportunity
            to apply my skills and knowledge in a practical setting and to
            further develop my expertise in front-end technologies.
          </span>
        </p>
        <p
          style={{ display: info === "experience" ? "block" : "none" }}
          className="w-full snap-start text-[14px] text-justify"
        >
          As a fresher, I’ve worked on a finance tracker project where I
          developed a responsive web application using React.js, JavaScript,
          HTML, and CSS. My role involved implementing features for tracking
          expenses, setting budgets, and visualizing financial data through
          charts. I integrated APIs for real-time data updates and used Redux
          for managing application state. I also ensured the app’s interface was
          user-friendly and mobile-responsive. This project helped me gain
          practical experience in frontend development and problem-solving,
          while focusing on creating a seamless user experience.
        </p>
        <p
          style={{ display: info === "recommended" ? "block" : "none" }}
          className="w-full snap-start text-[14px] text-justify"
        >
        I’m focused on building my expertise in frontend
          development through practical projects like a finance tracker. My
          skills include using React.js, JavaScript, HTML, and CSS to create
          responsive and interactive web applications. I’ve worked on
          integrating APIs, managing state with Redux, and implementing user
          authentication. My goal is to deepen my knowledge in advanced state
          management, responsive design, and data visualization. I’m committed
          to leveraging these skills to develop user-friendly, efficient
          applications while staying updated with industry best practices and
          tools.
        </p>
      </div>
    </div>
  );
};

export default Info;
