var React = require('react');

var sizeThumbnail = {width: '150px', height: '120px'};

var Alumb = React.createClass({
  render: function() {
    return (
      <div>
        <div className="thumbnail">
          <img onClick={this.props.onClick} style={sizeThumbnail} src={this.props.srcImg}></img>
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
    );
  }
});

module.exports = Alumb;
