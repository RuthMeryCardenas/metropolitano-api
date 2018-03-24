let { stations_trunk_units, currentId } = require('../../data/stations_trunk_units.json');

console.log( stations_trunk_units);

module.exports = {
    getStationsTrunkUnits: (req, res) => {
  	res.json({ stations_trunk_units});
  },

    addStationsTrunkUnit: (req, res) => {
  	var { name } = req.body;

  	 stations_trunk_units.push({
  		id:  stations_trunk_units.length,
  		name
  	});

  	res.json({
  		success: true,
  		msg: 'successfully added'
  	});
  },

  updateStationsTrunkUnit: (req, res) => {
   	const { id } = req.params;
   	const { newName }  = req.body;
   	var found = false;

   	 stations_trunk_units.forEach((trunk, i) => {
   		if(!found && trunk.id === Number(id)) {
 			trunk.name = newName;
   		}
   	});

   	res.send('Successfully updated trunk');
   },

   deleteStationsTrunkUnit: (req, res) => {
   	var id = req.params.id;

   	var found = false;

   	 stations_trunk_units.forEach(function(trunk, index) {
   		if(!found && trunk.id === Number(id)) {
   			trunks.splice(index, 1);
   		}
   	});

   	res.send('successfully deleted trunk');
   }

}
