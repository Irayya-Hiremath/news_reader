import { useEffect, useState } from "react";

export default function SearchForm({ onSearch, source, filterAction }) {
  const [q, setQ] = useState("Technology");
  const [from, setFrom] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [sourceOptions, setSourceOptions] = useState([]);

  const extractSources = (articles) => {
    const uniqueSources = new Set();
    articles?.forEach((article) => {
      uniqueSources?.add(article?.source?.name);
    });
    return Array.from(uniqueSources);
  };

  useEffect(() => {
    setSourceOptions(extractSources(source));
  }, [source]);
  return (
    <div className="bg-transparent backdrop-blur-md fixed top-0 flex flex-wrap p-5 flex-col md:flex-row w-full items-center">
      <div
        className=" md:w-1/6 lg:w-1/6 w-full sm:m-auto    flex title-font font-medium items-center text-gray-900  md:mb-0
      flex-wrap justify-center justify-items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
          viewBox="0 0 24 24"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span className="ml-3 text-xl"> News Aggregator</span>
      </div>
      <nav className=" md:w-5/6 lg:w-5/6 w-full  flex flex-wrap items-center text-base justify-center justify-items-center ">
        <div className="md:mb-0 lg:mb-0 md:w-1/3 lg:w-1/3 w-full mr-2">
          <input
            type="text"
            placeholder="Search articles by key word..."
            value={q}
            onChange={(e) => {
              setQ(e.target.value);
              onSearch(e.target.value, from, sortBy);
            }}
            className="p-2 border rounded mb-2 w-full  "
          />
        </div>
        <div className="md:mb-0 lg:mb-0 md:w-1/4 lg:w-1/4 w-[90%]  flex md:mr-2 lg:mr-2">
          <input
            type="date"
            value={from}
            onChange={(e) => {
              setFrom(e.target.value);
              filterAction(e.target.value, sortBy);
            }}
            placeholder="From Date"
            className="p-2 border rounded mb-2 w-full"
          />
          {from && (
            <button
              onClick={() => {
                setFrom("");

                filterAction("", sortBy);
              }}
              className="mr-2 bg-transparent border-gray-300 rounded-r"
            >
              <svg
                className="w-6 h-6 text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
        </div>
        <div className="md:mb-0 lg:mb-0 md:w-1/4 lg:w-1/4 w-[90%]  flex">
          <select
            value={sortBy}
            onChange={(e) => {
              setSortBy(e.target.value);
              filterAction(from, e.target.value);
            }}
            className="p-2 border rounded mb-2 w-full"
          >
            <option value="">select</option>
            {sourceOptions?.length > 0 ? (
              sourceOptions?.map((el, index) => {
                return (
                  <option key={index} value={el}>
                    {el}
                  </option>
                );
              })
            ) : (
              <option value="">No options</option>
            )}
            {console.log("sourceOptions", sourceOptions)}
          </select>
          {sortBy && (
            <button
              onClick={() => {
                setSortBy("");
                filterAction(from, "");
              }}
              className="mr-2 bg-transparent border-gray-300 rounded-r"
            >
              <svg
                className="w-6 h-6 text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
        </div>
      </nav>
    </div>
  );
}
