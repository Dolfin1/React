import { cn } from '../../lib/react-bem'
import { Product } from '../Product/Product';
import './product-list.scss'

const style = cn('products-list')

export const ProductList = () => {

	return (
          <section className={style()}>
						<Product />
						<Product />
						<Product />
						<Product />
						<Product />
						<Product />
          </section>

	);
}

