import { FC } from "react";
import { Link } from "react-router-dom";

interface Props {
  icon?: string;
  className?: string;
  size?: string;
  title?: string;
  link?: string;
  animation?: string;
  onClick?: () => void;
}

export const Icon: FC<Props> = ({
  icon,
  size,
  title,
  link,
  className,
  animation,
  onClick,
}) => {
  return (
    <>
      {link ? (
        <Link
          to={link.toLowerCase()}
          className={`group transition-all duration-500 ease-in-out hover:text-slate-50 dark:hover:text-slate-900 cursor-pointer ${className} flex flex-col items-center hover:shadow-xl hover:shadow-slate-100 dark:hover:shadow-slate-800`}
        >
          <i
            className={`group-hover:animate-bounce bx bx-${icon} bx-${size}`}
          />

          {title ? (
            <>
              <br />

              <p className="font-medium">{title}</p>
            </>
          ) : (
            ""
          )}
        </Link>
      ) : (
        <div
          className={`${
            onClick
              ? `group hover:text-slate-50 dark:hover:text-slate-900 cursor-pointer hover:shadow-xl hover:shadow-slate-100 dark:hover:shadow-slate-800`
              : ""
          } flex flex-col items-center transition-all duration-500 ease-in-out ${className}`}
          onClick={onClick}
        >
          <i
            className={`group-hover:animate-bounce bx bx-${icon} bx-${size} bx-${animation}`}
          />

          {title ? (
            <>
              <br />

              <p className="font-medium text-xl">{title}</p>
            </>
          ) : (
            ""
          )}
        </div>
      )}
    </>
  );
};
