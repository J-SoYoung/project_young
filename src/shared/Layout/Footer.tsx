import styles from "./styles/footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <a href="https://github.com" target="_blank">
          GitHub
        </a>{" "}
        · <a href="#">Buy me a coffee</a>
      </div>
      <p>© 2025 DEV.SoYoung. All rights reserved.</p>
    </footer>
  );
};
