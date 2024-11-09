"use client";

import { useState } from "react";
import RequestForm from "@/components/RequestForm";

export default function Home() {
  const [data, setData] = useState("");

  return (
    <div>
      <div className="text-center text-3xl font-bold m-4">{data}</div>
      <RequestForm setData={setData} />
    </div>
  );
}
