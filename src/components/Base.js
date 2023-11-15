import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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

const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  return (
    <motion.div className="base container"
        variants={XpageVariant}
        initial= "hidden"
        animate= "visible"
        exit= "exit"
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