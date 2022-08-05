import { cn } from '../../lib/react-bem'
import { ProductList } from '../ProductList/ProductList'
import './main.scss'

const style = cn('main')

export const Main = () => {

	return (
		<main className={style()}>
			<div className="b-container">
				<ProductList />
			</div>
		</main>
	);
}

