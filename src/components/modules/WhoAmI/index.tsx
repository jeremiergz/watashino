import Anchor from '@/components/common/Anchor';
import Button from '@/components/common/Button';
import { SVGProps } from '@/components/common/SVG';
import useInformationData, { Contact, ContactType } from '@/components/hooks/data/useInformationData';
import useSiteMetadata from '@/components/hooks/data/useSiteMetadata';
import GitHubIcon from '@/components/svgs/contacts/GitHub';
import GitLabIcon from '@/components/svgs/contacts/GitLab';
import LinkedInIcon from '@/components/svgs/contacts/LinkedIn';
import TwitterIcon from '@/components/svgs/contacts/Twitter';
import HappyIcon from '@/components/svgs/emojis/Happy';
import SadIcon from '@/components/svgs/emojis/Sad';
import CanadaIcon from '@/components/svgs/flags/Canada';
import FranceIcon from '@/components/svgs/flags/France';
import USAIcon from '@/components/svgs/flags/USA';
import DownloadIcon from '@/components/svgs/misc/Download';
import clsx from 'clsx';
import { differenceInYears } from 'date-fns';
import { StaticImage } from 'gatsby-plugin-image';
import React, { useMemo } from 'react';

const contactIconsMapping: Record<Exclude<ContactType, 'email'>, React.ComponentType<SVGProps>> = {
  github: GitHubIcon,
  gitlab: GitLabIcon,
  linkedin: LinkedInIcon,
  twitter: TwitterIcon,
};

const flagsIconsMapping: Record<string, React.ComponentType<SVGProps>> = {
  CAN: CanadaIcon,
  FRA: FranceIcon,
  USA: USAIcon,
};

function WhoAmI({ className, ...rest }: WhoAmIProps): JSX.Element {
  const { contacts, dateOfBirth, geolocation, introduction, jobTitle, nationality, openToGigs, resumeUrl } =
    useInformationData();
  const { authorName } = useSiteMetadata();

  const { email, socials } = contacts.reduce(
    (acc, c) => {
      if (c.type !== 'email') {
        acc.socials.push(c);
      } else {
        acc.email = c;
      }
      return acc;
    },
    { email: null, socials: [] } as { email: Contact; socials: Contact[] },
  );

  const age = useMemo(() => differenceInYears(new Date(), dateOfBirth), [dateOfBirth]);
  const emailAddress = email.url.replace('mailto:', '');

  const FlagIcon = useMemo(() => flagsIconsMapping[geolocation.countryCode], [geolocation.countryCode]);

  return (
    <section className={clsx(className, 'flex flex-col items-stretch')} {...rest}>
      <div className="flex w-full bg-cyan-600 px-4 py-4 pt-8 md:max-h-[236px] md:pt-4 lg:rounded-t-2xl">
        <div className="flex w-full flex-col-reverse md:flex-row">
          <StaticImage
            alt="Profile Picture"
            backgroundColor="#1f2937"
            className="m-auto -mb-16 mt-4 h-56 w-56 rounded-full shadow-xl md:mb-0 md:ml-10 md:mt-10"
            height={224}
            loading="eager"
            placeholder="blurred"
            quality={100}
            src="../../../../content/assets/profile.png"
            width={224}
          />
          <div className="flex flex-grow flex-col items-center justify-center text-center md:h-full">
            <h1 className="text-3xl font-bold text-gray-100 md:text-4xl">{authorName}</h1>
            <h2 className="mt-4 mb-3 text-xl font-bold text-gray-800 md:text-2xl">{jobTitle}</h2>
            <div className="flex">
              {socials.map(c => {
                const Icon = contactIconsMapping[c.type];

                return (
                  <Anchor
                    aria-label={`Go to ${c.url}`}
                    className="rounded-full bg-cyan-600 p-1"
                    external
                    href={c.url}
                    key={c.type}
                  >
                    <Icon
                      height={40}
                      primaryClassName="fill-gray-800"
                      secondaryClassName="fill-transparent"
                      width={40}
                    />
                  </Anchor>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="h-full w-full bg-gray-800 px-4 pb-8 pt-16 md:px-16 md:pb-0 lg:rounded-b-2xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16">
          <div className="flex flex-col">
            <h3 className="text-center md:text-left">
              <span className="font-bold">Who&nbsp;</span>
              <span className="font-bold text-cyan-600">Am&nbsp;I</span>
            </h3>
            <div
              className="introduction py-4 text-center text-sm md:text-left"
              dangerouslySetInnerHTML={{ __html: introduction }}
            />
            <div className="flex flex-col items-center justify-center md:flex-row md:justify-start">
              <form action="Jeremie Rodriguez - CV (EN).pdf" method="get">
                <Button className="md:-ml-4" icon={DownloadIcon} type="submit">
                  Resume
                </Button>
              </form>
              <span className="my-3 text-xs md:my-0 md:mx-3">or</span>
              <Anchor aria-label={`Go to ${resumeUrl}`} className="text-sm text-cyan-600" external href={resumeUrl}>
                read it online
              </Anchor>
            </div>
          </div>
          <ul className="m-auto flex flex-col justify-center">
            <li className="mb-1 flex items-center">
              <label className="mr-2 inline-block text-sm text-gray-400 md:w-24">Age:</label>
              <span>{age}</span>
            </li>
            <li className="mb-1 flex items-center">
              <label className="mr-2 inline-block text-sm text-gray-400 md:w-24">Nationality:</label>
              <span>{nationality}</span>
            </li>
            <li className="mb-1 flex items-center">
              <label className="mr-2 inline-block text-sm text-gray-400 md:w-24">Email:</label>
              <span className="text-cyan-600">
                <Anchor
                  aria-label={`Send email to ${emailAddress}`}
                  className="-ml-1 rounded p-1"
                  external
                  href={email.url}
                >
                  {emailAddress}
                </Anchor>
              </span>
            </li>
            <li className="mb-1 flex items-center">
              <label className="mr-2 inline-block text-sm text-gray-400 md:w-24">Address:</label>
              <div className="flex items-center">
                <Anchor
                  aria-label={`Go to ${geolocation.website}`}
                  className="-ml-1 mr-1 rounded p-1"
                  external
                  href={geolocation.website}
                >
                  {geolocation.city}
                </Anchor>
                <FlagIcon height={24} primaryClassName="rounded-md" width={24} />
              </div>
            </li>
            <li className="flex items-center">
              <label className="mr-2 inline-block text-sm text-gray-400 md:w-24">Freelancing:</label>
              <span className="mr-2">{openToGigs ? 'Available' : 'Unavailable'}</span>
              {openToGigs ? (
                <HappyIcon primaryClassName="inline-block h-5 w-5" />
              ) : (
                <SadIcon primaryClassName="inline-block h-5 w-5" />
              )}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export type WhoAmIProps = React.ComponentProps<'section'>;
export default WhoAmI;