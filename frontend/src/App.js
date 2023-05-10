import { Col } from 'reactstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import Phq9Form from './components/Phq9Form'
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
        <>
            <Header />
            <main className='py-3'>
                <Col>
                    <h1>PHQ-9 (Patient Health Questionaire-9)</h1>
                </Col>
            </main>
            <Phq9Form onSubmit={handleSubmit} />
            <div className='assessment-list'>
                <h2>Prior Assessments:</h2>
                {submissionList}
            </div>
            <Footer />
        </>
    )
}

export default App
