const testBaseSelectors = require('./testBaseSelectors');
const baseMethods = require('../baseMethods.js').BaseMethods;
const utils = require('../../utils/exampleUtils.js').Utils;

class TestBasePage extends baseMethods {
	constructor(browser) {
		super(browser);
	}

	clickAddOption() {
		element('#content > article > nav > ul > div > a').click();

		return this;
	}

	fillTestForm() {
		browser.element.findAll('.button_link_li').nth(1)
		element(testBaseSelectors.formName).sendKeys(new utils().randomString(255));
		element(testBaseSelectors.formDsc).sendKeys(new utils().randomString(200));
		element(testBaseSelectors.formRes).sendKeys(new utils().randomString(40));
		element(testBaseSelectors.formSave).click();

		return this;
	}

	checkAddTestToTestBase() {
		browser.expect.element('#j_info_box').to.be.visible;
		browser.expect
			.element('#j_info_box')
			.text.to.equal('Przypadek testowy został dodany.');

		return this;
	}
}

module.exports.testBasePage = TestBasePage;
