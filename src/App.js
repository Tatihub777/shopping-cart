
import './App.css';
import { useState } from 'react';
import { item } from './item';
import { advert } from './advert';

function App() {
  
const [cart, setCart] = useState(item);
const [add, setAdd] = useState(0);
const {id, picture, priceTwo, productTwo} = advert[add];


const removeItem = (id) => {
  let newItem = cart.filter(product => product.id !== id);
  setCart(newItem)

}

const nextItem = () => {
setAdd((add => {
  add ++;
  if(add > advert.length - 1) {
    add =0;
  }
  return add;
}))
}

const prevItem = () => {
  setAdd((add => {
    add --;
    if(add<0) {
      return advert.length -1
    }
    return add;
  }))
}
  return (
    
    <div className="App">
    <div>
    <advert />
    <item />
  </div>
      <header className="App-header">
       <div>
        <h1>TechnoPort Shop</h1>
        
       </div>
      </header>

<div>
            <div>
               <h2>YOUR CART</h2>
               <h3>There are {cart.length} items in your cart</h3>
             </div>
          </div>


      <section>
        <div className='CartContainer'>

    <div className='cartProduct'>  
      <div >
        {cart.map((item => {
            const {id, product, image, price} = item;
            return(
              
        <div className='cartItem' key={id}>
          <div>
            <img src={image} alt='product' width='150px'/>
          </div>
          <div>
            <p> {product} </p>
          </div>
          <div>
            <p> {price} £</p> 
          </div>
          <div>
            <button className='removeBtn' onClick={()=> removeItem(id)}>X</button>
          </div>
      </div>
            )
        }))
        }
        
</div> 



        <div className='cartTotal'>
          <div>
            <h3>Total: 200 £</h3>
          </div>
          <div>
            <h4>We accept:</h4>
            <img src='https://www.elkor.lv/assets/cart/visa_electron.svg' alt='cards' width='50px' />
            <img src='https://www.elkor.lv/assets/cart/amex.svg' alt='cards' width='50px' />

          </div>
          
        <div>
          <button className='cartOrderBtn'>Create order</button>
        </div>


        </div>


      </div>
        </div>
      <div>
          <button className='removeAllBtn' onClick={()=> setCart([])}>Remove order</button>
        </div>
      </section> 

      <section>
        <div>
          <h2>Frequently bought together</h2>
        </div>
        
      <div className='container'>
        
        <div className='advert_container'>
          
          <div className='advertItems'>
            <div className='advertItems__style' key={id}>
            <img src={picture} alt='advert slideshow' width='450px'/>
          <h3>{priceTwo} £</h3>
          <p>{productTwo}</p>
          </div>
          <div className='advert__btn'>
            <button onClick={prevItem} className='btn'>PREV</button>
            <button onClick={nextItem} className='btn'>NEXT</button>
          </div>
          </div>

        </div>
      </div>
    </section>


    </div>
    
  );
}

export default App;
