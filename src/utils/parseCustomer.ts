import { Customer } from '@api/services/customers';

export const parseCustomer = (data: Customer[]) => {
	data.forEach((e) => {
		for (const prop in e.address) {
			if (prop != 'id') {
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				//@ts-ignore
				e[prop] = e.address[prop];
			}
		}
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		//@ts-ignore
		delete e.address;
	});

	return data;
};
