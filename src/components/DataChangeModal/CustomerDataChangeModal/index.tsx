import { useFormik } from 'formik';

import { Modal } from '@components/Modal';

import { Input } from '@ui/Input';
import { Button } from '@ui/Button';

import { useChangeCustomer } from '@hooks/useChangeCustomer';

import { createCustomerObject } from '../../../utils/createCustomerObject';

import { CustomerDataChangeModalProps } from '../types';

import '../style.scss';

export const CustomerDataChangeModal: React.FC<CustomerDataChangeModalProps> = ({ data, setActive }) => {
	const changeCustomerMutation = useChangeCustomer();

	const formik = useFormik({
		enableReinitialize: true,
		initialValues: data,
		onSubmit: (values) => {
			changeCustomerMutation.mutate(createCustomerObject(values));
			setActive(false);
		},
	});

	return (
		<Modal>
			<div className="data-change-modal">
				<form onSubmit={formik.handleSubmit} className="data-change-modal__form">
					<div className="data-change-form__input-container">
						<label htmlFor="fullname" className="input-container__label">
							Fullname
						</label>
						<Input id="fullname" name="fullname" onChange={formik.handleChange} value={formik.values.fullname} />
					</div>
					<div className="data-change-form__input-container">
						<label htmlFor="index" className="input-container__label">
							Index
						</label>
						<Input id="index" name="index" onChange={formik.handleChange} value={formik.values.index} />
					</div>
					<div className="data-change-form__input-container">
						<label htmlFor="country" className="input-container__label">
							Country
						</label>
						<Input id="country" name="country" onChange={formik.handleChange} value={formik.values.country} />
					</div>
					<div className="data-change-form__input-container">
						<label htmlFor="city" className="input-container__label">
							City
						</label>
						<Input id="city" name="city" onChange={formik.handleChange} value={formik.values.city} />
					</div>
					<div className="data-change-form__input-container">
						<label htmlFor="building" className="input-container__label">
							Building
						</label>
						<Input id="building" name="building" onChange={formik.handleChange} value={formik.values.building} />
					</div>
					<div className="data-change-form__input-container">
						<label htmlFor="apartment" className="input-container__label">
							Apartment
						</label>
						<Input id="apartment" name="apartment" onChange={formik.handleChange} value={formik.values.apartment} />
					</div>
					<Button type="submit">Сохранить</Button>
					<Button onClick={() => setActive(false)}>Отменить</Button>
				</form>
			</div>
		</Modal>
	);
};
