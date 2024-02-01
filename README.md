# Basalt banking

This React web app is a banking application that provides features for currency conversion, financial news, KYC verification, and user profiles. It utilizes various APIs from Rapid API for currency conversion and fetching financial news.

## Features & APIs Used

- [Conversion API](https://rapidapi.com/principalapis/api/currency-conversion-and-exchange-rates) - Allows users to convert currencies with real-time rates.
- [Financial News API](https://rapidapi.com/xiangyuahu/api/real-time-financial-news-and-sentiments) - Fetches the latest financial news for specific currencies.

## Deployment

The app is deployed on Vercel. You can check it out [here](basalt-banking).

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed
- Package manager: [pnpm](https://pnpm.io/installation)

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

1. Obtain API keys from Rapid API for the Conversion API and Financial News API.
2. Create a `.env` file in the root directory and add your API keys.

```
NEXT_PUBLIC_RAPID_API_KEY=your_rapid_api_key
```

### Running the App

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000/) in your browser.

## Usage

1. **Currency Converter:** Navigate to the currency converter section, select currencies, and convert.
2. **Financial News:** Check the latest financial news by navigating to the news section.

## Screenshots

Include screenshots or GIFs of your application to give users a visual overview.

## Built With

List the technologies, frameworks, and libraries used in your project.

- React, Next
- Tailwind CSS
- React query
- shadcn/ui
- zustand
- typescript
