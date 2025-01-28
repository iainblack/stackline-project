import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

interface DataTableProps<T> {
    data: T[];
    headers: (keyof T)[];
    sortKey: keyof T | null;
    sortDirection: "asc" | "desc";
    handleSort: (key: keyof T) => void;
    formatCell?: (key: keyof T, value: any) => React.ReactNode;
}

const DataTable = <T,>(props: DataTableProps<T>) => {
    const { data, headers, sortKey, sortDirection, handleSort, formatCell } = props;

    const formatHeader = (header: string) => {
        return header
            .replace(/([A-Z])/g, ' $1')
            .toUpperCase();
    };

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full table-auto" style={{ tableLayout: 'fixed' }}>
                <thead>
                    <tr>
                        {headers.map((header, index) => (
                            <th
                                key={String(header)}
                                className={`px-4 py-2 text-sm font-medium text-gray-600 cursor-pointer ${index === 0 ? "text-left" : "text-right"}`}
                                onClick={() => handleSort(header)}
                                style={{ width: `${100 / headers.length}%` }}
                            >
                                <div className="flex items-center">
                                    <span>{formatHeader(String(header))}</span>
                                    <span className="ml-2">
                                        {sortKey === header && (
                                            <FontAwesomeIcon size='xs' icon={sortDirection === "asc" ? faChevronUp : faChevronDown} />
                                        )}
                                    </span>
                                </div>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex} className="hover:bg-gray-50">
                            {headers.map((header, colIndex) => (
                                <td
                                    key={String(header)}
                                    className={`px-4 py-2 text-sm text-gray-400`}
                                >
                                    {formatCell ? formatCell(header, row[header]) : row[header] as React.ReactNode}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}


export default DataTable
