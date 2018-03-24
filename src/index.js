const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// importing routes products
const routesTrunkUnits = require('./routes/trunk_units');
const routesDistricts = require('./routes/districts');
const routesTrunks = require('./routes/trunks');
const routesStations = require('./routes/stations');
const routesStationsTrunkUnits = require('./routes/stations_trunk_units');

// webpack
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('../webpack.config');

// settings
app.set('port', process.env.PORT || 3000);

// middlewares
app.use(webpackDevMiddleware(webpack(webpackConfig)));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// routes

const selectJson = [
    'trunk_units',
    'districts',
    'trunks',
    'stations',
    'stations_trunk_units',

  ].forEach(item => (`/${item}`));

  const selectRoute = [
    'routesTrunkUnits',
    'routesDistrictsistricts',
    'routesTrunks',
    'routesStations',
    'routesStationsTrunkUnits',

  ].forEach(item => (`/${item}`));

// app.use('/products', routesProducts);


app.use(selectJson, selectRoute);

app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), () => {
	console.log(`server on port ${app.get('port')}`);
});


