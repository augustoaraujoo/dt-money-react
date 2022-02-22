import Modal from 'react-modal';
import CloseSVG from '../../assets/close.svg'
import OutCome from '../../assets/outcome.svg'
import IncomeImg from '../../assets/income.svg'

import { Container, TransactionTypeContainer, RadioBox } from './style';
import { FormEvent, useState, useContext } from 'react';

import { TransactionsContext } from '../../TransactionsContext';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {

    const { createTransaction } = useContext(TransactionsContext)

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('')
    const [type, setType] = useState('deposit');

    async function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();

        await createTransaction({
            title,
            amount,
            category,
            type,
        })

        setTitle('')
        setAmount(0)
        setCategory('')
        setType('deposit')

        onRequestClose();
    }
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className='react-modal-content'
        >
            <button type="button" onClick={onRequestClose} className="react-modal-close">
                <img src={CloseSVG} alt="Fechar Modal" />
            </button>

            <Container onSubmit={handleCreateNewTransaction} >
                <h2>Cadastrar transação</h2>

                <input
                    required
                    placeholder="Título"
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />

                <input
                    required
                    type="number"
                    placeholder='Valor'
                    value={amount}
                    onChange={event => setAmount(Number(event.target.value))}
                />

                <TransactionTypeContainer>

                    <RadioBox
                        type="button"
                        onClick={() => setType('deposit')}
                        isActive={type === 'deposit'}
                        activeColor="green"
                    >
                        <img src={IncomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox
                        type="button"
                        onClick={() => setType('withdraw')}
                        isActive={type === 'withdraw'}
                        activeColor="red"

                    >
                        <img src={OutCome} alt="Saída" />
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer>


                <input
                    value={category}
                    required
                    onChange={event => setCategory(event.target.value)}
                    placeholder="Categoria"
                />

                <button type="submit">
                    Cadastrar
                </button>

            </Container>

        </Modal>
    )
}