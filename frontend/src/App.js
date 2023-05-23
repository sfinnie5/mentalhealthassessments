// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Header from './components/Header'
// import Footer from './components/Footer'
// import Phq9Form from './components/Phq9Form'
// import GAD7Form from './components/GAD7Form'
// import HomePage from './components/HomePage'
// import { useState } from 'react'

// let nextId = 1

// const App = () => {
//     const [submission, setSubmission] = useState([])
//     const handleSubmit = (newAnswers) => {
//         const newSubmission = { id: nextId++, answers: newAnswers }
//         setSubmission([...submission, newSubmission])
//     }
//     const submissionList = submission.map((sub) => (
//         <div key={sub.id}>
//             <p>Assessment ID: {sub.id}</p>
//             {Object.entries(sub.answers).map(([questionId, answer]) => (
//                 <p key={questionId}>
//                     Question {questionId}: {answer}
//                 </p>
//             ))}
//         </div>
//     ))
//     return (
//         <Router>
//             <Header />
//             <Routes>
//                 <Route exact path='/' element={<HomePage />} />
//                 <Route path='/phq9form' element={<Phq9Form onSubmit={handleSubmit} />} />
//                 <Route path='/gad7form' element={<GAD7Form onSubmit={handleSubmit} />} />

//             </Routes>
            
            
//             <div className='assessment-list'>
//                 <h2>Prior Assessments:</h2>
//                 {submissionList}
//             </div>
//             <Footer />
//         </Router>
//     )
// }

// export default App

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react'

import Header from './components/Header'
import Footer from './components/Footer'
import Phq9Form from './components/Phq9Form'
import GAD7Form from './components/GAD7Form'
import HomePage from './components/HomePage'
import AssessmentReview from './components/AssessmentReview' 

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
      <Link to={`/review/${sub.id}`}>Review Assessment</Link>
    </div>
  ))

  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/phq9form' element={<Phq9Form onSubmit={handleSubmit} />} />
        <Route path='/gad7form' element={<GAD7Form onSubmit={handleSubmit} />} />
        <Route path='/review/:id' element={<AssessmentReview submissions={submission} />} />
      </Routes>

      <div className='assessment-list'>
        <h2>Prior Assessments:</h2>
        {submissionList}
      </div>
      <Footer />
    </Router>
  )
}

export default App
