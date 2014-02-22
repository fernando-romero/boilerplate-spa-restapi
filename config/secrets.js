module.exports = {

	db: 'localhost',

	localAuth: true,
	sessionSecret: 'ThisIsMySessionSecret',

	twitterAuth: true,
	twitter: {
		consumerKey: 'mUY6eJzemDbmTfLPBWMQ',
		consumerSecret: 'OfNlI8WJOac6xMNdySjIBNtAf1QhDHI0KxtjMUJXWYE',
		callbackURL: '/auth/twitter/callback',
		passReqToCallback: true
	},

	facebookAuth: true,
	facebook: {
		clientID: '1379477488967993',
		clientSecret: '0cf5d2219cb8712062c32987c853af88',
		callbackURL: 'http://localhost:3000/auth/facebook/callback',
		passReqToCallback: true
	}

};