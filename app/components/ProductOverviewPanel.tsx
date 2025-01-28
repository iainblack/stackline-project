import React from 'react';
import Image from 'next/image';
import { ProductData } from '@/utils/interfaces';

interface ProductOverviewPanelProps {
    product: ProductData;
}

const ProductOverviewPanel = (props: ProductOverviewPanelProps) => {
    const { product } = props;

    return (
        <div className='paper'>
            <div className='flex flex-col items-center gap-5'>
                <Image src={product.image} alt={product.title} width={150} height={150} />
                <div className='flex flex-col gap-2 text-center w-full'>
                    <h1 className='text-xl'>{product.title}</h1>
                    <h2 className='text-xs text-gray-400'>{product.subtitle}</h2>
                </div>
                {product.tags && product.tags.length > 0 &&
                    <div className='w-full border-t border-b border-gray-100 mt-4 py-4'>
                        <div className='flex text-center w-full gap-3 flex-wrap justify-center lg:justify-start'>
                            {product.tags.map(tag => <TagChip key={tag} tag={tag} />)}
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}

const TagChip = ({ tag }: { tag: string }) => {
    return (
        <div className='rounded-sm py-1 px-6 border border-gray-300'>
            <p className='text-sm text-gray-500'>{tag}</p>
        </div>
    );
}

export default ProductOverviewPanel;