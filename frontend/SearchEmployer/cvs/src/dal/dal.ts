import {JobSeeker} from "../models/JobSeeker.ts";
import {JobPosition} from "../models/JobPosition.ts";


export const jobSeeker = new JobSeeker("John Doe", [
        {name: "Software Engineer General Test", score: 85, status: "Pass", date: "2024-11-01"},
        {name: "Software Engineer Python Test", score: 85, status: "Pass", date: "2024-11-01"},
        {name: "Software Engineer C++ Test", score: 85, status: "Pass", date: "2024-11-01"},
        {name: "Software Engineer Java Test", score: 85, status: "Pass", date: "2024-11-01"},
        {name: "UI/UX React Test", score: 72, status: "Pass", date: "2024-10-25"},
        {name: "UI/UX Angular Test", score: 72, status: "Pass", date: "2024-10-25"},
        {name: "UI/UX Test", score: 72, status: "Pass", date: "2024-10-25"},
        {name: "Data Analyst Test", score: 45, status: "Fail", date: "2024-10-20"},
    ], [
        {name: "Communication", score: 75, date: "2024-10-20"},
        {name: "Problem-solving", score: 85, date: "2024-10-20"},
        {name: "Leadership", score: 65, date: "2024-10-20"},
        {name: "Time Management", score: 80, date: "2024-10-20"},
        {name: "Technical Skills", score: 90, date: "2024-10-20"}]
);


export const position = new JobPosition(
    "Software Developer",
    [
        {name: "Software Engineer Test", score: 55, status: "Pass", date: "2024-11-01"},
        {name: "UI/UX Test", score: 99, status: "Pass", date: "2024-10-25"},
        {name: "Software Engineer C++ Test", score: 44, status: "Pass", date: "2024-11-01"},
    ],
    [
        {name: "Communication", score: 99, date: "2024-10-20"},
        {name: "Time Management", score: 99, date: "2024-10-20"},
        {name: "Technical Skills", score: 95, date: "2024-10-20"}
    ]
);


export const Positions = [new JobPosition(
    "Software Developer",
    [
        {name: "Software Engineer Test", score: 56, status: "Pass", date: "2024-11-01"},
        {name: "UI/UX Test", score: 99, status: "Pass", date: "2024-10-25"},
    ],
    [
        {name: "Communication", score: 99, date: "2024-10-20"},
    ]),
    new JobPosition(
        "Software Developer C++",
        [
            {name: "Software Engineer Test", score: 99, status: "Pass", date: "2024-11-01"},
            {name: "UI/UX Test", score: 99, status: "Pass", date: "2024-10-25"},
            {name: "Data Analyst Test", score: 99, status: "Fail", date: "2024-10-20"},
        ], [
            {name: "Communication", score: 75, date: "2024-10-20"},
        ])
]
export const Population = [
    new JobSeeker("Moshe 1", [
            {name: "Software Engineer Test", score: 99, status: "Pass", date: "2024-11-01"},
            {name: "UI/UX Test", score: 72, status: "Pass", date: "2024-10-25"},
            {name: "Data Analyst Test", score: 45, status: "Fail", date: "2024-10-20"},
        ], [
            {name: "Communication", score: 75, date: "2024-10-20"},
            {name: "Problem-solving", score: 85, date: "2024-10-20"},
            {name: "Leadership", score: 65, date: "2024-10-20"},
            {name: "Technical Skills", score: 90, date: "2024-10-20"}]
    ),
    new JobSeeker("Dodo 1", [
            {name: "Software Engineer Test", score: 99, status: "Pass", date: "2024-11-01"},
            {name: "UI/UX Test", score: 99, status: "Pass", date: "2024-10-25"},
            {name: "Data Analyst Test", score: 99, status: "Fail", date: "2024-10-20"},
        ], [
            {name: "Communication", score: 99, date: "2024-10-20"},
         ]
    ),
    new JobSeeker("Dodo 2", [
            {name: "Software Engineer Test", score: 45, status: "Pass", date: "2024-11-01"},
            {name: "UI/UX Test", score: 72, status: "Pass", date: "2024-10-25"},
            {name: "Data Analyst Test", score: 45, status: "Fail", date: "2024-10-20"},
        ], [
            {name: "Communication", score: 55, date: "2024-10-20"},
            {name: "Problem-solving", score: 85, date: "2024-10-20"},
            {name: "Leadership", score: 65, date: "2024-10-20"},
            {name: "Time Management", score: 80, date: "2024-10-20"},
            {name: "Technical Skills", score: 90, date: "2024-10-20"}]
    ),
    new JobSeeker("Moshe 2", [
            {name: "Software Engineer Test", score: 33, status: "Pass", date: "2024-11-01"},
            {name: "UI/UX Test", score: 33, status: "Pass", date: "2024-10-25"},
            {name: "Data Analyst Test", score: 45, status: "Fail", date: "2024-10-20"},
        ], [
            {name: "Communication", score: 75, date: "2024-10-20"},
            {name: "Problem-solving", score: 85, date: "2024-10-20"},
            {name: "Leadership", score: 65, date: "2024-10-20"},
            {name: "Time Management", score: 80, date: "2024-10-20"},
            {name: "Technical Skills", score: 90, date: "2024-10-20"}]
    )
]
