import { graphql, useStaticQuery } from 'gatsby';

type Contact = {
  type: ContactType;
  url: string;
};
type ContactType = 'email' | 'github' | 'gitlab' | 'linkedin' | 'twitter';
type Geolocation = {
  city: string;
  country: string;
  countryCode: string;
  lat: number;
  lng: number;
  website: string;
};

type InformationDataQueryResponse = {
  information: {
    contacts: Contact[];
    dateOfBirth: string;
    introduction: string;
    jobTitle: string;
    geolocation: Geolocation;
    nationality: string;
    openToGigs: boolean;
    resumePdfUrlDark: string;
    resumePdfUrlLight: string;
    resumeUrl: string;
  };
};

function useInformationData(): Omit<InformationDataQueryResponse['information'], 'dateOfBirth'> & {
  dateOfBirth: Date;
} {
  const rawData = useStaticQuery<InformationDataQueryResponse>(graphql`
    query InformationData {
      information: informationYaml {
        contacts {
          type
          url
        }
        dateOfBirth
        geolocation {
          city
          country
          countryCode
          lat
          lng
          website
        }
        introduction
        jobTitle
        nationality
        openToGigs
        resumePdfUrlDark
        resumePdfUrlLight
        resumeUrl
      }
    }
  `);

  const dateOfBirth = new Date(rawData.information.dateOfBirth);

  return { ...rawData.information, dateOfBirth };
}

export type { Contact, ContactType, Geolocation, InformationDataQueryResponse };
export default useInformationData;
