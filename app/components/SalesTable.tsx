'use client';

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import {
    setSales,
    sortSales,
    setPage,
    setPageSize,
    selectPaginatedSales,
    selectSortKey,
    selectSortDirection,
    selectCurrentPage,
    selectPageSize,
} from "@/lib/features/salesTable/salesTableSlice";
import { Sale } from "@/utils/interfaces";
import DataTable from "./DataTable/DataTable";
import DataTableControls from "./DataTable/DataTableControls";

interface SalesTableProps {
    sales: Sale[];
}

const SalesTable = ({ sales }: SalesTableProps) => {
    const dispatch = useDispatch();
    const paginatedSales = useSelector((state: RootState) => selectPaginatedSales(state));
    const sortKey = useSelector((state: RootState) => selectSortKey(state));
    const sortDirection = useSelector((state: RootState) => selectSortDirection(state));
    const currentPage = useSelector((state: RootState) => selectCurrentPage(state));
    const pageSize = useSelector((state: RootState) => selectPageSize(state));

    useEffect(() => {
        dispatch(setSales(sales));
    }, [sales, dispatch]);

    const handleSort = (key: keyof Sale) => {
        dispatch(sortSales(key));
    };

    const handlePageChange = (page: number) => {
        dispatch(setPage(page));
    };

    const handlePageSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setPageSize(Number(e.target.value)));
    };

    return (
        <div className="paper">
            <DataTable
                data={paginatedSales}
                headers={["weekEnding", "retailSales", "wholesaleSales", "unitsSold", "retailerMargin"]}
                sortKey={sortKey}
                sortDirection={sortDirection}
                handleSort={handleSort}
                formatCell={(key, value) => {
                    if (key === "retailSales" || key === "wholesaleSales" || key === "retailerMargin") {
                        return new Intl.NumberFormat('en-US', {
                            style: 'currency',
                            currency: 'USD',
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 0,
                        }).format(value);
                    }
                    return value;
                }}
            />
            <DataTableControls
                currentPage={currentPage}
                pageSize={pageSize}
                sales={sales}
                handlePageChange={handlePageChange}
                handlePageSizeChange={handlePageSizeChange}
            />
        </div>
    );
};

export default SalesTable;