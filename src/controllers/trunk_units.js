let { trunk_units, currentId } = require('../../data/trunk_units.json');

module.exports = {
  getTrunk_units: (req, res) => {
  	res.json({trunk_units});
  },

  getTrunk_unit: (req, res) => {
	let { name } = req.params;
	const expresso = trunk_units.filter (trunk_unit => {
	  return trunk_unit.name == name
	});
 
	res.json(expresso);
  },

  addTrunk_unit: (req, res) => {
  	var { name } = req.body;

  	trunk_units.push({
  		id: trunk_units.length,
  		name
  	});

  	res.json({
  		success: true,
  		msg: 'successfully added'
  	});
  },

   updateTrunk_unit: (req, res) => {
   	const { id } = req.params;
   	const { newName }  = req.body;
   	var found = false;

   	trunk_units.forEach((trunk_unit, i) => {
   		if(!found && trunk_unit.id === Number(id)) {
 			trunk_unit.name = newName;
   		}
   	});

   	res.send('Successfully updated trunk_unit');
   },

   deleteTrunk_unit: (req, res) => {
   	var id = req.params.id;

   	var found = false;

   	trunk_units.forEach(function(trunk_unit, index) {
   		if(!found && trunk_unit.id === Number(id)) {
   			trunk_units.splice(index, 1);
   		}
   	});

   	res.send('successfully deleted trunk_unit');
   }

}
