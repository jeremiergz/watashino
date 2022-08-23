import SVG, { SVGProps } from '@/components/common/SVG';

function Download({ secondaryClassName, ...rest }: DownloadProps): JSX.Element {
  return (
    <SVG viewBox="0 0 20 20" {...rest}>
      <path d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" />
    </SVG>
  );
}

export type DownloadProps = SVGProps;
export default Download;
