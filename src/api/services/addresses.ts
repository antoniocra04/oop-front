import { client } from '@api/client';

export interface Address {
	id?: number;
	index: string;
	country: string;
	city: string;
	building: string;
	apartment: string;
}

export const getAllAddresses = async () => {
	return await client.get<Address[]>('address');
};

export const deleteAddress = async (id: number) => {
	return await client.delete(`address/${id}`);
};
