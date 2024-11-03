import { Card } from "./styles";

function ProgramCard({ img, text, color }) {
  return (
    <Card color={color}>
      <img alt="program description" src={img} />
      <p>{text}</p>
    </Card>
  );
}

export default ProgramCard;
