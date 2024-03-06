import { useState } from 'react';
import classNames from 'classnames';

import { DownArrowIcon } from '../../../icons/DownArrowIcon';

import { CustomerDataChangeModal } from '@components/DataChangeModal/CustomerDataChangeModal';

import '../style.scss';
import { useDeleteCustomer } from '@hooks/useDeleteCustomer';
import { CustomerDataCardProps } from '../types';
import { Button } from '@ui/Button';

export const CustomerDataCard: React.FC<CustomerDataCardProps> = ({ data }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [isChangeModalActive, setIsChangeModalActive] = useState(false);
	const deleteCustomer = useDeleteCustomer();

	const dataCardClass = classNames({
		'data-card': true,
		'--open': isOpen,
	});

	return (
		<div style={isOpen ? { height: `${130 + (Object.keys(data).length - 1) * 24}px` } : {}} className={dataCardClass}>
			<div className="data-card__info">
				{Object.entries(data).map((field, index) => (
					<div key={index} className="info__field">
						<p className="field__name">{field[0]}:</p>
						<p className="field__text">{field[1]}</p>
					</div>
				))}
				<div style={{marginTop: "10px"}}>
					<Button>Создать заказ</Button>
				</div>
				<div className="data-card__buttons">
					<p className="data-card__change-button" onClick={() => setIsChangeModalActive(true)}>
						Редактировать
					</p>
					<p className="data-card__change-button" onClick={() => deleteCustomer.mutate(data.id)}>
						Удалить
					</p>
				</div>
			</div>
			<DownArrowIcon style={isOpen ? { transform: 'rotate(180deg)' } : {}} onClick={() => setIsOpen(!isOpen)} />
			{isChangeModalActive && <CustomerDataChangeModal data={data} setActive={setIsChangeModalActive} />}
		</div>
	);
};
