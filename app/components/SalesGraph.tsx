'use client';

import React, { useEffect, useState } from 'react';
import ReactECharts from 'echarts-for-react';
import { getSalesChartOptions } from '@/utils/functions';
import { Sale } from '@/utils/interfaces';

interface RetailSalesGraphProps {
    sales: Sale[];
}

const SalesGraph = (props: RetailSalesGraphProps) => {
    const { sales } = props;
    const options = getSalesChartOptions(sales);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 1024);
        };

        handleResize(); // Set initial value
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        <div className='paper'>
            <ReactECharts
                option={options}
                style={{ height: isSmallScreen ? '300px' : '500px' }}
            />
        </div>
    )
}

export default SalesGraph;
