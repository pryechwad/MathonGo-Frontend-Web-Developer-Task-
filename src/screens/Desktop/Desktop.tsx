import React from "react";
import { ScrollArea } from "../../components/ui/scroll-area";
import { MainContentSection } from "./sections/MainContentSection/MainContentSection";
import { SecondaryNavigationSection } from "./sections/SecondaryNavigationSection/SecondaryNavigationSection";

export const Desktop = (): JSX.Element => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-full max-w-[1360px] relative">
        <ScrollArea className="h-screen w-full">
          <div className="flex">
            <SecondaryNavigationSection />
            <MainContentSection />
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};
