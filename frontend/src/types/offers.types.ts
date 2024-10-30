enum OfferStatus {
  OPEN = "OPEN",
  CLOSED = "CLOSED",
}

export interface OfferDto {
  id: number;
  title: string;
  description: string;
  ownerId: number;
  salary: string;
  requirements: string[];
  location: string;
  modality: string;
  status: OfferStatus;
  creationDate: string;
  contractType: string;
  workDay: string;
  companyName: string;
  companyDescription: string;
}
