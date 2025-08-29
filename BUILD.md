# How This Cypress Automation Project is Built

This document explains the build process, architecture, and setup of the Cypress Automation project.

## Project Overview

This is a comprehensive test automation suite built using **Cypress**, a modern JavaScript-based end-to-end testing framework. The project supports multiple testing approaches including traditional Cypress tests, BDD/Cucumber tests, API testing, and Excel-driven data testing.

## Architecture & Technologies

### Core Technologies
- **Cypress 14.3.0** - Main testing framework
- **Node.js** - Runtime environment
- **JavaScript/ES6** - Programming language
- **BDD/Cucumber** - Behavior-driven development support
- **Page Object Model** - Design pattern for maintainable tests

### Key Dependencies

#### Testing Framework
- `cypress` - Core testing framework
- `@badeball/cypress-cucumber-preprocessor` - BDD/Cucumber support
- `@cypress/browserify-preprocessor` - Module bundling for tests

#### Reporting & Utilities
- `cypress-mochawesome-reporter` - Enhanced test reporting
- `multiple-cucumber-html-reporter` - Cucumber HTML reports
- `cypress-iframe` - iframe interaction support

#### Data Handling
- `exceljs` - Excel file manipulation
- `convert-excel-to-json` - Excel to JSON conversion
- `neat-csv` - CSV file handling

## Project Structure

```
CypressAutomation/
├── cypress/
│   ├── integration/           # Test specifications
│   │   ├── examples/         # Example test cases
│   │   │   ├── BDD/         # Cucumber/BDD tests
│   │   │   │   ├── ecommerce/
│   │   │   │   └── ecommerce.feature
│   │   │   ├── Test1.js - Test11B.js  # Sequential test files
│   │   │   ├── APItest.js    # API testing examples
│   │   │   └── Excel_test_validation.js
│   │   └── GreenKart/       # GreenKart specific tests
│   ├── fixtures/            # Test data files
│   │   └── example.json
│   ├── support/             # Support files and utilities
│   │   ├── pageObjects/     # Page Object Model classes
│   │   │   ├── HomePage.js
│   │   │   ├── ProductPage.js
│   │   │   ├── CartPage.js
│   │   │   └── ConfirmationPage.js
│   │   ├── commands.js      # Custom Cypress commands
│   │   └── e2e.js          # Global test configuration
│   ├── downloads/           # Download directory
│   ├── screenshots/         # Test failure screenshots
│   └── videos/             # Test execution videos
├── JsBasics/               # JavaScript fundamentals examples
├── cypress.config.js       # Cypress configuration
├── cucumber-html-report.js # Cucumber report generator
├── package.json           # Dependencies and scripts
└── README.md              # Project documentation
```

## Build Configuration

### cypress.config.js
The main configuration file that defines:
- **Test timeout**: 6000ms default
- **Environment variables**: Base URL configuration
- **Reporting**: Mochawesome reporter setup
- **Retries**: 1 retry in run mode
- **Project ID**: For Cypress Dashboard integration
- **Spec patterns**: Test file locations
- **Node events**: Custom tasks and preprocessors

Key features configured:
- Excel to JSON conversion tasks
- Excel file writing capabilities
- Cucumber preprocessor setup
- Browserify for module bundling

### Package Scripts

```json
{
  "test": "npx cypress run",                    // Run all tests headless
  "headTest": "npx cypress run --headed",      // Run tests with browser UI
  "chromeTest": "npx cypress run --browser chrome", // Chrome-specific tests
  "recordDashboardTest": "npx cypress run --record --key [KEY]", // Dashboard recording
  "GreenkartTest": "npx cypress run --spec \"cypress/integration/GreenKart/*\""
}
```

## How to Build and Run

### Prerequisites
1. **Node.js** (version 14 or higher)
2. **npm** or **yarn** package manager
3. Internet connection for initial setup

### Installation Steps

1. **Clone the repository**
```bash
git clone https://github.com/Arkesh009/CypressAutomation.git
cd CypressAutomation
```

2. **Install dependencies**
```bash
npm install
```
This installs all required packages including Cypress, preprocessors, and reporting tools.

3. **Verify Cypress installation**
```bash
npx cypress verify
```

### Running Tests

#### Basic Test Execution
```bash
# Run all tests headless (CI/CD friendly)
npm test

# Run tests with browser interface
npm run headTest

# Run tests in Chrome specifically
npm run chromeTest

# Run specific test suite (GreenKart)
npm run GreenkartTest
```

#### Advanced Test Execution
```bash
# Run specific test file
npx cypress run --spec "cypress/integration/examples/Test1.js"

# Run tests in specific browser
npx cypress run --browser firefox

# Run tests with custom environment
npx cypress run --env url=https://custom-url.com

# Open Cypress Test Runner (interactive)
npx cypress open
```

### Test Types Supported

#### 1. E2E Tests
- Located in `cypress/integration/examples/`
- Uses Page Object Model pattern
- Covers login, product selection, cart operations
- Example: `Test11B.js` - Complete e-commerce workflow

#### 2. BDD/Cucumber Tests
- Located in `cypress/integration/examples/BDD/`
- Feature files with `.feature` extension
- Step definitions in corresponding folders
- Natural language test scenarios

#### 3. API Tests
- Example: `APItest.js`
- HTTP request/response testing
- JSON payload validation
- Status code assertions

#### 4. Data-Driven Tests
- Excel file integration
- JSON fixture data
- Dynamic test data generation
- Example: `Excel_test_validation.js`

## Custom Features

### Custom Cypress Commands
- `LoginAPI()` - API-based authentication
- `submitFormDetails()` - Form submission automation

### Excel Integration
- Read Excel files and convert to JSON
- Write data back to Excel files
- Search and update specific cells
- Useful for data-driven testing scenarios

### Reporting
- **Mochawesome**: Rich HTML reports with screenshots
- **Cucumber Reports**: BDD-style reporting
- **Videos**: Automatic recording of test failures
- **Screenshots**: Failure evidence capture

### Cross-Origin Support
- Configured for testing across different domains
- Example: `Test5.js` demonstrates cross-origin navigation

## CI/CD Integration

### Cypress Dashboard
- Project ID: `nodpcq`
- Supports test recording and analytics
- Parallel test execution capability

### Environment Configuration
- Base URL configurable via environment variables
- Supports multiple environments (dev, staging, prod)
- Custom timeouts and retry logic

## Development Workflow

1. **Write Tests**: Create new test files in appropriate directories
2. **Page Objects**: Use Page Object Model for maintainable code
3. **Test Data**: Store test data in fixtures or Excel files
4. **Local Testing**: Run tests locally using `npm run headTest`
5. **CI Testing**: Use `npm test` for automated pipelines
6. **Reporting**: Review generated reports in cypress/reports/

## Troubleshooting

### Common Issues
- **Installation failures**: Check Node.js version compatibility
- **Network issues**: Configure proxy if behind corporate firewall
- **Browser issues**: Ensure target browsers are installed
- **Timeout errors**: Adjust defaultCommandTimeout in config

### Debug Mode
```bash
# Run with debug output
DEBUG=cypress:* npx cypress run

# Open DevTools during test
npx cypress run --browser chrome --headed --no-exit
```

This comprehensive build system supports both local development and CI/CD pipelines, making it suitable for enterprise-level test automation.