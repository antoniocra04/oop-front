import { createItem } from '@api/services/items';
import { setObjects } from '@store/data/dataSlice';
import { useAppDispatch, useAppSelector } from '@store/hooks/hooks';
import { useQueryClient, useMutation } from '@tanstack/react-query';

/**
 * Хук для создания продукта.
 * @returns Обьект запроса на создания продукта.
 */
export const useCreateItem = () => {
	const queryClient = useQueryClient();
	const dispatch = useAppDispatch();
	const objects = useAppSelector((state) => state.data.objectList);
	const itemMutation = useMutation({
		mutationFn: (values: Parameters<typeof createItem>[0]) => createItem(values),
		onSuccess: (data) => {
			if (data.data) {
				dispatch(setObjects([...objects, data.data]));
				queryClient.invalidateQueries({ queryKey: ['items'] });
			}
		},
	});

	return itemMutation;
};
