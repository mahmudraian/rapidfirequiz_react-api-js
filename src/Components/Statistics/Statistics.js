import React, { useContext } from 'react';
import { Bar, BarChart, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

import { TopicContext } from '../Topics/Topics';

const Statistics = () => {
    const data=useContext(TopicContext);
    

   
    return (
        <div>
            <h4>Working on it!</h4>
            <LineChart width={500}
          height={300}
          data={data}>
            <XAxis dataKey="data" />
          <YAxis  />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            <Tooltip></Tooltip>
          </LineChart>


          <BarChart width={500} height={400} data={data}>
          <Bar dataKey="name" fill="white" />
          <XAxis dataKey="data" />
          <YAxis  />
          <Tooltip></Tooltip>
        </BarChart>

        </div>
    );
};

export default Statistics;