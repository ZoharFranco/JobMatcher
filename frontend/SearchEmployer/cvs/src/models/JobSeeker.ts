import {ExamResult} from "./ExamResult.ts";
import {QualityResult} from "./QualityResult.ts";
import {JobPosition} from "./JobPosition.ts";

export class JobSeeker {
    name: string;
    examResults: ExamResult[];
    qualities: QualityResult[];

    constructor(name: string, examResults: ExamResult[], qualities: QualityResult[]) {
        this.name = name;
        this.examResults = examResults;
        this.qualities = qualities;
    }


    getExamResults() {
        return this.examResults;
    }


    getQualityResults() {
        return this.qualities;
    }


    getAverageExamScore(): number {
        const totalScore = this.examResults.reduce((acc, result) => acc + result.score, 0);
        return totalScore / this.examResults.length;
    }


    getAverageQualityScore(): number {
        const totalScore = this.qualities.reduce((acc, quality) => acc + quality.score, 0);
        return totalScore / this.qualities.length;
    }


    getExamStatus(): string {
        const passedExams = this.examResults.filter(result => result.status === 'Pass').length;
        const totalExams = this.examResults.length;
        return `Passed ${passedExams} out of ${totalExams} exams`;
    }

    getMatchPercentage(
        jobPosition: JobPosition | null
    ): number {
        // Helper function to calculate average match for exams or qualities
        const calculateScoreMatch = (
            seekerItems: { name: string; score: number }[],
            positionItems: { name: string; score: number }[]
        ): number => {
            if (positionItems.length === 0) return 0;

            let totalMatch = 0;

            positionItems.forEach((positionItem) => {
                const seekerItem = seekerItems.find(
                    (item) => item.name === positionItem.name
                );
                if (seekerItem) {
                    const match = Math.min(seekerItem.score / positionItem.score, 1);
                    totalMatch += match;
                }
            });

            return (totalMatch / positionItems.length) * 100;
        };

        if (jobPosition == undefined) return 0;

        const examMatch = calculateScoreMatch(this.examResults, jobPosition.requiredExamResults);
        const qualityMatch = calculateScoreMatch(
            this.qualities,
            jobPosition.requiredQualities
        );

        const totalMatch = (examMatch + qualityMatch) / 2;
        return Math.round(totalMatch);
    };


    getOverallPerformance(): string {
        const avgExamScore = this.getAverageExamScore();
        const avgQualityScore = this.getAverageQualityScore();

        if (avgExamScore >= 75 && avgQualityScore >= 75) {
            return 'Highly Qualified';
        } else if (avgExamScore >= 60 && avgQualityScore >= 60) {
            return 'Moderately Qualified';
        } else {
            return 'Underqualified';
        }
    }
}
