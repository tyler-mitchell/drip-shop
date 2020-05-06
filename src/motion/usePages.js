import * as React from "react";
import { transform, motion } from "framer-motion";
import Product from "../components/Product";
const colors = [
  "#41a6f6",
  "#ef7d57",
  "#38b764",
  "#3b5dc9",
  "#b13e53",
  "#73eff7",
  "#257179",
  "#29366f",
  "#566c86",
  "#333c57",
  "#a7f070",
  "#1a1c2c",
  "#ffcd75",
  "#f4f4f4",
  "#5d275d",
  "#94b0c2",
];

export default function ({ scale = 1, data, PageContent }) {
  const pageCount = data.length;
  const pages = React.useMemo(
    () =>
      data.map((props, i) => (
        <motion.div
          key={i}
          style={{
            height: 180 * scale,
            width: 180 * scale,
            borderRadius: 16,

            border: "8px solid rgba(255, 255, 255, .15)",
            backgroundColor: transform(
              i,
              [0, pageCount - 1],
              ["#fe0689", "#7704ff"]
              // ["#05E5FF", "#FF9605"]
            ),
          }}
        >
          <PageContent index={i} {...props} />
        </motion.div>
      )),
    [scale, data, pageCount]
  );

  return pages;
}
