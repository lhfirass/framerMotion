import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  return (
    <motion.div className="base container"
      initial={{ x:'-100vw' }}
      animate={{ x:0 }}
      transition={{ type: 'spring', stiffness: 200 }}
    >

      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <motion.li key={base} onClick={() => addBase(base)}
            whileHover={{ scale: 1.1,
              duration: 1,
              textShadow: '0 0 8px rgb(255,255,255)',
              originX: 0
            }}
            transition={{ type: 'spring', stiffness: 200 }}
            >
              <span className={spanClass}>{ base }</span>
            </motion.li>
          )
        })}
      </ul>

      {pizza.base && (
        <div className="next">
          <Link to="/toppings">
            <motion.button
              initial={{ x:'-100vw' }}
              animate={{ x:0 }}
              whileHover={{ scale: 1.1,
                duration: 1,
                textShadow: '0 0 8px rgb(255,255,255)',
                boxShadow: '0 0 8px rgb(255,255,255)' }}
            >Next</motion.button>
          </Link>
        </div>
      )}

    </motion.div>
  )
}

export default Base;