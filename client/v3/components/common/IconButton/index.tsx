import {
  Tooltip,
  Button,
  Text,
  TextProps,
  ButtonProps,
  Box,
  Flex,
} from "@chakra-ui/react";
import { FC, ReactNode } from "react";

interface IconButtonProps {
  buttonProps?: ButtonProps;
  icon?: ReactNode;
  text?: string;
  textProps?: TextProps;
}

export const IconButton: FC<IconButtonProps> = ({
  buttonProps,
  text,
  icon,
  textProps,
}: IconButtonProps): JSX.Element => {
  return (
    <Button
      {...buttonProps}
      _focus={{
        boxShadow: "none",
      }}
    >
      {icon}

      <Text {...textProps}>{text}</Text>
    </Button>
  );
};
