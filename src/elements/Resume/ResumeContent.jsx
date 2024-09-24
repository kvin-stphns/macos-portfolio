import React from "react";
import styled from "styled-components";
import BodyContent from "@elements/Window/BodyContent";

const Iframe = styled.iframe`
	width: 100%;
	height: 95%;
	border: none;
`;

const ResumeContent = ({ title, content }) => {
    return (
        <BodyContent>
           <iframe src="https://drive.google.com/file/d/1BElXUUIEOLPx-94hRZL7Qz2TsRxH7yU0/preview"
           width="100%"
           height="100%"
           frameborder="0"
           title="Kevin's Resume"
           >
           </iframe>
        </BodyContent>
    );
};

export default ResumeContent;
