$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("E:/Git-Project/GitLearning-Java/GitLearning/src/Feature/login.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM login feature",
  "description": "",
  "id": "free-crm-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 2,
      "value": "#Scenario: Free CRM login Test Scenario"
    },
    {
      "line": 3,
      "value": "#Given User is already on login page"
    },
    {
      "line": 4,
      "value": "#When title of login page is Free CRM"
    },
    {
      "line": 5,
      "value": "#Then User enters the \"login9abc\" and user enters the \"123456\""
    },
    {
      "line": 6,
      "value": "#Then user clicks on the login button"
    },
    {
      "line": 7,
      "value": "#Then user is on homepage"
    },
    {
      "line": 11,
      "value": "#Feature: Free CRM login feature"
    }
  ],
  "line": 12,
  "name": "Free CRM login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "User is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User enters the \"\u003cusername\u003e\" and user enters the \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "user clicks on the login button",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "user is on homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 22,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;1"
    },
    {
      "cells": [
        "login9abc",
        "123456"
      ],
      "line": 23,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;2"
    },
    {
      "cells": [
        "tom",
        "harry"
      ],
      "line": 24,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 23,
  "name": "Free CRM login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "User is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User enters the \"login9abc\" and user enters the \"123456\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "user clicks on the login button",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "user is on homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_already_on_login()"
});
formatter.result({
  "duration": 12541393802,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.title_of_login_page_is()"
});
formatter.result({
  "duration": 2040536121,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login9abc",
      "offset": 17
    },
    {
      "val": "123456",
      "offset": 49
    }
  ],
  "location": "LoginStepDefination.user_enters_the_email_id_and_user_enters_the_password(String,String)"
});
formatter.result({
  "duration": 2658186561,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 189189,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_home_button()"
});
formatter.result({
  "duration": 153610,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.close_the_browser()"
});
formatter.result({
  "duration": 972802924,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Free CRM login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "User is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User enters the \"tom\" and user enters the \"harry\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "user clicks on the login button",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "user is on homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_already_on_login()"
});
formatter.result({
  "duration": 9869172336,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.title_of_login_page_is()"
});
formatter.result({
  "duration": 2038678439,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tom",
      "offset": 17
    },
    {
      "val": "harry",
      "offset": 43
    }
  ],
  "location": "LoginStepDefination.user_enters_the_email_id_and_user_enters_the_password(String,String)"
});
formatter.result({
  "duration": 2203222171,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 49949,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_home_button()"
});
formatter.result({
  "duration": 36948,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.close_the_browser()"
});
formatter.result({
  "duration": 713825326,
  "status": "passed"
});
});