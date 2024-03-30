import React from 'react';

const Search = () => {
    return (
        <div className='absolute top-0 left-0 bg-white '>
            <div className='h-[1000px] w-fit'>
                <input type="text" placeholder='Enter your search' />
            </div>
        </div>
    );
};

export default Search;