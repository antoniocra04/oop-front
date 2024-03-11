import { Order } from "@api/services/customers";

export interface OrderModalProps{
    /**
     * Id покупателя
     */
    id: number

    /**
     * Заказ
     */
    order: Order

    /**
	 * Функция для изменения стейта активности окна.
	 */
	setActive: React.Dispatch<React.SetStateAction<boolean>>;
}