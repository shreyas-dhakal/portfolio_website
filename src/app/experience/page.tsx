import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const experiencePage = () => {
  return (
    // EXPERIENCE PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge variant="secondary" className="gap-1.5 py-1 ">
        <Briefcase className="h-4 w-4" />
        Experience
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Experience</Heading>
      </div>
      <div className="w-full h-fit flex flex-col">
        {/** Experience Tiles **/}
        <div className="w-full h-fit flex">
          <FramerWrapper
            y={0}
            x={-100}
            delay={0.35}
            className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base "
          >
            {"February 2025 - August 2025"}
          </FramerWrapper>
          <FramerWrapper
            y={0}
            x={100}
            delay={0.35}
            className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point "
          >
            <div className="text-2xl font-rubik max-sm:text-xl">
              {"AI Engineer, xval.ai"}
            </div>
            <p className=" font-poppins text-base w-full text-primary  max-sm:text-xs">
              {"Research in methods and frameworks to develop educational content using Generative AI and LLMs. Developed AI based scripts to generate educational content, develop RAGs, vector databases and various text evaluation frameworks."}
            </p>
          </FramerWrapper>
        </div>
        <div className="w-full h-fit flex">
          <FramerWrapper
            y={0}
            x={-100}
            delay={0.35}
            className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base "
          >
            {"July 2024 - December 2024"}
          </FramerWrapper>
          <FramerWrapper
            y={0}
            x={100}
            delay={0.35}
            className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point "
          >
            <div className="text-2xl font-rubik max-sm:text-xl">
              {"Full Stack Web Developer, Code Craft Web Solution"}
            </div>
            <p className=" font-poppins text-base w-full text-primary  max-sm:text-xs">
              {"Full Stack Web Development using PHP and Laravel Frameworks. Developed a hospital website and managed every aspect of the project from conception to deployment. Gained experience in frontend, backend, server deployment systems and client interaction."}
            </p>
          </FramerWrapper>
        </div>

        <div className="w-full h-fit flex">
          <FramerWrapper
            y={0}
            x={-100}
            delay={0.35}
            className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base "
          >
            {"May 2023 - November 2023"}
          </FramerWrapper>
          <FramerWrapper
            y={0}
            x={100}
            delay={0.35}
            className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point "
          >
            <div className="text-2xl font-rubik max-sm:text-xl">
              {"Internship in Machine Learning, SMTM Capital"}
            </div>
            <p className=" font-poppins text-base w-full text-primary  max-sm:text-xs">
              {"Worked as a Machine Learning Intern, where I was responsible for researching, developing and implementing machine learning models to perform technical analysis of financial data. Gained hands-on experience in data preprocessing, handling, scripting and developing machine learning models. Collaborated with a team of developers to optimize trading strategies using AI and ML techniques."}
            </p>
          </FramerWrapper>
        </div>
      </div>
    </div>
  );
};

export default experiencePage;
