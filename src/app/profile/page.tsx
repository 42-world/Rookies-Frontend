import { getMe } from "@/services";
import { dehydrate } from "@tanstack/query-core";
import { cookies } from "next/headers";
import getQueryClient from "../../libs/getQueryClient";
import Hydrate from "../../libs/hydrate.client";
import { Profile } from "./profile";

export default async function Hydation() {
  const cookieStore = cookies();

  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(["hydrate-me"], () =>
    getMe(cookieStore.toString())
  );
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <Profile />
    </Hydrate>
  );
}
