import { FC, ReactNode, useState } from "react";
import Head from "next/head";
import { Box, BoxProps, useColorModeValue, useBoolean } from "@chakra-ui/react";
import { NavBar } from "../NavBar";
import { useReadLocalStorage } from "usehooks-ts";

interface LayoutProps {
  title: string;
  children: ReactNode;
  boxProps?: BoxProps;
}

export const Layout: FC<LayoutProps> = ({
  title,
  children,
  boxProps,
}: LayoutProps): JSX.Element => {
  const isShowText = useReadLocalStorage("maca-is-show-text-navBar"),
    bgColor = useColorModeValue("gray.50", "gray.900"),
    color = useColorModeValue("gray.900", "gray.50");

  return (
    <Box
      transitionProperty="all"
      transition="ease-in-out"
      transitionDuration=".75s"
      d="flex"
      p={[4, 8]}
      h="100vh"
      userSelect="none"
      bgColor={bgColor}
      color={color}
      {...boxProps}
    >
      <Head>
        <title>{title} | Maca - Bookshelf App</title>
      </Head>

      <NavBar title={title} />

      <Box
        transitionProperty="all"
        transition="ease-in-out"
        transitionDuration=".5s"
        w={["100%", "100%", "100%", "100%", "80%"]}
      >
        {children}
      </Box>
    </Box>
  );
};
