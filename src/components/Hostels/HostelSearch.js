import React, { useState, handleChange } from 'react';

export default function HostelSearch() {
    const [searchInput, setSearchInput] = useState('');

    return (
        <form>
            <input value={searchInput} type="text" onChange={handleChange} placeholder="Enter task..."/>
        </form>
    )

}