import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const SecondaryNavigationSection = (): JSX.Element => {
  // Navigation items data for mapping
  const navigationItems = [
    {
      id: 1,
      title: "Physics PYQs",
      icon: "/subject-icons-3.svg",
      active: true,
    },
    {
      id: 2,
      title: "Chemistry PYQs",
      icon: "/subject-icons-1.svg",
      active: false,
    },
    {
      id: 3,
      title: "Mathematics PYQs",
      icon: "/subject-icons.svg",
      active: false,
    },
  ];

  return (
    <div className="flex flex-col w-full h-auto items-start bg-white p-2 md:w-[272px] md:h-full md:p-0">
      <div className="flex flex-col w-full items-start py-3 bg-white md:py-6">
        <div className="flex flex-col items-start gap-2 w-full md:gap-4">
          <div className="flex items-center justify-start gap-2 w-full md:gap-4 md:justify-center">
            <div
              className="relative w-5 h-5 md:w-6 md:h-6"
              style={{
                background: "url('/exam-logo.png') 50% 50% / cover",
              }}
            />
            <div className="font-['Inter',Helvetica] font-bold text-[#101319] text-base leading-5 md:text-xl md:leading-6">
              JEE Main
            </div>
          </div>

          <div className="flex items-center justify-start gap-0 w-full md:gap-1 md:justify-center">
            <div className="flex-1 font-body-xs-12 text-[#505d79] text-xs leading-4 md:text-[length:var(--body-xs-12-font-size)] md:leading-[var(--body-xs-12-line-height)]">
              2025 - 2009 | 173 Papers | 15825 Qs
            </div>
          </div>
        </div>
      </div>

      <Card className="w-full shadow md:shadow-none md:border-0 md:rounded-none md:mt-0 border rounded-lg mt-2">
        <CardContent className="flex flex-col items-start gap-2 pt-0 pb-2 px-2 md:gap-4 md:pb-4 md:px-0">
          {navigationItems.map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              className={`flex h-10 items-center gap-2 pl-2 pr-1 py-2 w-full rounded-lg justify-start md:h-12 md:gap-4 md:pl-4 md:pr-2 md:py-3 md:rounded-xl ${
                item.active
                  ? "bg-[#1d2933] text-white"
                  : "bg-white text-[#101319]"
              }`}
            >
              <img
                className="w-5 h-5 md:w-6 md:h-6"
                alt={`${item.title} icon`}
                src={item.icon}
              />
              <span className="flex-1 font-label-sm-14 text-xs leading-4 md:text-[length:var(--label-sm-14-font-size)] md:leading-[var(--label-sm-14-line-height)]">
                {item.title}
              </span>
              <ChevronRightIcon className="w-4 h-4 md:w-5 md:h-5" />
            </Button>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};
