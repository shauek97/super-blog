import styles from './Header.module.scss';

function Header() {
    return (
      <div className={styles.logo}>
      <h1 className={styles.mainTitle}>Alizejka in Wonderland</h1>
      </div>
    );
  }
  
  export default Header;