import { FC } from "react";
import { Icon } from "../Icon";

export const Loading: FC<{}> = (): JSX.Element => {
  return (
    <Icon
      icon="loader-circle"
      size="lg"
      title="Please wait..."
      className="absolute top-0 h-screen right-0 left-0 flex justify-center text-slate-300 dark:text-slate-600"
      animation="spin"
    />
  );
};
