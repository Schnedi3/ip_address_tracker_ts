import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useFetch } from "./api/fetch";
import { Header } from "./components/Header/Header";
import { Widget } from "./components/Widget/Widget";
import { Map } from "./components/Map/Map";
import { Skeleton } from "./skeleton/Skeleton";
import "./app.css";

export const App = () => {
  const [ipAddress, setIpAddress] = useState<string>("");
  const { data, isLoading } = useFetch(ipAddress);

  if (!data) return <Skeleton />;

  return (
    <main className="container">
      <ToastContainer
        autoClose={2000}
        pauseOnHover={false}
        pauseOnFocusLoss={false}
      />

      <figure className="header_bg"></figure>
      <Header setIpAddress={setIpAddress} />
      <Widget data={data} isLoading={isLoading} />
      <Map data={data} />
    </main>
  );
};
