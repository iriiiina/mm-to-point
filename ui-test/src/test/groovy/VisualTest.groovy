import spock.lang.Unroll

class VisualTest extends Specification {

    def setupSpec() {
        go url
    }

    @Unroll
    def "Clicking on #id makes it orange and other standards gray"() {
        when: "click on #id"
        $(id).click()

        then: "clicked standard is orange"
        $(didotId).css("border-color") == didotColor
        $(hawksId).css("border-color") == hawksColor
        $(fournierId).css("border-color") == fournierColor

        where:
        id         | didotColor | hawksColor | fournierColor
        didotId    | orange     | gray       | gray
        hawksId    | gray       | orange     | gray
        fournierId | gray       | gray       | orange
    }

    @Unroll
    def "Clicking on #id input makes it orange"() {
        when: "click on #id"
        $(id).click()

        then: "clicked input is orange"
        $(mmInputId).css("border-color") == mmColor
        $(ptInputId).css("border-color") == ptColor

        where:
        id        | mmColor | ptColor
        mmInputId | orange  | blue
        ptInputId | blue    | orange
    }

    def "Clicking on different input fields shows appropriate convertion arrows"() {
        when: "click on mm input field"
        $(mmInputId).click()

        then: "#icon-convert-type-mm is visible"
        $("#icon-convert-type-mm").displayed
        !$("#icon-convert-type-pt").displayed

        when: "click on pt input field"
        $(ptInputId).click()

        then: "#icon-convert-type-pt is visible"
        !$("#icon-convert-type-mm").displayed
        $("#icon-convert-type-pt").displayed

        when: "click on mm input field again"
        $(mmInputId).click()

        then: "#icon-convert-type-mm is visible"
        $("#icon-convert-type-mm").displayed
        !$("#icon-convert-type-pt").displayed
    }

    def "Clicking on hint hides it"() {
        given: "hint is visible"
        assert $("#tips-hidden").displayed
        assert $("#tips-open").displayed
        assert !$("#tips-close").displayed

        when: "click on the hint"
        $("#tips-header").click()

        then: "hint is hidden"
        !$("#tips-hidden").displayed
        !$("#tips-open").displayed
        $("#tips-close").displayed
    }

}