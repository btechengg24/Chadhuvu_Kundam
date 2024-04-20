import React from "react";
import HighlightText from "../../../components/core/HomePage/HighlightText";
import CTAButton from "../../../components/core/HomePage/Button";

const LearningGridArray = [
	{
		order: -1,
		heading: "World-Class Learning for",
		highlightText: "Anyone, Anywhere",
		description:
			"Studynotion partners with more than 275+ leading universities and companies to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide.",
		BtnText: "Learn More",
		BtnLink: "/",
	},
	{
		order: 1,
		heading: "Curriculum Based on Industry Needs",
		description:
			"Save time and money! The Belajar curriculum is made to be easier to understand and in line with industry needs.",
	},
	{
		order: 2,
		heading: "Our Learning Methods",
		description:
			"Studynotion partners with more than 275+ leading universities and companies to bring",
	},
	{
		order: 3,
		heading: "Certification",
		description:
			"Studynotion partners with more than 275+ leading universities and companies to bring",
	},
	{
		order: 4,
		heading: `Rating "Auto-grading"`,
		description:
			"Studynotion partners with more than 275+ leading universities and companies to bring",
	},
	{
		order: 5,
		heading: "Ready to Work",
		description:
			"Studynotion partners with more than 275+ leading universities and companies to bring",
	},
];

/*
here there are total 8 card box 
in the first 2 cardbox we write "World-Class Learning for" and a button 
(we use col-span-2 to merge two column) 
condition: index === 0 && "lg:col-span-2"  
also bg is transparent

if order is even show light bg and if odd show dark bg
condition: card.order % 2 === 1

for the cerfication card we need it to start from the 2nd col as the 1st col is kept empty
condition: card.order === 3 && "xl:col-start-2"
*/

const LearningGrid = () => {
	return (
		<div className="grid grid-col-1 lg:grid-cols-4 mb-10 p-5 lg:w-fit">
			{LearningGridArray.map((card, index) => {
				return (
					<div
						key={index}
						className={`${
							index === 0 && "lg:col-span-2 lg:h-[280px] p-5 bg-transparent"
						}
                ${
									card.order % 2 === 1
										? "bg-richblack-700 lg:h-[280px] p-5"
										: "bg-richblack-800 lg:h-[280px] p-5"
								}
                ${card.order === 3 && "lg:col-start-2"}
                
                `}
					>
						{card.order < 0 ? (
							// word class learning part
							<div className="lg:w-[90%] flex flex-col pb-5 gap-3">
								<div className="text-4xl font-semibold">
									{card.heading}
									<HighlightText text={card.highlightText} />
								</div>
								<p className="font-medium">{card.description}</p>
								<div className="w-fit mt-4">
									<CTAButton active={true} linkto={card.BtnLink}>
										{card.BtnText}
									</CTAButton>
								</div>
							</div>
						) : (
							// remaining part
							<div className="flex flex-col gap-8 p-7">
								<h1 className="text-richblack-5 text-lg">{card.heading}</h1>
								<p className="text-richblack-300 font-medium">
									{card.description}
								</p>
							</div>
						)}
					</div>
				);
			})}
		</div>
	);
};

export default LearningGrid;
