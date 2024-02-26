import { changeCustomer, getAllCustomers } from '@api/services/customers';
import { setObjects } from '@store/data/dataSlice';
import { useAppDispatch } from '@store/hooks/hooks';
import { useMutation, useQuery } from '@tanstack/react-query';

export const useChangeCustomer = () => {
	const dispatch = useAppDispatch();
	const items = useQuery({ queryKey: ['customer'], queryFn: getAllCustomers, enabled: false });
	const changeItemMutation = useMutation({
		mutationFn: (values: Parameters<typeof changeCustomer>[0]) => changeCustomer(values),
		onSuccess: () => {
			items.refetch().then((res) => {
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				//@ts-ignore
				dispatch(setObjects(res.data?.data));
			});
		},
	});

	return changeItemMutation;
};
