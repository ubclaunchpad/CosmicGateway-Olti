import type { INotification } from '$lib/types/INotification';
import { notificationStore } from '../../stores/notification';

export interface IFetchRequest<T> {
	URI: string;
	requestInit?: RequestInit;
	onSuccess?: (data: T) => void;
	onError?: (data: T) => void;
	notifySuccess?: Partial<INotification>;
	notifyError?: Partial<INotification>;
}

export async function fetcher<T>(request: IFetchRequest<T>) {
	const { URI, requestInit } = request;

	try {
		const response = await fetch(URI, requestInit);
		const responseInfo = await response.json();

		if (response.status === 200) {
			request.onSuccess?.(responseInfo.data);
			if (request.notifySuccess) {
				const notification: INotification = {
					title: 'Success!',
					message: 'Your request was successful',
					type: 'success',
					...request.notifySuccess
				};
				notificationStore.set({ ...notification });
			}
			return responseInfo;
		} else {
			if (request.notifyError) {
				const notification: INotification = {
					title: responseInfo.error.name,
					message: responseInfo.error.message,
					type: 'warning',
					...request.notifyError
				};
				notificationStore.set({ ...notification });
			}
			throw new Error(responseInfo.message);
		}
	} catch (e) {
		console.warn(e);
	}
}
