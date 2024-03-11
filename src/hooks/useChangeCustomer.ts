import { changeCustomer, getAllCustomers } from '@api/services/customers';
import { setObjects } from '@store/data/dataSlice';
import { useAppDispatch } from '@store/hooks/hooks';
import { useMutation, useQuery } from '@tanstack/react-query';

/**
 * Хук для изменения покупателя.
 * @returns Обьект запроса на изменение покупателя.
 */
export const useChangeCustomer = () => {
	const dispatch = useAppDispatch();
	const customers = useQuery({ queryKey: ['customer'], queryFn: getAllCustomers, enabled: false });
	const changeItemMutation = useMutation({
		mutationFn: (values: Parameters<typeof changeCustomer>[0]) => changeCustomer(values),
		onSuccess: () => {
			customers.refetch().then((res: object) => {
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				//@ts-ignore
				dispatch(setObjects(res.data?.data));
			});
		},
	});

	return changeItemMutation;
};
