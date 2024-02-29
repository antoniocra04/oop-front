import { useFormik } from 'formik';

import { Button } from '@ui/Button';
import { Input } from '@ui/Input';

import { useCreateCustomer } from '@hooks/useCreateCustomer';
import '../style.scss';
import { createCustomerObject } from '../../utils/createCustomerObject';
import { ParsedCustomer } from '@api/services/customers';

export const CustomerForm: React.FC = () => {
	const createNewCustomer = useCreateCustomer();

	const formik = useFormik({
		initialValues: {
			id: 0,
			fullname: '',
			index: '',
			country: '',
			city: '',
			building: '',
			apartment: ''
		},
		onSubmit: (values: ParsedCustomer) => {
			createNewCustomer.mutate(createCustomerObject(values));
		},
	});

	return (
		<form className="items-form" onSubmit={formik.handleSubmit}>
			<div className="items-form__input-container">
				<label htmlFor="fullname" className="input-container__label">
					Fullname
				</label>
				<Input id="fullname" name="fullname" onChange={formik.handleChange} value={formik.values.fullname} />
			</div>
			<div className="items-form__input-container">
				<label htmlFor="index" className="input-container__label">
					Index
				</label>
				<Input id="index" name="index" onChange={formik.handleChange} value={formik.values.index} />
			</div>
			<div className="items-form__input-container">
				<label htmlFor="country" className="input-container__label">
					Country
				</label>
				<Input id="country" name="country" onChange={formik.handleChange} value={formik.values.country} />
			</div>
			<div className="items-form__input-container">
				<label htmlFor="city" className="input-container__label">
					City
				</label>
				<Input id="city" name="city" onChange={formik.handleChange} value={formik.values.city} />
			</div>
			<div className="items-form__input-container">
				<label htmlFor="building" className="input-container__label">
					Building
				</label>
				<Input id="building" name="building" onChange={formik.handleChange} value={formik.values.building} />
			</div>
			<div className="items-form__input-container">
				<label htmlFor="apartment" className="input-container__label">
					Apartment
				</label>
				<Input id="apartment" name="apartment" onChange={formik.handleChange} value={formik.values.apartment} />
			</div>
			<Button type="submit">Создать</Button>
		</form>
	);
};
