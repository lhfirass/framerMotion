import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

let backdrop = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
}

const Modal = ( {showModal, setshowModal} ) => {
    return ( 
        <AnimatePresence exitBeforeEnter>
            (showModal && {
                <motion.div className='backdrop' 
                variants="backdrop"
                initial="hidden"
                animate="visible"
            >

            </motion.div>
            })
        </AnimatePresence>
    );
}

export default Modal;
