import { useEffect, useState } from "react";

import { IHeaderProps } from "../types/types";
import iconClear from "../assets/images/icon-clear.svg";
import iconArrow from "../assets/images/icon-arrow.svg";

import "../css/header.css";

export const Header = ({ ipAddress, setIpAddress, error }: IHeaderProps) => {
  const [inputValue, setInputValue] = useState(ipAddress);
  const [isInvalid, setIsInvalid] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const ipRegex = /^(\d{1,3}\.){3}\d{1,3}$/;
    if (!inputValue || !ipRegex.test(inputValue)) {
      setIsInvalid(true);
      return;
    }

    setIpAddress(inputValue);
    setInputValue("");
  };

  useEffect(() => {
    if (error) {
      setIsInvalid(true);
    }
  }, [error]);

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
