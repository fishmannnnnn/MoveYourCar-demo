import styles from './PopupBackdrop.module.scss'
import { motion } from 'framer-motion'

const bg = {
    visible: {
        opacity: 1,
    },
    hidden: {
        opacity: 0,
    },
}

const PopupBackdrop = ({ children }: { children: React.ReactNode }) => {
    return (
        <motion.div
            className={styles.backdrop}
            variants={bg}
            initial="hidden"
            animate="visible"
            exit="hidden"
        >
            {children}
        </motion.div>
    )
}
export default PopupBackdrop
