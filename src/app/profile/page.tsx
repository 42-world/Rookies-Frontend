"use client";

import { useQuery } from "@tanstack/react-query";

import { getMe } from "@/services";
import Image from "next/image";

const Page = () => {
  const { data, isError } = useQuery(["me"], () => getMe(), {
    retry: false,
  });

  return (
    <div>
      <Image src="/blushblush.png" alt="blush" width={100} height={100} />
      {data && (
        <div>
          <h2 style={{ display: "inline-block" }}>{data.nickname}</h2>
          <span> is {data.role}</span>
        </div>
      )}
    </div>
  );
};

export default Page;
