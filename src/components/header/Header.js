import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Header() {
    return (
      <>
      <FontAwesomeIcon className={styles.faIcon} icon={['fab', 'instagram']} />
      <div className={styles.logo}>
      <h1 className={styles.mainTitle}>Alizejka in Wonderland </h1>
      </div>
      </>
    );
  }
  
  export default Header;