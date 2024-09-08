import { IWidgetProps } from "../types/types";

import { WidgetSkeleton } from "./skeletons/WidgetSkeleton";
import "../css/widget.css";

export const Widget = ({ data, loading }: IWidgetProps) => {
  if (loading) return <WidgetSkeleton />;

  const { ip, city, region_code, postal, utc_offset, org } = data;

  return (
    <section className="widget container">
      <article className="info">
        <h2>Ip Address</h2>
        <p>{ip}</p>
      </article>

      <article className="info">
        <h2>Location</h2>
        <p>
          {city}, {region_code} {postal}
        </p>
      </article>

      <article className="info">
        <h2>Timezone</h2>
        <p>UTC {utc_offset}</p>
      </article>

      <article className="info">
        <h2>Isp</h2>
        <p>{org}</p>
      </article>
    </section>
  );
};
