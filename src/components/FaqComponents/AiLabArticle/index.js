import React, { useEffect, useState } from "react";
import {
  ArticleContent,
  ArticleText,
  ArticleLink,
  ArticleList,
  ArticleListItem,
} from "./AiLabArticleStyles";

export default function AiLabArticle() {
  const [articles, setArticles] = useState([]);

  // Fetch data from the backend
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(
          "https://wai-django-final-b9968118d906.herokuapp.com/api/faq-ailab/"
        );
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <ArticleContent>
      <ArticleText>
        BTU AI LAB - ხელოვნური ინტელექტის პირველი რეგიონალური ლაბორატორია. BTU-ს
        სტუდენტებს და ნებისმიერ დაინტერესებულ ადამიანს აქვს საშუალება მსოფლიოს
        წამყვან IT კომპანიებთან ითანამშრომლონ და მათთვის საინტერესო პროდუქტი
        განავითარონ. BTU AI LAB თანამშრომლობს ხელოვნური ინტელექტის
        ბიზნესასოციაცია
        <ArticleLink
          href="https://www.aigeorgia.ge/"
          target="_blank"
          rel="noopener noreferrer"
        >
          AI Georgia-სთან,
        </ArticleLink>
        რომელიც აქტიურად მუშაობს ქვეყანაში ხელოვნური ინტელექტის ეროვნული
        სტრატეგიის შექმნის, AI-ს ქვეყნის სტრატეგიულ სექტორებში და
        ბიზნესინდუსტრიებში ინტეგრაციის, სამეცნიერო კვლევების მხარდაჭერის და
        ინტერნაციონალიზაციის მიმართულებით.
      </ArticleText>
      <ArticleText>
        ბიზნესისა და ტექნოლოგიების უნივერსიტეტის AI LAB-ის ბაზაზე მომზადდა:
      </ArticleText>
      <ArticleList>
        <ArticleListItem>
          BTU-ს სტუდენტის მიერ დაარსებული კომპანია SYSTEM CORP-ის მიერ
          <ArticleLink
            href="https://www.youtube.com/playlist?list=PLLReDJtJiSt_YVw4_VK5QKmyYw-4ZSRkM"
            target="_blank"
            rel="noopener noreferrer"
          >
            ავატარის ვიდეო ლექციები:
          </ArticleLink>
          მეწარმეობის, ტექნოლოგიებისა და ინოვაციების მიმართულებით.
        </ArticleListItem>
      </ArticleList>
      <ArticleText>BTU AI LAB - ის ბაზაზე ჩატარდა:</ArticleText>
      <ArticleList>
        {articles.map((article) => (
          <ArticleListItem key={article.id}>
            {article.link ? (
              <ArticleLink
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {article.title}
              </ArticleLink>
            ) : (
              article.title
            )}
            {article.description && ` - ${article.description}`}
          </ArticleListItem>
        ))}
      </ArticleList>
    </ArticleContent>
  );
}
