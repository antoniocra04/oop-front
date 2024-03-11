import { addItemInCart, getAllCustomers } from "@api/services/customers";
import { useAppDispatch } from "@store/hooks/hooks";
import { setObjects } from '@store/data/dataSlice';
import { useMutation, useQuery } from "@tanstack/react-query";

/**
 * Хук для добавления товара в корзину покупателя.
 * @returns Обьект запроса на добавление товара в корзину покупателя.
 */
export const useAddItemInCart = () => {
    const dispatch = useAppDispatch();
    const customers = useQuery({ queryKey: ['customer'], queryFn: getAllCustomers, enabled: false });
    const addItemInCartMutation = useMutation({
		mutationFn: (values: {id: number, itemId: number}) => addItemInCart(values.id, values.itemId),
		onSuccess: () => {
			customers.refetch().then((res: object) => {
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				//@ts-ignore
				dispatch(setObjects(res.data?.data));
			});
		},
	});

    return addItemInCartMutation;
}