import React from "react";
import {useNavigate} from "react-router-dom";
import {Box, Typography, Button} from "@mui/material";

const LandingPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <Box sx={{textAlign: "center", padding: 4}}>
            <Typography variant="h3" sx={{marginBottom: 1}}>
                Welcome to the Student Evaluation App
            </Typography>
            <Typography variant="h5" sx={{marginBottom: 4}}>
                Evaluate your experience and qualities by coding challenges and interviews
            </Typography>

            <Typography variant="subtitle2" sx={{marginBottom: 6}}>
                Get exposure to the largest companies in the market || Concentrate your interviewing efforts in one
                place || Courses in order to fit the jobs you want.
            </Typography>

            <Button
                variant="contained"
                onClick={() => navigate("/questions")}
            >
                Get Started
            </Button>
        </Box>
    );
};

export default LandingPage;
