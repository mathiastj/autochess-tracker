import React, { Component } from 'react';
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

class MmrChart extends Component {
  render() {
    const { dataPoints } = this.props

    if (!dataPoints) {
      return null
    }

    const fixData = dataPoints => {
        for (const point of dataPoints) {
            point.timeFetched = new Date(point.timeFetched).toLocaleString()
        }
        return dataPoints.reverse()
    }

    const data = fixData(dataPoints)

    console.log('data', data)
    return (
      <ResponsiveContainer height={500} className="chart-container">
        <LineChart
            width={400}
            height={400}
            data={data}
            margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
            >
            <XAxis dataKey="timeFetched" />
            <YAxis dataKey="newScore" domain={['auto', 'auto']}/>
            <Tooltip wrapperStyle={{
                borderColor: 'white',
                boxShadow: '2px 2px 3px 0px rgb(204, 204, 204)',
              }}
              contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
              labelStyle={{ fontWeight: 'bold', color: '#666666' }}/>
            {/* <CartesianGrid stroke="#f5f5f5" /> */}
            <Line type="monotone" dataKey="newScore" stroke="#ff7300" yAxisId={0} />
            </LineChart>
      </ResponsiveContainer>
    )
  }
}


export default MmrChart
