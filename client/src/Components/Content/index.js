import React, { useState } from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import classnames from "classnames";

// COMPONENTS
import Technologies from "../Technologies";
import Projects from "../Projects";
import Resume from "../Resume/";

const Content = (props) => {
	const [activeTab, setActiveTab] = useState("1");

	const toggle = (tab) => {
		if (activeTab !== tab) setActiveTab(tab);
	};

	return (
		<div id="content-container">
			<Nav tabs id="tabs-nav">
				<NavItem>
					<NavLink
						className={classnames({ active: activeTab === "1" })}
						onClick={() => {
							toggle("1");
						}}>
						Technologies
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink
						className={classnames({ active: activeTab === "2" })}
						onClick={() => {
							toggle("2");
						}}>
						Projects
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink
						href="https://github.com/estivensal7"
						target="_blank">
						Github
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink
						href="https://www.linkedin.com/in/estiven-salazar/"
						target="_blank">
						Linkedin
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink
						className={classnames({ active: activeTab === "3" })}
						onClick={() => {
							toggle("3");
						}}>
						Resume
					</NavLink>
				</NavItem>
			</Nav>
			<TabContent activeTab={activeTab}>
				<TabPane tabId="1">
					<Technologies />
				</TabPane>
				<TabPane tabId="2">
					<Projects />
				</TabPane>
				<TabPane tabId="3">
					<Resume />
				</TabPane>
			</TabContent>
		</div>
	);
};

export default Content;
