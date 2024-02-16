import { useFormik } from 'formik';

import { Button } from '@ui/Button';
import { Input } from '@ui/Input';

import { useCreateCustomer } from '@hooks/useCreateCustomer';
import '../style.scss';

export const CustomerForm: React.FC = () => {
	const createNewCustomer = useCreateCustomer()
  
	const formik = useFormik({
		initialValues: {
			fullname: '',
			address: '',
		},
		onSubmit: (values) => {
			createNewCustomer.mutate(values)
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
				<label htmlFor="address" className="input-container__label">
					Address
				</label>
				<Input id="address" name="address" onChange={formik.handleChange} value={formik.values.address} />
			</div>
			<Button type="submit">Создать</Button>
		</form>
	);
};
