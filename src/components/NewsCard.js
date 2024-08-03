/* eslint-disable @next/next/no-img-element */
import React from "react";
export default function NewsCard({
 articles
}) {
  return (
    <div className="p-4 md:w-1/3 lg:w-1/4 w-full  ">
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg bg-white shadow-2xl overflow-hidden">
       {articles?.urlToImage&&
        <img
          className="lg:h-48 md:h-36 w-full object-cover object-center"
          src={articles?.urlToImage}
          alt="image"
        />}

        <div className="p-6">
         
          <h1 className="title-font text-xl font-bold  text-gray-900 ">
            {articles?.title}
          </h1>
          <p
            className="text-gray-500
          "
          >
            {articles.description}
          </p>
          <div className="my-2">
          <p
            className="text-gray-500
          "
          >
          <strong> Source </strong>- {articles.source.name}
          </p>
          <p
            className="text-gray-500
          "
          >
           <strong> Published At </strong> - {articles.publishedAt}
          </p>
          </div>
         
          
          <div className="flex items-center flex-wrap my-4">
            <a href={articles.url} target="blank" className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
            Read more
              <svg
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
