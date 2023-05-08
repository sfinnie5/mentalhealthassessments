import { FormGroup, Label, Button, Input } from 'reactstrap'
import { Formik, Form } from 'formik'
import { useState } from 'react'
import SubmitModal from './SubmitModal'

const Phq9Form = ({onSubmit}) => {
    const initialValues = {
        'question-1': '',
        'question-2': '',
        'question-3': '',
        'question-4': '',
        'question-5': '',
        'question-6': '',
        'question-7': '',
        'question-8': '',
        'question-9': '',
    }
    const [phq9Answers, setPhq9Answers] = useState(initialValues)
    const [showModal, setShowModal] = useState(false)
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
    const handleSubmit = () => {
        setPhq9Answers((phq9Answers) => {
            onSubmit(phq9Answers)
            return phq9Answers
        })
        setShowModal(true)
    }

    const closeModal = () => {
        setShowModal(false)
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setPhq9Answers({
            ...phq9Answers,
            [name]: value,
        })
    }

    return (
        <Formik  onSubmit={handleSubmit} initialValues={initialValues}>
            <Form>
                {questionsphq9.map((question) => (
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
                <Button type='submit' onClick={() => handleSubmit(phq9Answers)}>
                    Submit
                </Button>
                {showModal && <SubmitModal onClose={closeModal} />}
            </Form>
        </Formik>
    )
}

export default Phq9Form


