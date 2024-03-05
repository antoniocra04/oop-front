import { deleteCustomer, getAllCustomers } from '@api/services/customers';
import { useAppDispatch } from '@store/hooks/hooks';
import { useQuery, useMutation } from '@tanstack/react-query';
import { setObjects } from '@store/data/dataSlice';
import { parseCustomer } from '../utils/parseCustomer';

/**
 * Хук для удаления покупателя.
 * @returns Обьект запроса на удаления покупателя.
 */
export const useDeleteCustomer = () => {
	const dispatch = useAppDispatch();
	const customers = useQuery({ queryKey: ['customers'], queryFn: getAllCustomers, enabled: false });
	const deleteCustomerMutation = useMutation({
		mutationFn: (id: number) => deleteCustomer(id),
		onSuccess: () => {
			customers.refetch().then((res: object) => {
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				//@ts-ignore
				dispatch(setObjects(parseCustomer(res.data?.data)));
			});
		},
	});

	return deleteCustomerMutation;
};
