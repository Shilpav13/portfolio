import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";

export const DATA = {
  name: "Shilpa M",
  initials: "SM",
  url: "https://shilpam.com",
  location: "Plano, TX, USA",
  locationLink: "https://www.google.com/maps/place/Plano,+TX",
  description:
    "Innovative Software Developer with 4+ years of experience delivering cloud-native, end-to-end solutions.",
  summary:
    "Innovative Software Developer with 4+ years of experience delivering cloud-native, end-to-end solutions across the software development life cycle. Strong foundation in Algorithms, Data Structures, object-oriented design, and engineering best practices, with hands-on experience in Web Development, application development, and embedded systems. Skilled in modern frameworks and scripting, collaborating effectively in SAFe and Agile environments. Proficient with tools such as Visual Studio and enterprise platforms, able to work collaboratively across teams. Known for strong Soft Skills, clear communication, ownership, continuous improvement, and delivering high-quality results in fast-paced environments.",
  avatarUrl: "/WhatsApp Image 2026-01-15 at 11.45.45 AM.jpeg",
  skills: [
    { name: "C#", icon: Csharp },
    { name: ".NET Core", icon: Icons.globe },
    { name: "ASP.NET Core", icon: Icons.globe },
    { name: "React", icon: ReactLight },
    { name: "Angular", icon: Icons.globe },
    { name: "Vue.js", icon: Icons.globe },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Typescript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Python", icon: Python },
    { name: "Go", icon: Golang },
    { name: "Java", icon: Java },
    { name: "C++", icon: Icons.globe },
    { name: "Postgres", icon: Postgresql },
    { name: "SQL Server", icon: Icons.globe },
    { name: "MongoDB", icon: Icons.globe },
    { name: "Docker", icon: Docker },
    { name: "Kubernetes", icon: Kubernetes },
    { name: "Azure", icon: Icons.globe },
    { name: "AWS", icon: Icons.globe },
    { name: "GCP", icon: Icons.globe },
    { name: "CI/CD", icon: Icons.globe },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "shilpagowd515@gmail.com",
    tel: "+19199142098",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Shilpav13",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/shilpa515",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "#",
        icon: Icons.x,
        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "#",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:shilpagowd515@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Beal Bank",
      href: "",
      badges: [],
      location: "Plano, TX, USA",
      title: "Full Stack Developer",
      logoUrl: "",
      start: "Feb 2025",
      end: "Present",
      description:
        "Design, develop, and maintain enterprise applications using ASP.NET Core, C#, MVC, Node.js supporting financial and operational systems. Build interactive dashboards with Angular, React, TypeScript, HTML5, CSS3, Bootstrap for real-time KPI and analytics visualization. Develop and optimize RESTful APIs and microservices, integrating ERP, IoT telemetry, supply chain systems for scalable data exchange. Improve data performance using SQL Server, stored procedures, Entity Framework Core, and Redis caching. Implement secure authentication and authorization using ASP.NET Identity, OAuth 2.0, JWT, Active Directory. Deploy containerized applications with Docker and Kubernetes, leveraging CI/CD pipelines via Azure DevOps, Git, Jenkins, GitHub Actions across Azure and AWS. Integrate SignalR, WebSockets, GraphQL, and third-party APIs for real-time notifications and system updates. Enable advanced analytics and monitoring using Power BI, Kafka, NiFi, Spark, ELK Stack, Grafana for telemetry, performance tracking, and predictive insights.",
    },
    {
      company: "H-E-B",
      badges: [],
      href: "",
      location: "San Antonio, TX, USA",
      title: "Full Stack Developer",
      logoUrl: "",
      start: "Mar 2024",
      end: "Jan 2025",
      description:
        "Developed enterprise applications using ASP.NET Core, C#, MVC, WinForms, supporting real-time financial, trading, and portfolio management systems. Built scalable microservices and RESTful/GraphQL APIs with .NET Core, Docker, Kubernetes, AWS, improving system scalability and fault tolerance. Created responsive, data-driven UIs using Angular, React, Vue.js, TypeScript, JavaScript, HTML, CSS for analytics and real-time visualization. Designed high-performance data solutions with Entity Framework Core, Hibernate, JPA, SQL Server, PostgreSQL, MySQL, DynamoDB, Snowflake. Implemented secure identity, CI/CD, and monitoring using OAuth 2.0, JWT, LDAP, Keycloak, SAML, Jenkins, GitHub Actions, Ansible, CloudWatch, Prometheus, ELK Stack, Power BI/Tableau.",
    },
    {
      company: "Novartis",
      href: "",
      badges: [],
      location: "Mumbai, India",
      title: "Software Developer",
      logoUrl: "",
      start: "Jul 2022",
      end: "Nov 2023",
      description:
        "Developed and deployed enterprise consumer applications using ASP.NET Core, C#, MVC, .NET 6/7, improving digital engagement and transaction workflows. Built RESTful and GraphQL APIs with asynchronous processing via RabbitMQ, enabling real-time integration across web, mobile, and internal systems. Designed and optimized data solutions using SQL Server (stored procedures, complex queries), MongoDB, and Entity Framework Core for scalable, high-performance platforms. Implemented modern front ends and DevOps pipelines using React, TypeScript, HTML5, CSS3, Bootstrap, CI/CD (Jenkins, Azure DevOps, GitLab CI), Docker, Kubernetes, and secured systems with OAuth 2.0, JWT, API Gateway, RBAC on Azure.",
    },
    {
      company: "Invesco",
      href: "",
      badges: [],
      location: "Mumbai, India",
      title: "Software Engineer",
      logoUrl: "",
      start: "Mar 2021",
      end: "Jun 2022",
      description:
        "Developed scalable RESTful APIs and WCF services using ASP.NET Core, C#, MVC for real-time integration and order fulfilment systems. Built and deployed enterprise applications with ASP.NET, SQL Server, Entity Framework Core, improving inventory, order management, and compliance workflows. Enhanced responsive UIs using JavaScript, TypeScript, jQuery, AJAX, React, Bootstrap for customer and internal platforms. Ensured code quality and delivery through Git, NUnit, Moq, Azure DevOps, automated testing, and Agile (Scrum) practices.",
    },
  ],
  education: [
    {
      school: "Campbellsville University",
      href: "https://www.campbellsville.edu",
      degree: "Master’s in computer science",
      logoUrl: "",
      start: "",
      end: "",
    },
  ],
  projects: [] as { title: string; href: string; dates: string; active: boolean; description: string; technologies: readonly string[]; links: readonly { type: string; href: string; icon: React.ReactNode }[]; image: string; video: string }[],
  hackathons: [] as { title: string; dates: string; location: string; description: string; image: string; links: readonly { title: string; icon: React.ReactNode; href: string }[] }[],
} as const;
