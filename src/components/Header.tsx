import { useState } from "react";

import { IAddressProps } from "../types/types";

import iconClear from "../assets/images/icon-clear.svg";
import iconArrow from "../assets/images/icon-arrow.svg";

import "../css/header.css";

export const Header = ({ data, ipAddress, setIpAddress }: IAddressProps) => {
  const [inputValue, setInputValue] = useState(ipAddress);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIpAddress(inputValue);
    setInputValue("");
  };

  return (
    <section className="header">
      <h1>IP Address Tracker</h1>

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
