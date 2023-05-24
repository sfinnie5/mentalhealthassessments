import React from 'react'
import { Container, Row, Col } from 'reactstrap'

const HomePage = () => {
    return (
        <Container fluid>
            <Row className='align-items-center justify-content-center'>
                <Col xs='12'>
                    <h3 className='text-center' >
                        Welcome to Insight Mental Health Group's Assessment
                        Platform
                    </h3>
                    <p className='text-center'style={{ paddingBottom: '10px' }}>
                        Are you experiencing symptoms of depression or anxiety?
                        Do you want to gain insights into your mental health and
                        take the first step towards a happier and healthier
                        life? Look no further than Insight Mental Health Group's
                        Assessment Platform.
                    </p>
                    <h4 className='text-center'>Gain Valuable Insights into Your Mental Health</h4>
                    <p style={{ paddingBottom: '10px' }}>
                        At Insight Mental Health Group, we understand the
                        importance of mental well-being. Our Assessment Platform
                        provides you with an opportunity to assess your mental
                        health prior to your appointment with our dedicated
                        mental health professionals. By taking the PHQ-9
                        (Patient Health Questionnaire-9) and GAD-7 (Generalized
                        Anxiety Disorder-7) assessments, you can begin to
                        understand your symptoms, identify areas of concern, and
                        make informed decisions about your mental health
                        journey.
                    </p>
                    <h4 className='text-center'>How It Works</h4>
                    <ol style={{ paddingBottom: '10px' }}>
                        <li style={{ marginBottom: '10px' }}>
                            Take the Assessments: Start by selecting the
                            assessment you wish to complete, either the PHQ-9 or
                            the GAD-7. These assessments are free, confidential,
                            and designed to provide you with valuable insights.
                        </li>
                        <li style={{ marginBottom: '10px' }}>
                            Answer the Questions: Each assessment consists of a
                            series of questions related to your symptoms and
                            experiences. Take your time to answer honestly and
                            accurately to ensure accurate results.
                        </li>
                        <li style={{ marginBottom: '10px' }}>
                            Get Personalized Results: Upon completing the
                            assessments, you will receive personalized results
                            that indicate the severity of your symptoms and
                            provide valuable information for your mental health
                            evaluation.
                        </li>
                        <li style={{ marginBottom: '10px' }}>
                            Book Your Appointment: Armed with your assessment
                            results, you can schedule an appointment with our
                            compassionate mental health professionals. They will
                            review your results, offer expert guidance, and work
                            with you to develop a personalized treatment plan.
                        </li>
                    </ol>
                    <h4 className='text-center'>Your Mental Well-being Matters</h4>
                    <p>
                        Insight Mental Health Group is dedicated to supporting
                        you on your mental health journey. We believe in
                        providing compassionate care and evidence-based
                        treatments tailored to your unique needs. By taking the
                        first step and completing the assessments, you are
                        empowering yourself to take control of your mental
                        well-being.
                    </p>
                    <p>
                        Take the first step towards a healthier and happier
                        life. Begin your assessments today and let Insight
                        Mental Health Group be your partner in mental wellness.
                    </p>
                    <p style={{ paddingBottom: '50px' }}>
                        Remember, you are not alone. We are here to support you
                        every step of the way.
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export default HomePage
