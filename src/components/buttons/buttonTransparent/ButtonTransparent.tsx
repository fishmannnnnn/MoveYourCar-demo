import clsx from 'clsx'
import styles from './ButtonTransparent.module.scss'
import classNames from 'classnames'
const ButtonTransparent = ({
    text,
    isDark,
}: {
    text: string
    isDark?: boolean
}) => {
    return (
        <button className={clsx(styles.button, isDark && styles.dark)}>
            {text}
        </button>
    )
}
export default ButtonTransparent
