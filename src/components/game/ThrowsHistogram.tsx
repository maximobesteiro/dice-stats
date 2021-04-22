import React, { useState } from 'react';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar, Cell, ResponsiveContainer } from 'recharts';

interface ThrowsHistogramProps {
    throws: Array<number>;
    onBarClick?: (data: any, index: any) => void;
}

const ThrowsHistogram = (props: ThrowsHistogramProps) => {
    const [selectedBarIndex, setSelectedBarIndex] = useState(-1);

    const buildData = () => {
        let histogram: number[] = Array<number>(11).fill(0);
       
        for(let i=0; i<props.throws.length; i++) {
            histogram[props.throws[i]-2]++;
        }

        return histogram.map((count: number, index: number) => {
            return {
                num: index+2,
                count: count
            };
        });
    }

    const handleOnBarClick = (data: any, index: any) => {
        if(props.onBarClick) {
            setSelectedBarIndex(index);
            props.onBarClick(data, index);
        }
      }

    const data = buildData();
    const renderBarChart = (
    <BarChart
        width={450}
        height={300}
        data={data}
        margin={{
          top: 10,
          right: 40,
          left: 0,
          bottom: 10
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="num" />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Bar dataKey="count" fill="#8884d8" onClick={handleOnBarClick}>
            {data.map((entry, index) => (
                <Cell cursor="pointer" fill={index === selectedBarIndex ? '#82ca9d' : '#8884d8'} key={`cell-${index}`} />
            ))}
        </Bar>
      </BarChart>
    );

    return (
        <ResponsiveContainer className="stats-panel" width="100%" height={300}>
            {renderBarChart}
        </ResponsiveContainer>
    );
};

export default ThrowsHistogram;
