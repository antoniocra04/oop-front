import { deleteItem, getAllItems } from '@api/services/items';
import { setObjects } from '@store/data/dataSlice';
import { useAppDispatch } from '@store/hooks/hooks';
import { useMutation, useQuery } from '@tanstack/react-query';

/**
 * Хук для удаления продукта.
 * @returns Обьект запроса на удаление продукта.
 */
export const useDeleteItem = () => {
	const dispatch = useAppDispatch();
	const items = useQuery({ queryKey: ['items'], queryFn: getAllItems, enabled: false });
	const deleteItemMutation = useMutation({
		mutationFn: (id: number) => deleteItem(id),
		onSuccess: () => {
			items.refetch().then((res) => {
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				//@ts-ignore
				dispatch(setObjects(res.data?.data));
			});
		},
	});

	return deleteItemMutation;
};
