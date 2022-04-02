import { FC } from "react";
import {
  Heading,
  Box,
  Flex,
  useColorModeValue,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { IconButton } from "../../common/IconButton";
import { Add } from "@emotion-icons/fluentui-system-filled";
import { ShelfTab } from "../../common/ShelfTab";

export const ShelfComponent: FC<{}> = (): JSX.Element => {
  const router = useRouter(),
    bgColor = useColorModeValue("cyan.400", "cyan.500"),
    hoverColor = useColorModeValue("gray.50", "gray.900"),
    hoverBgColor = useColorModeValue("cyan.500", "cyan.400");

  return (
    <Box h="100%" w="100%" overflow="hidden">
      <Flex justifyContent="space-between" mb={8}>
        <Heading>Shelf books</Heading>

        <IconButton
          icon={<Add width={24} />}
          textProps={{ ml: 4 }}
          text="Add book"
          buttonProps={{
            shadow: "md",
            borderRadius: 12,
            bgColor: bgColor,
            _hover: {
              bgColor: hoverBgColor,
              color: hoverColor,
            },
            _active: {
              bgColor: hoverBgColor,
              color: hoverColor,
            },
            onClick: () => {
              router.push("/dashboard/add");
            },
          }}
        />
      </Flex>

      <ShelfTab />
    </Box>
  );
};
