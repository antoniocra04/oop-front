import { ParsedCustomer } from "@api/services/customers";
import { ItemInitialProps } from "@components/DataCard/types";

export interface ItemDataChangeModalProps {
	/**
	 * Обьект содержащий поля обьекта.
	 */
	data: ItemInitialProps;

	/**
	 * Функция для изменения стейта активности окна.
	 */
	setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface CustomerDataChangeModalProps {
	/**
	 * Обьект содержащий поля обьекта.
	 */
	data: ParsedCustomer;

	/**
	 * Функция для изменения стейта активности окна.
	 */
	setActive: React.Dispatch<React.SetStateAction<boolean>>;
}
