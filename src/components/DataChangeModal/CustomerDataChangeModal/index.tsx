import { useFormik } from 'formik';

import { Modal } from '@components/Modal';

import { Input } from '@ui/Input';
import { Button } from '@ui/Button';

import { useChangeCustomer } from '@hooks/useChangeCustomer';

import { CustomerDataChangeModalProps } from '../types';

import '../style.scss';

export const CustomerDataChangeModal: React.FC<CustomerDataChangeModalProps> = ({ data, setActive }) => {
	const changeCustomerMutation = useChangeCustomer();

	const formik = useFormik({
		enableReinitialize: true,
		initialValues: data,
		onSubmit: (values) => {
			changeCustomerMutation.mutate(values);
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
						<Input id="fullname" name="fullname" onChange={formik.handleChange} value={formik.values.fullname} required />
					</div>
					<div className="data-change-form__input-container">
						<label htmlFor="address.index" className="input-container__label">
							Index
						</label>
						<Input id="address.index" name="address.index" onChange={formik.handleChange} value={formik.values.address.index} maxLength={6} minLength={6} required pattern="[0-9]{6}" />
					</div>
					<div className="data-change-form__input-container">
						<label htmlFor="address.country" className="input-container__label">
							Country
						</label>
						<Input id="address.country" name="address.country" onChange={formik.handleChange} value={formik.values.address.country} required />
					</div>
					<div className="data-change-form__input-container">
						<label htmlFor="address.city" className="input-container__label">
							City
						</label>
						<Input id="address.city" name="address.city" onChange={formik.handleChange} value={formik.values.address.city} required />
					</div>
					<div className="data-change-form__input-container">
						<label htmlFor="address.building" className="input-container__label">
							Building
						</label>
						<Input id="address.building" name="address.building" onChange={formik.handleChange} value={formik.values.address.building} required />
					</div>
					<div className="data-change-form__input-container">
						<label htmlFor="address.apartment" className="input-container__label">
							Apartment
						</label>
						<Input id="address.apartment" name="address.apartment" onChange={formik.handleChange} value={formik.values.address.apartment} required />
					</div>
					<Button type="submit">Сохранить</Button>
					<Button onClick={() => setActive(false)}>Отменить</Button>
				</form>
			</div>
		</Modal>
	);
};
