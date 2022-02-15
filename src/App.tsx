import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { useState } from 'react'
import { createServer } from "miragejs";
import { GlobalStyle } from "./styles/globalStyle";
import Modal from 'react-modal'
import { NewTransactionModal } from "./components/NewTransactionModal";


createServer({
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Transaction 1',
          amount: 400,
          type: 'deposit',
          category: 'Food',
          createdAt: new Date()
        }
      ]
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
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </>
  );
}