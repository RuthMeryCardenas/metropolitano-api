let { trunk_units, currentId } = require('../../data/trunk_units.json');

module.exports = {
  
   /**
 * @api {get} / Muestra la lista de expresos
 * @apiName GetRoot/trunk_Units
 * @apiGroup Root/trunk_Units
 *
 * @apiSuccess {number} id del expreso.
 * @apiSuccess {string} name del expreso.
 * @apiSuccess {string} descripción del expreso.
 * @apiSuccess {string} ubicación del expreso.
 * @apiSuccess {string} url del expreso.
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *	"trunk_units": [{
 *			"id": 1,
 *			"name": "1",
 *			"category": "express",
 *			"turn": "Mañana",
 *			"days": "Lunes a Viernes",
 *			"schedule": "5:00 am a 9:20 am",
 *			"url": "https://workshop-metropolitan.herokuapp.com/trunk_units/1.json"
 *		},
 *		{
 *			"id": 2,
 *			"name": "1",
 *			"category": "express",
 *			"turn": "Tarde Solo de Sur a Norte",
 *			"days": "Lunes a Viernes",
 *			"schedule": "5:00 pm a 9:30 pm",
 *			"url": "https://workshop-metropolitan.herokuapp.com/trunk_units/2.json"
 *		}]
 *   }
 */	
 */	
  getTrunk_units: (req, res) => {
  	res.json({trunk_units});
  },

    
   /**
 * @api {get} / Muestra el detalle especifico de un expreso
 * @apiName GetRoot/trunk_Units/:id
 * @apiGroup Root
 * 
 * @apiParam {string} Filtra por nombre de expreso
 * 
 * @apiSuccess {number} id del expreso.
 * @apiSuccess {string} name del expreso.
 * @apiSuccess {string} descripción del expreso.
 * @apiSuccess {string} ubicación del expreso.
 * @apiSuccess {string} url del expreso.
 * *@apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *			"id": 1,
 *			"name": "1",
 *			"category": "express",
 *			"turn": "Mañana",
 *			"days": "Lunes a Viernes",
 *			"schedule": "5:00 am a 9:20 am",
 *			"url": "https://workshop-metropolitan.herokuapp.com/trunk_units/1.json"
 *		},
 */	
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
