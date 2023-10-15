import { Fragment, useState } from "react";
import profile from "../../public/images/profile.png";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { IconContext } from "react-icons";

import {
	Bars3Icon,
	/* FireIcon, */
	XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon, EnvelopeIcon } from "@heroicons/react/20/solid";

import { FaGithubAlt, FaLinkedin, FaYoutube } from "react-icons/fa6";
import { ImFilePdf } from "react-icons/im";


const more = [
	{
		name: "GithHub",
		description: "My repositories ",
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
		href: "../docs/Angela_Sofia_Osorio_Cv_2023.pdf",
		icon: ImFilePdf,
	},
];
const callsToAction = [
	{ name: "Youtube", href: "https://www.youtube.com/channel/UC36_js-krsAHAEAWpEDhHtw", icon: FaYoutube },
	{ name: "Mail me", href: "mailto:contact@itssofi.dev", icon: EnvelopeIcon },
];

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function HeaderTop(): JSX.Element {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<header className="backdrop-blur-md bg-black/30 fixed  w-full z-10">
			<nav
				className="mx-auto flex max-w-7xl justify-between p-6 lg:px-8 items-center"
				aria-label="Global"
			>
				<div className="flex lg:flex-2 items-center gap-4">
					<a href="/" className="-m-1.5 p-1.5 flex items-center gap-5">
						<span className="sr-only flex items-center ">SofiDev</span>
						<img className=" w-14 " src={profile} alt="logo" />
						<h1 className="mb-4 items-center">
							<span className="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
								SofiDev
							</span>
						</h1>
					</a>
				</div>
				<div className="flex lg:hidden">
					<button
						type="button"
						className="-m-3 inline-flex items-center justify-center rounded-md p-2.5 text-violet-500"
						onClick={() => setMobileMenuOpen(true)}
					>
						<span className="sr-only">Open main menu</span>
						<Bars3Icon className="h-9 w-8" aria-hidden="true" />
					</button>
				</div>
				<Popover.Group className="hidden lg:flex lg:gap-x-12">
                    	<a
						href="#"
						className="text-xl font-semibold leading-6 text-violet-500"
					>
						Skills
					</a>
					<a
						href="#"
						className="text-xl font-semibold leading-6 text-violet-500"
					>
						Portfolio
					</a>
					<a
						href="/posts"
						className="text-xl font-semibold leading-6 text-violet-500"
					>
						Blog
					</a>
					<a
						href="/about"
						className="text-xl font-semibold leading-6 text-violet-500"
					>
						About Me
					</a>
					
					<Popover className="relative">
						<Popover.Button className="flex items-center gap-x-1 text-xl font-semibold leading-6 text-violet-500">
							Much More
							<ChevronDownIcon
								className="h-5 w-5 flex-none text-gray-400"
								aria-hidden="true"
							/>
						</Popover.Button>

						<Transition
							as={Fragment}
							enter="transition ease-out duration-200"
							enterFrom="opacity-0 translate-y-1"
							enterTo="opacity-100 translate-y-0"
							leave="transition ease-in duration-150"
							leaveFrom="opacity-100 translate-y-0"
							leaveTo="opacity-0 translate-y-1"
						>
							<Popover.Panel className="absolute -left-80 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-black shadow-lg ring-1 ring-gray-900/5">
								<div className="p-4">
									{more.map((item) => (
										<div
											key={item.name}
											className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
										>
											<div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
												<item.icon
													className="h-6 w-6 text-violet-500 group-hover:text-indigo-600"
													aria-hidden="true"
												/>
											</div>
											<div className="flex-auto">
												<a
													href={item.href}
													className="block font-semibold text-violet-500"
                                                    target="_blank"
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
											className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 hover:text-pink-900 text-violet-500"
                                            target="_blank"
										>
											<item.icon
												className="h-5 w-5 flex-none text-violet-500"
												aria-hidden="true"
											/>
											{item.name}
										</a>
									))}
								</div>
							</Popover.Panel>
						</Transition>
					</Popover>

				
				</Popover.Group>
			</nav>
			<Dialog
				as="div"
				className="lg:hidden"
				open={mobileMenuOpen}
				onClose={setMobileMenuOpen}
			>
				<div className="fixed inset-0 z-10" />
				<Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
					<div className="flex items-center justify-between">
						<a href="/" className="-m-1.5 p-1.5">
							<span className="sr-only">Sofidev</span>
							<img className="h-8 w-auto" src={profile} alt="" />
						</a>
						<button
							type="button"
							className="-m-2.5 rounded-md p-2.5 text-violet-500"
							onClick={() => setMobileMenuOpen(false)}
						>
							<span className="sr-only">Close menu</span>
							<XMarkIcon className="h-6 w-6" aria-hidden="true" />
						</button>
					</div>
					<div className="mt-6 flow-root">
						<div className="-my-6 divide-y divide-gray-500/10">
							<div className="space-y-2 py-6">
							
								<a
									href="#"
									className="-mx-3 block rounded-lg px-3 py-2 text-xl	 font-semibold leading-7 text-violet-500 hover:bg-gray-50"
								>
									Skills
								</a>
								<a
									href="/about"
									className="-mx-3 block rounded-lg px-3 py-2 text-xl	 font-semibold leading-7 text-violet-500 hover:bg-gray-50"
								>
									About me
								</a>
								<a
									href="#"
									className="-mx-3 block rounded-lg px-3 py-2 text-xl	 font-semibold leading-7 text-violet-500 hover:bg-gray-50"
								>
									Portfolio
								</a>
								<a
									href="/posts"
									className="-mx-3 block rounded-lg px-3 py-2 text-xl	 font-semibold leading-7 text-violet-500 hover:bg-gray-50"
								>
									Blog
								</a>
							</div>
                            <Disclosure as="div" className="-mx-3">
									{({ open }) => (
										<>
											<Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-xl font-semibold leading-7 text-violet-500 hover:bg-gray-50">
												Much more
												<ChevronDownIcon
													className={classNames(
														open ? "rotate-180" : "",
														"h-5 w-5 flex-none"
													)}
													aria-hidden="true"
												/>
											</Disclosure.Button>
											<Disclosure.Panel className="mt-2 space-y-2">
												{[...more, ...callsToAction].map((item) => (
													<Disclosure.Button
														key={item.name}
														as="a"
														href={item.href}
                                                        target="_blank"
														className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-violet-500 hover:bg-gray-50"
													>
														{item.name}
													</Disclosure.Button>
												))}
											</Disclosure.Panel>
										</>
									)}
								</Disclosure>
						</div>
					</div>
				</Dialog.Panel>
			</Dialog>
		</header>
	);
}
