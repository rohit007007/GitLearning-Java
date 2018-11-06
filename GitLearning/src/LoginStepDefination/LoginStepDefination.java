package LoginStepDefination;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

public class LoginStepDefination {

	WebDriver driver;
	
	@Given("^User is already on login page$")
	public void user_already_on_login()
	{
		
     System.setProperty("webdriver.chrome.driver", "C:/Users/rohitchawla/Desktop/chromedriver.exe");
     driver = new ChromeDriver();		
     driver.get("https://freecrm.com");
     System.out.println("hello");
	}
	
	@When("^title of login page is Free CRM$")
	public void title_of_login_page_is() throws InterruptedException
	{
	String actualTitle = 	driver.getTitle();
    String expectedTitle = "#1 Free CRM software in the cloud for sales and service";
    Assert.assertEquals(actualTitle, expectedTitle);
    Thread.sleep(2000);
  	}


//@Then("^User enters the \"(.*)\" and user enters the \"(.*)\"$")
//public void user_enters_the_email_id_and_user_enters_the_password(String emailid,String password) throws Throwable {
//    // Write code here that turns the phrase above into concrete actions
//	  driver.findElement(By.name("username")).sendKeys(emailid);
//	   driver.findElement(By.name("password")).sendKeys(password);
//	   Thread.sleep(2000);
//	 }

	
	@Then("^User enters the \"(.*)\" and user enters the \"(.*)\"$")
	public void user_enters_the_email_id_and_user_enters_the_password(String emailid,String password) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		  driver.findElement(By.name("username")).sendKeys(emailid);
		   driver.findElement(By.name("password")).sendKeys(password);
		   Thread.sleep(2000);
		 }
	
@Then("^user clicks on the login button$")
public void user_clicks_on_the_login_button() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
   
//   WebElement e2 = driver.findElement(By.xpath("//input[@type='submit']"));
//   e2.click();
//  Thread.sleep(2000); 
//   
//   JavascriptExecutor js = (JavascriptExecutor)driver;
//js.executeScript("arguments[0].click();", e2);

System.out.println("hjskj");
}

@Then("^user is on homepage$")
public void user_is_on_home_button() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
//	String actualTitle = 	driver.getTitle();
//	  String expectedTitle = "#1 Free CRM software in the cloud for sales and service";
//	  Assert.assertEquals(actualTitle, expectedTitle);
	
	System.out.println("hello123");
}	



@Then("^close the browser$")
public void close_the_browser() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
//	String actualTitle = 	driver.getTitle();
//	  String expectedTitle = "#1 Free CRM software in the cloud for sales and service";
//	  Assert.assertEquals(actualTitle, expectedTitle);
//	
driver.quit();	

}	



}
