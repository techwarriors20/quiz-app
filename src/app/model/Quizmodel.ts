 export interface Quizmodel
{
    id: string;
    quizCategory: string;
    quizName: string;
    questionAnswer: [
      {
        question: string;
        answerType: string;
        answers: [
          {
            answer: string;
            isCorrect: string;
            answerDetail: string
          }
        ]
      }
    ];
    calculation: {
      type: string;
      result: [
        {
          min: 0;
          max: 0;
          resultText: string
        }
      ];
      additionalDisplay: string
    }
  }