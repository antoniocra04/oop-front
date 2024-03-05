import { CategoryType } from '@api/services/items';
import { ParsedCustomer } from '@api/services/customers';

export interface ItemDataCardProps {
	/**
	 * Обьект содержащий поля обьекта.
	 */
	data: ItemInitialProps;
}

export interface CustomerDataCardProps {
	/**
	 * Обьект содержащий поля обьекта.
	 */
	data: ParsedCustomer;
}

export interface ItemInitialProps {
	/**
	 * Id продукта.
	 */
	id: number;

	/**
	 * Стоимость продукта.
	 */
	cost: number;

	/**
	 * Имя продукта.
	 */
	name: string;

	/**
	 * Информация о продукте.
	 */
	info: string;

	/**
	 * Категория продукта.
	 */
	category: CategoryType;
}
