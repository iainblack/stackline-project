'use server';

import { ProductData } from '@/utils/interfaces';
import data from '../../data/data.json';

export async function fetchData(): Promise<ProductData[]> {
    // simulate a network request
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data as ProductData[]);
        }, 2000);
    });
}