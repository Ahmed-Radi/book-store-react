import ReactPaginate from "react-paginate";

interface PaginateProp {
    data: any;
    currentItems: any;
    pageCount: number;
    itemsPerPage: number;
    handlePageClick: (event:any) => void;
}
function Paginate({data, currentItems, pageCount, itemsPerPage, handlePageClick}: PaginateProp) {
    return (
        <>
            {data && currentItems ? <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={2}
                pageCount={pageCount ? pageCount : data.length / itemsPerPage }
                previousLabel="<"
                renderOnZeroPageCount={null || undefined}
                containerClassName='pagination justify-content-center'
                pageClassName='bg-[#7367F0] flex items-center mr-1 h-[37px] rounded-[50%]'
                pageLinkClassName=' text-[#fff] p-2 mx-[5px]'
                previousClassName='bg-[#7367F0] flex items-center mr-1 h-[37px] rounded-[50%]'
                previousLinkClassName=' text-[#fff] p-2 mx-[5px]'
                nextClassName='bg-[#7367F0] flex items-center mr-1 h-[37px] rounded-[50%]'
                nextLinkClassName=' text-[#fff] p-2 mx-[5px]'
                breakClassName='bg-[#7367F0] flex items-center mr-1 h-[37px] rounded-[50%]'
                breakLinkClassName=' text-[#fff] p-2 mx-[5px]'
                activeClassName='bg-[#67c0f0]'
                disabledClassName="bg-gray-400"
                className="flex justify-center p-3"
            /> : "loading..."}
        </>
    )
}

export default Paginate