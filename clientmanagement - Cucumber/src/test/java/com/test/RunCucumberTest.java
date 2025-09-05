package com.test;
import org.junit.runner.RunWith;
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)

@CucumberOptions(
   features = "src/test/java/resource/feature",
   glue = "stepdefinitions",
   plugin = {"pretty", "html:target/cucumber-report.html"},
   monochrome = true
)


public class RunCucumberTest {}
