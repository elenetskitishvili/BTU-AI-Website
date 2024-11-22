import PageTitleSection from "./../ReusableComponents/PageTitleSection";
import React, { useEffect, useState } from "react";
import {
  Section,
  SectionWrapper,
  Title,
  GraduateList,
  GraduateItem,
  GraduateText,
} from "./StudentSuccess.styles";

function SuccessStories() {
  const [cardContent, setCardContent] = useState([]);
  const [graduateSuccess, setGraduateSuccess] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_BASE_URL =
    "https://wai-django-final-b9968118d906.herokuapp.com/success-stories/api";

  useEffect(() => {
    const fetchCardContent = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/card-content/`);
        const data = await response.json();
        setCardContent(data);
      } catch (error) {
        console.error("Error fetching card content:", error);
      }
    };

    const fetchGraduateSuccess = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/graduate-success/`);
        const data = await response.json();
        setGraduateSuccess(data);
      } catch (error) {
        console.error("Error fetching graduate success:", error);
      }
    };

    const fetchData = async () => {
      await Promise.all([fetchCardContent(), fetchGraduateSuccess()]);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="success-stories">
      <PageTitleSection title="წარმატების ისტორიები" />
      <section>
        <h2>Card Content</h2>
        <ul>
          {cardContent.map((card) => (
            <li key={card.id}>
              <img
                src={card.picture}
                alt={card.student_full_name}
                style={{ width: "100px" }}
              />
              <p>Program: {card.program_name}</p>
              <p>Student: {card.student_full_name}</p>
            </li>
          ))}
        </ul>
      </section>

      <Section>
        <SectionWrapper>
          <Title>
            კომპიუტერული მეცნიერებისა და ხელოვნური ინტელექტის ფაკულტეტის
            კურსდამთავრებულთა წარმატება
          </Title>
          <GraduateList>
            {graduateSuccess.map((graduate) => (
              <GraduateItem
                key={graduate.id}
                href={graduate.linkedin_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GraduateText>
                  {graduate.full_name} – {graduate.position} |{" "}
                  {graduate.company}
                </GraduateText>
              </GraduateItem>
            ))}
          </GraduateList>
        </SectionWrapper>
      </Section>
    </div>
  );
}

export default SuccessStories;
