import React from 'react';
import '../../styles/pages/ProfilePage.css';
import {FaStar, FaGraduationCap, FaCode, FaUsers} from 'react-icons/fa'; // Icons for qualities

const ProfilePage: React.FC = () => {
    const user = {
        name: 'John Doe',
        image: 'src/assets/960x0.webp', // Replace with actual user image
        qualities: [
            {title: 'Problem Solving', score: 85, icon: <FaCode/>},
            {title: 'Teamwork', score: 75, icon: <FaUsers/>},
            {title: 'Technical Skills', score: 90, icon: <FaGraduationCap/>},
            {title: 'Communication', score: 80, icon: <FaStar/>},
        ],
        testScores: [
            {title: 'Coding Test', score: 88},
            {title: 'Logic Test', score: 92},
            {title: 'Communication Test', score: 79},
            {title: 'Team Collaboration Test', score: 84},
        ],
        suggestedCourses: [
            {title: 'Advanced Problem Solving', link: '#'},
            {title: 'Effective Communication Skills', link: '#'},
            {title: 'Team Building Strategies', link: '#'},
        ],
    };

    return (
        <div className="profile-page">
            <div className="profile-header">
                <img src={user.image} alt="Profile" className="profile-picture"/>
                <h1 className="profile-name">{user.name}</h1>
            </div>

            <div className="profile-section">
                <h2 className="section-title">Qualities</h2>
                <div className="qualities-grid">
                    {user.qualities.map((quality, index) => (
                        <div key={index} className="quality-card">
                            <div className="quality-icon">{quality.icon}</div>
                            <h3 className="quality-title">{quality.title}</h3>
                            <p className="quality-score">{quality.score}%</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="profile-section">
                <h2 className="section-title">Test Scores</h2>
                <div className="test-scores-grid">
                    {user.testScores.map((test, index) => (
                        <div key={index} className="test-score-card">
                            <h3 className="test-title">{test.title}</h3>
                            <p className="test-score">{test.score}%</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="profile-section">
                <h2 className="section-title">Suggested Courses</h2>
                <ul className="courses-list">
                    {user.suggestedCourses.map((course, index) => (
                        <li key={index} className="course-item">
                            <a href={course.link} className="course-link">
                                {course.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ProfilePage;
