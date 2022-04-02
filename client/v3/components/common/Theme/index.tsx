import { FC } from "react";
import {
  useColorMode,
  useColorModeValue,
  IconButtonProps,
  Box,
} from "@chakra-ui/react";
import {
  WeatherMoon,
  WeatherSunny,
} from "@emotion-icons/fluentui-system-regular";
import { IconButton } from "../IconButton";

type ColorModeSwitcherProps = Omit<IconButtonProps, "aria-label">;

export const Theme: FC<ColorModeSwitcherProps> = (
  props: ColorModeSwitcherProps
): JSX.Element => {
  const { toggleColorMode } = useColorMode(),
    text = useColorModeValue("dark", "light"),
    SwitchIcon = useColorModeValue(WeatherMoon, WeatherSunny),
    gray = {
      "50_900": useColorModeValue("gray.50", "gray.900"),
      "900_50": useColorModeValue("gray.900", "gray.50"),
    };

  return (
    //   <IconButton
    //     size="sm"
    //     // fontSize="md"
    //     // color="current"
    //     ml={5}
    //     onClick={toggleColorMode}
    //     icon={<SwitchIcon />}
    //     aria-label={`Switch to ${text} mode`}
    //     {...props}
    //   />
    <IconButton
      icon={<SwitchIcon width={24} />}
      buttonProps={{
        borderRadius: 12,
        "aria-label": `Switch to ${text} mode`,
        px: 2,
        ml: 5,
        onClick: toggleColorMode,
        bgColor: gray["50_900"],
        shadow: "md",
        _hover: {
          bgColor: gray["900_50"],
          color: gray["50_900"],
        },
      }}
    />
  );
};
