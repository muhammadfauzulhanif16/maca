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
import { Shelfs } from "../../pages/Shelf/Shelfs";
import { ShelfTable } from "../ShelfTable";

export const ShelfTab: FC<{}> = () => {
  const bgColor = useColorModeValue("cyan.400", "cyan.500"),
    hoverColor = useColorModeValue("gray.50", "gray.900"),
    hoverBgColor = useColorModeValue("cyan.500", "cyan.400");

  return (
    <Tabs
      isFitted
      // defaultIndex={defaultIndex}
      // onClick={() =>
      //   router.push(
      //     title === "All"
      //       ? "/dashboard/shelf"
      //       : `/dashboard/shelf/${title.toLowerCase()}`
      //   )
      // }
    >
      <TabList>
        {Shelfs.map((shelf, id: number) => (
          <Tab
            key={id}
            _selected={{
              color: bgColor,
              borderColor: bgColor,
            }}
            _focus={{
              boxShadow: "none",
            }}
            _active={{
              bgColor: hoverColor,
            }}
          >
            {shelf}
          </Tab>
        ))}
      </TabList>

      <TabPanels>
        <TabPanel py={8} px={0}>
          <ShelfTable />
        </TabPanel>

        <TabPanel py={8} px={0}>
          <ShelfTable />
        </TabPanel>

        <TabPanel py={8} px={0}>
          <ShelfTable />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
