import React, { useEffect, useState } from 'react';
import { Container, Typography, CircularProgress, Snackbar } from '@mui/material';
import { Loan } from './types/Loan';
import LoanForm from './components/LoanForm';
import LoanList from './components/LoanList';
import LoanSearch from './components/LoanSearch';
import { addLoanAPI, getLoanAPI, getAllLoansAPI, deleteLoanAPI } from './services/LoanService';

function App() {
  const [loans, setLoans] = useState<Loan[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Load all loans on mount
  useEffect(() => {
    getAllLoansAPI()
      .then(setLoans)
      .catch(err => setError(err.message || 'Error fetching loans'))
      .finally(() => setLoading(false));
  }, []);

  const handleAddLoan = async (loan: Loan) => {
    try {
      await addLoanAPI(loan);
      setLoans(prev => [...prev, loan]);
    } catch (err: any) {
      setError(err.message || 'Failed to add loan');
    }
  };

  const handleDeleteLoan = async (loanID: string) => {
    try {
      await deleteLoanAPI(loanID);
      setLoans(prev => prev.filter(loan => loan.loanID !== loanID));
    } catch (err: any) {
      setError(err.message || 'Failed to delete loan');
    }
  };

  const handleSearchLoan = async (query: string): Promise<Loan | undefined> => {
    try {
      const loan = await getLoanAPI(query);
      return loan;
    } catch (err: any) {
      setError(err.message || 'Search failed');
      return undefined;
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>OmarFinance - Loan Generator</Typography>

      {loading ? (
        <CircularProgress />
      ) : (
        <>
          <LoanForm onAdd={handleAddLoan} />
          <LoanSearch onSearch={handleSearchLoan} />
          <LoanList loans={loans} onDelete={handleDeleteLoan} />
        </>
      )}

      <Snackbar
        open={!!error}
        autoHideDuration={4000}
        message={error}
        onClose={() => setError(null)}
      />
    </Container>
  );
}

export default App;
