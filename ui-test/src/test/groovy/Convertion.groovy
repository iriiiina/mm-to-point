class Convertion extends Specification {

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
        assert $(mmInputId).value() == ""
        assert $(ptInputId).value() == ""

        and: "pt standard is Didot"
        assert $(didotId).css("border-color") == orange
        assert $(hawksId).css("border-color") == gray


    }
}
