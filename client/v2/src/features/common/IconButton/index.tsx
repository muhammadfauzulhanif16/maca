import { FC } from "react";

interface IconButtonProps {
  onClick?: () => void;
  textClass?: string;
  className?: string;
  text?: string;
  type?: string;
  icon?: any;
  placeholder?: string;
}

export const IconButton: FC<IconButtonProps> = ({
  icon,
  text,
  textClass,
  type,
  placeholder,
  ...props
}): JSX.Element => {
  return (
    <>
      {type !== "submit" ? (
        <nav {...props}>
          {icon}
          <p className={textClass}>{text}</p>
        </nav>
      ) : (
        <button type="submit" {...props}>
          {icon}
          <p className={textClass}>{text}</p>
        </button>
      )}
    </>
  );
};
