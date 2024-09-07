import { useState } from "react";

import { useFetch } from "./hooks/useFetch";
import { Header } from "./components/Header";
import { Widget } from "./components/Widget";
import { Map } from "./components/Map";

import "./css/app.css";

export const App = () => {
  const [ipAddress, setIpAddress] = useState<string>("");
  const { data, loading, error } = useFetch(ipAddress);

  return (
    <main className="app container">
      <figure className="header_bg"></figure>
      <Header data={data} ipAddress={ipAddress} setIpAddress={setIpAddress} />
      <Widget data={data} loading={loading} error={error} />
      <Map data={data} />
    </main>
  );
};
