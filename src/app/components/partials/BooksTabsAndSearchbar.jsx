"use client";
import React from "react";
import { Chip, Input, Select, SelectItem, Tab, Tabs } from "@nextui-org/react";
import { FaSearch } from "react-icons/fa";

const BooksTabsAndSearchbar = () => {
  const categories = [
    { label: "All", value: "" },
    { label: "Motivational", value: "motivational" },
    { label: "Novel", value: "novel" },
    { label: "Nepali", value: "nepali" },
    { label: "Poem", value: "poem" },
  ];
  const handleCategorySelection = (value) => {
    console.log(value);
  };
  return (
    <>
      <div className="flex md:justify-end px-4 my-10 gap-2 w-full">
        <Input
          className="h-full font-normal text-default-500 text-small rounded-lg md:w-1/2 lg:w-1/3"
          placeholder="Type to search..."
          size="sm"
          startContent={<FaSearch size={18} />}
          type="search"
        />
      </div>
      <div className="sm:flex flex-wrap gap-4 mx-2 md:mx-10">
        <Tabs
          aria-label="Options"
          color="primary"
          variant="underlined"
          classNames={{
            tabList:
              "gap-6 w-full relative rounded-none p-0 border-b border-divider",
            cursor: "w-full bg-[#22d3ee]",
            tab: "max-w-fit px-0 h-12",
            tabContent: "group-data-[selected=true]:text-[#06b6d4]",
          }}
          className="flex flex-wrap"
          onSelectionChange={handleCategorySelection}
        >
          {categories?.map((category, index) => {
            return (
              <Tab
                key={category.value}
                title={
                  <div className="flex items-center space-x-2">
                    <span>{category.label}</span>
                    <Chip size="sm" variant="faded">
                      9
                    </Chip>
                  </div>
                }
              />
            );
          })}
        </Tabs>
      </div>
    </>
  );
};

export default BooksTabsAndSearchbar;
