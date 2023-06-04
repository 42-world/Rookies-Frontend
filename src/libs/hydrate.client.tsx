"use client";

import {
  HydrateProps,
  Hydrate as ReactQueryHydrate,
} from "@tanstack/react-query";

function Hydrate(props: HydrateProps) {
  return <ReactQueryHydrate {...props} />;
}

export default Hydrate;
