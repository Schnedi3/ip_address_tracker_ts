import { useState } from "react";
import { toast } from "react-toastify";

import { IHeaderProps } from "../../types/types";
import iconClear from "../../assets/images/icon-clear.svg";
import iconArrow from "../../assets/images/icon-arrow.svg";
import styles from "./header.module.css";

export const Header = ({ setIpAddress }: IHeaderProps) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!inputValue) {
      toast.error("Please input an IP");
      return;
    }

    setIpAddress(inputValue);
  };

  return (
    <section className={styles.header}>
      <h1 className={styles.title}>IP Address Tracker</h1>

      <form className={styles.form} autoComplete="off" onSubmit={handleSubmit}>
        <div className={styles.input}>
          <input
            type="text"
            placeholder="Search for an IP address"
            value={inputValue}
            pattern="^(\d{1,3}\.){3}\d{1,3}$"
            onChange={(e) => setInputValue(e.target.value)}
          />
          <img
            className={`${styles.clearIcon} ${
              inputValue ? styles.clearIconShow : ""
            }`}
            src={iconClear}
            alt="clear field"
            onClick={() => setInputValue("")}
          />
        </div>

        <button className={styles.submit} type="submit">
          <img src={iconArrow} alt="submit request" />
        </button>
      </form>
    </section>
  );
};
