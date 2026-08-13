# Cypress Cucumber Test Automation Framework

This project integrates Cypress with Cucumber BDD for comprehensive test automation of a shopping application.

## Project Structure

```
cypress/
├── e2e/
│   ├── features/              # Cucumber feature files
│   │   ├── login.feature
│   │   ├── registration.feature
│   │   ├── products.feature
│   │   └── profile.feature
│   └── step_definitions/      # Step implementations
│       ├── login.js
│       ├── registration.js
│       ├── products.js
│       └── profile.js
├── pages/                      # Page Object Models
│   ├── HomePage.js
│   ├── LoginPage.js
│   ├── RegisterPage.js
│   ├── ProductPage.js
│   └── ProfilePage.js
├── fixtures/                   # Test data
│   └── example.json
└── support/
    ├── commands.js
    └── e2e.js
reports/                        # Test reports (auto-generated)
```

## Installation

1. Install dependencies:
```bash
npm install
```

2. Configure base URL in `cypress.config.js` if needed

## Running Tests

### By Tag

Run tests using Cucumber tags for targeted test execution:

```bash
# Smoke tests (quick sanity checks)
npm run test:smoke

# Regression tests (comprehensive testing)
npm run test:regression

# All UI tests
npm run test:ui

# Feature-specific tests
npm run test:login
npm run test:registration
npm run test:products
npm run test:profile

# Scenario type tests
npm run test:positive          # Positive scenarios only
npm run test:negative          # Negative scenarios only
npm run test:critical          # Critical path tests

# Run all tests
npm run test:all
```

### Interactive Mode

```bash
# Open Cypress Test Runner
npm run test:open

# Run smoke tests in headed mode (see browser)
npm run test:smoke:headed

# Run regression tests in headed mode
npm run test:regression:headed
```

## Available Tags

| Tag | Purpose | Usage |
|-----|---------|-------|
| `@smoke` | Quick sanity tests | `npm run test:smoke` |
| `@regression` | Comprehensive regression | `npm run test:regression` |
| `@critical` | Critical path scenarios | `npm run test:critical` |
| `@positive` | Positive test scenarios | `npm run test:positive` |
| `@negative` | Negative/error scenarios | `npm run test:negative` |
| `@ui` | All UI tests | `npm run test:ui` |
| `@login` | Login feature tests | `npm run test:login` |
| `@registration` | Registration feature tests | `npm run test:registration` |
| `@products` | Product tests | `npm run test:products` |
| `@profile` | Profile feature tests | `npm run test:profile` |

## Feature Files

### 1. Login Feature (@login, @smoke, @ui)
Tests user authentication including:
- Successful login with valid credentials
- Profile access after login
- Invalid email error handling
- Invalid password error handling
- Empty field validation

### 2. Registration Feature (@registration, @ui)
Tests user registration including:
- Successful registration with valid data
- Automatic login after registration
- Existing email validation
- Password strength validation
- Required field validation

### 3. Products Feature (@products, @ui)
Tests product browsing and shopping including:
- Product search functionality
- Product details viewing
- Add to cart functionality
- Quantity management
- Multiple product cart operations

### 4. Profile Feature (@profile, @ui)
Tests user profile management including:
- Profile page access
- View profile details
- Update profile information
- Change password
- Logout functionality

## CI/CD Integration

The project includes GitHub Actions workflows for automated testing:

- **Smoke Tests**: Run on every push (daily schedule)
- **Regression Tests**: Run on pull requests
- **Full UI Tests**: Run on main branch
- **Critical Tests**: Run on every commit

Test reports are automatically uploaded as artifacts after each run.

### CI Configuration File
See `.github/workflows/cypress-tests.yml` for the full CI/CD configuration.

## Debugging Tests

### Run tests in headed mode to see the browser:
```bash
npx cypress run --headed --env tags="@smoke"
```

### Open Cypress debugger:
```bash
npm run test:open
```

### View test reports:
Test reports are generated in `reports/html-reports/` after each test run.

## Step Definitions

Each feature file has corresponding step definitions in the `step_definitions` folder:

- **Common Steps**: Given, When, Then operations for each feature
- **Page Object Integration**: Steps use page selectors with `data-test` attributes
- **Test Data**: Hardcoded test users and data in step definitions

## Best Practices

1. **Use Data Attributes**: Selectors use `data-test` attributes for reliability
2. **Page Object Pattern**: Logic is separated into page objects
3. **Descriptive Scenarios**: Each scenario clearly describes what is being tested
4. **Tag Organization**: Use tags for efficient test execution and CI/CD categorization
5. **Test Reports**: Mochawesome reporter generates HTML reports with detailed results

## Troubleshooting

### Tests not running with tags
- Ensure the tags are correctly formatted in feature files
- Check that the environment variable is passed: `--env tags="@smoke"`
- Verify cypress-cucumber-preprocessor is installed

### Selectors not finding elements
- Inspect the application to find correct `data-test` attributes
- Update selectors in step definitions accordingly
- Use cy.debug() to pause execution and inspect

### Reports not generating
- Check that `reports/html-reports/` directory exists
- Verify mochawesome-reporter is installed
- Check cypress.config.js reporter configuration

## Adding New Tests

1. Create a new `.feature` file in `cypress/e2e/features/`
2. Add appropriate tags (e.g., `@feature-name @smoke`)
3. Write scenarios using Given-When-Then syntax
4. Create corresponding step definitions in `cypress/e2e/step_definitions/`
5. Add a new npm script in `package.json` if needed
6. Update `.github/workflows/cypress-tests.yml` for CI/CD

## Dependencies

- **cypress**: ^15.18.1 - Test automation framework
- **@badeball/cypress-cucumber-preprocessor**: ^26.0.0 - Cucumber integration
- **@bahmutov/cypress-esbuild-preprocessor**: ^2.2.8 - JS bundler
- **@cucumber/tag-expressions**: ^11.0.1 - Tag expression parser
- **cypress-mochawesome-reporter**: ^4.0.2 - HTML report generation

## Support and Resources

- [Cypress Documentation](https://docs.cypress.io)
- [Cucumber.js Documentation](https://github.com/cucumber/cucumber-js)
- [Badeball Cypress Cucumber Preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor)