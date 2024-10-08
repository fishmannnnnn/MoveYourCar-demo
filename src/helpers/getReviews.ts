export const getReviws = (data: any) => {
    return data.Reviews.ReviewItem.map((item: any) => ({
        date: item?.date ?? '',
        image: {
            url:
                'https://myc.fractal-web.com' +
                item?.image.data?.attributes?.url,
            width: item?.image.data?.attributes?.width ?? undefined,
            height: item?.image.data?.attributes?.height ?? undefined,
        },
        name: item?.name ?? '',
        rating: item?.rate ?? 5,
        review: item?.text ?? '',
    }))
}
