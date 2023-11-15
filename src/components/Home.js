import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
/*
  ? so what i am going to do is to add exit animation to the pages
  ! the first thing to know that i'm in the wrong pageCode, i should go to App.js compnent.
*/

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

const Home = () => {
  return (
    <motion.div className="home container"
      variants={XpageVariant}
      initial= "hidden"
      animate= "visible"
      exit= "exit"
    >
      <h2>
        Welcome to Pizza Joint
      </h2>
      <Link to="/base">
        <motion.button
          variants={Xvariant}
          whileHover= "hover"
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  )
}

export default Home;