class ConvertionTest extends Specification {

    def setupSpec() {
        go url
    }

    def "Reset button empty all fields"() {
        given: "some value in mm input field"
        $(mmInputId).value() << "12345"

        and: "some value in pt input field"
        $(ptInputId).value() << "67890"

        and: "pt standard is Hawks"
        $(hawksId).click()

        when: "click on Reset button"
        $(resetButtonId).click()

        then: "all fields are empty"
        $(mmInputId).value() == ""
        $(ptInputId).value() == ""

        and: "pt standard is Didot"
        $(didotId).css("border-color") == orange
        $(hawksId).css("border-color") == gray
    }
}
