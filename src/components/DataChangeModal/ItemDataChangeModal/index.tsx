import { useFormik } from 'formik';

import { Modal } from '@components/Modal';

import { Input } from '@ui/Input';
import { Button } from '@ui/Button';

import { useChangeItem } from '@hooks/useChangeItem';

import { Select } from '@ui/Select';

import { CategoryTypes } from '@constants/CategoryTypes';

import { ItemDataChangeModalProps } from '../types';

import '../style.scss';

export const ItemDataChangeModal: React.FC<ItemDataChangeModalProps> = ({ data, setActive }) => {
	const changeItemMutation = useChangeItem();

	const formik = useFormik({
		enableReinitialize: true,
		initialValues: data,
		onSubmit: (values) => {
			changeItemMutation.mutate(values);
			setActive(false);
		},
	});

	return (
		<Modal>
			<div className="data-change-modal">
				<form onSubmit={formik.handleSubmit} className="data-change-modal__form">
					<div className="data-change-form__input-container">
						<label htmlFor="name" className="input-container__label">
							Name
						</label>
						<Input id="name" name="name" onChange={formik.handleChange} value={formik.values.name} />
					</div>
					<div className="data-change-form__input-container">
						<label htmlFor="info" className="input-container__label">
							Description
						</label>
						<Input id="info" name="info" onChange={formik.handleChange} value={formik.values.info} />
					</div>
					<div className="data-change-form__input-container">
						<label htmlFor="cost" className="input-container__label">
							Cost
						</label>
						<Input id="cost" name="cost" onChange={formik.handleChange} value={formik.values.cost} />
					</div>
					<div className="data-change-form__input-container">
						<label htmlFor="cost" className="input-container__label">
							Category
						</label>
						<Select
							value={formik.values.category}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							name="category"
						>
							{CategoryTypes.map((category) => (
								<option value={category}>{category}</option>
							))}
						</Select>
					</div>
					<Button type="submit">Сохранить</Button>
					<Button onClick={() => setActive(false)}>Отменить</Button>
				</form>
			</div>
		</Modal>
	);
};
