"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

import { GithubWhite, ExternalLight, Info } from "../../public/icons";

//todo make all images the same size or aspect ratio

const ProjectCard = ({
	project: { title, short, image, link, repo, infoPath }
}) => {
	const [height, setHeight] = useState("h-1/6");
	return (


		<div className="flex h-32 justify-center items-center transition-all overflow-hidden duration-1000 ease-in-out hover:h-[800px] group relative">
			<span className="mix-blend-exclusion  text-center w-fit font-[sans] tracking-[.3em] text-light  text-6xl absolute  z-10 top-1/2  transition-all">
				{title}
			</span>
			<Image
				className="group-hover:brightness-100 transition-all duration-1000 brightness-[.45] w-full object-contain"
				alt={title + " img"}
				src={image}
			/>
			<div className="transition-all group-hover:backdrop-brightness-75 group-hover:backdrop-blur-[8px] rounded-lg duration-1000 absolute bottom-5 left-12 w-2/5 h-1/6 text-center text-light/0 group-hover:text-light/100 text-xl flex flex-col items-center p-1">
				<span className="flex flex-col font-[sans] mx-auto">{short}</span>
				<div className=" mix-blend-exclusion group-hover:opacity-100 transition-all duration-1000 z-50 flex justify-evenly w-full mt-4">
					{infoPath &&
						<Link
							passHref
							href={infoPath}
							target="_blank"
							className="transition-all hover:scale-110 hover:opacity-100 opacity-70 "
						>
							<Info className="w-10" />
						</Link>
					}
					{link && (
						<Link
							passHref
							href={link}
							target="_blank"
							className="transition-all hover:scale-110 hover:opacity-100 opacity-70 "
						>
							<ExternalLight className="w-10" />
						</Link>
					)}

					{repo && (
						<Link
							passHref
							href={repo}
							target="_blank"
							className="transition-all hover:scale-110 hover:opacity-100 opacity-70  "
						>
							<GithubWhite className="w-10" />
						</Link>
					)}
				</div>
			</div>

			{/* <div className=" mix-blend-exclusion group-hover:opacity-100 transition-all duration-1000 z-50 absolute h-fit w-fit   bottom-5 flex justify-center right-[1%] ">
				{
					<Link
						passHref
						href={infoPath}
						target="_blank"
						className="transition-all hover:scale-110 hover:opacity-100 opacity-70 "
					>
						<Info className="w-10" />
					</Link>
				}
				{link && (
					<Link
						passHref
						href={link}
						target="_blank"
						className="transition-all hover:scale-110 hover:opacity-100 opacity-70 "
					>
						<ExternalLight className="w-10" />
					</Link>
				)}

				{repo && (
					<Link
						passHref
						href={repo}
						target="_blank"
						className="transition-all hover:scale-110 hover:opacity-100 opacity-70  "
					>
						<GithubWhite className="w-10" />
					</Link>
				)}
			</div> */}
		</div>
	);
};

export default ProjectCard;
