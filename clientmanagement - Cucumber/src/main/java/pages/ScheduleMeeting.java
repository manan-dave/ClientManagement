package pages;
import java.time.Duration;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import io.github.bonigarcia.wdm.WebDriverManager;


public class ScheduleMeeting {

	private WebDriver driver;
	
	public void navigateToScheduleMeeting() {
		
		WebDriverManager.chromedriver().setup();
		driver= new ChromeDriver();
		driver.get("http://localhost:4200/climeeting");
		driver.findElement(By.xpath("//*[@id=\"clientmeteeingheader\"]/button[3]")).click();

	}
	
	public void enterMeetingSchedule() {
		driver.findElement(By.id("topic")).sendKeys("Project Meeting");
		driver.findElement(By.id("numberofpeople")).sendKeys("3");
		driver.findElement(By.id("starttime")).sendKeys("2025-09-05T10:30:00");
	}
	
	public void clickSchedule() {
		driver.findElement(By.xpath("//*[@id=\"clientmeetingmain\"]/app-client-schedule-component/form/button")).click();    	
	}
	
	public String checkMeeting() {
		WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(5));
    	wait.until(ExpectedConditions.alertIsPresent());
    	
    	Alert alert = driver.switchTo().alert();

        String alertMessage = alert.getText();
        System.out.println("Alert says: " + alertMessage);
        alert.accept();
        
        return alertMessage;
	}
}
