'use client';
import Image from 'next/image';
import { robotoCondensed } from '@/styles/fonts';
import { useState } from 'react';
import styles from './Accordion.module.scss';
import classNames from 'classnames';
import AccordionItem from './AccordionItem';
import { IAccordion } from '@/constants';

const Accordion = ({data, darkBg} : {data: Array<IAccordion>, darkBg: boolean}) => {
	const [selected, setSelected] = useState(0);
	const toggle = (i: number) =>
		selected == i ? setSelected(-1) : setSelected(i);
	return (
		<div
			className={classNames(
				styles.accordion,
				darkBg ? styles.accordionDarkBg : ''
			)}>
			{data.map((item, i) => (
				<AccordionItem
					key={i}
					toggle={toggle}
					selected={selected}
					data={item}
					index={i}
					darkBg={darkBg}
				/>
			))}
		</div>
	);
};
export default Accordion;
