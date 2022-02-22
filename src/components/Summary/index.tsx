import IncomeImg from '../../assets/income.svg'
import OutcomeImg from '../../assets/outcome.svg'
import TotalImg from '../../assets/total.svg'
import { useTransactions } from '../hooks/useTransactions'
import { Container } from './styles'

export function Summary() {

    const { transactions } = useTransactions()

    const summary = transactions.reduce((acc, transaction) => {

        if (transaction.type === "deposit") {
            acc.deposits += transaction.amount;
            acc.total += transaction.amount;

        } else {
            acc.withdraws += transaction.amount;
            acc.total -= transaction.amount;
        }

        if (acc.total <= 0) {
            acc.total = 0
        }

        return acc;
    }, {
        deposits: 0,
        withdraws: 0,
        total: 0
    })

    return (
        <Container>
            <div>
                <header>
                    <p>entradas</p>
                    <img src={IncomeImg} alt="Entradas" />
                </header>
                <strong>R$
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.deposits)}
                </strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={OutcomeImg} alt="Saídas" />
                </header>
                <strong> - R$
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.withdraws)}
                </strong>
            </div>

            <div className='highLight-background'>
                <header>
                    <p>Total</p>
                    <img src={TotalImg} alt="Total" />
                </header>
                <strong>R$
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.total)}</strong>
            </div>
        </Container>
    )

}