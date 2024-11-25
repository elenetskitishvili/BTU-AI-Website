import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  ContactInformation,
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

const INITIAL_STATE = {
  data: null,
  loading: true,
  error: null,
};

function ContactInformation() {
  const [state, setState] = useState(INITIAL_STATE);
  const { data, loading, error } = state;

  useEffect(() => {
    const fetchContactInfo = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/contact-info/");

        if (!response.ok) {
          throw new Error("Failed to fetch contact information");
        }

        const contactData = await response.json();
        setState({
          data: contactData,
          loading: false,
          error: null,
        });
      } catch (err) {
        setState({
          data: null,
          loading: false,
          error: err instanceof Error ? err.message : "An error occurred",
        });
        console.error("Error fetching contact info:", err);
      }
    };

    fetchContactInfo();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <Alert variant="destructive" className="mx-auto max-w-2xl">
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    );
  }

  if (!data) {
    return null;
  }

  return (
    <ContactInformation>
      <InfoText>{data.workingHours}</InfoText>
      <InfoWrapper>
        <ContainerOne>
          <InfoColumn>
            <InfoIcon src={Phone} alt="phone icon" />
            <InfoRow>
              <h5>{data.phone.label}</h5>
              <span href={`tel:${data.phone.number}`}>{data.phone.number}</span>
            </InfoRow>
          </InfoColumn>
          <InfoColumn>
            <InfoIcon src={Message} alt="email icon" />
            <InfoRow>
              <h5>{data.email.label}</h5>
              <Mail href={`mailto:${data.email.address}`}>
                {data.email.address}
              </Mail>
            </InfoRow>
          </InfoColumn>
        </ContainerOne>
        <InfoColumn>
          <InfoIcon src={Location} alt="location icon" />
          <InfoRow>
            <h5>{data.address.label}</h5>
            <LocationTxt>{data.address.street}</LocationTxt>
            <LocationTxt>{data.address.transportInfo}</LocationTxt>
          </InfoRow>
        </InfoColumn>
      </InfoWrapper>
    </ContactInformation>
  );
}

export default ContactInformation;
