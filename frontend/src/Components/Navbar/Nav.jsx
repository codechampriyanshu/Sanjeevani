import React, { useState } from "react"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"

const Nav = ({ active }) => {
	const [sidebarOn, setSidebarOn] = useState(false)
	const toggleSidebar = () => {
		setSidebarOn(!sidebarOn)
	}
	return (
		<>
			<Navbar sidebarOn={sidebarOn} onSidebarChange={toggleSidebar} active={active} />
			<Sidebar sidebarOn={sidebarOn} onSidebarChange={toggleSidebar} active={active} />
		</>
	)
}

export default Nav