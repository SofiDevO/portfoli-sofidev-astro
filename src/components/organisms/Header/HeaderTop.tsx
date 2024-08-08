import { useState } from "react";
import {
	FaGithubAlt,
	FaLinkedin,
	FaYoutube,
	FaBars,
	FaChevronDown,
} from "react-icons/fa";
import { ImFilePdf } from "react-icons/im";
import { Logo } from "../../Logo";

const more = [
	{
		name: "GithHub",
		description: "My repositories",
		href: "https://github.com/SofiDevO",
		icon: FaGithubAlt,
	},
	{
		name: "LinkedIn",
		description: "Connect with Me",
		href: "https://www.linkedin.com/in/sofidev/",
		icon: FaLinkedin,
	},
	{
		name: "My CV",
		description: "Download my Cv",
		href: "../docs/Angela_Sofia_Osorio_CV2024_updated.pdf",
		icon: ImFilePdf,
	},
];

const callsToAction = [
	{
		name: "Youtube",
		href: "https://www.youtube.com/channel/UC36_js-krsAHAEAWpEDhHtw",
		icon: FaYoutube,
	},
	{
		name: "Mail me",
		href: "mailto:sofi.dev@outlook.com",
		icon: () => (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
				className="w-5 h-5"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M3.75 4.5h16.5m0 0V6a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 6V4.5m0 0v.75m16.5 0v11.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V5.25"
				/>
			</svg>
		),
	},
];

export default function HeaderTop() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [popoverOpen, setPopoverOpen] = useState(false);

	return (
		<header className="header">
			<nav
				className="header__nav lg:px-8 items-center"
				aria-label="Global"
			>
				<Logo />
				<div className="flex lg:hidden">
					<button
						type="button"
						className="m-3 inline-flex items-center justify-center rounded-md p-2.5 text-violet-500"
						onClick={() => setMobileMenuOpen(true)}
					>
						<span className="sr-only">Open main menu</span>
						<FaBars className="h-9 w-8" aria-hidden="true" />{" "}
						{/* Icono de menú */}
					</button>
				</div>
				<div className="hidden lg:flex lg:gap-x-12 text-[1rem]">
					<a
						href="/#skills"
						className="font-semibold leading-6 text-violet-500 hover:text-[rgb(0,229,255)]"
					>
						Skills
					</a>
					<a
						href="/#portfolio"
						className="font-semibold leading-6 text-violet-500 hover:text-[rgb(0,229,255)]"
					>
						Portfolio
					</a>
					<a
						href="/posts"
						className="font-semibold leading-6 text-violet-500 hover:text-[rgb(0,229,255)]"
					>
						Blog
					</a>
					<a
						href="/about"
						className="font-semibold leading-6 text-violet-500 hover:text-[rgb(0,229,255)]"
					>
						About Me
					</a>
					<div className="relative">
						<button
							onClick={() => setPopoverOpen(!popoverOpen)}
							className="flex items-center gap-x-1 text-[1rem] font-semibold leading-6 text-violet-500 hover:text-[rgb(0,229,255)]"
						>
							Much More
							<FaChevronDown
								className="h-5 w-5 flex-none text-gray-400"
								aria-hidden="true"
							/>
						</button>
						{popoverOpen && (
							<div className="absolute   right-0 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-black shadow-lg ring-1">
								<div className="p-4">
									{more.map((item) => (
										<div
											key={item.name}
											className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
										>
											<div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-black-50 group-hover:bg-gray">
												<item.icon
													className="h-6 w-6 text-violet-500 group-hover:text-black"
													aria-hidden="true"
												/>
											</div>
											<div className="flex-auto">
												<a
													href={item.href}
													className="block font-semibold text-violet-500"
													target="_blank"
													rel="noopener noreferrer"
												>
													{item.name}
													<span className="absolute inset-0" />
												</a>
												<p className="mt-1 text-violet-500">
													{item.description}
												</p>
											</div>
										</div>
									))}
								</div>
								<div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
									{callsToAction.map((item) => (
										<a
											key={item.name}
											href={item.href}
											className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 hover:text-violet-900 text-black-500"
											target="_blank"
											rel="noopener noreferrer"
										>
											<item.icon
												className="h-5 w-5 flex-none text-black-500"
												aria-hidden="true"
											/>
											{item.name}
										</a>
									))}
								</div>
							</div>
						)}
					</div>
				</div>
			</nav>
			{/* Mobile Menu */}
			{mobileMenuOpen && (
				<div className="lg:hidden fixed inset-0 z-10 bg-black bg-opacity-50">
					<div className="fixed inset-y-0 right-0 z-20 w-full bg-black px-6 py-6 sm:max-w-sm">
						<div className="flex items-center justify-between">
							<a href="/" className="p-1.5">
								<span className="sr-only">Sofidev</span>
								<Logo />
							</a>
							<button
								type="button"
								className="p-2.5 text-violet-500"
								onClick={() => setMobileMenuOpen(false)}
							>
								<span className="sr-only">Close menu</span>
								<span className="h-6 w-6">❌</span> {/* Close Icon */}
							</button>
						</div>
						<div className="mt-6">
							<a
								href="#"
								className="block px-3 py-2 text-xl font-semibold leading-7 text-violet-500 hover:bg-gray-50"
							>
								Skills
							</a>
							<a
								href="/about"
								className="block px-3 py-2 text-xl font-semibold leading-7 text-violet-500 hover:bg-gray-50"
							>
								About Me
							</a>
							<a
								href="#"
								className="block px-3 py-2 text-xl font-semibold leading-7 text-violet-500 hover:bg-gray-50"
							>
								Portfolio
							</a>
							<a
								href="/posts"
								className="block px-3 py-2 text-xl font-semibold leading-7 text-violet-500 hover:bg-gray-50"
							>
								Blog
							</a>

							<div className="mt-2">
								<button
									className="block w-full px-3 py-2 text-xl font-semibold leading-7 text-violet-500 hover:bg-gray-50"
									onClick={() => setPopoverOpen(!popoverOpen)}
								>
									Much More
									<span className={popoverOpen ? "rotate-180" : ""}>▼</span>
								</button>
								{popoverOpen && (
									<div className="mt-2 space-y-2">
										{[...more, ...callsToAction].map((item) => (
											<a
												key={item.name}
												href={item.href}
												className="block px-6 py-2 text-sm font-semibold leading-7 text-violet-500 hover:bg-gray-50"
												target="_blank"
												rel="noopener noreferrer"
											>
												{item.name}
											</a>
										))}
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			)}
		</header>
	);
}
