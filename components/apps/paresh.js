import React, { Component } from 'react';
import ReactGA from 'react-ga4';

export class AboutParesh extends Component {

    constructor() {
        super();
        this.screens = {};
        this.state = {
            screen: () => { },
            active_screen: "about", // by default 'about' screen is active
            navbar: false,
        }
    }

    componentDidMount() {
        this.screens = {
            "about": <About />,
            "experience":<Experience/>,
            "education": <Education />,
            "skills": <Skills />,
            "projects": <Projects />,
            "resume": <Resume />,
        }

        let lastVisitedScreen = localStorage.getItem("about-section");
        if (lastVisitedScreen === null || lastVisitedScreen === undefined) {
            lastVisitedScreen = "about";
        }

        // focus last visited screen
        this.changeScreen(document.getElementById(lastVisitedScreen));
    }

    changeScreen = (e) => {
        const screen = e.id || e.target.id;

        // store this state
        localStorage.setItem("about-section", screen);

        // google analytics
        ReactGA.send({ hitType: "pageview", page: `/${screen}`, title: "Custom Title" });


        this.setState({
            screen: this.screens[screen],
            active_screen: screen
        });
    }

    showNavBar = () => {
        this.setState({ navbar: !this.state.navbar });
    }

    renderNavLinks = () => {
        return (
            <>
                <div id="about" tabIndex="0" onFocus={this.changeScreen}
                     className={(this.state.active_screen === "about" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="about paresh" src="./themes/Yaru/status/about.svg"/>
                    <span className=" ml-1 md:ml-2 text-gray-50 ">About Me</span>
                </div>
                <div id="experience" tabIndex="0" onFocus={this.changeScreen}
                     className={(this.state.active_screen === "experience" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="paresh' experience" src="./themes/Yaru/status/timeline.svg"/>
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Experience</span>
                </div>
                <div id="education" tabIndex="0" onFocus={this.changeScreen}
                     className={(this.state.active_screen === "education" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="paresh' education" src="./themes/Yaru/status/education.svg"/>
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Education</span>
                </div>
                <div id="skills" tabIndex="0" onFocus={this.changeScreen}
                     className={(this.state.active_screen === "skills" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="paresh' skills" src="./themes/Yaru/status/skills.svg"/>
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Skills</span>
                </div>
                <div id="projects" tabIndex="0" onFocus={this.changeScreen}
                     className={(this.state.active_screen === "projects" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="paresh' projects" src="./themes/Yaru/status/projects.svg"/>
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Projects</span>
                </div>
                <div id="resume" tabIndex="0" onFocus={this.changeScreen}
                     className={(this.state.active_screen === "resume" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="paresh's resume" src="./themes/Yaru/status/download.svg"/>
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Resume</span>
                </div>
            </>
        );
    }

    render() {
        return (
            <div className="w-full h-full flex bg-ub-cool-grey text-white select-none relative">
                <div
                    className="md:flex hidden flex-col w-1/4 md:w-1/5 text-sm overflow-y-auto windowMainScreen border-r border-black">
                    {this.renderNavLinks()}
                </div>
                <div onClick={this.showNavBar}
                     className="md:hidden flex flex-col items-center justify-center absolute bg-ub-cool-grey rounded w-6 h-6 top-1 left-1">
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className=" w-3.5 border-t border-white" style={{ marginTop: "2pt", marginBottom: "2pt" }}></div>
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className={(this.state.navbar ? " visible animateShow z-30 " : " invisible ") + " md:hidden text-xs absolute bg-ub-cool-grey py-0.5 px-1 rounded-sm top-full mt-1 left-0 shadow border-black border border-opacity-20"}>
                        {this.renderNavLinks()}
                    </div>
                </div>
                <div className="flex flex-col w-3/4 md:w-4/5 justify-start items-center flex-grow bg-ub-grey overflow-y-auto windowMainScreen">
                    {this.state.screen}
                </div>
            </div>
        );
    }
}

export default AboutParesh;

export const displayAboutParesh = () => {
    return <AboutParesh />;
}


function About() {
    return (
        <>
            <div className="w-20 md:w-28 my-4 bg-white rounded-full">
                <img className="w-full" src="./images/logos/bitmoji.png" alt="Paresh Makwana Logo" />
            </div>
            <div className=" mt-4 md:mt-8 text-lg md:text-2xl text-center px-1">
                <div>my name is <span className="font-bold">Paresh Makwana</span> ,</div>
                <div className="font-normal ml-1">I'm a <span
                    className="text-pink-600 font-bold">Data Scientist </span> / <span
                    className="text-pink-600 font-bold">Back End Engineer!</span></div>
            </div>
            <div className=" mt-4 relative md:my-8 pt-px bg-white w-32 md:w-48">
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-0"></div>
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-0"></div>
            </div>
            <ul className=" mt-4 leading-tight tracking-tight text-sm md:text-base w-5/6 md:w-3/4 emoji-list">
                <li className=" list-pc">Greetings from the code cosmos! 👩‍💻 Currently navigating the realms of Computer Science, I'm on the lookout for the perfect gravitational pull towards a full-time gig in Data Science, Backend Engineering, or anything cloud-related! 🌌 ( Hit me up <a className='text-underline' href='mailto:paresh.makwana.18e@gmail.com'><u>@paresh.makwana.18e@gmail.com</u></a> :) )</li>
                <li className=" mt-3 list-building">I'm not your average developer; I'm a digital alchemist, turning lines of code into ✨gold✨. Whether solving real-world puzzles or concocting software potions that enchant users, I live for the thrill of creating the extraordinary out of the ordinary.</li>
                <li className=" mt-3 list-time"> Away from the keyboard, I'm a fitness fanatic at the GYM, sculpting more than just code 💪. You might catch me lifting weights or breaking a sweat in a high-intensity workout, all in pursuit of a healthy body and mind.</li>
                <li className=" mt-3 list-star"> Ready to embark on this cosmic coding journey together? Let's create some tech magic! 🚀✨</li>
            </ul>
        </>
    )
}


function Experience(){
    return(
        <>
            <div className="font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Experience
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div
                        className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div
                        className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <ul className="w-10/12 mt-4 ml-4 px-0 md:px-1">
                <li className="list-disc">
                    <div className="text-lg md:text-xl text-left font-bold leading-tight">
                        PentaShield Technologies — System Analyst
                    </div>
                    <div className="text-sm text-gray-400 mt-0.5">Feb 2022 - PRESENT</div>
                    {/*<div className="text-sm md:text-base">*/}
                    {/*    Pioneered the creation of an advanced automated pipeline, transforming raw data into structured*/}
                    {/*    formats for seamless text, relationship, and tabular information extraction.*/}
                    {/*    Developed a VMS web application utilizing AI algorithms to streamline sensor data visualization,*/}
                    {/*    fostering accessibility and clarity in interpreting complex information.*/}
                    {/*    Seamlessly integrated diverse models—ML, mathematical, statistical, and fuzzy—to elevate*/}
                    {/*    decision-making processes, ensuring a nuanced and comprehensive analytical approach.*/}
                    {/*    Applied specialized skills to dissect NASA's high-dimensional flight parameters data, uncovering*/}
                    {/*    anomalies and implementing effective risk mitigation strategies.*/}
                    {/*</div>*/}
                </li>
                <li className="list-disc mt-5">
                    <div className="text-lg md:text-xl text-left font-bold leading-tight">
                        Cognizant — Internship
                    </div>
                    <div className="text-sm text-gray-400 mt-0.5">April 2022 - June 2022</div>
                    {/*<div className="text-sm md:text-base">*/}
                    {/*    Excelled in SQL for complex database operations, including valuable data extraction, while*/}
                    {/*    actively contributing to Python-based projects to enhance data handling and analysis.*/}
                    {/*</div>*/}
                </li>
                <li className="list-disc mt-5">
                    <div className="text-lg md:text-xl text-left font-bold leading-tight">
                        EduFeat — Subject Matter Expert
                    </div>
                    <div className="text-sm text-gray-400 mt-0.5">August 2021 - PRESENT</div>
                    {/*<div className="text-sm md:text-base">*/}
                    {/*    Demonstrated expertise in Core Subjects, providing invaluable assistance to students by*/}
                    {/*    resolving doubts and fostering a conducive learning environment through effective communication,*/}
                    {/*    responsiveness, and reliable support.*/}
                    {/*</div>*/}
                </li>
                <li className="list-disc mt-5">
                    <div className="text-lg md:text-xl text-left font-bold leading-tight">
                        Electrotherm Solar Limited — Research Intern
                    </div>
                    <div className="text-sm text-gray-400 mt-0.5">May 2021 - August 2021</div>
                    {/*<div className="text-sm md:text-base">*/}
                    {/*    Designed and developed a robust Pneumatic System with Electronic Pressure Regulation (EPR)*/}
                    {/*    technology for vital Ventilator applications. Integrated Arduino/STM microcontroller and*/}
                    {/*    precision Motor Driver to ensure precise pressure control, real-time measurements, and an*/}
                    {/*    advanced Smart Ventilator Cable Inspection System, elevating medical equipment quality and*/}
                    {/*    reliability.*/}
                    {/*</div>*/}
                </li>
            </ul>

        </>
    )
}

function Education() {
    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Education
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div
                        className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div
                        className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <ul className=" w-10/12  mt-4 ml-4 px-0 md:px-1">
                <li className="list-disc">
                    <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                        Institute Of Infrastructure Technology Research and Management (IITRAM)
                    </div>
                    <div className=" text-sm text-gray-400 mt-0.5">2018 - 2022</div>
                    <div className=" text-sm md:text-base">Electrical and Computer Science Engineering</div>
                    {/*<div className="text-sm text-gray-300 font-bold mt-1">CGPA &nbsp; 7.18/10.0</div>*/}
                </li>
                <li className="list-disc mt-5">
                    <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                        Class 12<sup>th</sup> (GSEB)
                    </div>
                    <div className=" text-sm text-gray-400 mt-0.5">2016 - 2018</div>
                    <div className=" text-sm md:text-base">Maths, Physics, Chemistry</div>
                    {/*<div className="text-sm text-gray-300 font-bold mt-1">Percentile Rank &nbsp; 94.1%</div>*/}
                </li>
            </ul>
        </>
    )
}

function Skills() {
    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Technical Skills
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div
                        className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div
                        className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list">
                <li className="list-arrow text-4xl md:text-base mt-4 leading-tight tracking-tight">
                    Proficient in <strong style={{color: '#FFA500', fontSize: '2em'}}>Python</strong> 🐍... because
                    apparently,
                    knowing how to indent lines is a big deal.
                </li>

                <li className="list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <span role="img" aria-label="dancer">🧙‍♂️</span> Backend choreographer<br/>
                    <span role="img" aria-label="book">📖</span> Data Science poet<br/>
                    <span role="img" aria-label="rockstar">🎸</span> Machine Learning rockstar (with a spotlight on
                    <span role="img" aria-label="eye">👁️</span> Computer Vision and
                    <span role="img" aria-label="speech_balloon">💬</span> NLP)<br/>
                    <span role="img" aria-label="cloud">☁️</span> and Cloud trendsetter<br/>
                    <span style={{fontSize: 'large'}} role="img" aria-label="star">🌟</span>
                    <span style={{fontSize: 'large', fontStyle: 'italic', fontWeight: 'bold'}}> "because being a tech maven is like hosting your own reality show." </span>
                </li>

                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <div>Tech Stack</div>
                </li>
            </ul>
            <div className="w-full md:w-10/12 flex mt-4">
                <div className=" text-sm text-center md:text-base w-1/2 font-bold">Languages & Tools</div>
                <div className=" text-sm text-center md:text-base w-1/2 font-bold">Frameworks & Libraries</div>
                <div className=" text-sm text-center md:text-base w-1/2 font-bold">Cloud-AWS</div>
            </div>
            <div className="w-full md:w-10/12 flex justify-center items-start font-bold text-center">
                <div className="px-2 w-1/2">
                    <div className="flex flex-wrap justify-center items-start w-full mt-2">
                        {/*<img className="m-1"*/}
                        {/*     src="https://img.shields.io/badge/-JavaScript-%23F7DF1C?style=flat&logo=javascript&logoColor=000000&labelColor=%23F7DF1C&color=%23FFCE5A" alt="paresh javascript" />*/}
                        {/*<img className="m-1" src="https://img.shields.io/badge/C%2B%2B-00599C?style=flat&logo=c%2B%2B&logoColor=white" alt="paresh c++" />*/}
                        <img className="m-1"
                             src="http://img.shields.io/badge/-Python-3776AB?style=flat&logo=python&logoColor=ffffff"
                             alt="paresh python"/>
                        <img className="m-1"
                             src="https://img.shields.io/badge/R-276DC3?style=flat&logo=r&logoColor=white"
                             alt="paresh R"/>
                        <img className="m-1"
                             src="https://img.shields.io/badge/Tableau-E97627?style=flat&logo=tableau&logoColor=white"
                             alt="paresh Tableau"/>
                        <img className="m-1"
                             src="https://img.shields.io/badge/Jupyter_Lab-%23F37626?style=flat&logo=jupyter&logoColor=white"
                             alt="paresh jupyter"/>
                        {/*<img className="m-1" src="https://img.shields.io/badge/Dart-0175C2?style=flat&logo=dart&logoColor=white" alt="paresh dart" />*/}
                        {/*<a href="https://www.google.com/search?q=is+html+a+language%3F" target="_blank" rel="noreferrer"><img title="yes it's a language!" className="m-1" src="https://img.shields.io/badge/-HTML5-%23E44D27?style=flat&logo=html5&logoColor=ffffff" alt="paresh HTML" /></a>*/}
                        {/*<img src="https://img.shields.io/badge/-Sass-%23CC6699?style=flat&logo=sass&logoColor=ffffff" alt="paresh SASS" className="m-1" />*/}
                        <img src="https://img.shields.io/badge/-Git-%23F05032?style=flat&logo=git&logoColor=%23ffffff"
                             alt="paresh git" className="m-1"/>
                        <img src="https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white"
                             alt="paresh docker" className="m-1"/>
                        <img src="https://img.shields.io/badge/PyCharm-143?style=flat&logo=pycharm&logoColor=white"
                             alt="paresh pycharm" className="m-1"/>
                        <img
                            src="https://img.shields.io/badge/VS_Code-007ACC?style=flat&logo=visual-studio-code&logoColor=white"
                            alt="paresh vscode" className="m-1"/>
                        <img
                            src="https://img.shields.io/badge/Unreal_Engine-%23313131?style=flat&logo=unreal-engine&logoColor=gray&color=lightgrey"
                            alt="paresh UR" className="m-1"/>
                        {/*<img src="https://img.shields.io/badge/-Firebase-FFCA28?style=flat&logo=firebase&logoColor=ffffff" alt="paresh firebase" className="m-1" />*/}
                    </div>
                </div>
                <div className="px-2 flex flex-wrap items-start w-1/2">
                    <div className="flex flex-wrap justify-center items-start w-full mt-2">
                        <img className="m-1"
                             src="https://img.shields.io/badge/-Flask-000000?style=flat&logo=flask&logoColor=ffffff&color=lightgrey"
                             alt="paresh flask"/>
                        <img className="m-1"
                             src="https://img.shields.io/badge/Django-092E20?style=flat&logo=django&logoColor=white"
                             alt="paresh Django"/>
                        <img className="m-1"
                             src="https://img.shields.io/badge/Streamlit-FF4B4B?style=flat&logo=streamlit&logoColor=white"
                             alt="paresh Streamlit"/>
                        <img className="m-1"
                             src="https://img.shields.io/badge/PyTorch-%23EE4C2C?style=flat&logo=pytorch&logoColor=white"
                             alt="paresh pytorch"/>
                        <img className="m-1"
                             src="https://img.shields.io/badge/TensorFlow-%23FF6F00?style=flat&logo=tensorflow&logoColor=white"
                             alt="paresh tf"/>
                        <img className="m-1"
                             src="https://img.shields.io/badge/%E9%A3%9E%E6%A1%A8-PaddlePaddle-%2300A0E9?style=flat&logo=baidu&logoColor=white"
                             alt="paresh paddle"/>
                        <img className="m-1" src="https://img.shields.io/badge/Label%20Studio-1.0.0-blue?style=flat"
                             alt="Label Studio"/>

                        <img className="m-1"
                             src="https://img.shields.io/badge/detectron2-v2.0.0-blue?style=flat&logo=appveyor&logoColor=white"
                             alt="paresh detectron2"/>

                        <img className="m-1"
                             src="https://img.shields.io/badge/Hugging_Face-Transformers-%23FFD000?style=flat&logo=hugging-face&logoColor=white"
                             alt="paresh huggingface"/>
                        <img className="m-1"
                             src="https://img.shields.io/badge/NGINX-%23009639.svg?style=flat&logo=nginx&logoColor=white"
                             alt="paresh ngnix"/>
                        <img className="m-1"
                             src="https://img.shields.io/badge/OpenCV-%23white.svg?style=flat&logo=opencv&logoColor=white"
                             alt="paresh cv2"/>
                        <img className="m-1"
                             src="https://img.shields.io/badge/FFmpeg-%23EFEFEF.svg?style=flat&logo=ffmpeg&logoColor=white"
                             alt="paresh ffmpeg"/>
                        <img className="m-1"
                             src="https://img.shields.io/badge/YOLOv8-%23EFEFEF.svg?style=flat&logoColor=white"
                             alt="paresh yolo"/>

                        <img className="m-1"
                             src="https://img.shields.io/badge/NLTK-%23EFEFEF.svg?style=flat&logo=nltk&logoColor=white"
                             alt="paresh nltk"/>
                        <img className="m-1"
                             src="https://img.shields.io/badge/Scapy-%23EFEFEF.svg?style=flat&logo=appveyor&logoColor=black"
                             alt="paresh scapy"/>
                        <img className="m-1"
                             src="https://img.shields.io/badge/Scikit--learn-F7931E.svg?style=flat&logo=scikit-learn&logoColor=white"
                             alt="paresh scikit-learn "/>
                        <img className="m-1"
                             src="https://img.shields.io/badge/Facebook%20Research-BERT-%237B68EE.svg?style=flat&logo=facebook&logoColor=white"
                             alt="paresh bert "/>
                        <img className="m-1"
                             src="https://img.shields.io/badge/dlib-%23FCC624.svg?style=flat&logo=dlib&logoColor=black"
                             alt="paresh dlib "/>
                        <img className="m-1"
                             src="https://img.shields.io/badge/FaceNet-%23FFD700.svg?style=flat&logo=star&logoColor=white"
                             alt="paresh facenet "/>
                        <img className="m-1"
                             src="https://img.shields.io/badge/MMPose-%234CAF50.svg?style=flat&logo=compass&logoColor=white"
                             alt="paresh mmpose "/>


                        {/*<img className=" m-1"*/}
                        {/*     src="https://img.shields.io/badge/Next-black?style=flat&logo=next.js&logoColor=ffffff"*/}
                        {/*     alt="paresh next"/>*/}
                        {/*<img className=" m-1"*/}
                        {/*     src="https://img.shields.io/badge/-React-61DAFB?style=flat&logo=react&logoColor=ffffff"*/}
                        {/*     alt="paresh react"/>*/}
                        {/*<img className="m-1"*/}
                        {/*     src="https://img.shields.io/badge/Flutter-02569B?style=flat&logo=flutter&logoColor=white"*/}
                        {/*     alt="paresh flutter"/>*/}
                        {/*<img className="m-1"*/}
                        {/*     src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white"*/}
                        {/*     alt="paresh tailwind css"/>*/}
                        {/*<img src="https://img.shields.io/badge/-Nodejs-339933?style=flat&logo=Node.js&logoColor=ffffff"*/}
                        {/*     alt="paresh node.js" className="m-1"/>*/}
                        {/*<img src="https://img.shields.io/badge/jQuery-0769AD?style=flat&logo=jquery&logoColor=white"*/}
                        {/*     alt="paresh jquery" className="m-1"/>*/}
                        {/*<img className="m-1"*/}
                        {/*     src="https://img.shields.io/badge/Redux-593D88?style=flat&logo=redux&logoColor=white"*/}
                        {/*     alt="paresh redux"/>*/}
                    </div>
                </div>
                <div className="px-2 w-1/2">
                    <div className="flex flex-wrap justify-center items-start w-full mt-2">
                        <img className="m-1"
                             src="https://img.shields.io/badge/Amazon_EC2-FF9900.svg?style=flat-square&logo=amazon-aws&logoColor=white"
                             alt="paresh "/>
                        <img className="m-1"
                             src="https://img.shields.io/badge/AWS_Lambda-FF9900.svg?style=flat-square&logo=aws-lambda&logoColor=white"
                             alt="paresh "/>
                        <img className="m-1"
                             src="https://img.shields.io/badge/Amazon_S3-569A31.svg?style=flat-square&logo=amazon-s3&logoColor=white"
                             alt="paresh "/>
                        <img className="m-1"
                             src="https://img.shields.io/badge/Amazon_VPC-FF9900.svg?style=flat-square&logo=amazon-aws&logoColor=white"
                             alt="paresh "/>
                        <img className="m-1"
                             src="https://img.shields.io/badge/Amazon_Route_53-FF9900.svg?style=flat-square&logo=amazon-aws&logoColor=white"
                             alt="paresh "/>
                        <img className="m-1"
                             src="https://img.shields.io/badge/Elastic_Load_Balancing-FF9900.svg?style=flat-square&logo=amazon-aws&logoColor=white"
                             alt="paresh "/>
                        <img className="m-1"
                             src="https://img.shields.io/badge/Amazon_SageMaker-FF9900.svg?style=flat-square&logo=amazon-aws&logoColor=white"
                             alt="paresh "/>
                        <img className="m-1"
                             src="https://img.shields.io/badge/AWS_IAM-FF9900.svg?style=flat-square&logo=amazon-aws&logoColor=white"
                             alt="paresh "/>
                        <img className="m-1"
                             src="https://img.shields.io/badge/Amazon_DynamoDB-4053D6.svg?style=flat-square&logo=amazon-dynamodb&logoColor=white"
                             alt="paresh "/>

                    </div>
                </div>
            </div>
            <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list mt-4">
                <li className="list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <span> And of course, because I'm a</span>
                    <img className="inline ml-1"
                         src="https://img.shields.io/badge/Linux_Maestro-%2323495E.svg?style=flat&logo=ubuntu&logoColor=white&labelColor=%23E95420&message=sudo%20apt-get%20update%20%26%26%20sudo%20rm%20-rf%20%2F"
                         alt="paresh linux"/><br/>
                    <span>You know, just casually updating my system with </span>
                    <span className="italic">"sudo apt-get"</span><br/>
                    <span> and gracefully ending it all with</span>
                    <span className="italic">"sudo rm -rf /*"</span><span>.</span>
                </li>
            </ul>
        </>
    )
}

function Projects() {
    const project_list = [
        // {
        //     name: "UbuntuOS Portfolio",
        //     date: "Apr 2021",
        //     link: "https://github.com/vivek9patel/vivek9patel.github.io",
        //     description: [
        //         "Personal portfolio website of theme Ubuntu 20.04, made using NEXT.js & tailwind CSS",
        //     ],
        //     domains: ["javascript", "next.js", "tailwindcss"]
        // },
        // {
        //     name: "Chrome Extension React Bolierplate",
        //     date: "Dec 2021",
        //     link: "https://github.com/vivek9patel/chrome-extension-react-boilerplate",
        //     description: [
        //         "A boilerplate code to build a chrome extension with react and webpack",
        //     ],
        //     domains: ["javascript", "chrome-extension"]
        // },
        // {
        //     name: "CodeConnect",
        //     date: "Nov 2021",
        //     link: "https://github.com/vivek9patel/CodeConnect-frontend",
        //     description: [
        //         "A multi-language pair-programming platform with the features of video meeting and whiteboard. Built with React.js, Tailwind CSS, Chakra UI, Express & Socket.io.",
        //     ],
        //     domains: ["javascript", "tailwindcss"]
        // },
        // {
        //     name: "Ad Free Spotify",
        //     date: "Jun 2021",
        //     link: "https://github.com/vivek9patel/ad-free-spotify",
        //     description: [
        //         "Chrome extension to automatically mute/unmute Spotify tab when Advertisement starts and ends!",
        //     ],
        //     domains: ["javascript", "chrome-extension"]
        // },
        // {
        //     name: "economist.com Unlocked",
        //     date: "Mar 2021",
        //     link: "https://github.com/vivek9patel/economist.com-unlocked",
        //     description: [
        //         "A chrome extension to read Paid Articles for Free & with no Ads, no subscription, no memberships!",
        //     ],
        //     domains: ["javascript", "chrome-extension"]
        // },
        // {
        //     name: "Flutter banking app",
        //     date: "Jan 2021",
        //     link: "https://github.com/vivek9patel/flutter-banking-app",
        //     description: [
        //         "A Flutter & Firebase project for creating transactions between different Users and displaying the history of transactions done by all.",
        //     ],
        //     domains: ["flutter", "firestore", "dart", "firebase auth"]
        // },
        // {
        //     name: "CPU scheduling application",
        //     date: "Dec 2020",
        //     link: "https://github.com/vivek9patel/CPU-Scheduling-APP-React-Native",
        //     description: [
        //         "React Native Application to visualize the CPU Scheduling algorithms with different Processes and Animations with gannt chart.",
        //     ],
        //     domains: ["react-native", "javascript"]
        // },
        // {
        //     name: "Meditech Healthcare WebApp",
        //     date: "Nov 2020",
        //     link: "https://github.com/vivek9patel/Meditech-Healthcare",
        //     description: [
        //         "Developed Web Application to predict and diagnose diseases from x-ray images.",
        //     ],
        //     domains: ["javascript", "html5", "sass", "firebase", "tensorflow"]
        // },
        // {
        //     name: "Problem Recommendation System",
        //     date: "Sep 2020",
        //     link: "https://github.com/vivek9patel/Improve-Codeforces",
        //     description: [
        //         "Django web application to suggest practice problems from the areas in which the user struggles to get pass in code-forces.",
        //     ],
        //     domains: ["django", "python", "codeforces-api", "javascript"]
        // },
        // {
        //     name: "Cleanliness Automation",
        //     date: "Dec 2019",
        //     link: "https://github.com/vivek9patel/CPU-Scheduling-APP-React-Native",
        //     description: [
        //         "Developed Web Applications to automate Garbage collection and extraction systems for SSIP hackathon",
        //     ],
        // }
    ];

    const tag_colors = {
        "javascript": "yellow-300",
        "firebase": "red-600",
        "firestore": "red-500",
        "firebase auth": "red-400",
        "chrome-extension": "yellow-400",
        "flutter": "blue-400",
        "dart": "blue-500",
        "react-native": "purple-500",
        "html5": "pink-600",
        "sass": "pink-400",
        "tensorflow": "yellow-600",
        "django": "green-600",
        "python": "green-200",
        "codeforces-api": "gray-300",
        "tailwindcss": "blue-300",
        "next.js": "purple-600"
    }

    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Projects
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            {/*<iframe src="https://github.com/sponsors/paresh2806/card" title="Sponsor paresh2806" className='my-4 w-5/6 md:w-3/4' ></iframe>*/}

            {
                project_list.map((project, index) => {
                    const projectNameFromLink = project.link.split('/')
                    const projectName = projectNameFromLink[projectNameFromLink.length - 1]
                    return (
                        <a key={index} href={project.link} target="_blank" rel="noreferrer" className="flex w-full flex-col px-4">
                            <div className="w-full py-1 px-2 my-2 border border-gray-50 border-opacity-10 rounded hover:bg-gray-50 hover:bg-opacity-5 cursor-pointer">
                                <div className="flex flex-wrap justify-between items-center">
                                    <div className='flex justify-center items-center'>
                                        <div className=" text-base md:text-lg mr-2">{project.name.toLowerCase()}</div>
                                        <iframe src={`https://ghbtns.com/github-btn.html?user=paresh2806&repo=${projectName}&type=star&count=true`} frameBorder="0" scrolling="0" width="150" height="20" title={project.name.toLowerCase()+"-star"}></iframe>
                                    </div>
                                    <div className="text-gray-300 font-light text-sm">{project.date}</div>
                                </div>
                                <ul className=" tracking-normal leading-tight text-sm font-light ml-4 mt-1">
                                    {
                                        project.description.map((desc, index) => {
                                            return <li key={index} className="list-disc mt-1 text-gray-100">{desc}</li>;
                                        })
                                    }
                                </ul>
                                <div className="flex flex-wrap items-start justify-start text-xs py-2">
                                    {
                                        (project.domains ?
                                            project.domains.map((domain, index) => {
                                                const borderColorClass = `border-${tag_colors[domain]}`
                                                const textColorClass = `text-${tag_colors[domain]}`

                                                return <span key={index} className={`px-1.5 py-0.5 w-max border ${borderColorClass} ${textColorClass} m-1 rounded-full`}>{domain}</span>
                                            })

                                            : null)
                                    }
                                </div>
                            </div>
                        </a>
                    )
                })
            }
        </>
    )
}
function Resume() {
    return (
        <iframe className="h-full w-full" src="./files/Resume_Paresh_Makwana.pdf" title="Paresh Makwana resume" frameBorder="0"></iframe>
    )
}