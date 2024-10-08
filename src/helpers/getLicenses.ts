import { GetMainPageQuery } from '@/data/generated/graphql'

export const getLicenses = (data: any) => {
    return data.AccordionItem.map((item: any) => ({
        description: item?.description ?? '',
        image: {
            height: item?.image.data?.attributes?.height || undefined,
            width: item?.image.data?.attributes?.width || undefined,
            url: item?.image.data?.attributes?.url,
        },
        title: item?.title ?? '',
    }))
}
