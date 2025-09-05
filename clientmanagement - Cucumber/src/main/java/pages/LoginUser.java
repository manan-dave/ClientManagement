package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.github.bonigarcia.wdm.WebDriverManager;

public class LoginUser {

	private WebDriver driver;

	public void nevigateToLogin() {
		WebDriverManager.chromedriver().setup();

		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("http://localhost:4200");
	}

	public void enterUserDetails() {
		driver.findElement(By.id("username")).sendKeys("mdave");
		driver.findElement(By.id("password")).sendKeys("Abc@1234");
		driver.findElement(By.xpath("//*[@id=\"loginmain\"]/form/button")).click();
	}
	
	public String userLogin() {
		
		System.out.println(driver.getCurrentUrl());
		return driver.getCurrentUrl();
	}
	
	public void closeBrowser() {
		driver.quit();
	}

}
