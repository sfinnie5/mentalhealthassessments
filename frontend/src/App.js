import { Col } from 'reactstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import Phq9Form from './components/Phq9Form'
import {useState} from 'react'

const App = () => {
    const [phq9Answers, setPhq9Answers] = useState(null);

    const handleFormSubmit = (answers) => {
      setPhq9Answers(answers);
      console.log(answers);
    }
    return (
        <>
            <Header />
            <main className='py-3'>
                <Col>
                    <h1>PHQ-9 (Patient Health Questionaire-9)</h1>
                </Col>
            </main>
            <Phq9Form onSubmit={handleFormSubmit}/>
            <Footer />
        </>
    )
}

export default App
