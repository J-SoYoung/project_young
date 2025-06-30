import { Link } from "react-router-dom";
import styles from '../styles/noteSectionList.module.css'

type Props = {
  title: string;
  moreToLink: string;
  description: string;
  posts: {
    id: string;
    date: string;
    title: string;
    link: string;
  }[];
};

export const NoteSectionList = ({
  title,
  moreToLink,
  description,
  posts
}: Props) => {
  return (
    <section className={styles.section}>
      <div className={styles.sectionTitle}>
        <h2>
          <span>{title}</span>
          <Link to={moreToLink}>모두 보기</Link>
        </h2>
        <p>{description}</p>
      </div>

      <ul className={styles.notesList}>
        {posts.map((post) => (
          <li key={post.id}>
            <time>{post.date}</time>
            <p>
              <Link to={post.link}>{post.title}</Link>
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};
