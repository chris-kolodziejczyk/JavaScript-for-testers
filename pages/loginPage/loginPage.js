const BaseMethods = require('../baseMethods.js').BaseMethods;
const loginSelectors = require('./loginPageSelectors.js');

class LoginPage extends BaseMethods {
	constructor(browser) {
		super(browser);
	}

	// getSelectors() {

	//     return {
	//         email: '#email',
	//         pass: '#password',
	//         loginBtn: '#login'
	//     }
	// }

	login(email = 'administrator@testarena.pl', password = 'sumXQQ72$L') {
		// element(this.getSelectors().email).sendKeys('administrator@testarena.pl');

		// this.getUrl('url/')

		try {
			element(loginSelectors.email).sendKeys(email);
			element(loginSelectors.pass).sendKeys(password);
			element(loginSelectors.loginBtn).click();
		} catch (ex) {
			console.log(ex)
		}

		return this;
	}
}

module.exports.LoginPage = LoginPage;
