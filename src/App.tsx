import { useState } from "react";

import { useFetch } from "./api/fetch";
import { Header } from "./components/Header";
import { Widget } from "./components/Widget";
import { Map } from "./components/Map";
import "./css/app.css";

export const App = () => {
  const [ipAddress, setIpAddress] = useState<string>("");
  const { data, isLoading } = useFetch(ipAddress);

  if (!data) return;

  return (
    <main className="app container">
      <figure className="header_bg"></figure>
      <Header setIpAddress={setIpAddress} />
      <Widget data={data} isLoading={isLoading} />
      <Map data={data} />
    </main>
  );
};
