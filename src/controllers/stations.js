let { stations, currentId } = require('../../data/stations.json');

module.exports = {
  getStations: (req, res) => {
  	res.json({stations});
  },

  addStation: (req, res) => {
  	var { name } = req.body;

  	stations.push({
  		id: stations.length,
  		name
  	});

  	res.json({
  		success: true,
  		msg: 'successfully added'
  	});
  },

   updateStation: (req, res) => {
   	const { id } = req.params;
   	const { newName }  = req.body;
   	var found = false;

   	stations.forEach((station, i) => {
   		if(!found && station.id === Number(id)) {
 			station.name = newName;
   		}
   	});

   	res.send('Successfully updated station');
   },

   deleteStation: (req, res) => {
   	var id = req.params.id;

   	var found = false;

   	stations.forEach(function(station, index) {
   		if(!found && station.id === Number(id)) {
   			stations.splice(index, 1);
   		}
   	});

   	res.send('successfully deleted station');
   }

}
