import logoImg from '../assets/logo.jpg';
import CartContext from '../store/CartContext';
import { useContext } from 'react';

export default function Header() {
  const cartCtx = useContext(CartContext);
  const totalCartitems = cartCtx.items.reduce((total, item) => {
    return total + item.quantity
  },0)
  
  
  
  
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="A restaurant" />
        <h1>ReactFood</h1>
      </div>
      <nav>
        <button>Cart ({totalCartitems})</button>
      </nav>
    </header>
  );
}