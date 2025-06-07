import React from "react";
import { ScrollArea } from "../../components/ui/scroll-area";
import { MainContentSection } from "./sections/MainContentSection/MainContentSection";
import { SecondaryNavigationSection } from "./sections/SecondaryNavigationSection/SecondaryNavigationSection";

export const Desktop = (): JSX.Element => {
  return (
    <div className="bg-white flex flex-col w-full min-h-screen md:flex-row md:justify-center">
      <div className="bg-white w-full max-w-full relative min-h-0 md:max-w-[1360px] md:min-h-screen">
        <ScrollArea className="w-full h-auto md:h-screen">
          <div className="flex flex-col md:flex-row">
            <SecondaryNavigationSection />
            <MainContentSection />
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};
