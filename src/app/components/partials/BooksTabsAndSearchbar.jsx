"use client";
import React, { useEffect, useRef, useState } from "react";
import { Chip, Input, Tab, Tabs } from "@nextui-org/react";
import { FaSearch } from "react-icons/fa";
import {useRouter} from "next/navigation";
import { useDebounce } from "use-debounce";

const BooksTabsAndSearchbar = ({search, type}) => {
  const [bookCategory, setBookCategory] = useState(type|| '')
  const [searchQuery, setSearchQuery] = useState(search || '')
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

  const initialRender = useRef(true)
    useEffect(() => {
      if(initialRender.current){
        initialRender.current = false;
        console.log('Initial render done')
        return
      }
      if(!queryDebounced && !bookCategoryDebounced){
        return router.push('/books')
      }
      let queryString = `/books?search=${queryDebounced}`;
      if (bookCategoryDebounced) {
        queryString += `&type=${bookCategoryDebounced}`;
      }
      return router.push(queryString)
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
          selectedKey={bookCategory}
        >
          {categories?.map((category) => {
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
                selected={bookCategory === category.value}
              />
            );
          })}
        </Tabs>
      </div>
    </>
  );
};

export default BooksTabsAndSearchbar;
