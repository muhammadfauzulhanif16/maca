import { FC, useEffect, useState } from "react";
import {
  CheckmarkCircle,
  Dismiss,
  ErrorCircle,
  Info,
} from "@emotion-icons/fluentui-system-regular";
import { IconButton } from "../IconButton";

interface MessageProps {
  success?: string;
  error?: string;
  custom?: string;
  url?: any;
}

export const Message: FC<MessageProps> = ({
  success,
  error,
  custom,
  url,
}: MessageProps): JSX.Element => {
  const [isShow, setIsShow] = useState<boolean>(true),
    handleIsShow = () => {
      setIsShow(false);
    };

  useEffect(() => {
    setInterval(
      () => {
        setIsShow(false);
      },
      custom ? 10000 : 3000
    );

    return () => setIsShow(false);
  }, []);

  return (
    <div
      className={`${
        isShow && (success || error || custom) ? "flex" : "hidden"
      } ${
        success
          ? "bg-emerald-400 dark:bg-emerald-500"
          : error
          ? "bg-rose-400 dark:bg-rose-500"
          : "bg-sky-400 dark:bg-sky-500"
      } justify-between font-medium fixed top-0 right-0 left-0 m-4 sm:m-8 py-2 px-4 rounded-xl shadow-xl items-center`}
    >
      <div className="flex items-center">
        <IconButton
          icon={
            success ? (
              <CheckmarkCircle width={24} />
            ) : error ? (
              <ErrorCircle width={24} />
            ) : (
              <Info width={24} />
            )
          }
          className={`${
            success
              ? "bg-emerald-500 dark:bg-emerald-400"
              : error
              ? "bg-rose-500 dark:bg-rose-400"
              : "bg-sky-500 dark:bg-sky-400"
          } text-zinc-50 dark:text-zinc-900 p-2 rounded-xl`}
        />

        {custom ? (
          <a href={url} className="underline mx-4">
            {custom}
          </a>
        ) : (
          <p className="mx-4">{success || error}</p>
        )}
      </div>

      <IconButton
        icon={<Dismiss width={24} />}
        className="cursor-pointer"
        onClick={handleIsShow}
      />
    </div>
  );
};
