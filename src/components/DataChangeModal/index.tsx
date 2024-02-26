import { useFormik } from 'formik';

import { Modal } from '@components/Modal';

import { Input } from '@ui/Input';
import { Button } from '@ui/Button';

import { useAppSelector } from '@store/hooks/hooks';

import { useChangeCustomer } from '@hooks/useChangeCustomer';
import { useChangeItem } from '@hooks/useChangeItem';

import './style.scss';

interface DataChangeModalProps {
	/**
	 * Обьект содержащий поля обьекта.
	 */
	data: object;

	/**
	 * Функция для изменения стейта активности окна.
	 */
	setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DataChangeModal: React.FC<DataChangeModalProps> = ({ data, setActive }) => {
	const changeItemMutation = useChangeItem();
	const changeCustomerMutation = useChangeCustomer();
	const activeTab = useAppSelector((state) => state.data.activeTab);

	const formik = useFormik({
		enableReinitialize: true,
		initialValues: data,
		onSubmit: (values) => {
			if (activeTab === 'Items') {
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				//@ts-ignore
				changeItemMutation.mutate(values);
			}
			if (activeTab === 'Customer') {
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				//@ts-ignore
				changeCustomerMutation.mutate(values);
			}
			setActive(false);
		},
	});

	return (
		<Modal>
			<div className="data-change-modal">
				<form onSubmit={formik.handleSubmit} className="data-change-modal__form">
					{Object.entries(data).map((field) => (
						<div className="data-change-form__input-container">
							<label htmlFor={field[0]} className="input-container__label">
								{field[0]}
							</label>
							<Input
								disabled={field[0] === 'id'}
								id={field[0]}
								name={field[0]}
								onChange={formik.handleChange}
								// eslint-disable-next-line @typescript-eslint/ban-ts-comment
								//@ts-ignore
								value={formik.values[field[0].toString()]}
							/>
						</div>
					))}
					<Button type="submit">Сохранить</Button>
					<Button onClick={() => setActive(false)}>Отменить</Button>
				</form>
			</div>
		</Modal>
	);
};
