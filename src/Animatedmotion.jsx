import { motion } from "framer-motion"

const animations = {
    initial : {opacity: 0, scale : 0.5},
    animate : {opacity: 1, scale : 1},
    exit: {opacity: 0, scale : 0.5}
}


export default function AnimatedMotion ({children}){

    return (
        <motion.div 
            variants={animations} 
            initial="initial" 
            animate="animate" 
            exit="exit"
            transition={{ duration: 1}}>
            {children}
        </motion.div>
    )

}