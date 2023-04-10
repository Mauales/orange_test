Feature: Navigate to google, search and verify the number of results

 Scenario Outline: Verify number of results
   Given a user has navigated to google
   When the user search for <searchString>
   Then the number of results is <comparison> <value>

Examples:
    | searchString  | comparison      | value  |
    | "Apple"       | "greater than"  | 100000 |
    | "Apple"       | "less than"     | 10000  |