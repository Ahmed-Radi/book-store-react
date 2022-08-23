import Books from './pages/Books';
import {
    Routes,
    Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import SubNav from './components/SubNav';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
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

    const paginateFunction = (data: any) => {
        const endOffset = itemOffset + itemsPerPage ;
        setCurrentItems(data.slice(itemOffset, endOffset));
        if (data.length === 0) {
            setPageCount(1);
            return;
        }
        setPageCount(Math.ceil(data.length / itemsPerPage ));
    }

    const searchHandler = (e:any) => {
        const filteredData = data?.filter((book: any) => {
            if (e === "") {
                //if query is empty return all books
                return book;
            } else if (book.title.toLowerCase().includes(e.toLowerCase())) {
                //returns filtered array
                return book;
            }
        });
        paginateFunction(filteredData)
    }

    return (
        <div>
            <Navbar setData={setData} searchHandler={searchHandler} />
            <SubNav />
            <Routes>
                <Route path="/" element={<Books data={data} itemsPerPage={itemsPerPage} currentItems={currentItems} pageCount={pageCount} handlePageClick={handlePageClick} />} />
            </Routes>
        </div>
    );
}

export default App;
