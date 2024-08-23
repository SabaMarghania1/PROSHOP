import { Row, Col } from 'react-bootstrap';
import products from '../products';
import Product from '../Components/Product';
const HomeScreens = () => {
	return (
		<>
			<h1>Latest Products</h1>
			<Row>
				{products.map(product => (
					<Col sm={12} md={6} lg={4} xl={3} key={product.name}>
						,<Product product={product} />
					</Col>
				))}
			</Row>
		</>
	);
};

export default HomeScreens;
