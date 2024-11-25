export interface ContactInfo {
  workingHours: string;
  phone: {
    number: string;
    label: string;
  };
  email: {
    address: string;
    label: string;
  };
  address: {
    label: string;
    street: string;
    transportInfo: string;
  };
}

export interface ContactInfoState {
  data: ContactInfo | null;
  loading: boolean;
  error: string | null;
}
