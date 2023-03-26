import styles from './Header.module.scss'

function Header() {
    return (
      <div className={styles.logo}>
      <h1 className={styles.mainTitle}>Super Blogas</h1>
      </div>
    );
  }
  
  export default Header;