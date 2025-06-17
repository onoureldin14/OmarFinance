import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';
import { Loan } from './types/Loan';
import LoanForm from './components/LoanForm';
import LoanList from './components/LoanList';
import LoanSearch from './components/LoanSearch';

function App() {
  const [loans, setLoans] = useState<Loan[]>([]);

  const addLoan = (loan: Loan) => {
    setLoans(prev => [...prev, loan]);
  };

  const deleteLoan = (loanID: string) => {
    setLoans(prev => prev.filter(loan => loan.loanID !== loanID));
  };

  const getLoan = (query: string) => {
    return loans.find(loan => loan.loanID === query || loan.borrowerName.toLowerCase() === query.toLowerCase());
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>OmarFinance - Loan Generator</Typography>
      <LoanForm onAdd={addLoan} />
      <LoanSearch onSearch={getLoan} />
      <LoanList loans={loans} onDelete={deleteLoan} />
    </Container>
  );
}

export default App;