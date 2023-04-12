import styles from './Article.module.scss'

function Article() {
    return (
      <div>
      <div className={styles.titlebox}>
      <h1 className={styles.title}>LOREM IPSUM</h1>
      <h2 className={styles.date}>03.04.2023</h2>
      </div>
      <div className={styles.contentbox}>
      <p className={styles.content}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
           Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      </div>
      

    );
  }
  
  export default Article;