Feature: Login module
  
  Scenario: Login as a Authenticated user
    Given user is on homepage
    When user enter username and password
    Then user is able to login successfully
 