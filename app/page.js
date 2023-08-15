import styles from './page.module.css'
import PostsPage from './posts/page'

export default function Home() {
  return (
    <main className={styles.main}>
      <PostsPage />
    </main>
  )
}
