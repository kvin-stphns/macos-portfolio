import React from "react";
import styled from "styled-components";
import BodyContent from "@elements/Window/BodyContent";
// import Iframe from "react-iframe";

const Iframe = styled.iframe`
	height: 100%;
	width: 100%;
	border: none;
`;
const Zone = () => {
	return (
		<BodyContent>
			<Iframe width="560" height="315" src="https://www.youtube.com/embed/7yq49KZ8YaQ?si=rdOA1a-viK13XoL-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></Iframe>
		</BodyContent>
	);
};

export default Zone;
