import { useState } from "react";
import Loading from "./Loading";
import Table from "./creditTable";

export default function Main() {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => setIsLoading(false), 3500);
  return <div>{isLoading ? <Loading /> : <Table />}</div>;
}
