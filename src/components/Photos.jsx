var React = require('react');
var Alumb = require('./Alumb.jsx');

var style_Previews = {width: '250px', height: '150px'};

var urlImages = [{
  src: 'images/man_icon.png'
},{
  src: 'images/woman_icon.png'
},{
  src: 'images/rank.png'
},{
  src: 'images/nodejs.png'
},{
  src: 'images/icon_html.png'
},{
  src: 'images/icon_js.png'
}];

var urlModal;

var callModal = function(jQuery) {
  console.log(urlModal);
  $("#modal_body").attr('src', urlModal);
  $(".Photos").modal();
};

function ModalPreviews(url) {
  // console.log(url);
  urlModal = url;
  callModal();
};

var Photos = React.createClass({
  render: function() {
    return (
      <div>

        <div className="col-xs-12 col-sm-2">
          <Alumb
            onClick = {ModalPreviews.bind(null, urlImages[0].src)}
            srcImg = {urlImages[0].src}
            modal_title={"modal Photos"}
            modal_body = {
              <div>
                <img id="modal_body"></img>
              </div>
            }
          />
        </div>

        <div className="col-xs-12 col-sm-2">
          <Alumb
            onClick = {ModalPreviews.bind(null, urlImages[1].src)}
            srcImg = {urlImages[1].src}
            modal_title={"modal woman"}
            modal_body = {
              <div>
                <img id="modal_body"></img>
              </div>
            }
          />
        </div>

        <div className="col-xs-12 col-sm-2">
          <Alumb
            onClick = {ModalPreviews.bind(null, urlImages[2].src)}
            srcImg = {urlImages[2].src}
            modal_title={"modal woman"}
            modal_body = {
              <div>
                <img id="modal_body"></img>
              </div>
            }
          />
        </div>

        <div className="col-xs-12 col-sm-2">
          <Alumb
            onClick = {ModalPreviews.bind(null, urlImages[3].src)}
            srcImg = {urlImages[3].src}
            modal_title={"modal woman"}
            modal_body = {
              <div>
                <img id="modal_body"></img>
              </div>
            }
          />
        </div>

        <div className="col-xs-12 col-sm-2">
          <Alumb
            onClick = {ModalPreviews.bind(null, urlImages[4].src)}
            srcImg = {urlImages[4].src}
            modal_title={"modal woman"}
            modal_body = {
              <div>
                <img id="modal_body"></img>
              </div>
            }
          />
        </div>

        <div className="col-xs-12 col-sm-2">
          <Alumb
            onClick = {ModalPreviews.bind(null, urlImages[5].src)}
            srcImg = {urlImages[5].src}
            modal_title={"modal woman"}
            modal_body = {
              <div>
                <img id="modal_body"></img>
              </div>
            }
          />
        </div>

      </div>
    );
  }
});

module.exports = Photos;
