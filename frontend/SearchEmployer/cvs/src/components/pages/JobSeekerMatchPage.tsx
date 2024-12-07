import {useState} from "react";

import "../../styels/JobSeekerMatchPage.css";
import {Population, Positions} from "../../dal/dal.ts";
import JobSeekerCard from "../general/cards/JobSeekerCard.tsx";


const JobSeekerMatchPage = () => {
    const [selectedPosition, setSelectedPosition] = useState(Positions[0]);
    const [currentSeekerIndex, setCurrentSeekerIndex] = useState(0);

    const handlePositionChange = (event: any) => {
        const selectedJob = Positions.find((position) => position.title === event.target.value);
        if (!selectedJob) return;
        setSelectedPosition(selectedJob);
        setCurrentSeekerIndex(0);
    };

    const sortedSeekers = Population
        .map((seeker) => ({
            seeker: seeker,
            matchPercentage: seeker.getMatchPercentage(selectedPosition),
        }))
        .sort((a, b) => b.matchPercentage - a.matchPercentage);

    const currentSeeker = sortedSeekers[currentSeekerIndex];

    return (
        <div className="container">
            <div className="header">
                <h1>Select Job Position</h1>
                <select
                    className="position-select"
                    onChange={handlePositionChange}
                    value={selectedPosition.title}
                >
                    {Positions.map((position) => (
                        <option key={position.title} value={position.title}>
                            {position.title}
                        </option>
                    ))}
                </select>
            </div>

            <div className="slider-wrapper">
                {sortedSeekers.length === 0 ? (
                    <p className="no-results">No job seekers available for this position</p>
                ) : (
                    <JobSeekerCard seeker={currentSeeker.seeker} matchPercentage={currentSeeker.matchPercentage}/>
                )}
            </div>

            <div className="navigation-buttons">
                <button
                    disabled={currentSeekerIndex === 0}
                    onClick={() => setCurrentSeekerIndex((prev) => Math.max(0, prev - 1))}
                >
                    Previous
                </button>
                <button
                    disabled={currentSeekerIndex === sortedSeekers.length - 1}
                    onClick={() => setCurrentSeekerIndex((prev) => Math.min(sortedSeekers.length - 1, prev + 1))}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default JobSeekerMatchPage;
