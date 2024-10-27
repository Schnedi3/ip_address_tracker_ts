import { useEffect, useState } from "react";

import { IHeaderProps } from "../types/types";
import iconClear from "../assets/images/icon-clear.svg";
import iconArrow from "../assets/images/icon-arrow.svg";
import "../css/header.css";

export const Header = ({ setIpAddress }: IHeaderProps) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [isInvalid, setIsInvalid] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!inputValue) {
      setIsInvalid(true);
      return;
    }

    setIpAddress(inputValue);
  };

  useEffect(() => {
    if (isInvalid) {
      const timer = setTimeout(() => {
        setIsInvalid(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isInvalid]);

  return (
    <section className="header">
      <h1 className={`title${isInvalid ? " error_visble" : ""}`}>
        {isInvalid ? " Please input a valid IP" : "IP Address Tracker"}
      </h1>

      <form className="form" autoComplete="off" onSubmit={handleSubmit}>
        <div className="input">
          <input
            type="text"
            placeholder="Search for an IP address (e.g 192.168.0.1)"
            value={inputValue}
            pattern="^(\d{1,3}\.){3}\d{1,3}$"
            onChange={(e) => setInputValue(e.target.value)}
          />
          <img
            className={`clear_icon${inputValue ? " clear_icon-show" : ""}`}
            src={iconClear}
            alt="clear field"
            onClick={() => setInputValue("")}
          />
        </div>

        <button className="submit" type="submit">
          <img src={iconArrow} alt="submit request" />
        </button>
      </form>
    </section>
  );
};
