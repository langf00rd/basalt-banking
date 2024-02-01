# Basalt banking

This React web app (powered by the Nextjs web framework) is a banking application that provides features for currency conversion, financial news, KYC verification, user profiles, etc. It uses various APIs from Rapid API for currency conversion and fetching financial news.

Check out the live deployed app [here](https://basalt-banking.vercel.app/).

## Built With

List the technologies, frameworks, and libraries used in your project.

-  React, Next
-  Tailwind CSS
-  React query
-  shadcn/ui
-  zustand
-  typescript
-  firebase

## Features & APIs Used

-  [Currency conversion and exchange rates API](https://rapidapi.com/principalapis/api/currency-conversion-and-exchange-rates) - Allows users to convert currencies with current real-time rates.
-  [Realtime finance news and sentiments API](https://rapidapi.com/xiangyuahu/api/real-time-financial-news-and-sentiments) - Fetches the latest financial news for specific currencies.

## Getting Started

### Prerequisites

-  [Node.js](https://nodejs.org/) installed
-  Package manager: [pnpm](https://pnpm.io/installation)

### Installation

1. Clone the repository.

```bash
git clone https://github.com/langf00rd/basalt-banking.git
cd basalt-banking
```

2. Install dependencies.

```bash
pnpm install
```

### Configuration

1. Get your API keys from Rapid API for the Currency conversion and exchange rates API and Realtime finance news and sentiments API.
2. Create a `.env` file in the root directory and add your API keys.

```
NEXT_PUBLIC_RAPID_API_KEY=your_rapid_api_key
```

### Running the App

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000/) in your browser.

## Continuous Integration (CI)

CI is set up using GitHub Actions. This ensures automated linting, formatting and builds with each push to the repository

## Folder Structure

The project is organized into the following main directories:

-  `components/`: Reusable React components.
-  `pages/`: React components representing individual pages/routes.
-  `lib/services/`: Modules for handling business logic, such as API calls.
-  `lib/config`: Configuration files
-  `lib/utils`: Custom utility functions
-  `styles/` Global styles and styling utilities.
-  `.husky/`: Pre-commit setups
-  `.github/workflows`: Github Actions setup
-  `public/`: Contains static assets like images, which can be referenced in components

## Code Quality Assurance

Several measures have been implemented to ensure the quality and consistency of the codebase. These checks are automatically performed before every commit:

#### 1. **Code Formatting and Linting**

-  **Husky Integration:** I've integrated Husky to enforce pre-commit hooks. This means that before every commit, the following checks are performed:
   -  **Code Formatting:** The code is automatically formatted to make sure it adheres to specific coding standards.
   -  **Linting:** Linting rules (in the eslint config file) are applied to catch potential issues and ensure code quality.

#### 2. **Build Verification**

-  **Pre-Commit Build:** As part of the pre-commit process, builds are checked to complete successfully. This helps catch build issues early in the development process before deployment.

#### 3. **Commit Message Standardization**

-  **Commitlint Integration:** Commit messages are crucial for maintaining a clear and standardized history. Commitlint has been set up to enforce a consistent commit message structure across the project. This ensures that each commit is descriptive and easy to understand.

### How It Works

1. **Before Commit:**

   -  When you attempt to commit changes, Husky triggers pre-commit hooks.
   -  The code is automatically formatted, linted, and built.
   -  If any of these checks fail, the commit is blocked, prompting you to address the issues.

2. **Commit Message Structure:**

   -  Commitlint ensures that commit messages follow a standardized format.
   -  This format provides a clear understanding of the type and purpose of each commit.

## Screenshots

![image](https://github.com/langf00rd/basalt-banking/assets/55645613/6d230148-0de0-4227-8b9c-53d06201fc71)
![Screenshot 2024-02-01 at 8 09 49 PM](https://github.com/langf00rd/basalt-banking/assets/55645613/c3e56844-75be-4378-967b-4583752eeff5)
![Screenshot 2024-02-01 at 8 09 56 PM](https://github.com/langf00rd/basalt-banking/assets/55645613/bba2c59d-2b33-4cbf-8c68-3a2c625554d1)
![Screenshot 2024-02-01 at 8 08 52 PM](https://github.com/langf00rd/basalt-banking/assets/55645613/972a063b-5167-4e4c-b577-ce4bde0e6649)
![Screenshot 2024-02-01 at 8 08 59 PM](https://github.com/langf00rd/basalt-banking/assets/55645613/e3f89b3d-fe80-4f07-a8e7-aba39295df8c)
