import { ArrowUpDownIcon, ChevronDownIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

// Define chapter data for mapping
const chapters = [
	{
		id: 1,
		name: "Gravitation",
		icon: "/chapter-icon-2.svg",
		stats: {
			year2025: { count: "8Qs", trend: "up" },
			year2024: { count: "6Qs" },
			completion: "113/205 Qs",
		},
	},
	{
		id: 2,
		name: "Math in Physics",
		icon: "/chapter-icon-6.svg",
		stats: {
			year2025: { count: "2Qs", trend: "down" },
			year2024: { count: "6Qs" },
			completion: "113/205 Qs",
		},
	},
	{
		id: 3,
		name: "Units and Dimensions",
		icon: "/chapter-icon-5.svg",
		stats: {
			year2025: { count: "6Qs" },
			year2024: { count: "6Qs" },
			completion: "113/205 Qs",
		},
	},
	{
		id: 4,
		name: "Motion in One Dimension long name",
		icon: "/chapter-icon-7.svg",
		stats: {
			year2025: { count: "8Qs", trend: "up" },
			year2024: { count: "6Qs" },
			completion: "113/205 Qs",
		},
	},
	{
		id: 5,
		name: "Motion in Two Dimensions",
		icon: "/chapter-icon-1.svg",
		stats: {
			year2025: { count: "8Qs", trend: "up" },
			year2024: { count: "6Qs" },
			completion: "113/205 Qs",
		},
	},
	{
		id: 6,
		name: "Laws of Motion",
		icon: "/chapter-icon.svg",
		stats: {
			year2025: { count: "8Qs", trend: "up" },
			year2024: { count: "6Qs" },
			completion: "113/205 Qs",
		},
	},
	{
		id: 7,
		name: "Centre of Mass Equilibrium and Momentum",
		icon: "/chapter-icon-4.svg",
		stats: {
			year2025: { count: "8Qs", trend: "up" },
			year2024: { count: "6Qs" },
			completion: "113/205 Qs",
		},
	},
	{
		id: 8,
		name: "Work Power Energy",
		icon: "/chapter-icon-3.svg",
		stats: {
			year2025: { count: "8Qs", trend: "up" },
			year2024: { count: "6Qs" },
			completion: "113/205 Qs",
		},
	},
];

export const MainContentSection = (): JSX.Element => {
	return (
		<section className="flex flex-col w-full items-start bg-white border-0 md:bg-[#f2f5fb] md:border md:border-solid md:border-[#eaedf1]">
			<header className="flex flex-col w-full items-start pt-3 pb-2 px-0 bg-white z-10 md:pt-6 md:pb-4">
				<div className="flex flex-col items-start gap-2 w-full bg-white md:flex-row md:items-start md:gap-0">
					<div className="flex flex-col items-start gap-2 flex-1 grow md:items-center md:gap-4">
						<div className="inline-flex items-center justify-start gap-2 md:gap-4 md:justify-center">
							<img
								className="w-5 h-5 md:w-6 md:h-6"
								alt="Subject icon"
								src="/subject-icons-2.svg"
							/>
							<h1 className="w-fit font-['Inter',Helvetica] font-bold text-[#101319] text-base text-left tracking-[0] leading-5 whitespace-nowrap md:text-xl md:leading-6 md:text-center">
								Physics PYQs
							</h1>
						</div>
						<p className="w-fit font-['Inter',Helvetica] font-normal text-[#505d79] text-xs text-left tracking-[0] leading-4 whitespace-nowrap md:text-sm md:leading-[18.2px] md:text-right">
							Chapter-wise Collection of Physics PYQs
						</p>
					</div>
					<div className="w-0 h-0 md:w-14 md:h-14" />
				</div>
			</header>

			<div className="flex w-full items-center gap-1 px-2 py-2 bg-white z-[2] flex-wrap md:gap-2 md:px-4 md:py-3">
				<Button
					variant="outline"
					className="flex items-center justify-center gap-0.5 p-1 bg-white rounded-xl border border-solid border-[#d1d8e0] text-xs md:text-base md:p-1.5"
				>
					<span className="font-label-sm-14 text-[#101319] text-xs md:text-base">
						Class
					</span>
					<ChevronDownIcon className="w-4 h-4 md:w-5 md:h-5" />
				</Button>

				<Button
					variant="outline"
					className="flex items-center justify-center gap-0.5 p-1 bg-white rounded-xl border border-solid border-[#d1d8e0] text-xs md:text-base md:p-1.5"
				>
					<span className="font-label-sm-14 text-[#101319] text-xs md:text-base">
						Units
					</span>
					<ChevronDownIcon className="w-4 h-4 md:w-5 md:h-5" />
				</Button>

				<Separator
					orientation="vertical"
					className="h-4 bg-[#d1d8e0] rounded-xl md:h-6"
				/>

				<Button
					variant="outline"
					className="flex items-center justify-center gap-0.5 p-1 bg-white rounded-xl border border-solid border-[#d1d8e0] text-xs md:text-base md:p-1.5"
				>
					<span className="font-label-sm-14 text-[#101319] text-xs md:text-base">
						Not Started
					</span>
				</Button>

				<img
					className="min-w-6 min-h-6 md:min-w-8 md:min-h-8"
					alt="Chip button"
					src="/chip-button.svg"
				/>
			</div>

			<div className="flex w-full min-h-12 items-center px-2 py-1 bg-white z-[1] md:px-4 md:py-0">
				<div className="flex flex-col items-start justify-center gap-1 pl-0 pr-1 py-1 flex-1 grow md:pr-2 md:py-2">
					<p className="self-stretch font-14px-regular text-[#101319] text-xs leading-4 md:text-base md:leading-[18px]">
						Showing all chapters (34)
					</p>
				</div>

				<div className="inline-flex items-center gap-0 md:gap-1">
					<Button
						variant="ghost"
						className="h-7 flex items-center gap-0.5 px-0 py-2 rounded-[10px] border border-solid border-transparent text-xs md:h-9 md:text-base"
					>
						<ArrowUpDownIcon className="w-4 h-4 md:w-5 md:h-5" />
						<span className="font-14px-medium text-[#0065de] text-center whitespace-nowrap text-xs md:text-base">
							Sort
						</span>
					</Button>
				</div>
			</div>

			<div className="flex flex-col w-full items-start gap-2 p-2 bg-white z-0 md:gap-4 md:p-4">
				{chapters.map((chapter) => (
					<Card
						key={chapter.id}
						className="flex items-center gap-2 p-2 w-full bg-white rounded-lg border border-solid border-[#d1d8e0] md:gap-4 md:p-4 md:rounded-xl"
					>
						<CardContent className="flex items-center gap-2 p-0 w-full md:gap-4">
							<img
								className="w-5 h-5 md:w-6 md:h-6"
								alt={`${chapter.name} icon`}
								src={chapter.icon}
							/>

							<div className="flex flex-col items-start gap-1 flex-1 grow md:gap-2">
								<div className="flex flex-col items-start gap-2 self-stretch w-full md:flex-row md:items-center md:gap-6">
									<h3 className="flex-1 font-label-base-16 text-[#101319] text-sm md:text-base">
										{chapter.name}
									</h3>

									<div className="inline-flex flex-row items-center gap-1 self-stretch md:flex-col md:gap-2">
										<div className="w-fit font-body-xs-12 text-right whitespace-nowrap text-xs md:text-base">
											<span className="text-[#505d79]">2025: </span>
											<span className="text-[#505d79]">
												{chapter.stats.year2025.count}
											</span>
											{chapter.stats.year2025.trend === "up" && (
												<span className="text-[#007f42]"> ↑</span>
											)}
											{chapter.stats.year2025.trend === "down" && (
												<span className="text-[#e02a2f]"> ↓</span>
											)}
											<span className="text-[#505d79]"> | 2024: </span>
											<span className="text-[#505d79]">
												{chapter.stats.year2024.count}
											</span>
										</div>
									</div>

									<div className="w-fit font-body-xs-12 text-[#d1d8e0] text-right whitespace-nowrap hidden md:block">
										|
									</div>

									<div className="w-fit font-body-xs-12 text-[#505d79] text-right whitespace-nowrap text-xs md:text-base">
										{chapter.stats.completion}
									</div>
								</div>
							</div>
						</CardContent>
					</Card>
				))}
			</div>
		</section>
	);
};
