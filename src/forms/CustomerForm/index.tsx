import { useFormik } from 'formik';

import { Button } from '@ui/Button';
import { Input } from '@ui/Input';

import { useCreateCustomer } from '@hooks/useCreateCustomer';
import '../style.scss';

export const CustomerForm: React.FC = () => {
	const createNewCustomer = useCreateCustomer();

	const formik = useFormik({
		enableReinitialize: true,
		initialValues: {
			id: 0,
			fullname: '',
			address: {
				index: '',
				country: '',
				city: '',
				building: '',
				apartment: '',
			},
			cart: {
				items: []
			},
			orders:[]
		},
		onSubmit: (values) => {
			createNewCustomer.mutate(values);
		},
	});

	return (
		<form className="items-form" onSubmit={formik.handleSubmit}>
			<div className="items-form__input-container">
				<label htmlFor="fullname" className="input-container__label">
					Fullname
				</label>
				<Input id="fullname" name="fullname" onChange={formik.handleChange} value={formik.values.fullname} required />
			</div>
			<div className="items-form__input-container">
				<label htmlFor="address.index" className="input-container__label">
					Index
				</label>
				<Input id="address.index" name="address.index" onChange={formik.handleChange} value={formik.values.address.index} maxLength={6} minLength={6} required pattern="[0-9]{6}" />
			</div>
			<div className="items-form__input-container">
				<label htmlFor="address.country" className="input-container__label">
					Country
				</label>
				<Input id="address.country" name="address.country" onChange={formik.handleChange} value={formik.values.address.country} required />
			</div>
			<div className="items-form__input-container">
				<label htmlFor="address.city" className="input-container__label">
					City
				</label>
				<Input id="address.city" name="address.city" onChange={formik.handleChange} value={formik.values.address.city} required />
			</div>
			<div className="items-form__input-container">
				<label htmlFor="building" className="input-container__label">
					Building
				</label>
				<Input id="address.building" name="address.building" onChange={formik.handleChange} value={formik.values.address.building} required />
			</div>
			<div className="items-form__input-container">
				<label htmlFor="apartment" className="input-container__label">
					Apartment
				</label>
				<Input id="address.apartment" name="address.apartment" onChange={formik.handleChange} value={formik.values.address.apartment} required />
			</div>
			<Button type="submit">Создать</Button>
		</form>
	);
};
