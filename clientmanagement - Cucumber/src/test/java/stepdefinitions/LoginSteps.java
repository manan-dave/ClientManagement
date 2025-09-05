package stepdefinitions;

import static org.junit.Assert.assertEquals;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import pages.ClientRegister;
import pages.LoginUser;
import pages.ScheduleMeeting;

public class LoginSteps {
	private LoginUser loginuser = new LoginUser();
	private ClientRegister clientregister = new ClientRegister();
	private ScheduleMeeting schedulemeeting = new ScheduleMeeting();

	
	@Given("User enter username and password")
	public void navigateToLogin() {
		loginuser.nevigateToLogin();
	}
	
    @When("User click on Login button")
    public void clickLogin() {
    	loginuser.enterUserDetails();
    }
    
    @Then("user shouuld be login to ClientManagement page")
    public void userlogin() {
    	
    	 
    	assertEquals(loginuser.userLogin(),"http://localhost:4200/climeeting");
    }
    
    @And("Enter required input")
	public void navigateToClientreg() {
		clientregister.navigateToClientreg();
		clientregister.enterClientDetails();
	}
	
	@When("User click on Register button")
	public void clickRegister() {
		clientregister.clickRegister();
	}
	
	@Then("Client should be register in system")
	public void checkResult() {
		String message = clientregister.checkResult();
		
		assertEquals(message,"Client Created Successfully");
	}
	
	@And("Enter Schedule meeting info")
	public void navigateToScheduleMeeting() {
		schedulemeeting.navigateToScheduleMeeting();
		schedulemeeting.enterMeetingSchedule();
	}
	
	@When("User click on schedule button")
	public void clickSchedule() {
		schedulemeeting.clickSchedule();
	}
	
	@Then("Meeting should be schedule in the system")
	public void checkMeeting() {
		String message = schedulemeeting.checkMeeting();		
		assertEquals(message,"Meeting Schedule Successfully");
	}
}


