import { FC } from "react";
import { useRouter } from "next/router";
import { useLocalStorage } from "usehooks-ts";
import { PageNavs, PageNavsState } from "./PageNavs";
import { IconButton } from "../../common/IconButton";
import { Notebook } from "@emotion-icons/fluentui-system-filled";
import { Box, Flex, Avatar, useColorModeValue, Grid } from "@chakra-ui/react";
import { Theme } from "../Theme";

interface NavBarProps {
  title: string;
}

export const NavBar: FC<NavBarProps> = ({
  title,
}: NavBarProps): JSX.Element => {
  const router = useRouter(),
    // [isShowText, setIsShowText] = useLocalStorage(
    //   "maca-is-show-text-navBar",
    //   false
    // ),
    gray = {
      "50_900": useColorModeValue("gray.50", "gray.900"),
      "100_800": useColorModeValue("gray.100", "gray.800"),
    },
    cyan = {
      "400_500": useColorModeValue("cyan.400", "cyan.500"),
      "500_400": useColorModeValue("cyan.500", "cyan.400"),
    };

  return (
    <>
      <Flex
        display={["none", "none", "none", "none", "flex"]}
        p={4}
        mr={8}
        shadow="md"
        flexDir="column"
        overflow="hidden"
        borderRadius={16}
        transitionProperty="all"
        transition="ease-in-out"
        transitionDuration=".5s"
        bgColor={gray["100_800"]}
        w="20%"
        justifyContent="space-between"
        // onMouseLeave={() => setIsShowText(false)}
        // onMouseEnter={() => setIsShowText(true)}
      >
        <Flex pr={1} alignItems="center" justifyContent="space-between">
          <IconButton
            text="Maca"
            icon={
              <Box>
                <Notebook width={32} />
              </Box>
            }
            textProps={{
              ml: 4,
              fontSize: "2xl",
            }}
            buttonProps={{
              pl: 1,
              variant: "none",
              overflow: "hidden",
              color: cyan["400_500"],
              justifyContent: "start",
              onClick: () => router.push("/dashboard"),
            }}
          />

          <Theme />
        </Flex>

        <Flex
          flexDir="column"
          justifyContent="center"
          transitionProperty="all"
          transition="ease-in-out"
          transitionDuration=".5s"
        >
          {PageNavs.map(
            ({ icon, text }: PageNavsState, id: number): JSX.Element => (
              <IconButton
                key={id}
                icon={<Box>{icon}</Box>}
                text={text}
                textProps={{
                  ml: 4,
                }}
                buttonProps={{
                  mb: 2,
                  px: 2,
                  borderRadius: 12,
                  variant: "ghost",
                  overflow: "hidden",
                  justifyContent: "start",
                  transitionProperty: "all",
                  transition: "ease-in-out",
                  transitionDuration: ".5s",
                  shadow: title === text ? "md" : "",
                  bgColor: title === text ? cyan["400_500"] : "",
                  onClick: () =>
                    router.push(
                      text === "Dashboard"
                        ? `/${text.toLowerCase()}`
                        : `/dashboard/${text.toLowerCase()}`
                    ),
                  _hover: {
                    shadow: "md",
                    color: title === text ? "" : gray["50_900"],
                    bgColor: title === text ? cyan["400_500"] : cyan["500_400"],
                  },
                  _active: {
                    color: title === text ? "" : gray["50_900"],
                    bgColor: title === text ? cyan["400_500"] : cyan["500_400"],
                  },
                }}
              />
            )
          )}
        </Flex>

        <IconButton
          text="Muhammad Fauzul Hanif"
          textProps={{
            ml: 4,
            isTruncated: true,
          }}
          buttonProps={{
            p: 0,
            w: "full",
            variant: "none",
            borderRadius: 12,
            cursor: "default",
            justifyContent: "start",
          }}
          icon={
            <Avatar
              w="auto"
              h="full"
              borderRadius={12}
              name="Muhammad Fauzul Hanif"
              src="https://scontent.fcgk18-2.fna.fbcdn.net/v/t39.30808-6/254687454_127994372951734_3915319897610327416_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=ict82RWnCnAAX-SfXNw&_nc_ht=scontent.fcgk18-2.fna&oh=00_AT_0QOemkCwh-TXEM09ZakAK7k9G00HL9U_VWat47SDaXg&oe=6239D92E"
            />
          }
        />
      </Flex>

      <Grid
        templateColumns="repeat(5, 1fr)"
        gap={[2, 8, 8, 8]}
        p={2}
        pos="fixed"
        bottom={0}
        left={0}
        right={0}
        m={[4, 8]}
        borderRadius={16}
        bgColor={gray["100_800"]}
        display={["flex", "flex", "flex", "flex", "none"]}
        justifyContent="center"
        transitionProperty="all"
        transition="ease-in-out"
        transitionDuration=".5s"
      >
        {PageNavs.map(
          ({ icon, text }: PageNavsState, id: number): JSX.Element => (
            <IconButton
              key={id}
              icon={<Box>{icon}</Box>}
              // text={text}
              buttonProps={{
                w: "100%",
                display: "flex",
                flexDir: "column",
                borderRadius: 12,
                variant: "ghost",
                overflow: "hidden",
                justifyContent: "center",
                transitionProperty: "all",
                transition: "ease-in-out",
                transitionDuration: ".5s",
                shadow: title === text ? "md" : "",
                bgColor: title === text ? cyan["400_500"] : "",
                onClick: () =>
                  router.push(
                    text === "Dashboard"
                      ? `/${text.toLowerCase()}`
                      : `/dashboard/${text.toLowerCase()}`
                  ),
                _hover: {
                  shadow: "md",
                  color: title === text ? "" : gray["50_900"],
                  bgColor: title === text ? cyan["400_500"] : cyan["500_400"],
                },
                _active: {
                  color: title === text ? "" : gray["50_900"],
                  bgColor: title === text ? cyan["400_500"] : cyan["500_400"],
                },
              }}
            />
          )
        )}
      </Grid>
    </>
  );
};
