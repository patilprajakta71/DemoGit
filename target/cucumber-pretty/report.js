$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("loginFeature.feature");
formatter.feature({
  "line": 1,
  "name": "Login module",
  "description": "",
  "id": "login-module",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Login as a Authenticated user",
  "description": "",
  "id": "login-module;login-as-a-authenticated-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enter username and password",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user is able to login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_homepage()"
});
formatter.result({
  "duration": 8741110409,
  "error_message": "org.openqa.selenium.InvalidArgumentException: invalid argument\n  (Session info: chrome\u003d84.0.4147.105)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Prajaktas-MacBook-Pro.local\u0027, ip: \u00272402:3a80:18c6:974d:58e2:b6a8:3b35:cd1f%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 84.0.4147.105, chrome: {chromedriverVersion: 84.0.4147.30 (48b3e868b4cc0..., userDataDir: /var/folders/tm/564db_gs42x...}, goog:chromeOptions: {debuggerAddress: localhost:55513}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 235fdb425d267a351aa3879603da09c1\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\n\tat stepDefinition.LoginStepDefinition.user_is_on_homepage(LoginStepDefinition.java:22)\n\tat ✽.Given user is on homepage(loginFeature.feature:4)\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDefinition.user_enter_username_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_able_to_login_successfully()"
});
formatter.result({
  "status": "skipped"
});
});