import React from 'react';
import styled from 'styled-components';
import { useTheming } from '..';
import Button from '../../../common/Button';
import Box from '../../../primitives/Box';
import Flex from '../../../primitives/Flex';
import Text from '../../../primitives/Text';

type ThemeToggleProps = {
  toggle: () => void;
};

const Circle = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  transform: ${({ theme }) => (theme.type === 'light' ? 'rotate3d(0, 0, 1, 0deg)' : 'rotate3d(0, 0, 1, 180deg)')};
`;

const ThemeToggle = ({ toggle }: ThemeToggleProps) => {
  const { theme } = useTheming();
  return (
    <Button onClick={() => toggle()} position="absolute" right={3} top={3}>
      <Flex>
        <Circle>
          <Box
            backgroundColor="white"
            borderBottomLeftRadius={16}
            borderColor="dark"
            borderStyle="solid"
            borderTopLeftRadius={16}
            borderWidth={1}
            height={16}
            width={8}
            borderRight="none"
          />
          <Box
            backgroundColor="black"
            borderBottomRightRadius={16}
            borderColor="dark"
            borderStyle="solid"
            borderTopRightRadius={16}
            borderWidth={1}
            height={16}
            width={8}
            borderLeft="none"
          />
        </Circle>
        <Text color="gray" fontFamily={theme.fonts.main} fontSize={14} marginLeft={1}>
          {theme.type}
        </Text>
      </Flex>
    </Button>
  );
};

ThemeToggle.displayName = 'ThemeToggle';

export default ThemeToggle;