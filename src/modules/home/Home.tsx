"use client";
import InputField from "@/components/common/input-field/InputField";
import { Colors } from "@/services/enums/colors";
import { useState } from "react";

export default function Home() {

  const [name, setName] = useState("");

  const handleChangeInput = (value: any) => {
    setName(value);
  };

  return (
    <div className="flex flex-col items-center justify-center text-center h-screen">
      <InputField
        id="name"
        name="name"
        label="Name"
        value={name}
        placeholder="Enter your name"
        customStyles={{
          textColor: Colors.GRAY,
        }}
        handleChangeInput={handleChangeInput}
        disabled={false}
        required={true}
      />
    </div>
  );
}