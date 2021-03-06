let { trunks, currentId } = require('../../data/trunks.json');

module.exports = {

    /**
   * @api {get} /Trunk retorna la lista de troncales
   * @apiName GetTrunk
   * @apiGroup Trunk
   *
   * @apiSuccess {Object[]} troncales           List of troncales.
   * @apiSuccess {String}   troncales.id
   * @apiSuccess {String}   troncales.name
   * @apiSuccess {String}   troncales.description
   *
   * @apiSuccessExample {json} Success-Response:
   * [
   *   {
		"trunk": {
			"id": 1,
			"name": "Troncal Norte",
			"description": "",
			"url": "https://workshop-metropolitan.herokuapp.com/trunks/1.json"
			}
   *   ...
   *   }
   * ]
   */	
  getTrunks: (req, res) => {
  	res.json({trunks});
  },

  addTrunk: (req, res) => {
  	var { name } = req.body;

  	trunks.push({
  		id: trunks.length,
  		name
  	});

  	res.json({
  		success: true,
  		msg: 'successfully added'
  	});
  },

   updateTrunk: (req, res) => {
   	const { id } = req.params;
   	const { newName }  = req.body;
   	var found = false;

   	trunks.forEach((trunk, i) => {
   		if(!found && trunk.id === Number(id)) {
 			trunk.name = newName;
   		}
   	});

   	res.send('Successfully updated trunk');
   },

   deleteTrunk: (req, res) => {
   	var id = req.params.id;

   	var found = false;

   	trunks.forEach(function(trunk, index) {
   		if(!found && trunk.id === Number(id)) {
   			trunks.splice(index, 1);
   		}
   	});

   	res.send('successfully deleted trunk');
   }

}
