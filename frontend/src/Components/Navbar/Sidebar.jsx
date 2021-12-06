import React from "react";
import { HashLink as Link } from 'react-router-hash-link'
import SidebarItem from "./SidebarItems";

const Sidebar = ({ sidebarOn, onSidebarChange, active }) => {

	return (
		<div className={`fixed top-0 left-0 z-50 h-screen overflow-y-scroll border-r-2 w-72 bg-custom-muted duration-500 transform ${(sidebarOn) ? `md:-translate-x-72` : `-translate-x-72`}`}>
			{/* Cross Button */}
			<div
				className="flex flex-row justify-end m-1"
				onClick={() => {
					onSidebarChange()
				}}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="w-10 h-10 p-2 rounded-full text-custom-primary hover:font-black hover:bg-gray-500 hover:bg-opacity-25"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
			</div>

			{/* Logo */}
			<Link to="/#Home">
				<div className="flex flex-row items-center justify-start ml-4 text-custom-secondary">
					<img src={process.env.PUBLIC_URL + '/images/logo/logo.png'} alt="Logo" />
				</div>
			</Link>

			{/* Social icons */}
			<div className="flex flex-row mx-4 mt-2 mb-6 space-x-1">
				<button className="p-2 px-2 bg-gray-700 bg-opacity-50 rounded-full">
					{/* Facebook icon */}
					<svg
						className="w-4 h-4 text-custom-secondary"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						{" "}
						<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
					</svg>
				</button>
				<button className="p-2 px-2 bg-gray-700 bg-opacity-50 rounded-full">
					{/* Twitter icons */}
					<svg
						className="w-4 h-4 text-custom-secondary"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						{" "}
						<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
					</svg>
				</button>
				<button className="p-2 px-2 bg-gray-700 bg-opacity-50 rounded-full">
					{/* Youtube icon */}
					<svg
						className="w-4 h-4 text-custom-secondary"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						{" "}
						<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
					</svg>
				</button>
				<button className="p-2 px-2 bg-gray-700 bg-opacity-50 rounded-full">
					{/* Instagram icon */}
					<svg
						className="w-4 h-4 text-custom-secondary"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						{" "}
						<rect
							x="2"
							y="2"
							width="20"
							height="20"
							rx="5"
							ry="5"
						/>{" "}
						<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />{" "}
						<line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
					</svg>
				</button>
				<div className="w-full"></div>
				<button>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="w-8 h-8 p-2 bg-gray-500 bg-opacity-25 rounded-full text-custom-secondary"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
					</svg>
				</button>
			</div>
			<hr className="my-6 ml-2" />

			<div className="flex flex-col mx-2 space-y-2 text-sm text-left" onClick={() => {
				onSidebarChange()
			}}>
				<SidebarItem title="HOME" section="#Home" active={active === "home"} />
				<SidebarItem title="EVENTS" section="#Events" active={active === "events"} />
				<SidebarItem title="STARTUPS" section="#Startups" active={active === "startups"} />
				<SidebarItem title="TEAM" section="/Team" active={active === "team"} />
				<SidebarItem title="CONTACT" section="#Contact" active={active === "contact"} />
			</div>
		</div>

	)
}

export default Sidebar