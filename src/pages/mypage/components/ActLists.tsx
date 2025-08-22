import { MypageActiveListType } from "../../../shared/types/posts";

import styles from "../styles/actLists.module.css";

type ActListsType = {
  title: string;
  emptyText: string;
  lists: MypageActiveListType[]; // 각데이터타입
  handleClickPost: (id: string) => void;
  icon: React.ReactNode;
};

export const ActLists = ({
  title,
  emptyText,
  lists,
  handleClickPost,
  icon
}: ActListsType) => {
  return (
    <div>
      <header className={styles.sectionHead}>{title}</header>
      <ul className={styles.list}>
        {lists.length === 0 && <li className={styles.empty}>{emptyText}</li>}
        {lists.map((l) => (
          <li key={l.id}>
            <button
              className={styles.rowBtn}
              onClick={() => handleClickPost(l.id)}
              aria-label={`${l.id} 좋아요 한 포스트로 이동`}
            >
              <div className={styles.rowText}>
                <span className={styles.rowSub}>{l.subTitle}</span>
                <span className={styles.rowTitle}>
                  {icon}
                  {l.title}
                </span>
                <time className={styles.rowSub}>{l.createdAt}</time>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
