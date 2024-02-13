import { Input } from "@ui/Input"
import "../style.scss"
import { useFormik } from "formik";
import { Button } from "@ui/Button";

export const ItemsForm: React.FC = () => {
    const formik = useFormik({
        initialValues: {
          cost: '',
          name: '',
          description: '',
        },
        onSubmit: values => {
          alert(JSON.stringify(values));
        },
      });

    return(
        <form className="items-form" onSubmit={formik.handleSubmit}>
            <div className="items-form__input-container">
                <label htmlFor="cost" className="input-container__label">Cost</label>
                <Input id="cost" name="cost" onChange={formik.handleChange} value={formik.values.cost}/>
            </div>
            <div className="items-form__input-container">
                <label htmlFor="name" className="input-container__label">Name</label>
                <Input id="name" name="name" onChange={formik.handleChange} value={formik.values.name}/>
            </div>
            <div className="items-form__input-container">
                <label htmlFor="description" className="input-container__label">Description</label>
                <Input id="description" name="description" onChange={formik.handleChange} value={formik.values.description}/>
            </div>
            <Button type="submit">Создать</Button>
        </form>
    )
}