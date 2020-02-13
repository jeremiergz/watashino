import copyToClipboard from 'copy-to-clipboard';
import React, { useRef, useState } from 'react';
import Flex from '../../primitives/Flex';
import Text, { TextProps } from '../../primitives/Text';
import Copy from '../../svg/Copy';
import Button from '../Button';
import BlockCode from './Block';
import InlineCode from './Inline';

type CodeProps = TextProps;

let timeout: number;

const Code = ({ children, className, ...rest }: CodeProps) => {
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
  return (
    <>
      {isBlockCode ? (
        <BlockCode ref={codeRef} {...rest}>
          {children}
        </BlockCode>
      ) : (
        <InlineCode {...rest}>{children}</InlineCode>
      )}
      <Flex as="span" alignItems="center" left={3} marginTop={2} position="sticky" width={0}>
        <Button onClick={handleCopyClick} padding={2}>
          <Copy fill="white" height={24} width={24} />
          <Text color="white" marginLeft={1}>
            {hasCopied ? 'copied!' : 'copy'}
          </Text>
        </Button>
      </Flex>
    </>
  );
};

Code.displayName = 'Code';

export { CodeProps };
export default Code;
