import React, { useState } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';

const FilterDropDown:React.FC<{ filterValue: any }> = ({ filterValue }) => {

    const [isOpen, setIsOpen] = useState(false)
    const [value, setValue] = useState('')

    return (
        <div className="mb-50">
            <div className="relative inline-block text-left">
                <div>
                    <button onClick={() => isOpen ? setIsOpen(false) : setIsOpen(true)} type="button" className="inline-flex justify-center items-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50" id="options-menu" aria-haspopup="true" aria-expanded="true">
                        {value === 'None' || value === 'Low-to-High' || value === 'High-to-Low' ? value : 'Filter by price'}
                        <RiArrowDropDownLine size={20} />
                    </button>
                </div>
                
                {
                    isOpen && <div className="origin-top-right absolute right-100 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-0 z-10 bg-gray-50">
                        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                            <p onClick={() => { setValue('None') }} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer" role="menuitem">None</p>
                            <p onClick={() => { setValue('Low-to-High') }} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer" role="menuitem">Low-to-High</p>
                            <p onClick={() => { setValue('High-to-Low') }} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer" role="menuitem">High-to-Low</p>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}

export default FilterDropDown;
