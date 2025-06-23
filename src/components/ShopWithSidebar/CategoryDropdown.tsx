"use client";
import { useFetchAllCategoryQuery } from "@/redux/features/shop/shopApi";
import { useEffect, useState } from "react";

const CategoryItem = ({ category, selectedId, expandedId, onSelect, onExpand }) => {
  const isSelected = category.id === selectedId;
  const isExpanded = category.id === expandedId;
  const [expandedSubCategoryId, setExpandedSubCategoryId] = useState(null);
  const handleFetchDataByCategory = (categoryId) => {
    // This function can be used to fetch data based on the selected category
    console.log(`Fetching data for category ID: ${categoryId}`);
    // Implement your data fetching logic here
  };
  return (
    <div className="w-full">
      <button
        className={`${
          isSelected && "text-blue"
        } group w-full flex items-center justify-between ease-out duration-200 hover:text-blue`}
        onClick={() => {
          if (category.subCategories?.length > 0) {
            onExpand(isExpanded ? null : category.id);
            setExpandedSubCategoryId(null); // Reset sub-expansion when parent collapses
          } else {
            onSelect(category.id);
          }
        }}
      >
        <div className="flex items-center gap-2">
          <div
            className={`cursor-pointer flex items-center justify-center rounded w-4 h-4 border ${
              isSelected ? "border-blue bg-blue" : "bg-white border-gray-3"
            }`}
          >
          </div>
          <span onClick={() => handleFetchDataByCategory(category.id)}>{category?.name} #</span>
        </div>

        <div className="flex items-center gap-2">
          <span
            className={`${
              isSelected ? "text-white bg-blue" : "bg-gray-2"
            } inline-flex rounded-[30px] text-custom-xs px-2 ease-out duration-200 group-hover:text-white group-hover:bg-blue`}
          >
            {category.products}
          </span>
          {category.subCategories?.length > 0 && (
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${
                isExpanded ? "rotate-180" : ""
              }`}
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.43057 8.51192C4.70014 8.19743 5.17361 8.161 5.48811 8.43057L12 14.0122L18.5119 8.43057C18.8264 8.16101 19.2999 8.19743 19.5695 8.51192C19.839 8.82642 19.8026 9.29989 19.4881 9.56946L12.4881 15.5695C12.2072 15.8102 11.7928 15.8102 11.5119 15.5695L4.51192 9.56946C4.19743 9.29989 4.161 8.82641 4.43057 8.51192Z"
              />
            </svg>
          )}
        </div>
      </button>

      {category.subCategories?.length > 0 && isExpanded && (
        <div className="ml-6 mt-2 flex flex-col gap-2">
          {category.subCategories.map((subCategory) => (
            <div key={subCategory.id} className="w-full">
              <button
                className={`w-full flex items-center justify-between ${
                  selectedId === subCategory.id ? "text-blue" : "text-gray-600"
                } hover:text-blue transition-colors duration-200`}
                onClick={(e) => {
                  e.stopPropagation();
                  if (subCategory?.SubSubCategory?.length > 0) {
                    setExpandedSubCategoryId(
                      expandedSubCategoryId === subCategory.id ? null : subCategory.id
                    );
                  } else {
                    onSelect(subCategory.id);
                  }
                }}
              >
                <div className="flex items-center gap-2">
                  <span onClick={() => handleFetchDataByCategory(subCategory.id)}>{subCategory.name} </span>
                  {subCategory?.SubSubCategory?.length > 0 && (
                    <svg
                      className={`w-3 h-3 transition-transform duration-200 ${
                        expandedSubCategoryId === subCategory.id ? "rotate-180" : ""
                      }`}
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.43057 8.51192C4.70014 8.19743 5.17361 8.161 5.48811 8.43057L12 14.0122L18.5119 8.43057C18.8264 8.16101 19.2999 8.19743 19.5695 8.51192C19.839 8.82642 19.8026 9.29989 19.4881 9.56946L12.4881 15.5695C12.2072 15.8102 11.7928 15.8102 11.5119 15.5695L4.51192 9.56946C4.19743 9.29989 4.161 8.82641 4.43057 8.51192Z"
                      />
                    </svg>
                  )}
                </div>
                <span className={`${
                  selectedId === subCategory.id ? "text-white bg-blue" : "bg-gray-2"
                } inline-flex rounded-[30px] text-custom-xs px-2 ease-out duration-200 group-hover:text-white group-hover:bg-blue`}>
                  {subCategory.products || 0}
                </span>
              </button>

              {subCategory?.SubSubCategory?.length > 0 && expandedSubCategoryId === subCategory.id && (
                <div className="ml-6 mt-2 flex flex-col gap-2">
                  {subCategory.SubSubCategory.map((subSubCategory) => (
                    <button
                      key={subSubCategory.id}
                      className={`flex items-center justify-between ${
                        selectedId === subSubCategory.id ? "text-blue" : "text-gray-600"
                      } hover:text-blue transition-colors duration-200`}
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelect(subSubCategory.id);
                      }}
                    >
                      <span onClick={() => handleFetchDataByCategory(subSubCategory.id)}>{subSubCategory.name}</span>
                      <span className={`${
                        selectedId === subSubCategory.id ? "text-white bg-blue" : "bg-gray-2"
                      } inline-flex rounded-[30px] text-custom-xs px-2 ease-out duration-200 group-hover:text-white group-hover:bg-blue`}>
                        {subSubCategory.products || 0}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const CategoryDropdown = () => {
  const [toggleDropdown, setToggleDropdown] = useState(true);
  const [selectedId, setSelectedId] = useState(null);
  const [expandedId, setExpandedId] = useState(null);
  const { data: categories, isLoading, isError, error, isSuccess }: any =
    useFetchAllCategoryQuery({});

  console.log(categories);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>{error?.message}</div>;
  }
  return (
    <div className="bg-white shadow-1 rounded-lg">
      <div
        onClick={(e) => {
          e.preventDefault();
          setToggleDropdown(!toggleDropdown);
        }}
        className={`cursor-pointer flex items-center justify-between py-3 pl-6 pr-5.5 ${
          toggleDropdown && "shadow-filter"
        }`}
      >
        <p className="text-dark">Category</p>
        <button
          aria-label="button for category dropdown"
          className={`text-dark ease-out duration-200 ${
            toggleDropdown && "rotate-180"
          }`}
        >
          <svg
            className="fill-current"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.43057 8.51192C4.70014 8.19743 5.17361 8.161 5.48811 8.43057L12 14.0122L18.5119 8.43057C18.8264 8.16101 19.2999 8.19743 19.5695 8.51192C19.839 8.82642 19.8026 9.29989 19.4881 9.56946L12.4881 15.5695C12.2072 15.8102 11.7928 15.8102 11.5119 15.5695L4.51192 9.56946C4.19743 9.29989 4.161 8.82641 4.43057 8.51192Z"
            />
          </svg>
        </button>
      </div>

      <div
        className={`flex-col gap-3 py-6 pl-6 pr-5.5 ${
          toggleDropdown ? "flex" : "hidden"
        }`}
      >
        {categories?.map((category, key) => (
          <CategoryItem 
            key={key} 
            category={category} 
            selectedId={selectedId}
            expandedId={expandedId}
            onSelect={setSelectedId}
            onExpand={setExpandedId}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryDropdown;
