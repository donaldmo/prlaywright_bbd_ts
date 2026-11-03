Feature: Login Feature

    Scenario Outline: Login test with multiple users
        Given user is on login page
        When user enters username "<username>" and password "<password>"
        Then user should see "<results>"

    Example:
            | username | password | result  |
            | Admin    | admin123 | success |
            | wrong    | wrong    | error   |

    Scenario: Login test with Data Driven Outside
        Given user is on login page
        When user login in with test data
        Then user should see "success"