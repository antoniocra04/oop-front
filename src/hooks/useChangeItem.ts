import { changeItem, getAllItems } from '@api/services/items';
import { setObjects } from '@store/data/dataSlice';
import { useAppDispatch } from '@store/hooks/hooks';
import { useMutation, useQuery } from '@tanstack/react-query';

/**
 * Хук для изменения продукта.
 * @returns Обьект запроса на изменение продукта.
 */
export const useChangeItem = () => {
	const dispatch = useAppDispatch();
	const items = useQuery({ queryKey: ['items'], queryFn: getAllItems, enabled: false });
	const changeItemMutation = useMutation({
		mutationFn: (values: Parameters<typeof changeItem>[0]) => changeItem(values),
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
