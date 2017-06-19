var React = require('react');

var AsinPane = React.createClass({
    renderAsin:function(asin){
        return <AsinElement asin={asin} key={asin} setSelectedAsin={this.props.setSelectedAsin}/>
    },
    render:function(){
        return (
            <u1>
                {Object.keys(this.props.asins).map(this.renderAsin)}
            </u1>
        )
    }
})

var AsinElement = React.createClass({
    setIsSelected:function(){
        this.props.setSelectedAsin(this.props.asin)
    },
    render:function(){
        return(<h3 onClick={this.setIsSelected}>{this.props.asin}</h3>)
    }
})

module.exports = AsinPane