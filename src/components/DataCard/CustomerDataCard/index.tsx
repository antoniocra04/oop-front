import { useState } from 'react';
import classNames from 'classnames';

import { DownArrowIcon } from '../../../icons/DownArrowIcon';

import { CustomerDataChangeModal } from '@components/DataChangeModal/CustomerDataChangeModal';

import '../style.scss';
import { useDeleteCustomer } from '@hooks/useDeleteCustomer';
import { CustomerDataCardProps } from '../types';
import { Button } from '@ui/Button';
import { AddItemModal } from '@components/AddItemModal';
import { useCreateOrder } from '@hooks/useCreateOrder';
import { OrderModal } from '@components/OrderModal';
import { Order } from '@api/services/customers';

export const CustomerDataCard: React.FC<CustomerDataCardProps> = ({ data }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [isChangeModalActive, setIsChangeModalActive] = useState(false);
	const [isAddItemModalActive, setIsAddItemModalActive] = useState(false);
	const [isOrderModalActive, setIsOrderModalActive] = useState(false);
	const [currentOrder, setCurrentOrder] = useState<Order>()
	const createOrder = useCreateOrder();
	const deleteCustomer = useDeleteCustomer();

	const dataCardClass = classNames({
		'data-card': true,
		'--open': isOpen,
	});

	return (
		<div style={isOpen ? { height: `${140 + (Object.keys(data).length - 1) * 24}px` } : {}} className={dataCardClass}>
			<div className="data-card__info">
				<div className="info__field">
					<p className="field__name">Id:</p>
					<p className="field__text">{data.id}</p>
				</div>
				<div className="info__field">
					<p className="field__name">Имя:</p>
					<p className="field__text">{data.fullname}</p>
				</div>
				<div className="info__field">
					<p className="field__name">Адрес:</p>
					<p className="field__text">{`${data.address.index} ${data.address.country} ${data.address.city} ${data.address.building} ${data.address.apartment}`}</p>
				</div>
				<div className="info__field">
					<p className="field__name">Товары:</p>
					<p className="field__text">{data.cart.items.toString()}</p>
				</div>
				<div className="info__field">
					<p className="field__name">Заказы:</p>
					<p className="field__text">
						{data.orders.map(order => (
							<span onClick={() => {setCurrentOrder(order), setIsOrderModalActive(true)}} className='text__interactive'> {order.id}</span>
						))}
					</p>
				</div>
				<div style={{marginTop: "10px"}} className="data-card__buttons">
					<Button onClick={() => setIsAddItemModalActive(true)}>Добавить товар</Button>
					<Button onClick={() => createOrder.mutate(data.id)}>Создать заказ</Button>
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
			{isAddItemModalActive && <AddItemModal id={data.id} setActive={setIsAddItemModalActive} />}
			{isOrderModalActive && <OrderModal id={data.id} order={currentOrder!} setActive={setIsOrderModalActive} />}
		</div>
	);
};
