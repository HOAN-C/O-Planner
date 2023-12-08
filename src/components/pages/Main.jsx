import { useState } from "react";
import Loading from "./Loading";
import Table from "./Table";

export default function Main() {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => setIsLoading(false), 5000);
  return <div>{isLoading ? <Loading /> : <Table />}</div>;
}
