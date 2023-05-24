import { Container, Row, Col, Form, FormGroup, Label, Button, Input } from 'reactstrap'
import { useState } from 'react'
import SubmitModal from './SubmitModal'

const GAD7Form = ({ onSubmit }) => {
    const [answers, setAnswers] = useState({})
    const [showModal, setShowModal] = useState(false)
    const toggleModal = () => {
        setShowModal(!showModal)
    }
    const questionsGad7 = [
        {
            id: 1,
            text: '1. Feeling nervous, anxious, or on edge.',
            answers: [
                { text: 'Not at all', value: '0' },
                { text: 'Several days', value: '1' },
                { text: 'More than half the days', value: '2' },
                { text: 'Nearly every day', value: '3' },
            ],
        },
        {
            id: 2,
            text: '2. Not being able to stop or control worrying.',
            answers: [
                { text: 'Not at all', value: '0' },
                { text: 'Several days', value: '1' },
                { text: 'More than half the days', value: '2' },
                { text: 'Nearly every day', value: '3' },
            ],
        },
        {
            id: 3,
            text: '3. Worrying too much about different things.',
            answers: [
                { text: 'Not at all', value: '0' },
                { text: 'Several days', value: '1' },
                { text: 'More than half the days', value: '2' },
                { text: 'Nearly every day', value: '3' },
            ],
        },
        {
            id: 4,
            text: '4. Trouble relaxing .',
            answers: [
                { text: 'Not at all', value: '0' },
                { text: 'Several days', value: '1' },
                { text: 'More than half the days', value: '2' },
                { text: 'Nearly every day', value: '3' },
            ],
        },
        {
            id: 5,
            text: '5.  Being so restless that it is hard to sit still .',
            answers: [
                { text: 'Not at all', value: '0' },
                { text: 'Several days', value: '1' },
                { text: 'More than half the days', value: '2' },
                { text: 'Nearly every day', value: '3' },
            ],
        },
        {
            id: 6,
            text: '6. Becoming easily annoyed or irritable.',
            answers: [
                { text: 'Not at all', value: '0' },
                { text: 'Several days', value: '1' },
                { text: 'More than half the days', value: '2' },
                { text: 'Nearly every day', value: '3' },
            ],
        },
        {
            id: 7,
            text: '7. Feeling afraid, as if something awful might happen.',
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
                        <h1>GAD-7 (Generalized Anxiety Disorder-7)</h1>
                        <h6 style={{ paddingBottom: '20px' }}>Over the last two weeks, how often have you been bothered by any of the following problems?</h6>
                    </Col>
                </Row>
            </Container>
            {questionsGad7.map((question) => (
                <FormGroup key={question.id}>
                    <h5>{question.text}</h5>
                    {question.answers.map((answer) => (
                        <FormGroup check key={answer.value}>
                            <Label check>
                                <Input
                                    onChange={handleChange}
                                    type='radio'
                                    name={`question-${question.id}`}
                                    value={answer.value}
                                />{' '}
                                {answer.text}
                            </Label>
                        </FormGroup>
                    ))}
                </FormGroup>
            ))}
            <Button type='submit'>Submit</Button>
            <SubmitModal showModal={showModal} toggleModal={toggleModal} />
        </Form>
    )
}

export default GAD7Form
