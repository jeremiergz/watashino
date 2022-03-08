import Anchor from '@/components/common/Anchor';
import useMapData from '@/components/hooks/data/useMapData';
import PoIIcon from '@/components/svgs/misc/PoI';
import clsx from 'clsx';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';

function WhereAmI({ className, ...rest }: WhereAmIProps): JSX.Element {
  const { childFile, mapURL } = useMapData();
  const mapImage = getImage(childFile.childImageSharp);

  return (
    <section className={clsx(className, 'flex items-center justify-center')} {...rest}>
      <GatsbyImage alt="" className="h-full lg:rounded-2xl" image={mapImage} loading="eager" objectFit="cover" />
      <Anchor
        aria-label={`Go to ${mapURL}`}
        className="absolute mb-6 ml-[7px] rounded-full md:mb-5 md:ml-3.5"
        external
        href={mapURL}
      >
        <PoIIcon primaryClassName="fill-[#ffdd67]" />
      </Anchor>
    </section>
  );
}

export type WhereAmIProps = React.ComponentProps<'section'>;
export default WhereAmI;
