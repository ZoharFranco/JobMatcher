import React from "react";
import "../../../styels/JobSeekerCard.css";
import {JobSeeker} from "../../../models/JobSeeker.ts";
import {CircularProgress} from "../progress/CircularProgress.tsx";

interface JobSeekerCardProps {
    seeker: JobSeeker;
    matchPercentage: number;
}

const JobSeekerCard: React.FC<JobSeekerCardProps> = ({seeker, matchPercentage}) => {
    if (!seeker) return null; // Handle cases where no seeker is passed

    // Extract skills (qualities) to display
    const skills = seeker.getQualityResults().map((quality) => `${quality.name} (${quality.score})`);

    // Extract exam results to display
    const examResults = seeker.getExamResults().map((exam) => `${exam.name}: ${exam.score}`);

    return (
        <div className="job-seeker-card">
            <h2>{seeker.name}</h2>
            <div className="details">
                <div className="skills">
                    <strong>Skills:</strong> {skills.length > 0 ? skills.join(", ") : "No skills available"}
                </div>
                <div className="exam-results">
                    <strong>Exam Results:</strong> {examResults.length > 0 ? examResults.join(", ") : "No exams taken"}
                </div>
                <div className="circular-progress-wrapper">
                    <CircularProgress percentage={matchPercentage} label="Match" size={100}/>
                </div>
            </div>
        </div>
    );
};

export default JobSeekerCard;
