import FadeUp from '../../components/FadeUp/FadeUp'
import { useLanguage } from '../../contexts/LanguageContext'
import styles from './Blog.module.css'

export default function Blog() {
  const { t } = useLanguage()
  const b = t.blogPage
  const featured = b.posts.find(p => p.featured)
  const rest = b.posts.filter(p => !p.featured)

  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <FadeUp>
            <span className={`label ${styles.tag}`}>{b.heroTag}</span>
            <h1 className={`heading-display ${styles.headline}`}>{b.heroHead}</h1>
            <p className={styles.sub}>{b.heroSub}</p>
          </FadeUp>
        </div>
      </section>

      <section className={`section ${styles.main}`}>
        <div className="container">
          {featured && (
            <FadeUp>
              <article className={styles.featuredCard}>
                <div className={styles.featuredMeta}>
                  <span className={styles.categoryPill}>{featured.category}</span>
                  <span className={styles.meta}>{featured.readTime} · {featured.date}</span>
                </div>
                <h2 className={styles.featuredTitle}>{featured.title}</h2>
                <p className={styles.featuredExcerpt}>{featured.excerpt}</p>
                <a href="/blog" className={styles.readMore}>{b.readMore}</a>
              </article>
            </FadeUp>
          )}

          <div className={styles.grid}>
            {rest.map((post, i) => (
              <FadeUp key={i}>
                <article className={styles.card}>
                  <div className={styles.cardPhoto} />
                  <div className={styles.cardContent}>
                    <span className={styles.categoryPill}>{post.category}</span>
                    <h3 className={styles.cardTitle}>{post.title}</h3>
                    <p className={styles.cardExcerpt}>{post.excerpt}</p>
                    <div className={styles.cardFooter}>
                      <span className={styles.date}>{post.date}</span>
                      <a href="/blog" className={styles.readMore}>{b.readMoreShort}</a>
                    </div>
                  </div>
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
