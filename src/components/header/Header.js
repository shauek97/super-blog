import styles from './Header.module.scss';

function Header() {
    return (
      <>
      <div className={styles.logo}>
        <h1 className={styles.mainTitle}>ALIZEJKA</h1>
        <h2 className={styles.subTitle}>in Wonderland</h2>
      </div>
      </>
    );
  }
  
  export default Header;