var User = require( "../models/user" );
var jwt = require( "jwt-simple" );
var moment = require( "moment" );

module.exports  = {
		   register: function( req, res ) {
					User.findOne( {
						email: req.body.email
					}, function( err, existingUser ) {
						if ( existingUser )
							return res.status( 409 ).send( { message:"Email already present" } );

						  console.log( req.body );
						var user = new User( req.body );
						user.save( function( err, result ) {
							if ( err ) {
								 res.status( 500 ).send( {
								 	 	message: err.message
								 } );
							}
							res.status( 200 ).send( { token: createToken( result ) } );
						} );

			} );
			},
			login: function( req, res ) {
				console.log(req.body);
				User.findOne( {
						email: req.body.email
					}, function( err, user ) {
						console.log('mongo');
						console.log(!user);
						if ( !user ) {
							console.log('not user');
							return res.status( 401 ).send( {
								message: "Email or Password Invalid 1"
							} );
						}
							console.log('yes user');
						if ( req.body.pwd == user.pwd ) {
							console.log('createtoken');
							res.send( {
								token: createToken( user )
							} );
							} else {
								console.log('401');
								return res.status( 401 ).send( {
									message: "Invalid email and/or password 2"
								} );
							}

						})

					}
			};

function createToken( user ) {
	 var payload = {
	 	user:user._id,
	 	iat: moment().unix(),
	 	exp: moment().add( 14, "days" ).unix()
	 };
	 // In a production you have the secret in a file
	 return jwt.encode( payload, "secret" );
}
