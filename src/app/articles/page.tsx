"use client";

import { ArticleList } from "@/components/article/ArticleList";
import { Suspense } from "react";

const Page = () => {
  return (
    <>
      <h1>Board</h1>
      <section>
        <Suspense fallback={<span>Loading...</span>}>
          <ArticleList />
        </Suspense>
      </section>
    </>
  );
};

export default Page;
