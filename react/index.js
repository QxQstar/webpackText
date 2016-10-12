/**
 * Created by star on 2016/10/12.
 */
var React = require('react');
var ReactDOM = require('react-dom');
var Content = React.createClass({
    render:function(){
        return <div>
            hello12333344455
            </div>
    }
});
var div1 = document.createElement('div');
document.body.appendChild(div1);
ReactDOM.render(<Content/>,div1);