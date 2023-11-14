import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  return (
    <div className="base container">

      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <li key={base} onClick={() => addBase(base)}>
              <span className={spanClass}>{ base }</span>
            </li>
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

    </div>
  )
}

export default Base;