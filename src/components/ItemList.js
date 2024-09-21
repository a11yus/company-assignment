import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import Item from "./Item";
import NoDataMessage from "./NoDataMessage";
import Pagination from "./Pagination";
import "../App.css";

const ItemList = () => {
  const { filteredItems } = useSelector((state) => state.items);
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = React.useState(1);

  const paginatedItems = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredItems.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredItems, currentPage]);

  if (filteredItems.length === 0) {
    return <NoDataMessage message="No items found" />;
  }
  

  return (
    <div>
        <div className="list_items">
        {paginatedItems &&
        paginatedItems.length > 0 &&
        paginatedItems.map((item) => <Item key={item.id} item={item} />)}
        </div>
      <Pagination
        currentPage={currentPage}
        totalItems={filteredItems.length}
        itemsPerPage={itemsPerPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default React.memo(ItemList);
