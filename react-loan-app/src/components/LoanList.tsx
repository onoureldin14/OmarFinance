import React from 'react';
import { Loan } from '../types/Loan';
import { List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

interface Props {
  loans: Loan[];
  onDelete: (loanID: string) => void;
}

export default function LoanList({ loans, onDelete }: Props) {
  return (
    <List sx={{ mt: 4 }}>
      {loans.map(loan => (
        <ListItem
          key={loan.loanID}
          secondaryAction={
            <IconButton edge="end" onClick={() => onDelete(loan.loanID)}>
              <DeleteIcon />
            </IconButton>
          }
        >
          <ListItemText primary={`${loan.loanID} - ${loan.borrowerName}`} />
        </ListItem>
      ))}
    </List>
  );
}