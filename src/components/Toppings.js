import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

let Xvariant = {
  hover: {
    scale: 1.1,
    duration: 1,
    textShadow: '0 0 8px rgb(255,255,255)',
    boxShadow: '0 0 8px rgb(255,255,255)',
    transition:{yoyo: Infinity}
  }
}

let XpageVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1.5,
      duration: 1.5
    }
  },
  exit: {
    x: "-100vw",
    transition: {ease: "easeInOut"}
  }
}

const Toppings = ({ addTopping, pizza }) => {
  let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];

  return (
    <motion.div className="toppings container"
        variants={XpageVariant}
        initial= "hidden"
        animate= "visible"
        exit= "exit"
    >
      
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map(topping => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
          return (
            <motion.li key={topping} onClick={() => addTopping(topping)}
              whileHover={{ scale: 1.1,
                duration: 1,
                textShadow: '0 0 8px rgb(255,255,255)',
                originX: 0
              }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <span className={spanClass}>{ topping }</span>
            </motion.li>
          )
        })}
      </ul>

      <Link to="/order">
        <motion.button
          initial={{ x:'-100vw' }}
          animate={{ x:0 }}
          whileHover={{ scale: 1.1,
            duration: 1,
            textShadow: '0 0 8px rgb(255,255,255)',
            boxShadow: '0 0 8px rgb(255,255,255)' }}
        >
          Order
        </motion.button>
      </Link>

    </motion.div>
  )
}

export default Toppings;