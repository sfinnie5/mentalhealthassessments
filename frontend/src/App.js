import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
    return (
        <>
            <Header />
            <main className='py-3'>
                <Container>
                    <h1>PHQ-9 (Patient Health Questionaire-9)</h1>
                </Container>
            </main>
            <Footer />
        </>
    )
}

export default App;
