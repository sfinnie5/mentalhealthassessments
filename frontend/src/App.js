import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Phq9Form from './components/Phq9Form'
// import GAD7Form from './components/GAD7Form'
import HomePage from './components/HomePage'
import { useState } from 'react'

let nextId = 1

const App = () => {
    const [submission, setSubmission] = useState([])
    const handleSubmit = (newAnswers) => {
        const newSubmission = { id: nextId++, answers: newAnswers }
        setSubmission([...submission, newSubmission])
    }
    const submissionList = submission.map((sub) => (
        <div key={sub.id}>
            <p>Assessment ID: {sub.id}</p>
            {Object.entries(sub.answers).map(([questionId, answer]) => (
                <p key={questionId}>
                    Question {questionId}: {answer}
                </p>
            ))}
        </div>
    ))
    return (
        <Router>
            <Header />
            <HomePage />
            <Phq9Form onSubmit={handleSubmit} />
            {/* <GAD7Form onSubmit={handleSubmit} /> */}
            <div className='assessment-list'>
                <h2>Prior Assessments:</h2>
                {submissionList}
            </div>
            <Footer />
        </Router>
    )
}

export default App
