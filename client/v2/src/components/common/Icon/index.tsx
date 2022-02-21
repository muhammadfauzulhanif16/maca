import { FC } from "react";
import { Link } from "react-router-dom";

interface IconProps {
  icon?: string;
  className?: string;
  size?: string;
  title?: string;
  link?: string;
  animation?: string;
  onClick?: any;
}

export const Icon: FC<IconProps> = ({
  icon,
  size,
  title,
  link,
  className,
  animation,
  onClick,
}): JSX.Element => {
  return (
    <>
      {link ? (
        <Link
          to={link.toLowerCase()}
          className={`group transition-all duration-500 ease-in-out hover:text-slate-50 dark:hover:text-slate-900 cursor-pointer ${className} flex flex-col items-center hover:shadow-xl hover:shadow-slate-100 dark:hover:shadow-slate-800`}
          onClick={onClick}
        >
          <i className={`bx bx-${icon} bx-${size}`} />

          {title && icon ? <br /> : null}

          <p className="font-medium text-center">{title}</p>
        </Link>
      ) : (
        <div
          className={`${
            onClick
              ? `group hover:text-slate-50 dark:hover:text-slate-900 cursor-pointer`
              : ""
          } flex flex-col items-center transition-all duration-500 ease-in-out ${className}`}
          onClick={onClick}
        >
          <i className={`bx bx-${icon} bx-${size} bx-${animation}`} />

          {title && icon ? <br /> : null}

          <p className="font-medium text-xl text-center">{title}</p>
        </div>
      )}
    </>
  );
};
