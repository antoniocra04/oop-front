import { createCustomer } from '@api/services/customers';
import { setObjects } from '@store/data/dataSlice';
import { useAppDispatch, useAppSelector } from '@store/hooks/hooks';
import { useQueryClient, useMutation } from '@tanstack/react-query';

export const useCreateCustomer = () => {
	const queryClient = useQueryClient();
	const dispatch = useAppDispatch();
	const objects = useAppSelector((state) => state.data.objectList);
	const createNewCustomer = useMutation({
		mutationFn: (values: Parameters<typeof createCustomer>[0]) => createCustomer(values),
		onSuccess: (data) => {
			if (data.data) {
				dispatch(setObjects([...objects, data.data]));
				queryClient.invalidateQueries({ queryKey: ['customers'] });
			}
		},
	});

	return createNewCustomer;
};
