export interface QuestionAndAnsCreate {
  productId: string;
  question: string;
}

export interface QuestionAndAnsAddQuestion {
  productId: string;
  answer: string;
}

export interface QuestionAndAnsData {
  _id: string;
  question: {
    _id: string;
    by: string;
    question: string;
  };
  answer: {
    by: string;
    ans: string;
    createdAt: Date;
    updatedAt: Date;
  };
  product: {
    _id: string;
    title: string;
    imgUrl: string;
  };
  createdAt: Date;
  updatedAt: Date;
}
