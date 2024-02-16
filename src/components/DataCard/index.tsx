import { useState } from 'react';
import classNames from 'classnames';

import { DownArrowIcon } from '../../icons/DownArrowIcon';

import { DataChangeModal } from '@components/DataChangeModal';

import './style.scss';

interface DataCardProps {
	data: object;
}

export const DataCard: React.FC<DataCardProps> = ({ data }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [isChangeModalActive, setIsChangeModalActive] = useState(false);

	const dataCardClass = classNames({
		'data-card': true,
		'--open': isOpen,
	});

	return (
		<div style={isOpen ? { height: `${75 + (Object.keys(data).length - 1) * 24}px` } : {}} className={dataCardClass}>
			<div className="data-card__info">
				{Object.entries(data).map((field, index) => (
					<div key={index} className="info__field">
						<p className="field__name">{field[0]}:</p>
						<p className="field__text">{field[1]}</p>
					</div>
				))}
				<p className="data-card__change-button" onClick={() => setIsChangeModalActive(true)}>Редактировать</p>
			</div>
			<DownArrowIcon style={isOpen ? { transform: 'rotate(180deg)' } : {}} onClick={() => setIsOpen(!isOpen)} />
			{
				isChangeModalActive ? <DataChangeModal data={data} setActive={setIsChangeModalActive} /> : ''
			}

		</div>
	);
};
