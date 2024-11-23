import { useEffect, useState } from "react";
import {
  LiteracyCardsContainer,
  LiteracyCard,
  LiteracyImage,
  LiteracyLink,
} from "./LiteracyCardsStyles";

export default function LiteracyCards() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/faq-literacy/literacy-cards/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setCards(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <LiteracyCardsContainer>
      {cards.map((card) => (
        <LiteracyCard key={card.id}>
          <LiteracyImage src={card.image_url} alt={card.title} />
          <LiteracyLink
            href={card.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {card.title}
          </LiteracyLink>
        </LiteracyCard>
      ))}
    </LiteracyCardsContainer>
  );
}
