import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LandingPage from "./components/pages/LandingPage";
import Questions from "./components/pages/Questions.tsx";
import CodingPage from "./components/pages/CodingPage";
import InterviewPage from "./components/pages/InterviewPage";
import ProfilePage from "./components/pages/ProfilePage.tsx";
import Sidebar from "./components/sidebar/Sidebar.tsx";
import './App.css'


const App: React.FC = () => {
    return (
        <Router>
            <Sidebar/>
            <div className="content-container">
                <Routes>
                    <Route path="/" element={<LandingPage/>}/>
                    <Route path="/questions" element={<Questions/>}/>
                    <Route path="/coding/:taskId" element={<CodingPage/>}/>
                    <Route path="/interview" element={<InterviewPage/>}/>
                    <Route path="/profile" element={<ProfilePage/>}/>
                </Routes>
            </div>
        </Router>
    );
};

export default App;
