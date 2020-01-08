import React from 'react';
import { lightenColor } from '../../../utils/CSS';
import { useTheming } from '../../core/ThemingManager';
import Box from '../../primitives/Box';
import Flex from '../../primitives/Flex';
import Text from '../../primitives/Text';

type SkillBlockProps = {
  items: Models.Skill[];
  title: string;
};

const bubbleSize = 16;
const gradeBasis = 10;
const maxBubblesNumber = 7;

const SkillBlock = ({ items, title }: SkillBlockProps) => {
  const { theme } = useTheming();
  return (
    <Box
      backgroundColor={lightenColor(theme.colors.gray, 0.1)}
      borderRadius={8}
      marginBottom={5}
      marginX="auto"
      maxWidth={theme.breakpoints[2]}
      padding={3}
    >
      <Flex alignSelf="flex-start" marginBottom={2}>
        <Text color="primary" fontSize={20} fontWeight="bold" textAlign="left">
          {title.toUpperCase()}
        </Text>
      </Flex>
      {items
        .sort((a, b) => a.sortOrder - b.sortOrder)
        .map(item => {
          const factor = gradeBasis / maxBubblesNumber;
          const grade = Math.ceil(item.proficiencyLevel * factor);
          const fullBubbles = [...Array(item.proficiencyLevel).keys()];
          const emptyBubbles = [...Array(maxBubblesNumber - item.proficiencyLevel).keys()];
          return (
            <Flex height={22} justifyContent="space-between" key={item.name} paddingY={2}>
              <Text fontSize={16} fontWeight="bold">
                {item.name}
              </Text>
              <Flex alignItems="center" display={{ _: 'flex', mobileL: 'none' }}>
                <Text color="primary" fontSize={22} fontWeight="bold">
                  {grade}/{gradeBasis}
                </Text>
              </Flex>
              <Flex alignItems="center" display={{ _: 'none', mobileL: 'flex' }}>
                {fullBubbles.map((bubble, index) => (
                  <Box
                    as="span"
                    backgroundColor="primary"
                    borderRadius={bubbleSize}
                    height={bubbleSize}
                    key={bubble}
                    marginLeft={index && 12}
                    width={bubbleSize}
                  />
                ))}
                {emptyBubbles.map(bubble => (
                  <Box
                    as="span"
                    backgroundColor={lightenColor(theme.colors.gray, 0.25)}
                    borderRadius={bubbleSize}
                    height={bubbleSize}
                    key={bubble}
                    marginLeft={12}
                    width={bubbleSize}
                  />
                ))}
              </Flex>
            </Flex>
          );
        })}
    </Box>
  );
};

SkillBlock.displayName = 'SkillBlock';

export default SkillBlock;
