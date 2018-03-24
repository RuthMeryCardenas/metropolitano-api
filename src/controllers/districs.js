let { districs } = require('../../data/districs.json');

module.exports = {

    getDistrics: (req, res) => {
  	res.json({ districs});
  },
  
    addDistric: (req, res) => {
  	var { name } = req.body;

  	 stations_trunk_units.push({
  		id:  districs.length,
  		name
  	});

  	res.json({
  		success: true,
  		msg: 'successfully added'
  	});
  },

  updateDistric: (req, res) => {
   	const { id } = req.params;
   	const { newName }  = req.body;
   	var found = false;

   	 districs.forEach((disc, i) => {
   		if(!found && disc.id === Number(id)) {
 			trunk.name = newName;
   		}
   	});

   	res.send('Successfully updated trunk');
   },

   deleteDistric: (req, res) => {
   	var id = req.params.id;

   	var found = false;

   	 districs.forEach(function(trunk, index) {
   		if(!found && trunk.id === Number(id)) {
   			trunks.splice(index, 1);
   		}
   	});

   	res.send('successfully deleted trunk');
   }

}
