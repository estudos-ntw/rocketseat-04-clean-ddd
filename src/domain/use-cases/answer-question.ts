import { Answer } from "../entities/answer";
import { AnswersRepository } from "../repositories/answers-repository";

interface AnswerQuestionUseCaseRequest {
    questionId: string;
    instrutorId: string;
    content: string;

}

export class AnswerQuestionUseCase {
    constructor(
        private answerRepository: AnswersRepository
    ) { }

    execute({ instrutorId, questionId, content }: AnswerQuestionUseCaseRequest) {
        const answer = new Answer({
            content,
            authorId: instrutorId,
            questionId
        });

        return answer;

    }

}