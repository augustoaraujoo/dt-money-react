import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { useState } from 'react'
import { createServer, Model } from "miragejs";
import { GlobalStyle } from "./styles/globalStyle";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionProvider } from "./TransactionsContext";


createServer({

  models: {
    transaction: Model
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance',
          type: 'deposit',
          category: 'Dev',
          amount: 4000,
          createdAt: new Date('2022-01-12 09:00:00')
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })
    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('transaction', data)
    })
  }
})

export function App() {
  const [isNewTransactionOpen, setIsNewTransactionOpen] = useState(false);
 
  function handleOpenNewTransactionModal() {
    setIsNewTransactionOpen(true)

  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionOpen(false)
  }
  return (
    <TransactionProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </TransactionProvider>
  );
}