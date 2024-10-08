'use client';
import styles from './LanguageSelect.module.scss';
import { useState } from 'react';
import classNames from 'classnames';
import Image from 'next/image';
import { LOCALES } from '@/constants';
import icon from '@/icons/language.svg';
const LanguageSelect = () => {
	const [locale, setLocale] = useState('en');
	const handleClick = (s: string): void => {
		setLocale(s);
	};
	return (
		<div className={styles.languageSelect}>
			<div className={styles.languages}>
				<button
					onClick={() => setLocale(LOCALES[0].iso)}
					className={classNames(
						styles.locale,
						locale == LOCALES[0].iso
							? styles['locale--current']
							: ''
					)}>
					{LOCALES[0].language}
				</button>
				<span>/</span>
				<button
					onClick={() => setLocale(LOCALES[1].iso)}
					className={classNames(
						styles.locale,
						locale == LOCALES[1].iso
							? styles['locale--current']
							: ''
					)}>
					{LOCALES[1].language}
				</button>
			</div>
			<Image src={icon} alt='language'></Image>
		</div>
	);
};
export default LanguageSelect;
