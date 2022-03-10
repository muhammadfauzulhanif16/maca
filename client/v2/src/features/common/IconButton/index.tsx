import { FC } from "react";
import { SpinnerIos } from "@emotion-icons/fluentui-system-regular";

interface IconButtonProps {
  onClick?: () => void;
  textClass?: string;
  className?: string;
  text?: string;
  type?: string;
  icon?: any;
  placeholder?: string;
  isLoading?: boolean;
}

export const IconButton: FC<IconButtonProps> = ({
  icon,
  text,
  textClass,
  type,
  placeholder,
  isLoading,
  ...props
}): JSX.Element => {
  return (
    <>
      {type === "submit" && "button" ? (
        <button
          type={type === "submit" ? "submit" : "button"}
          {...props}
          disabled={isLoading ? true : false}
        >
          {icon}
          <p className={textClass}>{text}</p>
        </button>
      ) : (
        <div {...props}>
          {icon}
          <p className={textClass}>{text}</p>
        </div>
      )}
    </>
  );
};
