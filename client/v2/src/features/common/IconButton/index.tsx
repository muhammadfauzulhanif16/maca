import { FC } from "react";

interface IconButtonProps {
  onClick?: () => void;
  textClass?: string;
  className?: string;
  text?: string;
  type?: string;
  icon?: any;
  placeholder?: string;
  isSubmitting?: boolean;
}

export const IconButton: FC<IconButtonProps> = ({
  icon,
  text,
  textClass,
  type,
  placeholder,
  isSubmitting,
  ...props
}): JSX.Element => {
  return (
    <>
      {type === "submit" && "button" ? (
        <button
          type={type === "submit" ? "submit" : "button"}
          {...props}
          disabled={isSubmitting}
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
