import { FC } from "react";
import { IconButton } from "../../common/IconButton";
import { Add } from "@emotion-icons/fluentui-system-filled";
import { useRouter } from "next/router";
import { BookNavs, BookNavsState } from "./BookNavs";
import { StatCard } from "../../common/StatCard";
import {
  Heading,
  Box,
  Flex,
  useColorModeValue,
  StatGroup,
} from "@chakra-ui/react";

export const DashboardComponent: FC<{}> = (): JSX.Element => {
  const router = useRouter(),
    gray = {
      "50_900": useColorModeValue("gray.50", "gray.900"),
    },
    cyan = {
      "400_500": useColorModeValue("cyan.400", "cyan.500"),
      "500_400": useColorModeValue("cyan.500", "cyan.400"),
    };

  return (
    <Box>
      <Flex justifyContent="space-between" mb={8}>
        <Heading>Dashboard</Heading>

        <IconButton
          icon={<Add width={24} />}
          textProps={{ ml: 4 }}
          text="Add book"
          buttonProps={{
            boxShadow: "md",
            borderRadius: 12,
            bgColor: cyan["400_500"],
            _hover: {
              bgColor: cyan["400_500"],
              color: gray["50_900"],
            },
            _active: {
              bgColor: cyan["400_500"],
              color: gray["50_900"],
            },
            onClick: () => {
              router.push("/dashboard/add");
            },
          }}
        />
      </Flex>

      <Flex gap={4} flexDir={["column", "column", "row", "row", "row"]}>
        {BookNavs.map(({ icon, text }: BookNavsState, id: number) => (
          <StatCard key={id} icon={icon} text={text} />
        ))}
      </Flex>
    </Box>
  );
};
