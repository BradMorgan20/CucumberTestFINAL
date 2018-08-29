$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 2,
  "name": "Bob",
  "description": "",
  "id": "bob",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "Bob",
  "description": "",
  "id": "bob;bob",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Bob",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Bobberina",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Bobberfantastic",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});