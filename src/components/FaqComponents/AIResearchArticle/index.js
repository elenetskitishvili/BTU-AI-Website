import React, { useEffect, useState } from "react";
import {
  ArticleContent,
  ArticleList,
  ArticleListItem,
  ArticleLink,
} from "../AiLabArticle/AiLabArticleStyles";

export default function AiResearchArticle() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      "https://wai-django-final-b9968118d906.herokuapp.com/api/research-articles/"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch articles");
        }
        return response.json();
      })
      .then((data) => {
        setArticles(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading articles...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const firstFourArticles = articles.slice(0, 4);
  const lastFourArticles = articles.slice(4);

  return (
    <ArticleContent>
      <ArticleList>
        {firstFourArticles.map((article) => (
          <ArticleListItem key={article.id}>
            {article.author && <span> {article.author} - </span>}
            <ArticleLink
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {article.title}
            </ArticleLink>
          </ArticleListItem>
        ))}
      </ArticleList>

      <ArticleList>
        {lastFourArticles.map((article) => (
          <ArticleListItem key={article.id}>
            <ArticleLink
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {article.title}
            </ArticleLink>
            {article.author && <span> - {article.author}</span>}
          </ArticleListItem>
        ))}
      </ArticleList>
    </ArticleContent>
  );
}
