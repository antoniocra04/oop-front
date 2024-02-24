import { client } from '@api/client';
import { Address } from './addresses';

export interface Customer {
	/**
	 * Id.
	 */
	id: number;

	/**
	 * Имя покупателя.
	 */
	fullname: string;

	/**
	 * Адресс покупателя.
	 */
	address: Address;
}

export const getAllCustomers = async () => {
	return await client.get<Customer[]>('customer/getAllCustomers');
};

export const createCustomer = async (values: { fullname: string; address: string }) => {
	return await client.post<Customer>('customer/createCustomer', values);
};

export const changeCustomer = async (values: Customer) => {
	return await client.put<Customer>(`customer/changeCustomer/${values.id}`, values)
}

export const deleteCustomer = async (id: number) => {
	return await client.delete(`customer/deleteCustomer/${id}`)
}