import MainPage from "../mainPage/MainPage";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import styles from './Container.module.scss'

function Container() {
    return (
        <div className={styles.container}>
            <Header />
            <MainPage />
            <Footer />
        </div>
    );
  }
  
  export default Container;