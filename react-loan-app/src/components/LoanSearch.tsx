import React, { useState } from 'react';
import { TextField, Button, Box, Typography, CircularProgress } from '@mui/material';
import { Loan } from '../types/Loan';

interface Props {
  onSearch: (query: string) => Promise<Loan | undefined>;
}

export default function LoanSearch({ onSearch }: Props) {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState<Loan | null>(null);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    setSearched(true);
    try {
      const found = await onSearch(query);
      setResult(found || null);
    } catch (err) {
      setResult(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ mt: 4 }}>
      <TextField
        label="Search by Loan ID or Borrower Name"
        value={query}
        onChange={e => setQuery(e.target.value)}
        fullWidth
      />
      <Button onClick={handleSearch} variant="outlined" sx={{ mt: 2 }} disabled={loading}>
        {loading ? <CircularProgress size={20} /> : 'Search'}
      </Button>

      {searched && (
        <Box sx={{ mt: 2 }}>
          {result ? (
            <Typography>
              <strong>Found Loan:</strong> {result.loanID} - {result.borrowerName}
            </Typography>
          ) : (
            <Typography>No loan found.</Typography>
          )}
        </Box>
      )}
    </Box>
  );
}
