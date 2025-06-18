import React, { useState } from 'react';
import { TextField, Button, Box, CircularProgress } from '@mui/material';
import { Loan } from '../types/Loan';

interface Props {
  onAdd: (loan: Loan) => Promise<void>; // previously: void
}

export default function LoanForm({ onAdd }: Props) {
  const [loanID, setLoanID] = useState('');
  const [borrowerName, setBorrowerName] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loanID && borrowerName) {
      setLoading(true);
      try {
        await onAdd({ loanID, borrowerName });
        setLoanID('');
        setBorrowerName('');
      } catch (err) {
        console.error('Add loan failed', err);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      <TextField
        label="Loan ID"
        value={loanID}
        onChange={e => setLoanID(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Borrower Name"
        value={borrowerName}
        onChange={e => setBorrowerName(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" disabled={loading}>
        {loading ? <CircularProgress size={20} /> : 'Add Loan'}
      </Button>
    </Box>
  );
}
