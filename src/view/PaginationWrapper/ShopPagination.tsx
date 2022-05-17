import React, { useMemo, useState } from "react";
import Pagination from "../../components/Pagination/Pagination";
import "./style.scss";
import ShopItem from "../../components/ShopItem";
export default function ShopPagination({
  data,
  filter,
}: {
  data: any;
  filter: any;
}) {
  const [PageSize, setPageSize] = useState(12);
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPageSize(Number(e.target.value));
  };
  const [currentPage, setCurrentPage] = useState(1);
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, data, PageSize]);
  return (
    <div className="shop-pagination">
      <div className="cardWrapper">
        {currentTableData.map((item: any, index: any) => {
          return (
            <div className="card-holder" key={index}>
              <ShopItem filter={filter} item={item} key={index} />
            </div>
          );
        })}
      </div>
      <div className="pagination-holder">
        <div className="showing">
          <p>Showing</p>
          <select
            name="pageSize"
            id="pagesize"
            value={PageSize}
            onChange={handleChange}
          >
            <option value={12}>12</option>
            <option value={24}>24</option>
            <option value={48}>48</option>
          </select>
          <p>out of {data.length}</p>
        </div>
        <div className="pagination-display-holder">
          <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={data.length}
            pageSize={PageSize}
            onPageChange={(page: any) => setCurrentPage(page)}
          />
        </div>
      </div>
    </div>
  );
}
