import React from "react";
import {FaCheckCircle, FaTimesCircle, FaStar} from "react-icons/fa";
import {QualityResult} from "../../../models/QualityResult.ts";
import '../../../styels/QualityResultsPage.css'


type Props = {
    name: string;
    results: QualityResult[];
};

const QualityResultsPage: React.FC<Props> = ({name, results}) => {
    const getScoreIcon = (score: number) => {
        if (score >= 90) return <FaStar className="icon neutral"/>;
        if (score >= 75) return <FaCheckCircle className="status-icon status-pass"/>;
        if (score > 55) return <FaTimesCircle className="status-icon status-fail"/>;
        return <FaCheckCircle className="status-icon status-pass"/>;
    };

    return (
        <div className="exam-results-container">
            <h1 className="exam-results-title">{name}'s Quality Results</h1>
            <div className="exam-results-cards">
                {results.map((result, index) => (
                    <div className="exam-card" key={index}>
                        <div className="exam-card-header">
                            <h2>{result.name}</h2>
                            {getScoreIcon(result.score)}
                        </div>
                        <div className="exam-card-body">
                            <p><strong>Score:</strong> {result.score}</p>
                            <p><strong>Date:</strong> {result.date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default QualityResultsPage;
