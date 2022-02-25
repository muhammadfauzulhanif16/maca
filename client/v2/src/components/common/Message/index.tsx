import { FC, useEffect, useState } from "react";
import { Icon } from "../Icon";
import "./index.css";

interface MessageProps {
  success: string;
  error: string;
}

export const Message: FC<MessageProps> = ({ success, error }): JSX.Element => {
  const [show, setShow] = useState<boolean>(true),
    handleShow = () => {
      setShow(false);
    };

  useEffect(() => {
    setInterval(() => {
      setShow(false);
    }, 3000);

    return () => setShow(false);
  }, []);

  return (
    <div
      className={`${show ? "" : "hidden"} ${
        success ? "bg-emerald-500" : error ? "bg-rose-500" : ""
      } message-container`}
    >
      <div className="message">
        <div className="flex items-center">
          <Icon
            icon={`message-alt-${success ? "check" : error ? "x" : ""}`}
            size="sm"
            className={`${
              success ? "bg-emerald-800" : error ? "bg-rose-800" : null
            } rounded-md p-2`}
          />

          <p className="ml-4">{success || error}</p>
        </div>

        <Icon icon="x" size="sm" className="p-2" onClick={handleShow} />
      </div>
    </div>
  );
};
