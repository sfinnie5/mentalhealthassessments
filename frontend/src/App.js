import { Col } from 'reactstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import Phq9Form from './components/Phq9Form'

const App = () => {
    return (
        <>
            <Header />
            <main className='py-3'>
                <Col>
                    <h1>PHQ-9 (Patient Health Questionaire-9)</h1>
                </Col>
            </main>
            <Phq9Form />
            <Footer />
        </>
    )
}

export default App
