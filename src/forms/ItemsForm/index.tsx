import { Input } from '@ui/Input';
import '../style.scss';
import { useFormik } from 'formik';
import { Button } from '@ui/Button';
import { useCreateItem } from '@hooks/useCreateItem';
import { CategoryTypes } from '@constants/CategoryTypes';
import { Select } from '@ui/Select';

export const ItemsForm: React.FC = () => {
	const createNewItem = useCreateItem();

	const formik = useFormik({
		initialValues: {
			cost: 0,
			name: '',
			info: '',
			category: 'Book',
		},
		onSubmit: (values) => {
			createNewItem.mutate(values);
		},
	});

	return (
		<form className="items-form" onSubmit={formik.handleSubmit}>
			<div className="items-form__input-container">
				<label htmlFor="name" className="input-container__label">
					Name
				</label>
				<Input id="name" name="name" onChange={formik.handleChange} value={formik.values.name} required/>
			</div>
			<div className="items-form__input-container">
				<label htmlFor="info" className="input-container__label">
					Description
				</label>
				<Input id="info" name="info" onChange={formik.handleChange} value={formik.values.info} required />
			</div>
			<div className="items-form__input-container">
				<label htmlFor="cost" className="input-container__label">
					Cost
				</label>
				<Input id="cost" name="cost" onChange={formik.handleChange} value={formik.values.cost} required />
			</div>
			<div className="items-form__input-container">
				<label htmlFor="cost" className="input-container__label">
					Category
				</label>
				<Select
					value={formik.values.category}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					name="category"
					required
				>
					{CategoryTypes.map((category) => (
						<option value={category}>{category}</option>
					))}
				</Select>
			</div>

			<Button type="submit">Создать</Button>
		</form>
	);
};
