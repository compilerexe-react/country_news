var React = require('react');
var Header = require('./Header.jsx');

var Base = React.createClass({
  render: function() {

    var marginHeader = {marginTop: '15px'};
    var sizeIcon = {width: '35px'};
    var viewBorder = {border: '1px solid red'};
    var menuNews = {marginRight: '15px', fontSize: '20px'};
    var menuPhotos = {fontSize: '20px'};

    return (
      <div>

        <div className="row" style={marginHeader}>
          <div className="panel panel-info panel-body">

            <div className="col-sm-7">
              <Header />
            </div>

            <div className="col-sm-5">
              <div className="col-sm-12">
                <div clssName="form-horizontal">
                  <div className="form-group">
                    <div className="col-xs-2 col-sm-2">
                    </div>
                    <div className="col-xs-2 col-sm-2">
                      <a href="http://www.twitter.com" target="_blank"><img src="images/twitter.png" style={sizeIcon}></img></a>
                    </div>
                    <div className="col-xs-2 col-sm-2">
                      <a href="http://www.facebook.com" target="_blank"><img src="images/facebook.png" style={sizeIcon}></img></a>
                    </div>
                    <div className="col-xs-2 col-sm-2">
                      <a href="http://www.instagram.com" target="_blank"><img src="images/instagram.png" style={sizeIcon}></img></a>
                    </div>
                    <div className="col-xs-2 col-sm-2">
                      <a href="http://www.linkedin.com" target="_blank"><img src="images/linkedin.png" style={sizeIcon}></img></a>
                    </div>
                    <div className="col-xs-2 col-sm-2">
                      <a href="http://www.gmail.com" target="_blank"><img src="images/email.png" style={sizeIcon}></img></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="row">
          <div className="col-sm-12">
            <div clssName="form-horizontal">
              <div className="form-group">
                <div className="col-sm-offset-10 col-sm-2 text-right">
                  <a href="/#/news" style={menuNews}>NEWS</a>
                  <a href="/#/photos" style={menuPhotos}>PHOTOS</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="panel panel-info panel-body">
            <div className="col-sm-12">
                {this.props.children}
            </div>
          </div>
        </div>

      </div>
    );
  }
});

module.exports = Base;
