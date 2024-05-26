export interface WindQuestion {
  content: string;
}

export interface WindQuestiondayo {
  question: WindQuestion;
  answers: WindAnswer[];
}

export interface WindIdQuestion {
  id: number;
  content: string;
  answers: WindAnswer[];
}

export interface WindAnswer {
  content: string;
}
export interface WindIdAnswer {
  id: number;
  content: string;
  question_id: number;
}
