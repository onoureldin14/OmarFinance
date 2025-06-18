import { Loan } from '../types/Loan';

const API_URL = process.env.REACT_APP_API_URL;
console.log("API URL", process.env.REACT_APP_API_URL);
if (!process.env.REACT_APP_API_URL) {
  throw new Error("Missing REACT_APP_API_URL");
}

if (!API_URL) {
  throw new Error("REACT_APP_API_URL is not defined in the environment");
}

export const getAllLoansAPI = async (): Promise<Loan[]> => {
  const res = await fetch(`${API_URL}/loans/all`);
  if (!res.ok) throw new Error('Failed to fetch loans');
  return res.json();
};

export const addLoanAPI = async (loan: Loan): Promise<void> => {
  const res = await fetch(`${API_URL}/loans/${loan.loanID}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(loan),
  });
  if (!res.ok) throw new Error('Failed to add loan');
};

export const getLoanAPI = async (query: string): Promise<Loan | undefined> => {
  const res = await fetch(`${API_URL}/loans/${query}`);
  if (!res.ok) throw new Error('Loan not found');
  return res.json();
};

export const deleteLoanAPI = async (loanID: string): Promise<void> => {
  const res = await fetch(`${API_URL}/loans/${loanID}`, {
    method: 'DELETE',
  });
  if (!res.ok) throw new Error('Failed to delete loan');
};
