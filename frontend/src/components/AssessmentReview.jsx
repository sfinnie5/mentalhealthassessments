import { useParams } from 'react-router-dom';

const AssessmentReview = ({ submissions }) => {
  const { id } = useParams();

  const submission = submissions.find((sub) => sub.id === parseInt(id));

  if (!submission) {
    return <p>Assessment not found</p>;
  }

  return (
    <div>
      <h3>Assessment ID: {submission.id}</h3>
      {Object.entries(submission.answers).map(([questionId, answer]) => (
        <p key={questionId}>
          Question {questionId}: {answer}
        </p>
      ))}
    </div>
  );
};

export default AssessmentReview;
