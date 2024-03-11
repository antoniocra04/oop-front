export interface AddItemModalProps{
    /**
	 * Id покупателя
	 */
    id: number

    /**
	 * Функция для изменения стейта активности окна.
	 */
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
}