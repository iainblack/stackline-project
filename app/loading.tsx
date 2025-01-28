'use client';

import React from 'react';

const Loading = () => {
    return (
        <div className="page-container grid grid-cols-1 lg:grid-cols-5 gap-5 lg:gap-0">
            <div
                id="home-left-panel"
                className="col-span-1 w-full lg:p-2 flex lg:flex-col"
            >
                {/* ProductOverviewPanel */}
                <div className="paper flex flex-col items-center gap-5 animate-pulse">
                    <div className="w-36 h-36 bg-gray-300 rounded"></div>
                    <div className="h-5 w-1/2 bg-gray-300 rounded"></div>
                    <div className="h-4 w-3/4 bg-gray-300 rounded"></div>
                    <div className="h-4 w-3/4 bg-gray-300 rounded"></div>
                    <div className="w-full border-t border-b border-gray-100 mt-4 py-4">
                        <div className="flex text-center w-full gap-3 flex-wrap justify-center lg:justify-start">
                            {[...Array(4)].map((_, i) => (
                                <div
                                    key={i}
                                    className="h-6 w-24 bg-gray-300 rounded"
                                ></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div >
            <div className="col-span-1 lg:col-span-4 w-full h-full lg:p-2 flex flex-col">
                {/* SalesGraph */}
                <div className="flex flex-col gap-5 lg:gap-16 flex-grow">
                    <div className="paper animate-pulse">
                        <div className="h-[300px] lg:h-[500px] bg-gray-300 rounded"></div>
                    </div>
                    {/* SalesTable */}
                    <div className="paper animate-pulse space-y-4">
                        <div className="space-y-3">
                            <div className="grid grid-cols-5 gap-4">
                                {[...Array(5)].map((_, colIndex) => (
                                    <div
                                        key={colIndex}
                                        className="h-6 bg-gray-300 rounded"
                                    ></div>
                                ))}
                            </div>
                            <div className="space-y-3">
                                {[...Array(10)].map((_, rowIndex) => (
                                    <div key={rowIndex} className="grid grid-cols-5 gap-4">
                                        {[...Array(5)].map((_, colIndex) => (
                                            <div
                                                key={colIndex}
                                                className="h-6 bg-gray-300 rounded"
                                            ></div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Loading;