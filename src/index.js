const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// importing routes products
const routesTrunkUnits = require('./routes/trunk_units');
const routesDistrics = require('./routes/districs');
const routesTrunks = require('./routes/trunks');
const routesStations = require('./routes/stations');
const routesStationsTrunkUnits = require('./routes/stations_trunk_units');

// settings
app.set('port', process.env.PORT || 3000);

// middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


app.get('/',(req ,resp) => {
   resp.json({
	   'version': 1.0 ,
	   'name' :  'Metropolitano_API'
   })
});

 app.use('/trunks', routesTrunks);
 app.use('/trunk_units', routesTrunkUnits);
 app.use('/stations', routesStations);
 app.use('/stationsTrunkUnits', routesStationsTrunkUnits);
 app.use('/districs', routesDistrics);

// app.use(selectJson, selectRoute);

app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), () => {
	console.log(`server on port ${app.get('port')}`);
});
