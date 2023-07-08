
import React, { useState } from "react";
import SweetPagination from "sweetpagination";


function Pagination() {
    const [currentPageData, setCurrentPageData] = useState(new Array(2).fill());
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  return (
   <div>

    <SweetPagination
      currentPageData={setCurrentPageData}
      dataPerPage={10}
      getData={items}
      navigation={true}
    />
  </div>
  )
}

export default Pagination