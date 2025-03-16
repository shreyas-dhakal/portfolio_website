import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import ProjectCards from "@/components/ProjectsCard";
import { Badge } from "@/components/ui/badge";
import { Layers } from "lucide-react";

const projectsPage = () => {
  // PROJECTS DATA
  const Projects = [
    {
      title: "Smart Parking Management System ",
      description:
        `SMPS is a system using computer vision and other machine learning techniques to identify parking occupancy and numberplate recognition.`,
      tags: ["Python", "Computer Vision"],
      link: "https://github.com/shreyas-dhakal/smart_parking_management_system",
    },
    {
      title: "Reinforced Learning NPC Model for 3D Environment",
      description:
        "Reinforced Learning NPC Model for 3D Environment is a machine learning based project that showcases use of reinforcement learning for multiagents in a simulated environment.",
      tags: ["Unity", "Tensorflow", "Reinforcement Learning"],
      link: "https://drive.google.com/file/d/1_-NQIMSCTxlxbsM5z25tGY6Fn5eaOhVF/view?usp=sharing",
    },
    {
      title: "Dirghayu Hospital",
      description:
        "Full stack website created using PHP and Laravel.",
      tags: ["PHP", "Laravel", "MySql","Apache"],
      link: "https://hospitaldirghayu.com/",
    },
    {
      title: "Baagchaal",
      description:
        "Basic C programming based Baagchaal Game",
      tags: ["C"],
      link: "https://drive.google.com/drive/folders/1vLILy0j6TXGFblW4qq4JU78qj0NKqHzE?usp=sharing",
    },
  ];

  return (
    // PROJECT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge variant="secondary" className="gap-1.5 py-1 ">
        <Layers className="h-4 w-4" />
        Projects
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Projects</Heading>
        <FramerWrapper y={0} x={200}>
          <p className=" font-poppins text-lg w-full text-primary max-sm:text-base">
            I love to Build Cool Projects. Here, you&#x27;ll find a curated
            collection of my projects.
          </p>
        </FramerWrapper>
      </div>

      <div className=" w-full flex flex-row flex-wrap gap-3 max-lg:flex-col">
        {Projects.map((val, indx) => {
          return <ProjectCards key={indx} value={val} num={indx} />;
        })}
      </div>
    </div>
  );
};

export default projectsPage;
