import React, { useState, useMemo } from "react";
import Pagination from "../../components/Pagination/Pagination";
import "./style.scss";
// import FilterRow from "../../components/FilterRow";
// import FilterItem from "../../components/FilterItem/Index";

export default function ShowPagination(props: { data: any; openFilter: any; }) {
  const filterDetail = [
    "ORGANIZATION",
    "USERNAME",
    "EMAIL",
    "PHONE NUMBER",
    "DATE JOINED",
    "STATUS",
  ];
  const { data, openFilter } = props;
  const [PageSize, setPageSize] = useState(25);
  const handleChange = (e: any) => {
    setPageSize(e.target.value);
  };
  const [currentPage, setCurrentPage] = useState(1);
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, data, PageSize]);
  return (
    <div className="pagination-holder">
      <div className="showing">
        <p>Showing</p>
        <select name="pageSize" id="pagesize" onChange={handleChange}>
          <option value={25}>25</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
        <p>out of {data.length}</p>
      </div>
      <div className="pagination-display-holder">
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={data.length}
          pageSize={PageSize}
          onPageChange={(page: React.SetStateAction<number>) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
}
