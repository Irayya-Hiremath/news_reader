import { useState, useEffect, useCallback, useMemo } from "react";
import SearchForm from "../components/SearchForm";
import { getListOfArticles } from "./api/getArticles";
import NewsCard from "@/components/NewsCard";
import { debounce } from "lodash";
import SkeltonLoader from "@/components/SkeltonLoader";
import { ToastContainer, toast } from "react-toastify";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchArticles = useCallback(
    debounce(async (q, from, sortBy) => {
      setLoading(true);
      if (q !== "") {
        try {
          const params = { q: q ? q : "technology", from, sortBy };
          const response = await getListOfArticles(params);
          if (response.status === 200 && response.data.articles.length > 0) {
            const filterData = response.data.articles.filter(
              (el) => el.title !== "[Removed]"
            );
            setArticles(filterData);
            setFilteredArticles(filterData);
          } else {
            setArticles([]);
            setFilteredArticles([]);
          }
          if(response.status === 200 && response.data.articles.length ===0){
            toast.error("Try diffrent keyword there is no articles realted tho thos keyword");

          }
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      }
      setLoading(false);
    }, 3000),
    []
  );

  useEffect(() => {
    fetchArticles("technology");
  }, [fetchArticles]);

  const formatDate = (isoDate) => isoDate.split("T")[0];

  const filterArticlesBy = (date, source) => {
    const lowerCaseSource = source.toLowerCase();
    let filtered = articles;

    if (date && source) {
      filtered = articles.filter(
        (article) =>
          formatDate(article.publishedAt) === date &&
          article.source.name.toLowerCase() === lowerCaseSource
      );
    } else if (date) {
      filtered = articles.filter(
        (article) => formatDate(article.publishedAt) === date
      );
    } else if (source) {
      filtered = articles.filter(
        (article) => article.source.name.toLowerCase() === lowerCaseSource
      );
    }

    setFilteredArticles(filtered);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const filterArticles = useCallback(
    debounce((date, source) => {
      filterArticlesBy(date, source);
    }, 1000),
    [articles]
  );

  const displayedArticles = useMemo(() => {
    return filteredArticles.length > 0 ? filteredArticles : articles;
  }, [filteredArticles, articles]);

  return (
    <>
      <SearchForm
        onSearch={fetchArticles}
        source={articles}
        filterAction={filterArticles}
      />
        <ToastContainer />

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          {loading ? (
            <SkeltonLoader />
          ) : (
            <div className="flex flex-wrap -m-4">
              {displayedArticles.map((article) => (
                <NewsCard articles={article} key={article.url} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Home;
