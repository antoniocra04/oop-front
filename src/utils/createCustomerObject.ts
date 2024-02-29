import { Customer, ParsedCustomer } from "@api/services/customers";

export const createCustomerObject = (data: ParsedCustomer): Customer => {
    const result = {
        id: data.id,
        fullname: data.fullname, 
        address: {
            index: data.index,
            country: data.country,
            city: data.city,
            building: data.building,
            apartment: data.apartment,
        }
    }

    return result;
}