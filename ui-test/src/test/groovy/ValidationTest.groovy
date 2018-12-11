import spock.lang.Unroll

import static com.jayway.restassured.RestAssured.given
import static org.hamcrest.CoreMatchers.equalTo

class ValidationTest extends Specification {

    static String htmlUrl = "https://validator.nu"
    static String htmlDoc = "https://mm-to-pt.irina-ivanova.eu"
    static String htmlOut = "json"
    static String htmlParser = "html5"
    static String cssUrl = "http://jigsaw.w3.org/css-validator/validator"
    static String cssUri = "https://mm-to-pt.irina-ivanova.eu/css/"
    static String cssWarning = "0"
    static String cssProfile = "css3svg"
    static String cssOutput = "json"

    def "Validate HTML according to W3C"() {
        when: "GET request to W3C API"
        def response = given()
                .when().log().all()
                .get("${htmlUrl}/?doc=${htmlDoc}&out=${htmlOut}&parser=${htmlParser}")

        then: "status code is 200"
        response.then().log().all()
                .statusCode(200)

        and: "messages are missing"
        response.then().body("messages", equalTo([]))
    }

    @Unroll
    def "Validate #fileName according to W3C"() {
        when: "GET request to W3C API"
        def response = given()
                .when().log().all()
                .get("${cssUrl}?uri=${cssUri}${fileName}&warning=${cssWarning}&profile=${cssProfile}&output=${cssOutput}")

        then: "status code is 200"
        response.then().log().all()
                .statusCode(200)

        and: "validity is true"
        response.then().body("cssvalidation.validity", equalTo(true))

        where:
        fileName      | _
        "default.css" | _
        "768px.css"   | _
    }
}
