'use client'

import Image from 'next/image'
import styles from './Form.module.scss'
import dashLeft from '@/images/dashboard-left.svg'
import dashRight from '@/images/dashboard-right.svg'
import clsx from 'clsx'
import classNames from 'classnames'
import { robotoCondensed } from '@/styles/fonts'
import { useRouter } from 'next/navigation'
import { City, FirstStepForm } from './components/FirstStepForm/FirstStepForm'
import { Car, SecondStepForm } from './components/SecondStepForm/SecondStepForm'
import { ThirdStepForm } from './components/ThirdStepForm/ThirdStepForm'
import { useCallback, useEffect, useState } from 'react'
import { ProgressBar } from './components/ProgressBar/ProgressBar'

interface StepBtn {
    step: number
    currentStep: number
    title: string
    onClick: (step: number) => void
}

const StepBtn = ({ currentStep, step, onClick, title }: StepBtn) => {
    return (
        <button onClick={() => onClick(step)}>
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

const CITIES = process.env.NEXT_PUBLIC_US_CITIES!
const CARS = process.env.NEXT_PUBLIC_CARS!

const OPTIONS: RequestInit = { method: 'GET', cache: 'force-cache' }

export const Form = () => {
    const [cities, setCities] = useState<City[]>()
    const [cars, setCars] = useState<Car[]>()
    const [currentStep, setCurrentStep] = useState(1)
    const router = useRouter()
    let Step: React.ReactNode = null
    let progressLineStyle: string = ''

    useEffect(() => {
        const citiesData = async () => {
            const [cities, cars] = await Promise.all([
                fetch(CITIES, OPTIONS).then(
                    async (cities) => await cities.json()
                ),
                fetch(CARS, OPTIONS).then(async (cars) => await cars.json()),
            ])

            setCities(cities)
            setCars(cars)
        }

        citiesData()
    }, [])

    const goNextStep = useCallback(async () => {
        if (currentStep < 3) {
            setCurrentStep((current) => current + 1)
        } else {
            router.push('/calculations')
        }
    }, [currentStep, setCurrentStep, router])

    const onStepBtnClick = useCallback(
        (selectedStep: number) => {
            if (selectedStep < currentStep) {
                setCurrentStep(selectedStep)
            }
        },
        [currentStep]
    )

    switch (currentStep) {
        case 1:
            Step = <FirstStepForm goNext={goNextStep} cities={cities} />
            break
        case 2:
            Step = <SecondStepForm goNext={goNextStep} cars={cars} />
            progressLineStyle = styles.stepTwoP
            break
        case 3:
            Step = <ThirdStepForm goNext={goNextStep} />
            progressLineStyle = styles.stepThreeP
            break
        default:
            return null
    }

    if (Step)
        return (
            <>
                <h2
                    className={classNames(
                        styles.formTitle,
                        robotoCondensed.className,
                        currentStep > 1 && styles.hidden
                    )}
                >
                    Start your free quote
                </h2>
                <div className={styles.formWrapper}>
                    <Image
                        src={dashLeft}
                        alt="right-dash"
                        className={styles.dashLeft}
                    />
                    <Image
                        src={dashRight}
                        alt="left-dash"
                        className={styles.dashRight}
                    />
                    {Step}
                    <ProgressBar
                        currentStep={currentStep}
                        onClick={onStepBtnClick}
                        progressLineStyle={progressLineStyle}
                    />
                </div>
            </>
        )
    return null
}
