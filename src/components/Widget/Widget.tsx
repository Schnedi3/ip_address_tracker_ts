import { IWidgetProps } from "../../types/types";
import { Skeleton } from "../../skeleton/Skeleton";
import styles from "./widget.module.css";

export const Widget = ({ data, isLoading }: IWidgetProps) => {
  const { ip, city, region_code, postal, utc_offset, org } = data;

  if (isLoading) return <Skeleton />;

  return (
    <section className={`container ${styles.widget}`}>
      <article className={styles.info}>
        <h2>Ip Address</h2>
        <p>{ip}</p>
      </article>

      <article className={styles.info}>
        <h2>Location</h2>
        <p>
          {city}, {region_code} {postal}
        </p>
      </article>

      <article className={styles.info}>
        <h2>Timezone</h2>
        <p>UTC {utc_offset}</p>
      </article>

      <article className={styles.info}>
        <h2>Isp</h2>
        <p>{org}</p>
      </article>
    </section>
  );
};
