export const validatePhq9Form = (answers) => {
  const errors = {};

  questionsphq9.forEach((question) => {
    if (!answers[`question-${question.id}`]) {
      errors[question.id] = 'Please select an answer.';
    }
  });

  return errors;
};
