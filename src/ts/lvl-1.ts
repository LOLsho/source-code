import * as cmn from './common';
import {questionsArr} from "./mock-data/mock-questions-data";


const questionListElem = cmn.find('#questionList');

questionsArr.forEach(item => {
    let questionTextElem = cmn.createElem('div', 'questions__text', item.question);
    let answerElem = cmn.createElem('div', 'questions__answer', item.answer);
    let questionItemElem = cmn.createElem('li', 'questions__question', [questionTextElem, answerElem]);

    questionListElem.appendChild(questionItemElem);
});

