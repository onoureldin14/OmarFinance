import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { Loan } from '../types/Loan';

interface Props {
  onAdd: (loan: Loan) => void;
}

export default function LoanForm({ onAdd }: Props) {
  const [loanID, setLoanID] = useState('');
  const [borrowerName, setBorrowerName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (loanID && borrowerName) {
      onAdd({ loanID, borrowerName });
      setLoanID('');
      setBorrowerName('');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      <TextField label="Loan ID" value={loanID} onChange={e => setLoanID(e.target.value)} fullWidth margin="normal" />
      <TextField label="Borrower Name" value={borrowerName} onChange={e => setBorrowerName(e.target.value)} fullWidth margin="normal" />
      <Button type="submit" variant="contained">Add Loan</Button>
    </Box>
  );
}
