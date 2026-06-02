import FadeUp from '../../components/FadeUp/FadeUp'
import Tag from '../../components/Tag/Tag'
import { blogPosts } from '../../data/blogPosts'
import styles from './Blog.module.css'

const featured = blogPosts.find(p => p.featured)
const rest = blogPosts.filter(p => !p.featured)

export default function Blog() {
  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <FadeUp>
            <span className={`label ${styles.tag}`}>Patient education</span>
            <h1 className={`heading-display ${styles.headline}`}>The TPR Blog</h1>
            <p className={styles.sub}>Evidence-based answers to questions patients actually ask. No jargon, no selling, just clarity.</p>
          </FadeUp>
        </div>
      </section>

      <section className={`section ${styles.main}`}>
        <div className="container">
          {featured && (
            <FadeUp>
              <div className={`card-hover ${styles.featuredCard}`}>
                <div className={styles.featuredMeta}>
                  <Tag label={featured.category} />
                  <span className={styles.meta}>{featured.readTime} · {featured.date}</span>
                </div>
                <h2 className={styles.featuredTitle}>{featured.title}</h2>
                <p className={styles.featuredExcerpt}>{featured.excerpt}</p>
                <span className={styles.readMore}>Read article →</span>
              </div>
            </FadeUp>
          )}

          <div className={styles.grid}>
            {rest.map((post, i) => (
              <FadeUp key={i}>
                <div className={`card-hover ${styles.card}`}>
                  <div className={styles.cardMeta}>
                    <Tag label={post.category} />
                    <span className={styles.meta}>{post.readTime}</span>
                  </div>
                  <h3 className={styles.cardTitle}>{post.title}</h3>
                  <p className={styles.cardExcerpt}>{post.excerpt}</p>
                  <div className={styles.cardFooter}>
                    <span className={styles.date}>{post.date}</span>
                    <span className={styles.readMore}>Read →</span>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
