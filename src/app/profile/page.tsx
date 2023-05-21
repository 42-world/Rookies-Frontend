"use client";

import { useQueries, useQuery } from "@tanstack/react-query";

import { getMe, getMyArticles } from "@/services";
import Image from "next/image";

const Page = () => {
  const [{ data: myData }, { data: myArticleData }] = useQueries({
    queries: [
      { queryKey: ["me"], queryFn: () => getMe() },
      {
        queryKey: ["myArticles"],
        queryFn: () => getMyArticles(),
      },
    ],
  });

  return (
    <div>
      <Image src="/blushblush.png" alt="blush" width={100} height={100} />
      {myData && (
        <div>
          <h2 style={{ display: "inline-block" }}>{myData.nickname}</h2>
          <span> is {myData.role}</span>
        </div>
      )}
      <div>
        <h3>내 게시글</h3>
        {myArticleData && (
          <ul>
            {myArticleData.data.map((article: any, index) => (
              <li key={`my-article-${index}`}>{article.title}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Page;
