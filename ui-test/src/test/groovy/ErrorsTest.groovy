import spock.lang.Unroll

class ErrorsTest extends Specification {

    @Unroll
    def "When #description in #field, then error #errorMessage"() {
        given: "click on #field"
        $(field).click()

        when: "insert value #value"
        $(field).value() << value

        and: "click on Convert button"
        $(convertButtonId).click()

        then: "#errorMessage is shown"
        assert $("#error").text() == errorMessage

        where:
        description   | field     | value | errorMessage
        "empty value" | mmInputId | ""    | mmErrorMessage
        "empty value" | ptInputId | ""    | ptErrorMessage
        "a char"      | mmInputId | "a"   | mmErrorMessage
        "a char"      | ptInputId | "a"   | ptErrorMessage
        "e char"      | mmInputId | "e"   | mmErrorMessage
        "e char"      | ptInputId | "e"   | ptErrorMessage
        "0"           | mmInputId | "0"   | mmErrorMessage
        "0"           | ptInputId | "0"   | ptErrorMessage
        "-1"          | mmInputId | "-1"  | mmErrorMessage
        "-1"          | ptInputId | "-1"  | ptErrorMessage
    }
}
