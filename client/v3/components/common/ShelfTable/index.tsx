import { FC } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";

export const ShelfTable: FC<{}> = () => {
  return (
    <Box
      h="64.6vh"
      // pb="13.3rem"
      overflow="auto"
      sx={{
        "&::-webkit-scrollbar": {
          w: ".5rem",
        },
        "&::-webkit-scrollbar-thumb": {
          borderRadius: "1rem",
          backgroundColor: useColorModeValue("cyan.400", "cyan.500"),
        },
      }}
    >
      <Table variant="simple">
        <Thead
          pos="sticky"
          top={0}
          bgColor={useColorModeValue("gray.50", "gray.900")}
        >
          <Tr>
            <Th>#</Th>
            <Th>Title</Th>
            <Th>Author</Th>
            <Th>Published</Th>
            <Th>Status</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>

        <Tbody>
          <Tr>
            <Td>1</Td>
            <Td>Front-End</Td>
            <Td>Fauzul</Td>
            <Td>April 2002</Td>
            <Td>Reading</Td>
            <Td></Td>
          </Tr>
          <Tr>
            <Td>2</Td>
            <Td>Front-End</Td>
            <Td>Fauzul</Td>
            <Td>April 2002</Td>
            <Td>Reading</Td>
            <Td></Td>
          </Tr>
          <Tr>
            <Td>3</Td>
            <Td>Front-End</Td>
            <Td>Fauzul</Td>
            <Td>April 2002</Td>
            <Td>Reading</Td>
            <Td></Td>
          </Tr>
          <Tr>
            <Td>4</Td>
            <Td>Front-End</Td>
            <Td>Fauzul</Td>
            <Td>April 2002</Td>
            <Td>Reading</Td>
            <Td></Td>
          </Tr>
          <Tr>
            <Td>5</Td>
            <Td>Front-End</Td>
            <Td>Fauzul</Td>
            <Td>April 2002</Td>
            <Td>Reading</Td>
            <Td></Td>
          </Tr>
          <Tr>
            <Td>6</Td>
            <Td>Front-End</Td>
            <Td>Fauzul</Td>
            <Td>April 2002</Td>
            <Td>Reading</Td>
            <Td></Td>
          </Tr>
          <Tr>
            <Td>7</Td>
            <Td>Front-End</Td>
            <Td>Fauzul</Td>
            <Td>April 2002</Td>
            <Td>Reading</Td>
            <Td></Td>
          </Tr>
          <Tr>
            <Td>8</Td>
            <Td>Front-End</Td>
            <Td>Fauzul</Td>
            <Td>April 2002</Td>
            <Td>Reading</Td>
            <Td></Td>
          </Tr>
          <Tr>
            <Td>9</Td>
            <Td>Front-End</Td>
            <Td>Fauzul</Td>
            <Td>April 2002</Td>
            <Td>Reading</Td>
            <Td></Td>
          </Tr>
          <Tr>
            <Td>10</Td>
            <Td>Front-End</Td>
            <Td>Fauzul</Td>
            <Td>April 2002</Td>
            <Td>Reading</Td>
            <Td></Td>
          </Tr>
          <Tr>
            <Td>11</Td>
            <Td>Front-End</Td>
            <Td>Fauzul</Td>
            <Td>April 2002</Td>
            <Td>Reading</Td>
            <Td></Td>
          </Tr>
          <Tr>
            <Td>12</Td>
            <Td>Front-End</Td>
            <Td>Fauzul</Td>
            <Td>April 2002</Td>
            <Td>Reading</Td>
            <Td></Td>
          </Tr>
          <Tr>
            <Td>13</Td>
            <Td>Front-End</Td>
            <Td>Fauzul</Td>
            <Td>April 2002</Td>
            <Td>Reading</Td>
            <Td></Td>
          </Tr>
          <Tr>
            <Td>14</Td>
            <Td>Front-End</Td>
            <Td>Fauzul</Td>
            <Td>April 2002</Td>
            <Td>Reading</Td>
            <Td></Td>
          </Tr>
          <Tr>
            <Td>15</Td>
            <Td>Front-End</Td>
            <Td>Fauzul</Td>
            <Td>April 2002</Td>
            <Td>Reading</Td>
            <Td></Td>
          </Tr>
          <Tr>
            <Td>16</Td>
            <Td>Front-End</Td>
            <Td>Fauzul</Td>
            <Td>April 2002</Td>
            <Td>Reading</Td>
            <Td></Td>
          </Tr>
        </Tbody>
      </Table>
    </Box>
  );
};
