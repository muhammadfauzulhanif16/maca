import { FC, ReactNode } from "react";
import { IconButton } from "../IconButton";
import {
  Box,
  Flex,
  Stat,
  HStack,
  StatLabel,
  StatNumber,
  useColorModeValue,
  VStack,
  Stack,
  StatHelpText,
  StatArrow,
} from "@chakra-ui/react";

interface StatCardProps {
  text: string;
  icon: ReactNode;
}

export const StatCard: FC<StatCardProps> = ({
  icon,
  text,
}: StatCardProps): JSX.Element => {
  const cyan = {
    "400_500": useColorModeValue("cyan.400", "cyan.500"),
  };

  return (
    <Stat
      px={6}
      py={4}
      shadow="md"
      borderRadius={16}
      bgColor={useColorModeValue("gray.100", "gray.800")}
    >
      <HStack>
        <IconButton
          icon={icon}
          buttonProps={{
            py: 6,
            px: 3,
            shadow: "md",
            variant: "none",
            mr: 4,
            borderRadius: 16,
            cursor: "default",
            bgColor: cyan["400_500"],
          }}
        />

        <Box>
          <StatLabel w="max">
            Amount {text === "Add" ? "added" : text.toLowerCase()}
          </StatLabel>

          <StatNumber>0 book</StatNumber>

          <StatHelpText>
            <StatArrow type="increase" />
            +23.36
          </StatHelpText>
        </Box>
      </HStack>
    </Stat>
  );
};
