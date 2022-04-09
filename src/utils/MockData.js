import BlogImage1 from "../assets/images/blog-2.png";
import BlogImage2 from "../assets/images/blog-1.png";
import BlogImage3 from "../assets/images/blog-3.png";

export const educationData = [
  {
    jobName: "Preparatory Education",
    jobSubTitle: "Fedrick School",
    jobTime: "Jan 1997 - Mar 2000",
    jobDesc:
      "I completed my preparatory education from this prestigious institution. I successful completed all the credits without any fallout and got A grade overall.",
    keywords: "p",
    flip: "",
    moreClassName: "block",
  },
  {
    jobName: "High School",
    jobSubTitle: "RedStreet College",
    jobTime: "Jan 2000 - Mar 2005",
    jobDesc:
      "I completed my high school degree from this prestigious institution. I successful completed all the credits without any fallout and got A grade overall.",
    keywords: "g",
    flip: "eduBox__flip",
  },
  {
    jobName: "Computer Science",
    jobSubTitle: "Down Street College",
    jobTime: "Jan 2006 - Mar 2008",
    jobDesc:
      "I completed my computer science degree from this prestigious institution. I successful completed all the credits without any fallout and got A grade overall.",
    keywords: "c",
    flip: "",
  },
  {
    jobName: "Software Engineering",
    jobSubTitle: "Oxford University",
    jobTime: "Jan 2009 - Mar 2010",
    jobDesc:
      "I completed this degree from this prestigious institution. I successful completed all the credits without any fallout and got A grade overall.",
    icon: "fa-solid fa-graduation-cap",
    flip: "eduBox__flip",
  },
  {
    jobName: "UI/UX Workshop",
    jobSubTitle: "IT Next Academy",
    jobTime: "Jan 2010 - Mar 2011",
    jobDesc:
      "I completed this course from this prestigious institution. I successful completed all the credits without any fallout and got A grade overall.",
    keywords: "u",
    flip: "",
    moreClassName: "block",
  },
  {
    jobName: "Web Development",
    jobSubTitle: "Lipro University",
    jobTime: "Jan 2011 - Mar 2012",
    jobDesc:
      "I completed this course from this prestigious institution. I successful completed all the credits without any fallout and got A grade overall.",
    icon: "fa-solid fa-earth-americas",
    flip: "eduBox__flip",
    moreClassName: "block",
  },
];
export const experienceData = [
  {
    job: "Designer",
    jobSubTitle: "RulerSoft",
    jobTime: "Jan 2010 - Mar 2012",
    jobDesc:
      "I started my designing carrier here, spent tow years learning and working in various designing aspects.",
    keywords: "d",
    flip: "",
    moreClassName: "block",
  },
  {
    job: "Frontend Developer",
    jobSubTitle: "Micro IT",
    jobTime: "Jan 2010 - Mar 2012",
    jobDesc:
      "I started my frontend carrier here, spent tow years learning and working in various frontend aspects. I worked on about 40+ projects local and online.",
    keywords: "f",
    flip: "eduBox__flip",
  },
  {
    job: "UI/UX Expert",
    jobSubTitle: "Libra IT Solutions",
    jobTime: "Jan 2014 - Mar 2015",
    jobDesc:
      "I started my expertise carrier here, spent tow years learning and working in various UX/UI aspects. I worked on about 70+ projects local and online.",
    keywords: "u",
    flip: "",
  },
  {
    job: "Senior Developer",
    jobSubTitle: "WebStyle Technologies",
    jobTime: "Jan 2016 - Continue..",
    jobDesc:
      "I recently joined here, currently working on various development aspects. I already worked on about.",
    keywords: "s",
    flip: "eduBox__flip",
    moreClassName: "block",
  },
];

const professional = [
  {
    language: "HTML5",
    percent: "90",
  },
  {
    language: "CSS3",
    percent: "90",
  },
  {
    language: "jQuery",
    percent: "70",
  },
  {
    language: "PHP",
    percent: "68",
  },
];

const personal = [
  {
    language: "Communication",
    percent: "80",
  },
  {
    language: "Teamwork",
    percent: "60",
  },
  {
    language: "Creativity",
    percent: "70",
  },
  {
    language: "Dedication",
    percent: "70",
  },
];
const software = [
  {
    language: "Adobe Illustrator",
    percent: "80",
  },
  {
    language: "Adobe InDesign",
    percent: "70",
  },
  {
    language: "PHP Storm",
    percent: "60",
  },
  {
    language: "Dev Console",
    percent: "80",
  },
];

export const interest = [
  {
    icon: "fa fa-music",
    name: "music",
  },
  {
    icon: "fa fa-gamepad",
    name: "gaming",
  },
  {
    icon: "fa fa-camera",
    name: "photography",
  },
  {
    icon: "fa-solid fa-futbol",
    name: "football",
  },
  {
    icon: "fa fa-plane",
    name: "traveling",
  },
  {
    icon: "fa fa-film",
    name: "movies",
  },
];

export const pricing = [
  {
    price: "50",
    level: "starter",
    brandWidth: "2 GB",
    diskSpace: "5 GB",
    databases: "5",
    domain: "Free",
    subdomain: "Free",
  },
  {
    price: "200",
    level: "ultimate",
    brandWidth: "∞",
    diskSpace: "∞",
    databases: "∞",
    domain: "Free",
    subdomain: "∞",
  },
  {
    price: "100",
    level: "business",
    brandWidth: "5 GB",
    diskSpace: "25 GB",
    databases: "10",
    domain: "Free",
    subdomain: "15",
  },
];

export const dataBlog = [
  {
    image: BlogImage1,
    fieldWork: "Frontend",
    jobName: "Design",
    work: "Material",
    workTitle: "material design",
    workDescription:
      "Web design encompasses many different skills and disciplines in the production of websites.Web design include web graphic design, interface design etc.",
  },
  {
    image: BlogImage2,
    fieldWork: "Backend",
    jobName: "Dev",
    work: "Shortcuts",
    workTitle: "development shortcut",
    workDescription:
      "Web development is a broad term for the work involved in developing a web site for the Internet or an intranet. Now lets get a bit deeper in this topic",
  },
  {
    image: BlogImage3,
    fieldWork: "Frontend",
    jobName: "Specs",
    work: "UI",
    workTitle: "a good ui",
    workDescription:
      "The user interface (UI), in the industrial design field of human–machine interaction, is the space where interactions between humans and machines occur.",
  },
];

export const skills = [
  { title: "professional", list: professional },
  { title: "personal", list: personal },
  { title: "softWare", list: software },
];
