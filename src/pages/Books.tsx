import Cards from "../components/Cards";

interface BookProps {
    currentItems: any;
    pageCount: number;
    handlePageClick: (event:any) => void;
    itemsPerPage: number;
    data: any;
}
function Books({currentItems, pageCount, handlePageClick, data, itemsPerPage}: BookProps) {
	return (
        <section className="w-[80%] m-auto">
                <Cards data={data} currentItems={currentItems} pageCount={pageCount} handlePageClick={handlePageClick} itemsPerPage={itemsPerPage} />
        </section>
	);
}

export default Books;
