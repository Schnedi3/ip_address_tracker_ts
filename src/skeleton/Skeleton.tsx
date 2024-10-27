import iconArrow from "../assets/images/icon-arrow.svg";
import styles from "./skeleton.module.css";

export const Skeleton = () => {
  const ipInfo = Array.from({ length: 4 });

  return (
    <section className="container">
      <figure className="header_bg"></figure>

      <article className={styles.header}>
        <h2 className={styles.title}>Loading data</h2>

        <form className={styles.form}>
          <div className={styles.input}>
            <input type="text" placeholder="Loading data" />
          </div>

          <button className={styles.submit}>
            <img src={iconArrow} alt="submit request" />
          </button>
        </form>
      </article>

      <article className={`container ${styles.widget}`}>
        {ipInfo.map((_, index) => (
          <div className={styles.info} key={index}>
            <h2></h2>
            <p></p>
          </div>
        ))}
      </article>
    </section>
  );
};
