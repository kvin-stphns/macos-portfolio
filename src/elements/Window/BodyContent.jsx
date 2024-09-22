import React from "react";
// eslint-disable-next-line
import styled from "styled-components";
import theme from "@styles/theme";

const Wrapper = styled.div`
	display: flex;
	flex: 1;
	max-width: 100%;
	min-height: 32rem;
	height: 100%;
	border-radius: 0 0 0.3rem 0.3rem;
	border: 1px solid ${theme.bodyBorder};

	@media (max-width: 768px) {
		min-height: unset;
		height: calc(100% - 2rem);
	}
`;

const BodyContent = props => {
	return <Wrapper>{props.children}</Wrapper>;
};

export default BodyContent;
