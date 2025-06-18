# 💸 OmarFinance - Lightweight React Loan Generator

![Omar Finance Demo](../assets/react-app.gif)

OmarFinance is a simple, in-memory React + TypeScript application using Material UI that allows users to:

* ✅ Add a loan
* 🔍 Search for a loan by Loan ID or Borrower Name
* ❌ Delete a loan

This app is intended as a minimal frontend prototype for fintech loan operations. It supports both **AWS-backed APIs** and **local in-memory testing**.

---

## 🧱 Tech Stack

* [React](https://reactjs.org/)
* [TypeScript](https://www.typescriptlang.org/)
* [Vite](https://vitejs.dev/) (or CRA if configured)
* [Material UI](https://mui.com/)
* [Express (for mock API)](https://expressjs.com/)

---

## 🏗 Features

* **Add Loan**: Submit loanID + borrower name
* **Search Loan**: Find loan by ID or name
* **Delete Loan**: Remove loan by ID
* **Environment-aware**: Choose between AWS or local API
* **Mock API**: Optional local Express server with in-memory storage

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/onoureldin14/OmarFinance.git
cd react-loan-app
```

---

### 2. Install dependencies

```bash
npm install
```

---

### 3. Set up your environment

Create a `.env.development` file in the root of `react-loan-app/`:

#### For AWS API Gateway:

```env
REACT_APP_API_URL=https://your-api-id.execute-api.region.amazonaws.com
```

#### For local mock server:

```env
REACT_APP_API_URL=http://localhost:4000
```

---

### 4. Run the React app

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

### 5. (Optional) Run local mock API server

This app includes a simple in-memory Express server for dev/testing. The server runs on port `4000`.

#### 📁 Located in:

```
react-loan-app/mock-server/index.js
```

#### 🏁 To start it:

```bash
npm run mock-api
```

> This will run `node ./mock-server/index.js`

---

## 📂 Project Structure

```
react-loan-app/
├── .env.development
├── package.json
├── mock-server/
│   └── index.js         # In-memory Express API
├── src/
│   ├── App.tsx
│   ├── types/
│   │   └── Loan.ts
│   ├── services/
│   │   └── LoanService.ts
│   └── components/
│       ├── LoanForm.tsx
│       ├── LoanList.tsx
│       └── LoanSearch.tsx
```

---

## 🧺 Testing

No formal tests added yet. Suggestions:

* [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
* [Vitest](https://vitest.dev/)

---

## 📄 License

MIT © 2025 Omar Din
