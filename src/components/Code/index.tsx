import Button from 'components/Button';
import BlockCode from 'components/Code/Block';
import InlineCode from 'components/Code/Inline';
import FlexBox from 'components/primitives/FlexBox';
import Text, { TextProps } from 'components/primitives/Text';
import CopyIcon from 'components/svgs/icons/Copy';
import copyToClipboard from 'copy-to-clipboard';
import React, { useRef, useState } from 'react';

let timeout: number;

const Code: React.FC<CodeProps> = ({ children, className, ...rest }) => {
  const [hasCopied, setHasCopied] = useState(false);
  const codeRef = useRef<HTMLPreElement>();
  const handleCopyClick = () => {
    if (codeRef && codeRef.current) {
      copyToClipboard(codeRef.current.textContent);
      setHasCopied(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => setHasCopied(false), 2500);
    }
  };
  const isBlockCode = !!className;
  return isBlockCode ? (
    <>
      <BlockCode ref={codeRef} {...rest}>
        {children}
      </BlockCode>
      <FlexBox as="span" alignItems="center" left={3} marginTop={4} position="sticky" width={0}>
        <Button onClick={handleCopyClick} padding={2} variant="text">
          <CopyIcon fill="white" height={16} width={16} />
          <Text color="white" marginLeft={1}>
            {hasCopied ? 'copied!' : 'copy'}
          </Text>
        </Button>
      </FlexBox>
    </>
  ) : (
    <InlineCode {...rest}>{children}</InlineCode>
  );
};

Code.displayName = 'Code';

export type CodeProps = TextProps;
export default Code;
