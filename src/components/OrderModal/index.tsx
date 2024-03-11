import { Modal } from "@components/Modal"
import "./style.scss"
import { OrderModalProps } from "./types"
import { Button } from "@ui/Button"
import { useDeleteOrder } from "@hooks/useDeleteOrder"

export const OrderModal: React.FC<OrderModalProps> = ({id, order, setActive}) => {
    const deleteOrder = useDeleteOrder();

    return(
        <Modal>
            <div className="order-modal">
                <div className="order-modal__info">
                    <div className="info__field">
                        <p className="field__name">Id:</p>
                        <p className="field__text">{order.id}</p>
                    </div>
                    <div className="info__field">
                        <p className="field__name">Дата создания:</p>
                        <p className="field__text">{order.createDate}</p>
                    </div>
                    <div className="info__field">
                        <p className="field__name">Адрес доставки:</p>
                        <p className="field__text">{order.deliveryAddress}</p>
                    </div>
                    <div className="info__field">
                        <p className="field__name">Продукты:</p>
                        <p className="field__text">{order.items.toString()}</p>
                    </div>
                    <div className="info__field">
                        <p className="field__name">Статус:</p>
                        <p className="field__text">{order.orderStatus}</p>
                    </div>
                </div>
                <Button onClick={() => setActive(false)}>Ок</Button>
                <Button style={{backgroundColor: "#FA9184"}} onClick={() => { deleteOrder.mutate({id, orderId: order.id!}); setActive(false)}}>Удалить</Button>
            </div>

        </Modal>
    )
}