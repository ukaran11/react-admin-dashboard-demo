import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import "./Chart.css";

const Chart = () => {
    const data = [
        {
          name: 'Jan',
          "Active User": 4000,
        },
        {
          name: 'Feb',
          "Active User": 3000,
        },
        {
          name: 'Mar',
          "Active User": 2000,
        },
        {
          name: 'Apr',
          "Active User": 2780,
        },
        {
          name: 'May',
          "Active User": 1890,
        },
        {
          name: 'Jun',
          "Active User": 2390,
        },
        {
          name: 'Jul',
          "Active User": 3490,
        },
        {
          name: 'Aug',
          "Active User": 4000,
        },
        {
          name: 'Sep',
          "Active User": 3000,
        },
        {
          name: 'Oct',
          "Active User": 2000,
        },
        {
          name: 'Nov',
          "Active User": 2780,
        },
        {
          name: 'Dec',
          "Active User": 1890,
        },
      ];
      console.log("test")
    return (
        <div className="chart">
            <h3 className="chartTitle">User Analytics</h3>
                <ResponsiveContainer width="100%" aspect={4/1}>
                    <LineChart data={data}>
                        <XAxis dataKey="name" stroke="#5550bd"/>
                        <Line type="monotone" dataKey="Active User" stroke="#5550bd"/>
                        <Tooltip />
                    </LineChart>
                </ResponsiveContainer>
        </div>
    )
}

export default Chart
