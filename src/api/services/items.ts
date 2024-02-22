import { client } from '@api/client';

export interface Item {
	/**
	 * Id.
	 */
	id: number;

	/**
	 * Имя продукта.
	 */
	name: string;

	/**
	 * Информация о продукте.
	 */
	info: string;

	/**
	 * Стоимость продукта.
	 */
	cost: number;
}

export const getAllItems = async () => {
	return await client.get<Item[]>('Item/getAllItems');
};

export const createItem = async (values: { name: string; info: string; cost: number }) => {
	return client.post<Item>('Item/createItem', values);
};

export const changeItem = async (values: Item) => {
	return await client.put<Item>(`Item/changeItem/${values.id}`, values)
}

export const deleteItem = async (id: number) => {
	return await client.delete(`Item/deleteItem/${id}`)
}