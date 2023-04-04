import styles from './Article.module.scss'

function Article() {
    return (
      <div>
      <div className={styles.titlebox}>
      <h1 className={styles.title}>Lorem ipsum</h1>
      </div>
      <div className={styles.contentbox}>
      <h1 className={styles.content}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
           Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h1>
      </div>
      </div>
      

    );
  }
  
  export default Article;