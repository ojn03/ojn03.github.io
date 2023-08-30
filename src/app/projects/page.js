import React from "react";
import { projects } from "../../utils/info";
import ProjectCard from "@/components/ProjectCard";

export const metadata = {
	title: "Olivier-John Nzia | Projects"
};

//todo filter for skills

const page = () => {
	return (
		<div className="h-full flex flex-row">
			{/* minimap scroll*/}

			{/* project cards */}
			<div className="justify-center mx-auto w-[90%] flex 
      flex-col h-fit self-center">
				{projects.map((project, index) => (
					<ProjectCard key={index} project={project} />
				))}
			</div>
		</div>
	);
};

export default page;
