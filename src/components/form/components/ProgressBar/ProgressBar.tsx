'use client'
import clsx from 'clsx'
import styles from './ProgressBar.module.scss'

interface StepBtn {
    step: number
    currentStep: number
    title: string
    onClick: (step: number) => void
    className?: string
}

const StepBtn = ({ currentStep, step, onClick, title, className }: StepBtn) => {
    return (
        <button className={className} onClick={() => onClick(step)}>
            <p>
                <span className={clsx(currentStep >= step && styles.orange)}>
                    {'[ '}
                </span>
                {title}
                <span className={clsx(currentStep >= step && styles.orange)}>
                    {' ]'}
                </span>
            </p>
        </button>
    )
}

const STEP_BTNS = ['Destination', 'Vehicle', 'Date']

interface ProgressBarProps {
    currentStep: number
    progressLineStyle: string
    onClick: (step: number) => void
}

export const ProgressBar = ({
    currentStep,
    progressLineStyle,
    onClick,
}: ProgressBarProps) => {
    return (
        <>
            {currentStep > 1 && currentStep < 4 ? (
                <div className={styles.steps}>
                    <div className={styles.names}>
                        {STEP_BTNS.map((b, i) => (
                            <StepBtn
                                currentStep={currentStep}
                                onClick={onClick}
                                step={i + 1}
                                title={b}
                                key={i}
                                className={i == 1 ? styles.centerBtn : ''}
                            />
                        ))}
                    </div>
                    <div className={styles.backgroindLine}>
                        <div
                            className={clsx(
                                styles.progressLine,
                                progressLineStyle
                            )}
                        />
                    </div>
                </div>
            ) : null}
        </>
    )
}
