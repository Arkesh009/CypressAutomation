# Cypress Automation Project

This project is a comprehensive test automation suite built using [Cypress](https://www.cypress.io/), a modern JavaScript-based end-to-end testing framework. It is designed to automate UI testing for web applications and includes multiple testing approaches including traditional Cypress tests, BDD/Cucumber tests, API testing, and Excel-driven data testing.

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/Arkesh009/CypressAutomation.git
cd CypressAutomation

# Install dependencies
npm install

# Run tests headless
npm test

# Run tests with browser interface
npm run headTest
```

## 🔧 How This Project is Built

For detailed information about the project architecture, build process, and setup instructions, see **[BUILD.md](BUILD.md)**.

## ✨ Features

### Testing Capabilities
- **E2E Testing** - Complete user journey automation
- **BDD/Cucumber Testing** - Behavior-driven development with Gherkin syntax
- **API Testing** - HTTP request/response validation
- **Data-Driven Testing** - Excel and JSON-based test data
- **Cross-Origin Testing** - Multi-domain application testing
- **Page Object Model** - Maintainable test architecture

### Technical Features
- **Multi-Browser Support** - Chrome, Firefox, Edge, Electron
- **Custom Commands** - Reusable test utilities
- **Advanced Reporting** - Mochawesome and Cucumber HTML reports
- **Excel Integration** - Read/write Excel files for test data
- **CI/CD Ready** - Cypress Dashboard integration
- **Video Recording** - Automatic failure evidence capture
- **Screenshot Capture** - Visual test failure documentation

## 📁 Project Structure

```
CypressAutomation/
├── cypress/
│   ├── integration/           # Test specifications
│   │   ├── examples/         # Example test cases (Test1.js - Test11B.js)
│   │   │   └── BDD/         # Cucumber/BDD feature files
│   │   └── GreenKart/       # Specific test suite
│   ├── fixtures/            # Test data (JSON files)
│   ├── support/             # Support files and page objects
│   │   ├── pageObjects/     # Page Object Model classes
│   │   └── commands.js      # Custom Cypress commands
│   └── downloads/           # File download directory
├── cypress.config.js        # Main Cypress configuration
├── package.json            # Dependencies and npm scripts
└── BUILD.md               # Detailed build documentation
```

## 🎯 Available Test Scripts

| Script | Command | Description |
|--------|---------|-------------|
| **Default** | `npm test` | Run all tests headless (CI/CD friendly) |
| **Headed** | `npm run headTest` | Run tests with browser UI |
| **Chrome** | `npm run chromeTest` | Run tests specifically in Chrome |
| **Dashboard** | `npm run recordDashboardTest` | Run tests with Cypress Dashboard recording |
| **GreenKart** | `npm run GreenkartTest` | Run GreenKart specific tests |

## 🛠 Prerequisites
- [Node.js](https://nodejs.org/) (version 14 or higher)
- Basic knowledge of JavaScript and Cypress
- Internet connection for initial Cypress installation

## 📊 Test Types Included

### 1. **E2E Tests** (`cypress/integration/examples/`)
- Login workflows (`Test11B.js`)
- Form interactions (`Test3.js`)
- File uploads (`upload_download.js`)
- Session management (`sessionTest.js`)

### 2. **BDD/Cucumber Tests** (`cypress/integration/examples/BDD/`)
- Feature files with natural language scenarios
- Step definitions for reusable test steps
- E-commerce workflow examples

### 3. **API Tests** (`APItest.js`)
- RESTful API endpoint testing
- Request/response validation
- Status code and payload assertions

### 4. **Data-Driven Tests**
- Excel file integration (`Excel_test_validation.js`)
- JSON fixture data (`cypress/fixtures/`)
- Dynamic test data scenarios

## 🎨 Page Object Model

The project implements the Page Object Model pattern for maintainable test code:

- `HomePage.js` - Login and navigation
- `ProductPage.js` - Product selection and cart operations  
- `CartPage.js` - Shopping cart management
- `ConfirmationPage.js` - Order confirmation and checkout

## 📈 Reporting & Analytics

- **Mochawesome Reporter** - Rich HTML reports with screenshots
- **Cucumber HTML Reports** - BDD-style test documentation
- **Cypress Dashboard** - Cloud-based test analytics and parallelization
- **Video Recordings** - Automatic capture of test runs
- **Screenshot Capture** - Evidence for test failures

## 📖 Documentation

| Document | Purpose |
|----------|---------|
| **[BUILD.md](BUILD.md)** | 📋 Complete build and setup documentation |
| **[BUILD_SUMMARY.md](BUILD_SUMMARY.md)** | 📝 Executive summary of how the project is built |
| **[ARCHITECTURE.md](ARCHITECTURE.md)** | 🏗️ Visual project architecture and flow diagrams |
| **[QUICK_REFERENCE.md](QUICK_REFERENCE.md)** | ⚡ Developer quick start and command reference |

## 🔗 External Resources

- [Cypress Documentation](https://docs.cypress.io/) - Official Cypress guides and API
- [Cucumber Preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor) - BDD integration
- [Page Object Model Best Practices](https://docs.cypress.io/guides/references/best-practices#Organizing-Tests-Logging-In-Controlling-State) - Cypress best practices
- [Mochawesome Reporter](https://github.com/adamgruber/mochawesome) - Enhanced test reporting

---

## 🎯 Quick Answer: How This Project is Built

This project is built as a **comprehensive Node.js-based test automation framework** using Cypress 14.3.0 as the core testing engine. It supports multiple testing methodologies (E2E, BDD, API, Data-driven) with a Page Object Model architecture, custom commands, Excel integration, and rich reporting capabilities.

**Quick Start**: `npm install` → `npm test` or `npm run headTest`

For detailed information, see **[BUILD_SUMMARY.md](BUILD_SUMMARY.md)** or **[BUILD.md](BUILD.md)**.