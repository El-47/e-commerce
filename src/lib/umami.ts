import umami from '@umami/node';

umami.init({
    websiteId: 'd60b023d-9012-4b12-a25c-fcc40cd5a952', // website id
    hostUrl: 'https://cloud.umami.is', // URL to Umami instance
});

export const umamiTrackCheckoutSuccessEvent = async (payload: {
    [key: string]: string | number | Date
}) => {
    await umami.track('checkout_success', payload);
}