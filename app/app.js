var React = require('react');
var ReactDOM = require('react-dom');
var AsinPane = require('./panes/asins-pane')
import AsinChartsPane from './panes/asin-charts-pane'
var samples = require('./asin-data')

var App = React.createClass({
    getInitialState:function(){
        return ({
        "asins":samples.bsrs,
        "selectedAsinData": samples.bsrs[Object.keys(samples.bsrs)[0]],
        "selectedCartType":"Bsr" 
        })
    },    
    setSelectedAsin:function(asin_index){
        this.setState({
            selectedAsinData: this.state.asins[asin_index]
        })
    },
    render:function(){
        return (
        <div>
            <div id="header"></div>        
            <div className="container">
                <div className="column">
                    <h1>Asins</h1>
                    <AsinPane asins={this.state.asins} setSelectedAsin={this.setSelectedAsin}></AsinPane>           
                </div>
                <div className="column"> 
                    <h1>Asin Charts</h1>
                    <AsinChartsPane selectedAsinData={this.state.selectedAsinData} selectedCartType={this.state.selectedCartType}/>           
                </div>          
            </div>
      </div>)
    }
})



ReactDOM.render(<App></App>, document.getElementById('main'));