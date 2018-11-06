package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "E:/Git-Project/GitLearning-Java/GitLearning/src/Feature/login.feature"
,glue={"LoginStepDefination"},
format = {"pretty","html:test-outout","json:json_output/cucumber.json","junit:junit_xml/cucumber.xml"},
dryRun = false,
monochrome =true//display the o/p in readable format

) 



public class TestRunner
{
	
}
