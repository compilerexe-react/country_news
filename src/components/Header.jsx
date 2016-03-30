var React = require('react');

var Header = React.createClass({
  render: function() {

    var title = 'Country News';
    var subtitle = 'Top stories in my country';

    var font_title = {fontSize: '30px'}; font_subtitle = {fontSize: '16px'};

    return (
      <div>

        <div className="col-sm-10">
          <div className="form-group">
            <span style={font_title}>{title}</span>
          </div>
          <div className="form-group">
            <span style={font_subtitle}>{subtitle}</span>
          </div>
        </div>
        <div className="col-sm-2">
          <div className="col-sm-12">

          </div>
        </div>

      </div>
    );
  }
});

module.exports = Header;
