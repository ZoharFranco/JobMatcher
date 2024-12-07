import React from "react";
import {FaCheckCircle, FaTimesCircle, FaHourglassHalf} from "react-icons/fa";
import {ExamResult} from "../../../models/ExamResult.ts";


type Props = {
    name: string;
    results: ExamResult[];
};

const ExamResultsPage: React.FC<Props> = ({name, results}) => {
    const getStatusIcon = (status: string) => {
        switch (status) {
            case "Pass":
                return <FaCheckCircle className="status-icon status-pass"/>;
            case "Fail":
                return <FaTimesCircle className="status-icon status-fail"/>;
            case "Pending":
                return <FaHourglassHalf className="status-icon status-pending"/>;
            default:
                return null;
        }
    };

    return (
        <div className="exam-results-container">
            <h1 className="exam-results-title">{name}'s Exam Results</h1>
            <div className="exam-results-cards">
                {results.map((result, index) => (
                    <div className="exam-card" key={index}>
                        <div className="exam-card-header">
                            <h2>{result.name}</h2>
                            {getStatusIcon(result.status)}
                        </div>
                        <div className="exam-card-body">
                            <p><strong>Score:</strong> {result.score}</p>
                            <p><strong>Status:</strong> {result.status}</p>
                            <p><strong>Date:</strong> {result.date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExamResultsPage;
