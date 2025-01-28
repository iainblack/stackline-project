import { Sale } from "./interfaces";


export function getSalesChartOptions(sales: Sale[]) {
    // Aggregate sales data by month
    const monthlyData = Array(12).fill(0).map(() => ({
        retail: 0,
        wholesale: 0,
    }));

    sales.forEach(({ weekEnding, retailSales, wholesaleSales }) => {
        const month = new Date(weekEnding).getMonth();
        monthlyData[month].retail += retailSales;
        monthlyData[month].wholesale += wholesaleSales;
    });

    return {
        title: {
            text: 'Retail Sales',
            left: 'left',
            textStyle: {
                fontWeight: 'normal',
            },
        },
        tooltip: {
            trigger: 'axis',
        },
        xAxis: {
            type: 'category',
            data: [
                'JAN',
                'FEB',
                'MAR',
                'APR',
                'MAY',
                'JUN',
                'JUL',
                'AUG',
                'SEP',
                'OCT',
                'NOV',
                'DEC',
            ],
            axisTick: {
                show: false,
            },
            axisLine: {
                lineStyle: {
                    color: '#d3d3d3',
                },
            },
            axisLabel: {
                color: '#d3d3d3',
                margin: 15,
            },
        },
        yAxis: {
            show: false,
        },
        series: [
            {
                name: 'Retail Sales',
                type: 'line',
                data: monthlyData.map((data) => data.retail),
            },
            {
                name: 'Wholesale Sales',
                type: 'line',
                data: monthlyData.map((data) => data.wholesale),
                color: 'gray',
            },
        ],
        grid: {
            top: '15%',
            left: '5%',
            right: '5%',
            bottom: '10%',
        },
    } as echarts.EChartOption;
}