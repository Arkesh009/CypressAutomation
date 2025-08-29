# Quick Reference Guide

## 🚀 Getting Started Commands

```bash
# Initial setup
git clone https://github.com/Arkesh009/CypressAutomation.git
cd CypressAutomation
npm install

# Run tests
npm test                    # All tests headless
npm run headTest           # All tests with browser UI
npm run chromeTest         # Chrome browser only
npm run GreenkartTest      # Specific test suite

# Interactive mode
npx cypress open           # Open Cypress Test Runner
```

## 📋 Common Test Commands

```bash
# Run specific test file
npx cypress run --spec "cypress/integration/examples/Test1.js"

# Run tests with custom browser
npx cypress run --browser firefox
npx cypress run --browser edge

# Run with environment variables
npx cypress run --env url=https://staging.example.com

# Run in headed mode with specific browser
npx cypress run --headed --browser chrome

# Run tests and record to dashboard
npx cypress run --record --key YOUR_RECORD_KEY
```

## 🔧 Configuration Quick Reference

### cypress.config.js Key Settings
- `defaultCommandTimeout: 6000` - Default command timeout
- `env.url: "https://rahulshettyacademy.com"` - Base URL
- `retries.runMode: 1` - Retry failed tests once
- `reporter: 'cypress-mochawesome-reporter'` - Report format

### Package.json Scripts
| Script | Purpose |
|--------|---------|
| `test` | Standard CI/CD test execution |
| `headTest` | Development testing with UI |
| `chromeTest` | Chrome-specific testing |
| `recordDashboardTest` | Dashboard integration |
| `GreenkartTest` | Specific test suite |

## 📁 File Structure Quick Reference

```
├── cypress/
│   ├── integration/examples/    # Main test files
│   │   ├── Test1.js - Test11B.js  # Sequential tests
│   │   ├── APItest.js            # API testing
│   │   ├── BDD/                  # Cucumber tests
│   │   └── Excel_test_validation.js
│   ├── fixtures/example.json     # Test data
│   ├── support/
│   │   ├── pageObjects/         # Page classes
│   │   └── commands.js          # Custom commands
│   └── downloads/               # File downloads
```

## 🎯 Test Writing Patterns

### Basic Test Structure
```javascript
describe('Test Suite Name', () => {
    it('Test Case Name', () => {
        cy.visit('https://example.com')
        cy.get('#element').click()
        cy.contains('Expected Text').should('be.visible')
    })
})
```

### Using Page Objects
```javascript
import HomePage from '../../support/pageObjects/HomePage'

describe('E2E Test', () => {
    before(() => {
        this.homepage = new HomePage()
    })
    
    it('Login Test', () => {
        this.homepage.goTo('https://example.com')
        this.homepage.login('username', 'password')
    })
})
```

### BDD/Cucumber Pattern
```gherkin
Feature: User Authentication
    Scenario: Successful login
        Given I am on the login page
        When I enter valid credentials
        Then I should be logged in successfully
```

## 🛠 Debugging Tips

### Browser DevTools
```bash
# Open with DevTools
npx cypress open --browser chrome

# Run with browser console
npx cypress run --headed --browser chrome --no-exit
```

### Debug Commands
```javascript
// Pause execution
cy.pause()

// Debug current state
cy.debug()

// Log to console
cy.log('Debug message')

// Wait for specific condition
cy.wait(2000)  // Wait 2 seconds
cy.wait('@apiCall')  // Wait for network request
```

### Common Selectors
```javascript
// By data attributes (recommended)
cy.get('[data-cy="submit-btn"]')

// By text content
cy.contains('Submit')

// By class/id
cy.get('.btn-primary')
cy.get('#submit-button')

// Complex selectors
cy.get('form').find('input[type="email"]')
```

## 📊 Reporting & Analysis

### Generated Reports
- `cypress/reports/` - Mochawesome HTML reports
- `cypress/screenshots/` - Failure screenshots
- `cypress/videos/` - Test execution videos
- `cypress/cucumberReports/` - BDD reports

### Viewing Reports
```bash
# Open HTML report in browser
open cypress/reports/index.html

# Generate Cucumber report
node cucumber-html-report.js
```

## 🔍 Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| Cypress won't install | Check Node.js version, configure proxy |
| Tests timeout | Increase `defaultCommandTimeout` |
| Element not found | Add `cy.wait()` or better selectors |
| Cross-origin errors | Use `cy.origin()` command |
| File upload issues | Use `cy.selectFile()` |

## 🌐 Environment Variables

```javascript
// In cypress.config.js
env: {
    url: "https://rahulshettyacademy.com",
    username: "test@example.com",
    password: "password123"
}

// In test files
Cypress.env('url')
Cypress.env('username')
```

## 📚 Useful Resources

- [Cypress Best Practices](https://docs.cypress.io/guides/references/best-practices)
- [Custom Commands](https://docs.cypress.io/api/cypress-api/custom-commands)
- [Page Object Model](https://docs.cypress.io/guides/references/best-practices#Organizing-Tests-Logging-In-Controlling-State)
- [BDD with Cypress](https://github.com/badeball/cypress-cucumber-preprocessor)