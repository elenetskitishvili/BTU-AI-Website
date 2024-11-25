import React, { useEffect, useState } from "react";
import {
  FaqAsideWrapper,
  FaqAsideCard,
  FaqAsideCardImage,
  FaqAsideCardLink,
} from "./FaqAsideStyles";

export default function FaqAside() {
  const [asideData, setAsideData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://wai-django-final-b9968118d906.herokuapp.com/api/faq-aside/"
        );
        const data = await response.json();
        setAsideData(data);
      } catch (error) {
        console.error("Error fetching FAQ aside data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <FaqAsideWrapper>
      {asideData.map((item) => (
        <FaqAsideCard key={item.id}>
          <FaqAsideCardImage src={item.img_url} alt={item.alt_text} />
          <FaqAsideCardLink
            href={item.link_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.title}
          </FaqAsideCardLink>
        </FaqAsideCard>
      ))}
    </FaqAsideWrapper>
  );
}
