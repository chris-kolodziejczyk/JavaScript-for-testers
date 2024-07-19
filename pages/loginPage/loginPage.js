const loginSelectors = require('./loginPageSelectors.js');
const baseMethods = require('../baseMethods.js').BaseMethods;

class LoginPage extends baseMethods {
	constructor(browser) {
		super(browser);
	}

	login(email = 'administrator@testarena.pl', password = 'sumXQQ72$L') {
		element(loginSelectors.email).sendKeys(email);
		element(loginSelectors.pass).sendKeys(password);
		element(loginSelectors.loginBtn).click();

		// Pobranie listy elementów i wskazanie konkretnego po indeksie
		// browser.element.findAll(loginSelectors.loginBtn).nth(2)

		// element({selector: loginSelectors.loginBtn,
		// locateStrategy: xpath}).click();

        return this
	}

	checkLoginElements(urlElement = 'demo.testarena.pl/') {
		browser.expect.url().to.contain(urlElement);

        return this
	}

    checkVisible() {
        browser.expect.element().to.be.visible;
    }

    logout() {
        element('.icons-switch.icon-20').click();
    }
}

module.exports.LoginPage = LoginPage;
