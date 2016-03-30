var React = require('react');

var List = React.createClass({
  render: function() {
    return (
      <div>
        <div className="col-xs-12 col-sm-12">
          <div className="col-xs-12 col-sm-1">
            <img style={this.props.sizeIcon} src={this.props.urlIcon}></img>
          </div>
          <div className="col-xs-12 col-sm-11">
            <div className="col-xs-12 col-sm-12">
              <span style={this.props.style_title}>{this.props.article_title}</span>
            </div>
            <div className="col-xs-12 col-sm-12">
              <span style={this.props.style_subtitle}>{this.props.article_subtitle}</span>
            </div>
            <div className="col-xs-12 col-sm-12" style={this.props.style_content}>
              <span>{this.props.article_content}</span>
            </div>

            {this.props.insertThumbnail}

            <div className="col-xs-12 col-sm-12">
              <span style={this.props.style_location}>{this.props.post_location}</span>
            </div>

            <div className="col-xs-12 col-sm-12">
              <hr size="1" />
            </div>

            <div className={this.props.modal_title} role="dialog">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 className="modal-title">Preview Image</h4>
                  </div>
                  <div className="modal-body">
                    {this.props.modal_body}
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
});

module.exports = List;
