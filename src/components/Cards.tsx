import axios  from 'axios'
import { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';
import { AiOutlineDownload } from 'react-icons/ai'

function Cards() {
    const [data, setData] = useState<any>([])
    useEffect(() => {
        axios.get('http://gutendex.com/books')
        .then((res) => setData(res.data.results))
    } ,[])

    const [currentItems, setCurrentItems] = useState<any>(null);
    const [pageCount, setPageCount] = useState<number>(0);
    const [itemOffset, setItemOffset] = useState<number>(0);

    let itemsPerPage = 10
    useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);

    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        setItemOffset(newOffset);
    };

    return (
        <>
            <section className="flex flex-wrap justify-around md:justify-between">
                {
                    data && currentItems?.map(({authors, id, title, download_count, formats}:any) => (
                        <div key={id} className="w-[200px] mb-4 bg-blue-200 rounded-tl-md rounded-tr-md border-solid border-red-600 border-1">
                            <div className="">
                                <img className="max-w-[100%] w-[100%] h-[300px] rounded-tl-md rounded-tr-md" src={formats['image/jpeg']} alt={authors[0].name + "image"} />
                            </div>
                            <div className="p-2">
                                <h3 className='whitespace-nowrap text-ellipsis overflow-hidden font-bold' title={title}>{title}</h3>
                                <p className='whitespace-nowrap text-ellipsis overflow-hidden text-gray-600'>{authors[0].name}</p>
                                <p className='text-black-600 flex items-center'>{download_count} <AiOutlineDownload className='ml-2' /></p>
                            </div>
                        </div>
                    ))
                }
            </section>
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
                activeClassName='active'
                className="flex justify-center p-3"
            /> : "loading..."}
        </>
    )
}

// .page-link {
//     background-color: #7367F0!important;
//     &::focus {
//         box-shadow: none !important;
//     }
// }
// a {
//     &:hover {
//         color: #fff!important;
//     }
//     &::focus {
//         box-shadow: none !important;
//     }
// }

export default Cards