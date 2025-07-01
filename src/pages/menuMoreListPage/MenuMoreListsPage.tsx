import { useParams } from "react-router-dom";

import styles from "./menuMoreListsPage.module.css";
import { getMenuConfig } from "./getMenuConfig";

export const MenuMoreListsPage = () => {
  const { category } = useParams();
  const { title, component, desc } = getMenuConfig(category);

  return (
    <main className={styles.container}>
      <header className={styles.titleContainer}>
        <h1 className="title">{title}</h1>
        <p>{desc}</p>
      </header>
      {component}
    </main>
  );
};
