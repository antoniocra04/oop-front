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

export interface ParsedCustomer extends Record<string, number | string>{
	id: number;
	fullname: string;
	index: string;
	country: string;
	city: string;
	building: string;
	apartment: string;
}

export const getAllCustomers = async () => {
	return await client.get<Customer[]>('customer/getAllCustomers');
};

export const createCustomer = async (values: { fullname: string; address: Address }) => {
	return await client.post<Customer>('customer/createCustomer', values);
};

export const changeCustomer = async (values: Customer) => {
	return await client.put<Customer>(`customer/changeCustomer/${values.id}`, values);
};

export const deleteCustomer = async (id: number) => {
	return await client.delete(`customer/deleteCustomer/${id}`);
};
