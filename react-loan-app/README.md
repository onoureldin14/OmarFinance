# 💸 OmarFinance - Lightweight React Loan Generator

![Omar Finance Demo](../assets/react-app.gif)
OmarFinance is a simple, in-memory React + TypeScript application using Material UI that allows users to:

- ✅ Add a loan
- 🔍 Search for a loan by Loan ID or Borrower Name
- ❌ Delete a loan

This app is intended as a minimal frontend prototype for fintech loan operations.

---

## 🧱 Tech Stack

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Material UI](https://mui.com/)

---

## 🏗 Features

- **Add Loan**: Form to input loan ID and borrower's name
- **Search Loan**: Lookup loan by ID or name
- **Delete Loan**: One-click deletion from the list
- **Memory-based**: No database, ideal for quick POCs

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/onoureldin14/OmarFinance.git
cd react-loan-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the app

```bash
npm start
```

Open `http://localhost:3000` in your browser.

---

## 📂 Project Structure

```
src/
├── App.tsx
├── types/
│   └── Loan.ts
├── components/
│   ├── LoanForm.tsx
│   ├── LoanList.tsx
│   └── LoanSearch.tsx
```

---

## 🧪 Testing

No tests added yet. For unit tests, consider [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) or [Vitest](https://vitest.dev/).

---

## 📄 License

MIT © 2025 Omar Din