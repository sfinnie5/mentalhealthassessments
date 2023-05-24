import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Phq9Form from './components/Phq9Form';
import GAD7Form from './components/GAD7Form';
import HomePage from './components/HomePage';
import Table from './components/Table';
import { useState } from 'react';

let nextPhq9Id = 1;
let nextGad7Id = 1;

const App = () => {
  const [phq9Submissions, setPhq9Submissions] = useState([]);
  const [gad7Submissions, setGad7Submissions] = useState([]);

  const handlePhq9Submit = (newAnswers) => {
    const newSubmission = { id: nextPhq9Id++, answers: newAnswers };
    setPhq9Submissions([...phq9Submissions, newSubmission]);
  };

  const handleGad7Submit = (newAnswers) => {
    const newSubmission = { id: nextGad7Id++, answers: newAnswers };
    setGad7Submissions([...gad7Submissions, newSubmission]);
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route
          path='/phq9form'
          element={
            <div>
              <Phq9Form onSubmit={handlePhq9Submit} />
              <div className='assessment-list'>
                <h2 className='text-center'>Prior Assessments:</h2>
                {phq9Submissions.map((sub) => {
                  let total = 0;
                  Object.values(sub.answers).forEach((answer) => {
                    total += answer;
                  });
                  return (
                    <div key={sub.id}>
                      <p>Assessment ID: {sub.id}</p>
                      {Object.entries(sub.answers).map(([questionId, answer]) => (
                        <p key={questionId}>
                          Question {questionId}: {answer}
                        </p>
                      ))}
                      <p>Total: {total}</p>
                    </div>
                  );
                })}
                <Table />
              </div>
            </div>
          }
        />
        <Route
          path='/gad7form'
          element={
            <div>
              <GAD7Form onSubmit={handleGad7Submit} />
              <div className='assessment-list'>
                <h2 className='text-center'>Prior Assessments:</h2>
                {gad7Submissions.map((sub) => {
                  let total = 0;
                  Object.values(sub.answers).forEach((answer) => {
                    total += answer;
                  });
                  return (
                    <div key={sub.id}>
                      <p>Assessment ID: {sub.id}</p>
                      {Object.entries(sub.answers).map(([questionId, answer]) => (
                        <p key={questionId}>
                          Question {questionId}: {answer}
                        </p>
                      ))}
                      <p>Total: {total}</p>
                    </div>
                  );
                })}
                <Table />
              </div>
            </div>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
