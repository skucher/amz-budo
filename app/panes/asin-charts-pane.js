var React = require('react');
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, ReferenceLine,
  ReferenceDot, Tooltip, CartesianGrid, Legend, Brush, ErrorBar, AreaChart, Area,
  Label, LabelList } from 'recharts';

var AsinChartsPane = React.createClass({
    render:function(){
        return (
            <div>
                <LineChart width={500} height={300} data={this.props.selectedAsinData}>
                    <XAxis dataKey="time"/>
                    <YAxis type="number">
                        <Label value={this.props.seletectChartType} position="insideLeft" angle={90}/>
                    </YAxis>
                    <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
                    <Line type="monotone" dataKey="value" stroke="#8884d8" />
                </LineChart>
            </div>) 
    }
})

module.exports = AsinChartsPane