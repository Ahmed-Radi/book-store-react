function SubNav() {
    return (
        <div className='w-[70%] mx-auto py-5'>
            <ul className='h-[40px] flex justify-between overflow-x-scroll center-center items-center'>
                <li className='mx-3 before:hover:w-[80%] before:ease-in before:duration-300 before:hover:ease-in before:hover:duration-300 before:hover:translate-x-[-40%] before:absolute before:bg-blue-500 before:bottom-[-8px] before:w-2 before:h-2 before:rounded-full before:left-[40%] relative'>
                    Home
                </li>
                <li className="mx-3 ">BestSeller</li>
                <li className="mx-3 ">
                    <label htmlFor=''>
                        <select name='' id=''>
                            <option value=''>Category</option>
                            <option value=''>option 1</option>
                            <option value=''>option 1</option>
                            <option value=''>option 1</option>
                        </select>
                    </label>
                </li>
                <li className="mx-3 min-w-[100px]">Find a store</li>
                <li className="mx-3 ">Blog</li>
            </ul>
        </div>
    );
}

export default SubNav;
