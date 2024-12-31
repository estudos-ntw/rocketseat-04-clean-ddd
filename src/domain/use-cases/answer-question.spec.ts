import { expect, test } from 'vitest';
import { AnswerQuestionUseCase } from './answer-question';
import { AnswersRepository } from '../repositories/answers-repository';
import { Answer } from '../entities/answer';

const fakeAnswersRepository: AnswersRepository = {
    create: async (answer: Answer) => {
        return;
    }
}

test('create a answer', async () => {
    const answerQuestion = await new AnswerQuestionUseCase(fakeAnswersRepository);

    const answer = answerQuestion.execute({
        questionId: '1',
        instrutorId: '2',
        content: 'Nova resposta'
    });

    expect(answer.content).toEqual('Nova resposta');

});