var React = require('react');
var List = require('./List.jsx');
var Thumbnail = require('./Thumbnail.jsx');

var style_title = {fontWeight: 'bold', fontSize: '20px'};
var style_subtitle = {fontSize: '18px'};
var style_content = {fontSize: '16px', marginTop: '20px', marginBottom: '20px'};
var style_thumbnail = {marginTop: '25px'};
var style_location = {fontWeight: 'bold', color: '#a6a6a6'};
var sizeIcon = {width: '80px'};
var sizeThumbnail = {width: '150px', height: '120px'};
var marginThumbnail = {marginRight: '15px'};
var style_Previews = {width: '250px', height: '150px'};

var urlIcon = [{
  url: 'images/man_icon.png'
},{
  url: 'images/woman_icon.png'
}];

var urlPreviews = [{
  url_one: 'images/reactjs.png',
  url_two: 'images/react-icons.svg'
},{
  url_one: 'images/icon_html.png',
  url_two: 'images/icon_js.png'
}];

var article = [{
  title: 'React is best for website',
  subtitle: 'Why do you love react',
  content: "This use react langugae,you can try another page new experience real time,when you use it don't refresh...",
  location: 'New York, USA'
},{
  title: 'Hello World, every progrmming langugae',
  subtitle: 'I know you used to',
  content: 'Hello World, This is basic for begin...',
  location: 'Earth, Pluto'
}];

var urlModal;

var callModal = function(jQuery) {
  console.log(urlModal);
  $("#modal_body").attr('src', urlModal);
  $(".ListItem_one").modal();
};

function ModalPreviews(url) {
  // console.log(url);
  urlModal = url;
  callModal();
};

var createLists = React.createClass({
  render: function() {
    return (
      <div>
        <List
          sizeIcon = {sizeIcon}
          urlIcon = {urlIcon[0].url}
          style_title = {style_title}
          article_title = {article[0].title}
          article_subtitle = {article[0].subtitle}
          style_content = {style_content}
          article_content = {article[0].content}
          sizeThumbnail = {sizeThumbnail}
          insertThumbnail = {
            <div>
              <div className="col-xs-12 col-sm-2 thumbnail" style={marginThumbnail}>
                <img style={sizeThumbnail} onClick={ModalPreviews.bind(null, 'images/rank.png')} src='images/rank.png'></img>
              </div>
              <div className="col-xs-12 col-sm-2 thumbnail">
                <img style={sizeThumbnail} onClick={ModalPreviews.bind(null, 'images/nodejs.png')} src='images/nodejs.png'></img>
              </div>
            </div>
          }
          modal_title = {"modal ListItem_one"}
          modal_body = {
            <div>
              <img id="modal_body" style={this.props.style_Previews} src={urlModal}></img>
            </div>
          }
          style_location = {style_location}
          post_location = {article[0].location}
        />

        <List
          sizeIcon = {sizeIcon}
          urlIcon = {urlIcon[1].url}
          style_title = {style_title}
          article_title = {article[1].title}
          article_subtitle = {article[1].subtitle}
          style_content = {style_content}
          article_content = {article[1].content}
          sizeThumbnail = {sizeThumbnail}
          insertThumbnail = {
            <div>
              <div className="col-xs-12 col-sm-2 thumbnail" style={marginThumbnail}>
                <img style={sizeThumbnail} onClick={ModalPreviews.bind(null, 'images/icon_html.png')} src='images/icon_html.png'></img>
              </div>
              <div className="col-xs-12 col-sm-2 thumbnail" >
                <img style={sizeThumbnail} onClick={ModalPreviews.bind(null, 'images/icon_js.png')} src='images/icon_js.png'></img>
              </div>
            </div>
          }
          modal_title = {"modal ListItem_two"}
          modal_body = {
            <div>
              <img id="modal_body" style={this.props.style_Previews} src={urlModal}></img>
            </div>
          }
          style_location = {style_location}
          post_location = {article[1].location}
        />

      </div>
    );
  }
});

module.exports = createLists;
