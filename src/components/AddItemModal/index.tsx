import { Modal } from "@components/Modal"
import {AddItemModalProps} from './types'
import "./style.scss"
import { Button } from "@ui/Button"
import { Select } from "@ui/Select"
import { useFormik } from "formik"
import { useQuery } from "@tanstack/react-query"
import { getAllItems } from "@api/services/items"
import { useAddItemInCart } from "@hooks/useAddItemInCart"

export const AddItemModal: React.FC<AddItemModalProps> = ({id, setActive}) => {
    const items = useQuery({queryKey: ["items"], queryFn: getAllItems})
    const addItemInCart = useAddItemInCart()
    const formik = useFormik({
		enableReinitialize: true,
		initialValues: {
            itemId: ''
        },
		onSubmit: (values) => {
            addItemInCart.mutate({id, itemId: parseInt(values.itemId)})
			setActive(false);
		},
	});
    
    return(
        <Modal>
            <div className="add-item-modal">
                <form onSubmit={formik.handleSubmit} className="add-item-modal__form">
                    <div className="data-change-form__input-container">
						<label htmlFor="itemId" className="input-container__label">
							Продукт
						</label>
						<Select
							value={formik.values.itemId}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							name="itemId"
                            required
						>
                        { items.isSuccess &&
							items.data.data.map((item) => (
								<option value={item.id}>{item.name}</option>
							))  
                        }
						</Select>
					</div>
                    <Button type="submit">Сохранить</Button>
					<Button onClick={() => setActive(false)}>Отменить</Button>
                </form>
            </div>
        </Modal>
    )
}