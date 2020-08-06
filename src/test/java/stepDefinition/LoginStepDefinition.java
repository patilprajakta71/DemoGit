package stepDefinition;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStepDefinition {
	WebDriver driver;

@Given("^user is on homepage$")
public void user_is_on_homepage() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
	
	System.setProperty("webdriver.chrome.driver","/Users/prajakta/Downloads/chromedriver");
	
	driver = new ChromeDriver();
	
	driver.get("www.google.com");
	
	
    throw new PendingException();
}

@When("^user enter username and password$")
public void user_enter_username_and_password() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
    throw new PendingException();
}

@Then("^user is able to login successfully$")
public void user_is_able_to_login_successfully() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
    throw new PendingException();
}


}
