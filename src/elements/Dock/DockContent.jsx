/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "@styles/dock.scss";
import TerminalIcon from "@static/terminal.png";
import ContactIcon from "@static/contact.png";
import FinderIcon from "@static/finder.png";
import CodeIcon from "@static/code.png";
import GithubIcon from "@static/github.png";
import FolderIcon from "@static/folder.png";
import NothingIcon from "@static/NothingIcon.png";
import ccp from "@static/CCP777.png";
import { Link } from "react-router-dom";
// import { useDockStore } from "@contexts/Dock/Dock";
import DevopsIcon from "@static/DevopsIcon.png";
import notion from "@static/notion.982x1024.png";

const DockContent = () => {
	return (
		<div className="main-contain">
			<div className="container">
				<div className="dock" style={{ zIndex: 1001 }}>
					<span></span>
					<div className="dock-nav">
						<ul>
							<Link to="/">
								<li
									data-title="Home"
									className="full-width-icon"
								>
									<img
										src={TerminalIcon}
										className="img-fluid"
										alt="mac"
									/>
								</li>
							</Link>
							<Link to="/vscode">
								<li data-title="VS Code">
									<img
										src={CodeIcon}
										className="img-fluid"
										alt="mac"
									/>
								</li>
							</Link>
							{/* <Link to="/git">
								<li data-title="Git Log">
									<img
										src={GithubIcon}
										className="img-fluid"
										alt="mac"
									/>
								</li>
							</Link> */}
							<a href="https://github.com/kvin-stphns" target="_blank">
								<li data-title="Github">
									<img
										src
										={GithubIcon}
										className="img-fluid"
										alt="mac"
									/>
								</li>
							</a>
							<a href="https://kevinstephens.notion.site/Portfolio-747b27d3451a4bbe99d4ca8b7e25aa32" target="_blank">
								<li data-title="Notion Portfolio">
									<img
										src
										={notion}
										className="img-fluid"
										alt="mac"
									/>
								</li>
							</a>
							<a href="https://creative-care-package-strapi.vercel.app/" target="_blank">
								<li data-title="Creative Care Package">
									<img
										src
										={ccp}
										className="img-fluid"
										alt="mac"
									/>
								</li>
							</a>
							{/* <a href="https://github.com/adityassharma-ss/DevOps" target="_blank">
								<li data-title="My DevOps Portal">
									<img
										src
										={DevopsIcon}
										className="img-fluid"
										alt="mac"
									/>
								</li>
							</a> */}
							<div className="separator" />
							<a>
							<Link to="/resume">
								<li data-title="Resume">
									<img
										src={FolderIcon}
										className="img-fluid"
										alt="mac"
									/>
								</li>
							</Link>
							</a>
							<a>
							<Link to="/contact">
							<li data-title="Contact">
									<img
										src={ContactIcon}
										className="img-fluid"
										alt="mac"
									/>
								</li>
							</Link>
							</a>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DockContent;