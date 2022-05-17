import React, { useState } from "react";
import Button from "../Button";
import importContent from "../../resources/importContent";
import { ShopContext } from "../../context/ShopContext";
import { ShopContextType } from "../../@types/shop.d";
import "./style.scss";

export default function ShopFilter({ filter, setFilter, setSort }: any) {
  const { cartsvg } = importContent();
  const [showFilter, setShowFilter] = useState(false);

  const filterArrayContent = {
    title: "category",
    content: ["accessories", "apparel", "bags", "drinkware"],
  };

  const filterArray = [
    {
      title: "Catergory",
      content: ["accessories1", "apparel1", "bags1", "drinkware1"],
    },
    {
      title: "Size",
      content: ["accessories2", "apparel2", "bags2", "drinkware2"],
    },
    {
      title: "Color",
      content: ["accessories3", "apparel3", "bags3", "drinkware3"],
    },
    {
      title: "Age",
      content: ["accessories4", "apparel4", "bags4", "drinkware4"],
    },
  ];
  const [isOpen, setIsOpen] = useState({ status: false, id: 0 });

  const createFilter = (control: any, item: any) => {
    setFilter({ ...filter, [control]: item });
    console.log(filter);
  };
  return (
    // <div className="shop-filter-wrapper">
    //   <div className="shop-filter">
    //     <div className="sort">
    //       <h3>Sort</h3>
    //       <div className="sort-items"></div>
    //     </div>
    //     <div className="filter">
    //       <h3
    //         onClick={() => {
    //           setShowFilter(!showFilter);
    //         }}
    //       >
    //         Filter{" "}
    //       </h3>
    //     </div>
    //     <div className="search-div">
    //       <input type="text" placeholder="Search" className="searchBox" />
    //       <Button title="Search" className="pry" />
    //     </div>

    //     <img src={cartsvg} alt="svg" />
    //   </div>
    //   {showFilter && (
    //     <div className="show-filter-options">
    //       {filterArray.map((item: any, index: any) => {
    //         return (
    //           <FilterDropDown
    //             item={item}
    //             key={index}
    //             filter={showFilter}
    //             setFilter={setShowFilter}
    //             control={item.title}
    //           />
    //         );
    //       })}
    //     </div>
    //   )}
    // </div>
    <div className="shop-filter-wrapper">
      <div className="shop-filter">
        <div className="sort">
          <h3>Sort</h3>
          <div className="sort-items"></div>
        </div>
        <div className="filter">
          <h3
            onClick={() => {
              setShowFilter(!showFilter);
            }}
          >
            Filter{" "}
          </h3>
        </div>
        <div className="search-div">
          <input type="text" placeholder="Search" className="searchBox" />
          <Button title="Search" className="pry" />
        </div>

        <img src={cartsvg} alt="svg" />
      </div>
      <div className="seem"></div>
      {showFilter && (
        <div className="filter-handler" style={{ display: "flex" }}>
          {filterArray.map((item: any, index: any) => {
            const { title, content } = item;
            return (
              <div
                className="filter-heading"
                onClick={() => {
                  setIsOpen({ status: !isOpen.status, id: index });
                }}
                key={index}
              >
                {title}
              </div>
            );
          })}
        </div>
      )}
      {isOpen.status && (
        <div style={{ display: "flex" }}>
          {filterArray[isOpen.id].content.map((item, index) => {
            return (
              <div
                className="filter-sub-options"
                key={index}
                onClick={() => createFilter(filterArray[isOpen.id].title, item)}
              >
                {item}
              </div>
            );
          })}
        </div>
      )}
      {/* {isOpen.status && (
          <div className="filter-options" style={{ display: "flex" }}>
          {filterArray[isOpen.id].content.map((item: any, index: any) => {
            return (
              <div
                className="filter-heading"
                onClick={() => {
                  createFilter(filterArray[isOpen.id].title, item);
                }}
              >
                {item}
              </div>
            );
          }
          </div>
        )}
      </div> */}

      {/* <div className="filter-select">
        {filterArray.map((item: any, index: any) => {
          const { title, content } = item;
          return (
            <>
              <div className="filter-heading">
                <p>{title}</p>
              </div>
              <div className="filter-options">
                {content.map((item: any, index: any) => {
                  return (
                    <p
                      onClick={() => {
                        createFilter(item.title, content);
                      }}
                    >
                      {item}
                    </p>
                  );
                })}
              </div>
            </>
          );

          // <>
          //   <div className="filter-heading">
          //     <p>{item.title}</p>
          //   </div>
          //   <div className="filter-content">
          //     {isOpen &&
          //       item.content.map((content: [], index: number) => {
          //         return (
          //           <p
          //             onClick={() => {
          //               createFilter(item.title, content);
          //             }}
          //             key={index}
          //           >
          //             me
          //           </p>
          //         );
          //       })}
          //   </div>
          // </>

          // <FilterDropDown

          //   item={item}
          //   key={index}
          //   filter={showFilter}
          //   setFilter={setShowFilter}
          //   control={item.title}
          // />
        })}
      </div>
      <div className="filter-sub-options">gjgjf</div> */}
    </div>
  );
}
//memomize the function below "USE MEMO"
const FilterDropDown = ({
  item,
  filter,
  setFilter,
  control,
}: {
  item: { title: string; content: [string] };
  filter: any;
  setFilter: any;
  control: any;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { title, content } = item;
  const createFilter = (control: any, item: any) => {
    setFilter({ ...filter, [control]: item });
    console.log(filter);
  };
  return (
    <div className="filter-dropdown">
      <div className="filter-heading">
        <p
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {title}
        </p>
      </div>

      {isOpen && (
        <div>
          {isOpen &&
            item.content.map((item, index, array) => {
              return (
                <p
                  onClick={() => {
                    createFilter(control, item);
                  }}
                  key={index}
                >
                  {item}
                </p>
              );
            })}
        </div>
      )}
    </div>
    // <div className="filter-dropdown">
    //       {" "}

    //     </div>
    //     {isOpen && (
    //       <div className="sub-filter">
    //         {item.content.map((item, index, array) => {
    //           return (
    //             <p
    //               onClick={() => {
    //                 createFilter(control, item);
    //               }}
    //               key={index}
    //             >
    //               {item}
    //             </p>
    //           );
    //         })}
    //       </div>
    //     )}
  );
};
