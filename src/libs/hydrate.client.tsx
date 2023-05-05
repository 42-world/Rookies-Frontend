"use client";

import {
  Hydrate as ReactQueryHydrate,
  HydrateProps,
} from "@tanstack/react-query";

function Hydrate(props: HydrateProps) {
  return <ReactQueryHydrate {...props} />;
}

export default Hydrate;
