import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { Loan } from '../types/Loan';

interface Props {
  onSearch: (query: string) => Loan | undefined;
}

export default function LoanSearch({ onSearch }: Props) {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState<Loan | null>(null);

  const handleSearch = () => {
    const found = onSearch(query);
    setResult(found || null);
  };

  return (
    <Box sx={{ mt: 4 }}>
      <TextField label="Search by Loan ID or Borrower Name" value={query} onChange={e => setQuery(e.target.value)} fullWidth />
      <Button onClick={handleSearch} variant="outlined" sx={{ mt: 2 }}>Search</Button>
      {result && (
        <Typography sx={{ mt: 2 }}>
          Found Loan: {result.loanID} - {result.borrowerName}
        </Typography>
      )}
      {result === null && query && (
        <Typography sx={{ mt: 2 }}>No loan found.</Typography>
      )}
    </Box>
  );
}
