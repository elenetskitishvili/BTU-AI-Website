import {
  InfoText,
  InfoWrapper,
  InfoColumn,
  InfoRow,
  ContainerOne,
  LocationTxt,
  Mail,
  InfoIcon,
} from "./ContactInformation.styles";
import Phone from "./../../../assets/images/Vector.svg";
import Message from "./../../../assets/images/Vector (1).svg";
import Location from "./../../../assets/images/Location.svg";

function ContactInformaion() {
  return (
    <>
      <InfoText>
        ცხელი ხაზის სამუშაო საათებია ორშაბათიდან პარასკევის ჩათვლით 10:00-18:00
        საათამდე.
      </InfoText>
      <InfoWrapper>
        <ContainerOne>
          <InfoColumn>
            <InfoIcon src={Phone} alt="arrow icon" />
            <InfoRow>
              <h5>ტელეფონი</h5>
              <span href="tel:+995 32 2 195 015">(+995 32) 2 195 015</span>
            </InfoRow>
          </InfoColumn>
          <InfoColumn>
            <InfoIcon src={Message} alt="arrow icon" />
            <InfoRow>
              <h5>ელ.ფოსტა</h5>
              <Mail href="mailto:info@btu.edu.ge">info@btu.edu.ge</Mail>
            </InfoRow>
          </InfoColumn>
        </ContainerOne>
        <InfoColumn>
          <InfoIcon src={Location} alt="arrow icon" />
          <InfoRow>
            <h5>მისამართი</h5>
            <LocationTxt>
              თბილისი 0162, საქართველო ი.ჭავჭავაძის გამზირი N82
            </LocationTxt>
            <LocationTxt>
              ჩვენს კამპუსამდე მოსვლა შესაძლებელია: ავტობუსით #173 #345 #351 ან
              მიკროავტობუსით #449 #450
            </LocationTxt>
          </InfoRow>
        </InfoColumn>
      </InfoWrapper>
    </>
  );
}

export default ContactInformaion;
