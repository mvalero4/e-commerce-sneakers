import { Header } from './components/Header';
import { IndexProduct } from './components/IndexProduct';

import CartDetailsProvider from './components/context/useCartDetails';

const App = () => {
  return (
    <CartDetailsProvider>
      <Header />
      <IndexProduct />
    </CartDetailsProvider>
  )
}

export default App;