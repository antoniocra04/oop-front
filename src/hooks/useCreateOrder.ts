import { getAllCustomers, createOrder } from "@api/services/customers";
import { useAppDispatch } from "@store/hooks/hooks";
import { useQuery, useMutation } from "@tanstack/react-query";
import { setObjects } from '@store/data/dataSlice';

/**
 * Хук для создания заказа.
 * @returns Обьект запроса для создания заказа.
 */
export const useCreateOrder = () => {
    const dispatch = useAppDispatch();
    const customers = useQuery({ queryKey: ['customer'], queryFn: getAllCustomers, enabled: false });
    const createOrderMutation = useMutation({
		mutationFn: (id: number) => createOrder(id),
		onSuccess: () => {
			customers.refetch().then((res: object) => {
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				//@ts-ignore
				dispatch(setObjects(res.data?.data));
			});
		},
	});

    return createOrderMutation;
}