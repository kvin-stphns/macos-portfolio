import React from "react";
import styled from "styled-components";
import HeadingBar from "@elements/Window/HeadingBar";
import Draggable from "react-draggable";
import bg from "../static/1718089548_sequoialight_story.jpg";
import theme from "../styles/theme";
import AlertContent from "../elements/Alert/AlertContent";
import DockContent from "../elements/Dock/DockContent";
import MenuContent from "../elements/Menu/MenuContent";
import { css } from "styled-components";
import { useLocation } from "react-router-dom";

const Wrapper = styled.div`
	display: grid;
	place-items: center;
	height: 100vh;
	width: 100vw;
	background: url(${bg}) no-repeat center center fixed;
	background-size: cover;
	overflow: hidden;
	position: fixed;
	top: 0;
	left: 0;

	@media (max-width: 768px) {
		// display: flex;
		// flex-direction: column;
		// justify-content: center;
		top: -20px;
	}
`;

const dimensionConstraints = css`
	width: 75%;
	min-width: 70%;
	min-height: 25%;
	max-height: 90%;
	max-width: 80%;
`;

const emulatorDimensions = css`
	width: fit-content;
	min-width: 20%;
	min-height: 25%;
	max-height: 75%;
	max-width: 80%;
`;

const Container = styled.div`
	width: fit-content;
	border-radius: 0.6rem;
	box-shadow: ${theme.windowShadow} 0px 1px 4px;
	resize: ${props => (props.resizable ? `both` : `none`)};
	overflow: hidden;
	${props => (!props.isEmulator ? dimensionConstraints : emulatorDimensions)}
	backdrop-filter: blur(1rem);
	background: ${theme.bodyBgWithOpacity};
	height: 80%;
	${props => props.height && `height: ${props.height}`}
	max-height: 90vh;

	@media (max-width: 768px) {
		width: 90%;
		height: ${props => props.height || '70vh'};
		max-height: 60vh;
		margin: 0;
		resize: none;
	}
`;

const Default = props => {
	const { pathname } = useLocation();
	let resizable = false;
	if (props.resizable === undefined) {
		resizable = true;
	}
	const BOUND = 512;
	return (
		<>
			<MenuContent programName={props.programName} />
			<AlertContent
				type={pathname.includes("qemu") ? `qemu` : `hideHelp`}
			/>
			<Wrapper>
				<Draggable
					bounds={{
						top: -128,
						left: -BOUND,
						right: BOUND,
						bottom: BOUND,
					}}
					handle=".heading-bar"
				>
					<Container
						height={props.height}
						resizable={resizable}
						isEmulator={props.heading === "qemu"}
						onContextMenu={e => {
							!props.contextMenu && e.preventDefault();
						}}
					>
						<HeadingBar
							altClassName="heading-bar"
							heading={props.heading}
						/>
						{props.children}
					</Container>
				</Draggable>
			</Wrapper>
			<DockContent />
		</>
	);
};

export default Default;
