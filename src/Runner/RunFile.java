package Runner;

import cucumber.api.CucumberOptions;
import org.junit.runner.RunWith;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
        features= "src/Features",
        glue="src/Steps",
        format = {"pretty", "html:reports/test-report/"}
        )

public class RunFile{
}
