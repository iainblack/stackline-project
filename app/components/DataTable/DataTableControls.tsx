'use client';

import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

interface DataTableControlsProps {
    currentPage: number;
    pageSize: number;
    sales: any[];
    handlePageChange: (page: number) => void;
    handlePageSizeChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const DataTableControls = (props: DataTableControlsProps) => {
    const { currentPage, pageSize, sales, handlePageChange, handlePageSizeChange } = props;

    return (
        <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
            <div className="flex items-center gap-8">
                <div>
                    <label htmlFor="pageSize" className="mr-2 text-sm text-gray-700">
                        Rows per page:
                    </label>
                    <select
                        id="pageSize"
                        value={pageSize}
                        onChange={handlePageSizeChange}
                        className="border border-gray-300 rounded p-1 text-sm"
                    >
                        {[5, 10, 20, 50].map((size) => (
                            <option key={size} value={size}>
                                {size}
                            </option>
                        ))}
                    </select>
                </div>
                <span className="text-sm text-gray-700">
                    {`${(currentPage - 1) * pageSize + 1}-${Math.min(currentPage * pageSize, sales.length)} of ${sales.length}`}
                </span>
                <div className="flex gap-2">
                    <button
                        disabled={currentPage === 1}
                        onClick={() => handlePageChange(currentPage - 1)}
                        className={`py-2 px-4 text-sm ${currentPage === 1
                            ? "text-gray-300"
                            : "text-gray-700 cursor-pointer hover:bg-gray-200 rounded-lg"}`}
                    >
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                    <button
                        disabled={currentPage === Math.ceil(sales.length / pageSize)}
                        onClick={() => handlePageChange(currentPage + 1)}
                        className={`py-2 px-4  text-sm  ${currentPage === Math.ceil(sales.length / pageSize)
                            ? "text-gray-300"
                            : "text-gray-700 cursor-pointer hover:bg-gray-200 rounded-lg"}`}
                    >
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                </div>
            </div>
        </div >
    );
};

export default DataTableControls;