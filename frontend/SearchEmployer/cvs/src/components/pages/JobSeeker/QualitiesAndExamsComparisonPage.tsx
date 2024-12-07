import React from "react";
import "../../../styels/QualitiesAndExamsComparison.css";
import {FaCheckCircle, FaExclamationCircle, FaTimesCircle} from "react-icons/fa";
import {JobSeeker} from "../../../models/JobSeeker.ts";
import {JobPosition} from "../../../models/JobPosition.ts";
import {CircularProgress} from "../../general/progress/CircularProgress.tsx";


const getMatchIcon = (percentage: number) => {
    if (percentage >= 90) return <FaCheckCircle className="icon-success"/>;
    if (percentage >= 50) return <FaExclamationCircle className="icon-warning"/>;
    return <FaTimesCircle className="icon-fail"/>;
};

type QualitiesAndExamsComparisonProps = {
    jobSeeker: JobSeeker;
    jobPosition: JobPosition;
};

const QualitiesAndExamsComparisonPage: React.FC<QualitiesAndExamsComparisonProps> = ({
                                                                                         jobSeeker,
                                                                                         jobPosition,
                                                                                     }) => {
    const calculateMatch = (
        seeker: { score: number, name: string }[],
        required: { score: number, name: string }[]
    ) => {
        const matches = required.map((req) => {
            const match = seeker.find((s) => s.name >= req.name);
            return match ? Math.min(100, (match.score / req.score) * 100) : 0;
        });

        const totalMatch = Math.round(
            matches.reduce((acc, curr) => acc + curr, 0) / required.length
        );

        return {matches, totalMatch};
    };

    const examMatch = calculateMatch(jobSeeker.examResults, jobPosition.requiredExamResults);
    const qualityMatch = calculateMatch(
        jobSeeker.qualities,
        jobPosition.requiredQualities
    );

    return (
        <div className="comparison-page">
            <h1>{jobSeeker.name} as {jobPosition.title}</h1>

            <div className="match-section">
                <div className="match-card">
                    <h2>Experience</h2>
                    <ul>
                        {jobPosition.requiredExamResults.map((requiredExam, index) => {
                            const matchingExam = jobSeeker.examResults.find(
                                (exam) => exam.name >= requiredExam.name
                            );
                            const matchPercent = matchingExam
                                ? Math.round((matchingExam.score / requiredExam.score) * 100)
                                : 0;

                            return (
                                <li key={index}>
                                    {getMatchIcon(matchPercent)} {requiredExam.name} - {matchingExam ? matchingExam.score : 0}/{requiredExam.score} {matchPercent}%
                                </li>
                            );
                        })}
                    </ul>
                </div>

                <div className="circular-progress-wrapper">
                    <CircularProgress percentage={qualityMatch.totalMatch} label="Experience"/>
                </div>

                <div className="match-card">
                    <div className="match-card-content">
                        <h2>Qualities</h2>
                        <ul>
                            {jobPosition.requiredQualities.map((requiredQuality, index) => {
                                const matchingQuality = jobSeeker.qualities.find(
                                    (quality) => quality.name >= requiredQuality.name
                                );
                                const matchPercent = matchingQuality
                                    ? Math.round((matchingQuality.score / requiredQuality.score) * 100)
                                    : 0;

                                return (
                                    <li key={index}>
                                        {getMatchIcon(matchPercent)} {requiredQuality.name} - {matchingQuality ? matchingQuality.score : 0}/{requiredQuality.score} {matchPercent}%
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>

                <div className="circular-progress-wrapper">
                    <CircularProgress percentage={examMatch.totalMatch} label="Quality"/>
                </div>

                <div className="circular-progress-wrapper">
                    <CircularProgress
                        percentage={Math.round((examMatch.totalMatch + qualityMatch.totalMatch) / 2)}
                        label="Overall"/>
                </div>

            </div>
        </div>
    );
};

export default QualitiesAndExamsComparisonPage;
