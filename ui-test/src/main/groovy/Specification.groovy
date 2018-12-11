import geb.spock.GebSpec
import spock.lang.Shared

class Specification extends GebSpec {

    @Shared
    String url = "https://mm-to-pt.irina-ivanova.eu"
    @Shared
    String orange = "rgb(243, 156, 18)"
    @Shared
    String gray = "rgb(189, 195, 199)"
    @Shared
    String blue = "rgb(30, 119, 179)"
    @Shared
    String didotId = "#standard-didot"
    @Shared
    String hawksId = "#standard-hawks"
    @Shared
    String fournierId = "#standard-fournier"
    @Shared
    String mmInputId = "#mm-value"
    @Shared
    String ptInputId = "#pt-value"
    @Shared
    String convertButtonId = "#convert-button"
    @Shared
    String resetButtonId = "#reset-button"
    @Shared
    String mmErrorMessage = "Millimeters can be only positive integer or float number"
    @Shared
    String ptErrorMessage = "Points can be only positive integer or float number"
}
