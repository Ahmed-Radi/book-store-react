import axios  from 'axios'
import { useEffect, useState } from 'react'
import { AiOutlineDownload } from 'react-icons/ai'
import Paginate from './Paginate';

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
            <section className="grid grid-cols-1 xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 place-items-center justify-around md:justify-between">
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
            <Paginate data={data} pageCount={pageCount} currentItems={currentItems} itemsPerPage={itemsPerPage} handlePageClick={handlePageClick} />
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