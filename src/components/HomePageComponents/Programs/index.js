import { Card } from "./styles";
import { ProgramsContainer, ProgramsList } from "./styles";
import { useEffect, useState } from "react";

const URL = 'https://wai-django-final-b9968118d906.herokuapp.com/api/programs/';

function Programs() {
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setPrograms(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);


  return (
    <ProgramsContainer>
      <h1>ქალების გაძლიერების პროგრამები</h1>
      <ProgramsList>
        {programs.map((program) => (
          <Card color={program.color}>
          <img alt="program description" src={program.image_url} />
          <p>{program.description}</p>
          </Card>
          ))}
      </ProgramsList>
    </ProgramsContainer>
  );
}

export default Programs;
