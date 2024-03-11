import { getAllCustomers, deleteOrder } from "@api/services/customers";
import { useAppDispatch } from "@store/hooks/hooks";
import { useQuery, useMutation } from "@tanstack/react-query";
import { setObjects } from '@store/data/dataSlice';

/**
 * Хук для удаления продукта из корзины.
 * @returns Обьект запроса на удаление продукта из корзины.
 */
export const useDeleteOrder = () => {
    const dispatch = useAppDispatch();
	const customers = useQuery({ queryKey: ['customers'], queryFn: getAllCustomers, enabled: false });
	const deleteCustomerMutation = useMutation({
		mutationFn: (values: {id: number, orderId: number}) => deleteOrder(values.id, values.orderId),
		onSuccess: () => {
			customers.refetch().then((res: object) => {
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				//@ts-ignore
				dispatch(setObjects(res.data?.data));
			});
		},
	});

	return deleteCustomerMutation;
}