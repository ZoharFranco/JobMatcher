import {jobSeeker, Population, position} from "./dal.ts";

// Utility function to create datasets for exams and qualities
function createDataset(label: string, values: number[], color: string): {
    label: string,
    data: number[],
    backgroundColor: string
} {
    return {
        label,
        data: values,
        backgroundColor: color,
    };
}

// Extracting subjects dynamically from the job seeker, position, and population
const getSubjects = (items: { name: string }[]) => items.map(item => item.name);

// Job Seeker exam results and qualities scores
const jobSeekerExams = jobSeeker.examResults.map(exam => exam.score);
const jobSeekerQualities = jobSeeker.qualities.map(quality => quality.score);

// Position exam results and qualities scores
const positionExams = position.requiredExamResults.map(exam => exam.score);
const positionQualities = position.requiredQualities.map(quality => quality.score);

// Population exam results and qualities scores
const populationExams = Population.map(seeker => seeker.examResults.map(exam => exam.score));
const populationQualities = Population.map(seeker => seeker.qualities.map(quality => quality.score));

// Dynamically get the labels for exams and qualities
const examLabels = getSubjects(jobSeeker.examResults); // Dynamic exam subjects
const qualityLabels = getSubjects(jobSeeker.qualities); // Dynamic quality subjects

// Create datasets for each graph
const examScoresDataSet = createDataset("Job Seeker Exam Scores", jobSeekerExams, "#FF5733");
const positionScoresDataSet = createDataset("Position Exam Scores", positionExams, "#3357FF");
const populationExamDataSet = createDataset("Population Exam Scores", populationExams.flat(), "#FFBF00");

const qualityScoresDataSet = createDataset("Job Seeker Quality Scores", jobSeekerQualities, "#33FF57");
const positionQualityDataSet = createDataset("Position Quality Scores", positionQualities, "#FFD700");
const populationQualityDataSet = createDataset("Population Quality Scores", populationQualities.flat(), "#00FFFF");

// Create the data object for the exams graph
export const examData: {
    name: string,
    labels: string[],
    datasets: { label: string, data: number[], backgroundColor: string }[]
} = {
    labels: examLabels, // Dynamic subjects from exams
    name: "Exams",
    datasets: [
        examScoresDataSet,
        positionScoresDataSet,
        populationExamDataSet,
    ]
};

// Create the data object for the qualities graph
export const qualityData: {
    name: string
    labels: string[],
    datasets: { label: string, data: number[], backgroundColor: string }[]
} = {
    name: "Qualities",
    labels: qualityLabels, // Dynamic subjects from qualities
    datasets: [
        qualityScoresDataSet,
        positionQualityDataSet,
        populationQualityDataSet,
    ]
};

