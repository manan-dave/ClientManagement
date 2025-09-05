package pages;
import java.time.Duration;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import io.github.bonigarcia.wdm.WebDriverManager;


public class ClientRegister {

	private WebDriver driver;
	
	public void navigateToClientreg() {
		
		WebDriverManager.chromedriver().setup();
		driver= new ChromeDriver();
		driver.get("http://localhost:4200/climeeting");
    	//web.manage().window().maximize();
    	
    	
		driver.findElement(By.xpath("//*[@id=\"clientmeteeingheader\"]/button[1]")).click();

	}
	
	public void enterClientDetails() {
		driver.findElement(By.id("name")).sendKeys("Manoj3");
		driver.findElement(By.id("email")).sendKeys("Manoj3@example.com");
		driver.findElement(By.id("address")).sendKeys("Mumbai India");
		driver.findElement(By.id("regPassword")).sendKeys("Abc@1234");
		driver.findElement(By.id("repassword")).sendKeys("Abc@1234");
    	
	}
	
	public void clickRegister() {
		driver.findElement(By.xpath("//*[@id=\"clientmeetingmain\"]/app-client-register-component/form/button")).click();    	
	}
	
	public String checkResult() {
		WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(5));
    	wait.until(ExpectedConditions.alertIsPresent());
    	
    	Alert alert = driver.switchTo().alert();

        String alertMessage = alert.getText();
        System.out.println("Alert says: " + alertMessage);
        alert.accept();
        
        return alertMessage;
	}
}
