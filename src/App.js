import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header";
import { Main } from "./components/Main/Main";
import { Nav } from "./components/Nav/Nav";
import { BaseLayout } from "./layouts/BaseLayout";


function App() {
	return (
		<div className="App">
			<BaseLayout>
				<Header />
				<Nav />
				<Main />
				<Footer />
			</BaseLayout>
		</div>
	);
}

export default App;
