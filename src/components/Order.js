import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const Order = ({ pizza }) => {
  let [showTitle, setTitle] = useState(true);
  setTimeout (() => {
    setTitle(false);
  }, 4000)
  return (
    <motion.div className="container order"
      initial={{ x:'-100vw' }}
      animate={{ x:0 }}
      transition={{ type: 'spring', stiffness: 200 }}
    > <AnimatePresence>
        { showTitle && (
          <motion.h2
            exit={{ y: -1000,
                    
            }} 
            transition={{duration: 2}}   
          >Thank you for your order :)</motion.h2>
      ) }
    </AnimatePresence>
      <p>You ordered a {pizza.base} pizza with:</p>
      {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
    </motion.div>
  ) 
}

export default Order;