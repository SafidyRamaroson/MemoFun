"use client";

import { HeroTemplate } from "@/components/templates/HeroTemplate";
import { LayoutTemplate } from "@/components/templates/LayoutTemplate";

export default function Home() {
  return (
    <LayoutTemplate >
      <HeroTemplate/>
    </LayoutTemplate>
  );
}
