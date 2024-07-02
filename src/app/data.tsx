import {
  faCss3,
  faHtml5,
  faJs,
  faNodeJs,
  faPython,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

export const journeySteps = [
  {
    imgSrc: "/logo-la-martinière-monplaisir.png",
    imgAlt: "Logo La Martinière Monplaisir",
    place: "La Martinière Monplaisir",
    city: "LYON / 2012-2014",
    occupation: "Preparatory classes for engineering school",
    desc: (
      <p>
        Specializing in physics and chemistry, this program aimed to provide the
        fundamental knowledge necessary to excel in competitive examinations for
        admission to one of France&apos;s top engineering school <br /> <br />{" "}
        It constituted the most demanding part of my education, teaching me how
        to thrive under pressure and emphasizing the importance of
        collaboration. <br /> <br /> Ultimately, I ranked 916th out of
        approximately 5000 students in the chemistry engineering schools
        entrance exam, propelling me towards the next milestone of my journey :
        Toulouse
      </p>
    ),
  },
  {
    imgSrc: "/logo-ensiacet.png",
    imgAlt: "Logo ENSIACET",
    place: "ENSIACET",
    city: "TOULOUSE / 2014-2016",
    occupation:
      "Chemistry engineering school - Organic chemistry specialization",
    desc: (
      <p>
        Engineering school taught me organic chemistry and began shaping my
        career path. It led me to the discovery of the food flavour chemistry, a
        field where the results of your experiments are immediately observable
        through smell and taste, offering the fulfillment I seek in my work.{" "}
        <br />
        <br /> With this career path defined, I sought to deepen my
        understanding of general food chemistry. This led me to pursue my final
        training year in Dijon <br /> <br /> PS: I also stumbled upon
        programming for the first time here (VBA). It was so enjoyable and
        immediately rewarding that the idea of pursuing a career in the field,
        some day, sparked in my mind
      </p>
    ),
  },
  {
    imgSrc: "/logo-agrosup.svg",
    imgAlt: "Logo AgroSup Dijon",
    place: "L'institut Agro",
    city: "DIJON / 2016-2017",
    occupation:
      "Agro-food engineering school - Specialization in food formulation",
    desc: (
      <p>
        At the intersection of industrial food formulation, food physical
        chemistry, culinary arts and sensory analytics, my training at AGROSUP
        provided me, through several long projects through the year, how to
        organize projects and the tools at our disposal to do so. <br /> <br />{" "}
        It ended in a 6 month internship as a flavourist intern in MANE which
        was the beginning of a longer collaboration.
      </p>
    ),
  },
  {
    imgSrc: "/logo-isipca.png",
    imgAlt: "Logo ISIPCA",
    place: "ISIPCA",
    city: "VERSAILLES / 2017-2018",
    occupation: "Flavourist Professional Master's degree",
    desc: (
      <p>
        After our first successful collaboration, MANE decided to sponsor the
        next step of my career path : attending ISIPCA one of the world&apos;s
        most renown school for training perfumers and flavourists. This training
        was divided between part-time schooling and part-time apprenticeship as
        a flavourist with MANE. <br /> <br /> This experience taught me how to
        thrive in a company environment while also focusing on becoming a
        skilled flavourist.
      </p>
    ),
  },
  {
    imgSrc: "/logo-mane.svg",
    imgAlt: "Logo MANE",
    place: "V. MANE Fils",
    city: "LE BAR-SUR-LOUP / 2018-2024",
    occupation: "Flavourist in charge of the Savoury Formula Management",
    desc: (
      <p>
        After training me in the last years of my education, MANE investment in
        me lead to a job offer. I became savoury formula management flavourist.{" "}
        <br /> <br />
        My job was to ensure that no matter the crisis affecting our products,
        our clients were getting what they ordered. We were always working under
        the pressure of the latest crisis and we had to always be innovative to
        solve the problems we were facing. <br /> Being at the crossroads of
        R&D, Purchasing, Regulatory and Production, I was given the
        responsibility of managing the raw material library for savoury
        formulation.
        <br /> Finally, I learned Python and a little bit of Machine Learning on
        my own to automate some tasks, so R&D asked me to manage the development
        of new tools to improve R&D efficiency which ended up in the projects
        you can see in the &quot;Portfolio&quot; Section <br /> <br />I enjoyed
        developing these tools so much that I decided I should code for a
        living, which led me to join La Capsule
      </p>
    ),
  },
  {
    imgSrc: "/logo-la-capsule.svg",
    imgAlt: "Logo La Caspule",
    place: "La Capsule",
    city: "NICE / 2024",
    occupation: "Fullstack web and mobile development bootcamp",
    desc: (
      <p>
        Six years after being done with school, it&apos;s time to go back in.{" "}
        <br /> I had the opportunity to develop basic web applications in my
        previous experiences and fell in love with it. <br /> So I quit my job
        to get the knowledge I lacked then, along with a certification
        recognized by the French Government from La Capsule. <br /> <br />
        We perfected the use of the MERN Stack (Mongo DB, Express.js, React with
        Next.js, Node.js)
        <br />I even won the &quot;Kata Night&quot; contest, a competition of
        algorithm exercices that we won with a classmate against all La Capsule
        students
      </p>
    ),
  },
  {
    imgSrc: "/your-company.svg",
    imgAlt: "Pointing finger",
    place: "Your Company",
    city: "ANNECY or GENEVA / 2024-",
    occupation: "Fullstack web and/or mobile developer",
    desc: (
      <p>
        I am looking for the company that will open its doors to the asset I
        represent. <br /> <br /> Aside from my development skills, you would
        benefit from :<br />
        - my innovative problem-solving skills,
        <br />
        - my engineering training,
        <br />
        - my experience in the industry,
        <br />
        - my original approach as I did not follow a &quot;classic&quot; path to
        become developer
        <br /> <br />
        Contact me from the next section
      </p>
    ),
  },
];

export const webProjects = [
  {
    name: "Concept 360",
    img: "/concept360.png",
    alt: "Concept 360 Screenshot",
    fit: "cover",
    target: "_blank",
    link: "https://concept360-frontend-web.vercel.app/",
    technoIcons: [faJs, faReact, faNodeJs],
  },

  {
    name: "HackaTweet",
    img: "/hackatweet.png",
    alt: "Hackatweet Screenshot",
    fit: "cover",
    link: "https://hackatweet-front-five.vercel.app/",
    target: "_blank",
    technoIcons: [faJs, faReact, faNodeJs],
  },
  {
    name: "My Moviz",
    img: "/my-moviz.png",
    alt: "My Moviz Screenshot",
    fit: "cover",
    link: "https://mymoviz-front-three.vercel.app/",
    target: "_blank",
    technoIcons: [faJs, faReact, faNodeJs],
  },
  {
    name: "TicketHack",
    img: "/tickethack.png",
    alt: "TicketHack Screenshot",
    fit: "cover",
    link: "https://tickethack-front-iota.vercel.app/",
    target: "_blank",
    technoIcons: [faHtml5, faCss3, faJs, faNodeJs],
  },
  {
    name: "Weather App",
    img: "/weather-app.png",
    alt: "Weather App Screenshot",
    fit: "cover",
    link: "https://weatherapp-frontend-nine-theta.vercel.app/",
    target: "_blank",
    technoIcons: [faHtml5, faCss3, faJs, faNodeJs],
  },
  {
    name: "TWINS",
    img: "/logo-mane.svg",
    alt: "Mane logo",
    fit: "contain",
    link: "/twins",
    technoIcons: [faHtml5, faCss3, faPython],
  },
  {
    name: "FLAVOUR ANALYST",
    img: "/logo-mane.svg",
    alt: "Mane logo",
    fit: "contain",
    link: "/flavour-analyst",
    technoIcons: [faHtml5, faCss3, faPython],
  },
  {
    name: "Calculator",
    img: "/calculator.png",
    alt: "Calculator Screenshot",
    fit: "cover",
    link: "https://mrvalbass.github.io/odin-calculator/",
    target: "_blank",
    technoIcons: [faHtml5, faCss3, faJs],
  },
  {
    name: "Rock Paper Scissors Game",
    img: "/rock-paper-scissors.png",
    alt: "Rock Paper Scissors Screenshot",
    fit: "cover",
    link: "https://mrvalbass.github.io/odin-rock_paper_scissors/",
    target: "_blank",
    technoIcons: [faHtml5, faCss3, faJs],
  },
];

export const mobileProjects = [
  {
    name: "Concept360 Mobile",
    img: "/concept360-mobile.png",
    alt: "Concept360 Mobile Screenshot",
    fit: "cover",
    link: "/concept360-mobile",
    technoIcons: [faJs, faReact, faNodeJs],
  },
  {
    name: "Food App",
    img: "/foodapp.png",
    alt: "Food App Screenshot",
    fit: "cover",
    link: "/foodapp",
    technoIcons: [faJs, faReact],
  },
  {
    name: "Locapic",
    img: "/locapic.png",
    alt: "Locapic Screenshot",
    fit: "cover",
    link: "/locapic",
    technoIcons: [faJs, faReact],
  },
];
