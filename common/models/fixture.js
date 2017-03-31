'use strict';

module.exports = function(Fixture) {
	Fixture.getFixture = function(fixtureNumber, cb){
		Fixture.findOne({fields: {id: false}, where:{fixture_number:fixtureNumber}},
			function(err,instance){
				if(instance===null){
					cb(null,null);
				}else{
					cb(null,instance);
				}
			});
	};

	Fixture.remoteMethod(
		'getFixture',
		{
			accepts: {arg: 'fixtureNumber', type: 'string'},
			returns: {arg: 'id', type: 'string', root: true},
			http: {path: '/getFixture', verb: 'get', source: 'query'},
			description: "Get fixture instance by fixture number"
		}
	);
};


