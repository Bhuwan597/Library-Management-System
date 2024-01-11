"use client";
import React, { useEffect, useState } from "react";
import { Chip, Input, Select, SelectItem, Tab, Tabs } from "@nextui-org/react";
import { FaSearch } from "react-icons/fa";
import {useRouter} from "next/navigation";
import { useDebounce } from "use-debounce";

const BooksTabsAndSearchbar = () => {
  const [bookCategory, setBookCategory] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [queryDebounced] = useDebounce(searchQuery, 500);
  const [bookCategoryDebounced] = useDebounce(bookCategory, 500);
  const router = useRouter();
  const categories = [
    { label: "All", value: "" },
    { label: "Motivational", value: "motivational" },
    { label: "Novel", value: "novel" },
    { label: "Nepali", value: "nepali" },
    { label: "Poem", value: "poem" },
  ];
  const handleCategorySelection = (value) => {
    setBookCategory(value)
  };

    useEffect(() => {
      if(!queryDebounced && !bookCategoryDebounced){
        return router.push('/books')
      }
      return router.push(`/books?search=${queryDebounced}&type=${bookCategoryDebounced}`)
    }, [queryDebounced, bookCategoryDebounced, router])
    

  return (
    <>
      <div className="flex md:justify-end px-4 my-10 gap-2 w-full">
        <Input
          className="h-full font-normal text-default-500 text-small rounded-lg md:w-1/2 lg:w-1/3"
          placeholder="Type to search..."
          size="sm"
          startContent={<FaSearch size={18} />}
          type="search"
          value={searchQuery}
          onChange={(e)=>setSearchQuery(e.target.value)}
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
