import IncomeImg from '../../assets/income.svg'
import OutcomeImg from '../../assets/outcome.svg'
import TotalImg from '../../assets/total.svg'

import { Container } from './styles'

export function Summary() {

    return (
        <Container>
            <div>
                <header>
                    <p>entradas</p>
                    <img src={IncomeImg} alt="Entradas" />
                </header>
                <strong>
                    R$ 1000
                </strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={OutcomeImg} alt="Saídas" />
                </header>
                <strong>
                    - R$100
                </strong>
            </div>

            <div className='highLight-background'>
                <header>
                    <p>Total</p>
                    <img src={TotalImg} alt="Total" />
                </header>
                <strong>
                    R$1000
                </strong>
            </div>
        </Container>
    )

}