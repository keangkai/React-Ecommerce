//component
import Header from './components/Header'
import Footer from './components/Footer'
//bootstrap
import { Container } from "react-bootstrap"

function App() {
  return (
    <>
    <Header />
      <main className="py-3">
        <Container>
          <h1>WElcome to proshop</h1>
        </Container>
      </main>
    <Footer />
    </>
  );
}

export default App;
