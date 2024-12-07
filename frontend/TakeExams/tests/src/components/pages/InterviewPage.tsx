import React from "react";
import {Box, Typography} from "@mui/material";
import VideoChat from "../video/VideoChat";
import ChatPanel from "../panels/ChatPanel";
import CodeEditor from "../editors/CodeEditor";
import QuestionPanel from "../panels/QuestionPanel.tsx";

const InterviewPage: React.FC = () => {


    return (
        <Box sx={{display: "flex", flexDirection: "column", padding: 4}}>
            <Typography variant="h4" sx={{marginBottom: 4}}>
                Live Interview
            </Typography>
            <Box sx={{display: "flex", gap: 2}}>
                <VideoChat/>
                <QuestionPanel/>
            </Box>

            <Box sx={{display: "flex", gap: 2}}>
                <ChatPanel/>
                <CodeEditor/>
            </Box>
        </Box>
    );
};

export default InterviewPage;
