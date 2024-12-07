import {ExamResult} from "./ExamResult.ts";
import {QualityResult} from "./QualityResult.ts";
import {JobSeeker} from "./JobSeeker.ts";


export class JobPosition {
    title: string;
    requiredExamResults: ExamResult[];
    requiredQualities: QualityResult[];

    constructor(title: string, requiredExamResults: ExamResult[], requiredQualities: QualityResult[]) {
        this.title = title;
        this.requiredExamResults = requiredExamResults;
        this.requiredQualities = requiredQualities;
    }


    getRequiredExams() {
        return this.requiredExamResults;
    }


    getRequiredQualities() {
        return this.requiredQualities;
    }


    checkMatch(jobSeeker: JobSeeker): string {

        const passedRequiredExams = this.requiredExamResults.every(reqExam =>
            jobSeeker.getExamResults().some(exam => exam.name === reqExam.name && exam.score >= reqExam.score)
        );


        const hasRequiredQualities = this.requiredQualities.every(reqQuality =>
            jobSeeker.getQualityResults().some(quality => quality.name === reqQuality.name && quality.score >= reqQuality.score)
        );

        if (passedRequiredExams && hasRequiredQualities) {
            return 'Job seeker matches the position requirements';
        } else {
            return 'Job seeker does not match the position requirements';
        }
    }
}


