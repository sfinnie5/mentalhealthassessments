import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Phq9Form from './components/Phq9Form'
import GAD7Form from './components/GAD7Form'
import HomePage from './components/HomePage'
import Table from './components/Table'
import { useState } from 'react'

let nextId = 1

const App = () => {
    const [submission, setSubmission] = useState([])

    const handleSubmit = (newAnswers) => {
        const newSubmission = { id: nextId++, answers: newAnswers }
        setSubmission([...submission, newSubmission])
    }

    return (
        <Router>
            <Header />
            <Routes>
                <Route exact path='/' element={<HomePage />} />
                <Route
                    path='/phq9form'
                    element={
                        <div>
                            <Phq9Form onSubmit={handleSubmit} />
                            <div className='assessment-list'>
                                <h2 className='text-center'>
                                    Prior Assessments:
                                </h2>
                                {submission.map((sub) => {
                                    let total = 0
                                    Object.values(sub.answers).forEach(
                                        (answer) => {
                                            total += answer
                                        }
                                    )
                                    return (
                                        <div key={sub.id}>
                                            <p>Assessment ID: {sub.id}</p>
                                            {Object.entries(sub.answers).map(
                                                ([questionId, answer]) => (
                                                    <p key={questionId}>
                                                        Question {questionId}:{' '}
                                                        {answer}
                                                    </p>
                                                )
                                            )}
                                            <p>Total: {total}</p>
                                        </div>
                                    )
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
                            <GAD7Form onSubmit={handleSubmit} />
                            <div className='assessment-list'>
                                <h2 className='text-center'>
                                    Prior Assessments:
                                </h2>
                                {submission.map((sub) => {
                                    let total = 0
                                    Object.values(sub.answers).forEach(
                                        (answer) => {
                                            total += answer
                                        }
                                    )
                                    return (
                                        <div key={sub.id}>
                                            <p>Assessment ID: {sub.id}</p>
                                            {Object.entries(sub.answers).map(
                                                ([questionId, answer]) => (
                                                    <p key={questionId}>
                                                        Question {questionId}:{' '}
                                                        {answer}
                                                    </p>
                                                )
                                            )}
                                            <p>Total: {total}</p>
                                        </div>
                                    )
                                })}
                                <Table />
                            </div>
                        </div>
                    }
                />
            </Routes>
            <Footer />
        </Router>
    )
}

export default App
