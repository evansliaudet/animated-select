"use client";

import { Select, SelectOption } from "@/code";
import { useState } from "react";

export default function Demo() {
  const [value, setValue] = useState<string>("");
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Select value={value} setValue={setValue} placeholder="Select fruit">
          <SelectOption value="apple">Apple</SelectOption>
          <SelectOption value="tomato">Tomato</SelectOption>
          <SelectOption value="lemon">Lemon</SelectOption>
          <SelectOption value="banana">Banana</SelectOption>
        </Select>
      </main>
    </div>
  );
}
