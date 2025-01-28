import { createAppSlice } from "@/lib/createAppSlice";
import { Sale } from "@/utils/interfaces";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface SalesTableState {
    sales: Sale[];
    currentPage: number;
    pageSize: number;
    sortKey: keyof Sale | null;
    sortDirection: "asc" | "desc";
}

const initialState: SalesTableState = {
    sales: [],
    currentPage: 1,
    pageSize: 10,
    sortKey: null,
    sortDirection: "desc",
};

export const salesTableSlice = createAppSlice({
    name: "salesTable",
    initialState,
    reducers: (create) => ({
        setSales: create.reducer((state, action: PayloadAction<Sale[]>) => {
            state.sales = action.payload;
            state.currentPage = 1; // Reset to the first page when new data is loaded
        }),
        sortSales: create.reducer((state, action: PayloadAction<keyof Sale>) => {
            const key = action.payload;
            if (state.sortKey === key) {
                state.sortDirection = state.sortDirection === "asc" ? "desc" : "asc";
            } else {
                state.sortKey = key;
                state.sortDirection = "asc";
            }
            state.sales.sort((a, b) => {
                const direction = state.sortDirection === "asc" ? 1 : -1;
                if (a[key] < b[key]) return -1 * direction;
                if (a[key] > b[key]) return 1 * direction;
                return 0;
            });
        }),
        setPage: create.reducer((state, action: PayloadAction<number>) => {
            state.currentPage = action.payload;
        }),
        setPageSize: create.reducer((state, action: PayloadAction<number>) => {
            state.pageSize = action.payload;
            state.currentPage = 1; // Reset to the first page when the page size changes
        }),
    }),
    selectors: {
        selectSales: (state) => state.sales,
        selectSortKey: (state) => state.sortKey,
        selectSortDirection: (state) => state.sortDirection,
        selectCurrentPage: (state) => state.currentPage,
        selectPageSize: (state) => state.pageSize,
        selectPaginatedSales: (state) => {
            const start = (state.currentPage - 1) * state.pageSize;
            const end = start + state.pageSize;
            return state.sales.slice(start, end);
        },
    },
});

export const { setSales, sortSales, setPage, setPageSize } = salesTableSlice.actions;

export const {
    selectSales,
    selectSortKey,
    selectSortDirection,
    selectCurrentPage,
    selectPageSize,
    selectPaginatedSales,
} = salesTableSlice.selectors;
