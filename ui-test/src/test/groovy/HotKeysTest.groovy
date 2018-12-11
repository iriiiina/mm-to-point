import org.openqa.selenium.Keys
import spock.lang.Unroll

class HotKeysTest extends Specification {

    def setupSpec() {
        go url
    }

    @Unroll
    def "[Enter] runs and empty convertion and returns error #errorMessage"() {
        when: "click on #inputId"
        $(inputId).click()

        and: "click on [Enter] key"
        $(inputId).value(Keys.RETURN)

        then: "error message is shown"
        $("#error").text() == errorMessage

        where:
        inputId   | errorMessage
        mmInputId | "Millimeters can be only positive integer or float number"
        ptInputId | "Points can be only positive integer or float number"
    }

    @Unroll
    def "Key [#key] changes the standard"() {
        when: "insert #key"
        $(mmInputId).value(key)

        then: "standard is changed"
        $(standard).css("border-color") == orange

        where:
        key | standard
        "d" | didotId
        "h" | hawksId
        "f" | fournierId
    }


}
