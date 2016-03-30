var React = require('react');

var Thumbnail = React.createClass({
  render: function() {
    return (
      <div className="col-sm-3">
        {this.props.insertImg}
      </div>
    );
  }
});

module.exports = Thumbnail;
