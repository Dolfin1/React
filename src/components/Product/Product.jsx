import { cn } from '../../lib/react-bem'
import './product.scss'
import { Card } from '../Card/Card'

const style = cn('product')

export const Product = () => {

	return (

            <div className={style()}>
							<Card />
            </div>
	);
}

