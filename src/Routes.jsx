var React = require('react');
var Base = require('./components/Base.jsx');
var PageNews = require('./components/News.jsx');
var PagePhotos = require('./components/Photos.jsx');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var History = require('history');
var createHashHistory = History.createHashHistory;
var useRouterHistory = ReactRouter.useRouterHistory;
var IndexRoute = ReactRouter.IndexRoute;
var appHistory = useRouterHistory(createHashHistory)({ queryKey: false});

var RoutesManagement = (
    <Router history={appHistory}>
        <Route path="/" component={Base} >
            <IndexRoute component={PageNews} />
            <Route path="/news" component={PageNews} />
            <Route path="/photos" component={PagePhotos} />
        </Route>
    </Router>
);

module.exports = RoutesManagement;
