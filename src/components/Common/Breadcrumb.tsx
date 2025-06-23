import Link from "next/link";
import React from "react";

const Breadcrumb = ({ title, pages }) => {
  return (
    <div className="overflow-hidden shadow-breadcrumb pt-[150px] sm:pt-[155px] lg:pt-[50px] xl:pt-[150px]">
      <div className="border-t border-gray-3">
<<<<<<< HEAD
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0 py-2 xl:py-6">
=======
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0 py-2 xl:py-4">
>>>>>>> 19c2999c55e5c4cc0501b463af0b0650c056db8b
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <h1 className="font-semibold text-dark text-xl sm:text-2xl xl:text-custom-1">
              {title}
            </h1>

            <ul className="flex items-center gap-2">
              <li className="text-custom-sm hover:text-blue">
                <Link href="/">Home /</Link>
              </li>

              {pages.length > 0 &&
                pages.map((page, key) => (
                  <li className="text-custom-sm last:text-blue capitalize" key={key}>
                    {page} 
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
