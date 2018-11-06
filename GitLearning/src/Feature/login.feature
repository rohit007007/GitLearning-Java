Feature: Free CRM login feature
#Scenario: Free CRM login Test Scenario
#Given User is already on login page
#When title of login page is Free CRM
#Then User enters the "login9abc" and user enters the "123456"
#Then user clicks on the login button
#Then user is on homepage



#Feature: Free CRM login feature
Scenario Outline: Free CRM login Test Scenario

Given User is already on login page
When title of login page is Free CRM
Then User enters the "<username>" and user enters the "<password>"
Then user clicks on the login button
Then user is on homepage
Then close the browser

Examples:
	| username	|	password	|
	|	login9abc	|	123456	|
	|	tom	|	harry	|