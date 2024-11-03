import ProgramCard from "./ProgramCard";
import { ProgramsContainer, ProgramsList } from "./styles";
import AI from "../../../assets/images/womenai.png";
import USAID from "../../../assets/images/usaid.png";
import UKR from "../../../assets/images/ukr.png";
import MENTOR from "../../../assets/images/mentorship.png";

function Programs() {
  return (
    <ProgramsContainer>
      <h1>ქალების გაძლიერების პროგრამები</h1>
      <ProgramsList>
        <ProgramCard
          img={USAID}
          text={
            "1500 ქალის გადამზადება ტექნოლოგიებში – უმსხვილესი პროექტი BTU-ში USAID-თან პარტნიორობით ხორციელდება;"
          }
          color={"#FC4B58"}
        />
        <ProgramCard
          img={AI}
          text={
            "Women in AI-ის ფარგლებში, მთელი საქართველოს მასშტაბით 200 ქალი შეირჩა და  9 თვის განმავლობაში ხელოვნურ ინტელექტისა და ვებ-დეველოპმენტის მიმართულებებით გადამზადა."
          }
          color={"#070B80"}
        />
        <ProgramCard
          img={UKR}
          text={
            "საქართველოში მცხოვრები უკრაინელი ქალები ტექნოლოგიებს შეისწავლიან. პროექტს-BTU, გაეროს ქალთა ორგანიზაციისა და იაპონიის მთავრობის მხარდაჭერით განახორციელებს."
          }
          color={"#FD007D"}
        />
        <ProgramCard
          img={MENTOR}
          text={
            "ევროკავშირის მიერ მხარდაჭერილი პროექტი „ქალების მენტორობა ტექ პროგრამებში’’ მიზნად ისახავს, სამი ნაკადის განმავლობაში, 1100 ბენეფიციარისა და 320 მენტორის მოზიდვას."
          }
          color={"#000046"}
        />
      </ProgramsList>
    </ProgramsContainer>
  );
}

export default Programs;
