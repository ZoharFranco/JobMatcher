import React from "react";

import './App.css'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import {FaHome, FaChartBar, FaStar} from "react-icons/fa";
import {BiAbacus, BiCycling} from "react-icons/bi";

import ExamResultsPage from "./components/pages/JobSeeker/ExamResultsPage.tsx";
import QualityResultsPage from "./components/pages/JobSeeker/QualityResultsPage.tsx";
import QualitiesAndExamsComparison from "./components/pages/JobSeeker/QualitiesAndExamsComparisonPage.tsx";
import PerformanceGraphPage from "./components/pages/JobSeeker/PerformanceGraphPage.tsx";

import {jobSeeker, position} from "./dal/dal.ts";
import {examData, qualityData} from "./dal/datasets.ts";
import JobSeekerMatchPage from "./components/pages/JobSeekerMatchPage.tsx";

const App: React.FC = () => {


    return (
        <Router>
            <div className="app-container">
                {/* Navigation Bar */}
                <nav className="navbar">
                    <div className="navbar-logo">JODIY</div>
                    <ul className="navbar-links">
                        <li>
                            <Link to="/match">
                                <FaHome className="navbar-icon"/> Match
                            </Link>
                        </li>
                        <li>
                            <Link to="/examResults">
                                <FaStar className="navbar-icon"/> Experience
                            </Link>
                        </li>
                        <li>
                            <Link to="/qualities">
                                <BiCycling className="navbar-icon"/> Qualities
                            </Link>
                        </li>
                        <li>
                            <Link to="/comparison">
                                <BiAbacus className="navbar-icon"/> Position Comparison
                            </Link>
                        </li>
                        <li>
                            <Link to="/graphs">
                                <FaChartBar className="navbar-icon"/> Population Comparison
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* Main Content */}
                <main className="main-content">
                    <Routes>
                        <Route path="/match"
                               element={<JobSeekerMatchPage/>}/>
                        <Route path="/examResults"
                               element={<ExamResultsPage name={jobSeeker.name} results={jobSeeker.examResults}/>}/>
                        <Route path="/qualities"
                               element={<QualityResultsPage name={jobSeeker.name} results={jobSeeker.qualities}/>}/>
                        <Route path="/comparison"
                               element={<QualitiesAndExamsComparison jobPosition={position} jobSeeker={jobSeeker}/>}/>
                        <Route path="/graphs" element={<PerformanceGraphPage datasets={[examData, qualityData]}/>}/>

                    </Routes>
                </main>
            </div>
        </Router>
    );
};

export default App;
