import Lottie from "lottie-react";
import Lottie404 from "../../assets/404.json";
import styles from "./notFound.module.css";
import { Link } from "react-router-dom";
import { paths } from "../../routers/paths";

export const NotFound = () => {
  // 에러 상태코드가 있으면 메시지에 반영(404/500 등)
  // const err = useRouteError();
  // const isResp = isRouteErrorResponse(err);
  // const status = isResp ? err.status : 404;

  return (
    <main className={styles.wrap} aria-labelledby="nf-title">
      <div className={styles.animBox} aria-hidden="true">
        {Lottie404 ? (
          <Lottie
            animationData={Lottie404}
            loop
            autoplay
            className={styles.anim}
          />
        ) : (
          <div className={styles.fallbackIcon}>😵‍💫</div>
        )}
      </div>
      <h1 id="nf-title" className={styles.title}>
        {status} — Page Not Found
      </h1>
      <p className={styles.desc}>
        요청하신 페이지를 찾을 수 없어요. 주소를 확인하거나 홈으로 돌아가세요.
      </p>

      <div className={styles.cta}>
        <Link
          to={paths.home()}
          className={styles.linkBtn}
          aria-label="홈으로 이동"
        >
          홈으로 가기
        </Link>
      </div>
    </main>
  );
};
