'use client';
import React, { useState } from "react";
import * as d3 from "d3";
import { Data } from "@/types/global";


const Visualization: React.FC = () => {
    // Define your data
    const data: Data[] = [
        { month: "Jan", users: 10, posts: 10, pages: 2, groups: 0 },
        { month: "Feb", users: 120, posts: 60, pages: 5, groups: 3 },
        { month: "Mar", users: 328, posts: 1120, pages: 11, groups: 5 },
    ];

    // Define margins and dimensions
    const width: number = 800;
    const height: number = 500;
    const marginTop: number = 40;
    const marginRight: number = 40;
    const marginBottom: number = 60;
    const marginLeft: number = 60;

    // Define color scale
    const colorScale: d3.ScaleOrdinal<string, string> = d3.scaleOrdinal<string, string>()
        .domain(["users", "posts", "pages", "groups"])
        .range(["#80c762", "#d55a5a", "#f2b92b", "#ff7373"]);

    // Define scales
    const xScale: d3.ScaleBand<string> = d3.scaleBand<string>()
        .domain(data.map(d => d.month))
        .range([marginLeft, width - marginRight])
        .padding(0.2);

    const yScale: d3.ScaleLinear<number, number> = d3.scaleLinear<number, number>()
        .domain([0, d3.max(data, d => Math.max(d.users, d.posts, d.pages, d.groups)) as number])
        .range([height - marginBottom, marginTop]);

    // State for tooltip
    const [tooltip, setTooltip] = useState<{ month: string; category: string; value: number } | null>(null);

    return (
        <svg width={width} height={height}>
            {/* Grid lines */}
            <g>
                {/* Horizontal grid lines */}
                {yScale.ticks().map((tick, index) => (
                    <line
                        key={`grid-line-y-${index}`}
                        x1={marginLeft}
                        y1={yScale(tick)}
                        x2={width - marginRight}
                        y2={yScale(tick)}
                        stroke="#ccc"
                        strokeDasharray="4"
                    />
                ))}
                {/* Vertical grid lines */}
                {xScale.domain().map((label, index) => (
                    <line
                        key={`grid-line-x-${index}`}
                        x1={xScale(label)! + xScale.bandwidth() / 2}
                        y1={marginTop}
                        x2={xScale(label)! + xScale.bandwidth() / 2}
                        y2={height - marginBottom}
                        stroke="#ccc"
                        strokeDasharray="4"
                    />
                ))}
            </g>
            {/* Data rectangles */}
            {data.map((d, i) => (
                <g key={i}>
                    {["users", "posts", "pages", "groups"].map((category, index) => (
                        <rect
                            key={category}
                            x={xScale(d.month)! + (xScale.bandwidth() / 4) * index}
                            y={yScale(d[category] as number)}
                            width={xScale.bandwidth() / 4}
                            height={height - marginBottom - yScale(d[category] as number)}
                            fill={colorScale(category)!}
                            onMouseEnter={() => setTooltip({ month: d.month, category, value: d[category] as number })}
                            onMouseLeave={() => setTooltip(null)}
                        />
                    ))}
                </g>
            ))}
            {/* Tooltip */}
            {tooltip && (
                <>
                    <rect
                        x={xScale(tooltip.month)! + xScale.bandwidth() / 2 - 30}
                        y={yScale(tooltip.value) - 30}
                        width="60"
                        height="20"
                        fill="white"
                        style={{ opacity: 0.7 }}
                    />
                    <text
                        x={xScale(tooltip.month)! + xScale.bandwidth() / 2}
                        y={yScale(tooltip.value) - 15}
                        textAnchor="middle"
                        fill="black"
                    >
                        {`${tooltip.category}: ${tooltip.value}`}
                    </text>
                </>
            )}
            {/* X-axis */}
            <g transform={`translate(0,${height - marginBottom})`}>
                {xScale.domain().map(label => (
                    <text key={label} x={xScale(label)! + xScale.bandwidth() / 2} y={20} textAnchor="middle" fill="currentColor">
                        {label}
                    </text>
                ))}
            </g>
            {/* Y-axis */}
            <g transform={`translate(${marginLeft - 5}, 0)`}>
                {yScale.ticks().map((tick, index) => (
                    <text key={index} x={0} y={yScale(tick)} dy="-2" textAnchor="end" fill="currentColor">
                        {tick}
                    </text>
                ))}
            </g>
        </svg>
    );
};

export default Visualization;
