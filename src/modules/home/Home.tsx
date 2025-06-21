"use client";
import InputField from "@/components/common/input-field/InputField";
import { useState } from "react";

export default function Home() {

  const [name, setName] = useState("");

  const handleChangeInput = (value: any) => {
    setName(value);
  };

  return (
    <div>
      <h1>Hi</h1>
      <InputField
        id="name"
        name="name"
        label="Name"
        value={name}
        customStyles={{
          textColor: "violet",
        }}
        handleChangeInput={handleChangeInput}
        disabled={false}
      />
    </div>
  );
}