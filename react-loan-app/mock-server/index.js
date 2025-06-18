const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000; // ✅ different from React's 3000

app.use(cors());
app.use(express.json());

let loans = {};

app.get('/loans/all', (req, res) => {
  res.json(Object.values(loans));
});

app.get('/loans/:id', (req, res) => {
  const loan = loans[req.params.id];
  if (!loan) return res.status(404).send();
  res.json(loan);
});

app.post('/loans/:id', (req, res) => {
  const { borrowerName } = req.body;
  loans[req.params.id] = { loanID: req.params.id, borrowerName };
  res.status(200).send({ message: 'Loan created' });
});

app.delete('/loans/:id', (req, res) => {
  delete loans[req.params.id];
  res.status(200).send({ message: 'Loan deleted' });
});

app.listen(port, () => {
  console.log(`Mock server running at http://localhost:${port}`);
});
