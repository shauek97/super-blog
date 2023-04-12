import styles from "./app.module.scss";
import Container from "./components/container/Container";
import Footer from "./components/footer/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

function App() {

  const handleClick = () => {
    window.location.replace('https://www.instagram.com/alizejka/')
  }

  return (
    <main>
      <FontAwesomeIcon onClick={handleClick} className={styles.faIcon} icon={['fab', 'instagram']}/>
      <p className={styles.click}>Click here!</p>
      <Container/>
      <Footer  />
    </main>
  );
}

export default App;
