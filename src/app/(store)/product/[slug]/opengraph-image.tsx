//* Libraries imports
import { ImageResponse } from "next/og";
import colors from "tailwindcss/colors";

//* Local imports
import { env } from "@/data/env";

//* Route segment config
export const runtime = "edge";

export const alt = "Product image";
export const size = {
  width: 1200,
  height: 630
}

export const contentType = "image/png";

import { type Props, getProduct } from "./page";

// Image generation
export default async function OgImage(props: Props) {
  const product = await getProduct(props.params.slug)

  const productImageUrl = new URL(product.image, env.APP_URL).toString();

  return new ImageResponse(
    (
      <div
        style={{
          background: colors.zinc[950],
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <img
          src={productImageUrl}
          alt={alt}
          style={{
            width: "100%",
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}