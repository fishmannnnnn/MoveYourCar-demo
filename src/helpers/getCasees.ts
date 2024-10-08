export const getCases = (data: any) => {
    return data.Cases.CaseItem?.map((el: any) => ({
        image: {
            height: el?.image.data?.attributes?.height ?? undefined,
            width: el?.image.data?.attributes?.width ?? undefined,
            url:
                'https://myc.fractal-web.com' + el?.image.data?.attributes?.url,
        },
        description: el?.description ?? '',
        title: el?.title ?? '',
        caseItem: {
            name: el?.CaseName ?? '',
            text: el?.description ?? '',
            photos: el?.images.data.map((el: any) => ({
                height: el.attributes?.height ?? undefined,
                width: el.attributes?.width ?? undefined,
                url: 'https://myc.fractal-web.com' + el.attributes?.url,
            })),
        },
    }))
}
