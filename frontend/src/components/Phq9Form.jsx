import { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import SubmitModal from './SubmitModal'
// import { validatePhq9Form } from '../utils/validatePhq9Form'

const Phq9Form = ({ onSubmit }) => {
    const [answers, setAnswers] = useState({})
    const [showModal, setShowModal] = useState(false)
    const toggleModal = () => {
        setShowModal(!showModal)
    }

    const questionsphq9 = [
        {
            id: 1,
            text: '1. Little interest or pleasure in doing things.',
            answers: [
                { text: 'Not at all', value: '0' },
                { text: 'Several days', value: '1' },
                { text: 'More than half the days', value: '2' },
                { text: 'Nearly every day', value: '3' },
            ],
        },
        {
            id: 2,
            text: '2. Feeling down, depressed, or hopeless.',
            answers: [
                { text: 'Not at all', value: '0' },
                { text: 'Several days', value: '1' },
                { text: 'More than half the days', value: '2' },
                { text: 'Nearly every day', value: '3' },
            ],
        },
        {
            id: 3,
            text: '3. Trouble falling or staying asleep, or sleeping too much.',
            answers: [
                { text: 'Not at all', value: '0' },
                { text: 'Several days', value: '1' },
                { text: 'More than half the days', value: '2' },
                { text: 'Nearly every day', value: '3' },
            ],
        },
        {
            id: 4,
            text: '4. Feeling tired or having little energy.',
            answers: [
                { text: 'Not at all', value: '0' },
                { text: 'Several days', value: '1' },
                { text: 'More than half the days', value: '2' },
                { text: 'Nearly every day', value: '3' },
            ],
        },
        {
            id: 5,
            text: '5. Poor appetite or overeating.',
            answers: [
                { text: 'Not at all', value: '0' },
                { text: 'Several days', value: '1' },
                { text: 'More than half the days', value: '2' },
                { text: 'Nearly every day', value: '3' },
            ],
        },
        {
            id: 6,
            text: '6. Feeling bad about yourself or that you are a failure or have let yourself or your family down.',
            answers: [
                { text: 'Not at all', value: '0' },
                { text: 'Several days', value: '1' },
                { text: 'More than half the days', value: '2' },
                { text: 'Nearly every day', value: '3' },
            ],
        },
        {
            id: 7,
            text: '7. Trouble concentrating on things, such as reading the newspaper or watching television.',
            answers: [
                { text: 'Not at all', value: '0' },
                { text: 'Several days', value: '1' },
                { text: 'More than half the days', value: '2' },
                { text: 'Nearly every day', value: '3' },
            ],
        },
        {
            id: 8,
            text: '8. Moving or speaking so slowly that other people could have noticed? Or the opposite — being so fidgety or restless that you have been moving around a lot more than usual.',
            answers: [
                { text: 'Not at all', value: '0' },
                { text: 'Several days', value: '1' },
                { text: 'More than half the days', value: '2' },
                { text: 'Nearly every day', value: '3' },
            ],
        },
        {
            id: 9,
            text: '9. Thoughts that you would be better off dead or of hurting yourself in some way.',
            answers: [
                { text: 'Not at all', value: '0' },
                { text: 'Several days', value: '1' },
                { text: 'More than half the days', value: '2' },
                { text: 'Nearly every day', value: '3' },
            ],
        },
    ]

    const handleChange = (e) => {
        setAnswers({ ...answers, [e.target.name]: +e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(answers)
        setShowModal(true)
        setAnswers({})
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Container fluid>
                <Row className='align-items-center justify-content-center'>
                    <Col xs={12} className='text-center'>
                        <h1>PHQ-9 (Patient Health Questionnaire-9)</h1>
                        <h5 style={{ paddingBottom: '10px' }}>
                            Over the last two weeks, how often have you been
                            bothered by any of the following problems?
                        </h5>
                    </Col>
                </Row>
            </Container>
            {questionsphq9.map((question) => (
                <Form.Group key={question.id}>
                    <Form.Label>
                        <h5>{question.text}</h5>
                    </Form.Label>
                    {question.answers.map((answer) => (
                        <Form.Group key={answer.value}>
                            <Form.Check
                                type='radio'
                                name={`question-${question.id}`}
                                value={answer.value}
                                label={answer.text}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    ))}
                </Form.Group>
            ))}
            <Button type='submit'>Submit</Button>
            <SubmitModal showModal={showModal} toggleModal={toggleModal} />
        </Form>
    )
}

export default Phq9Form
