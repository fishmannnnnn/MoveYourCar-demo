import { graphql } from '@/data/generated/gql'

export const test3 = graphql(`
    query getSomething {
        licenses {
            data {
                attributes {
                    title
                    description
                    image {
                        data {
                            attributes {
                                height
                                width
                                url
                            }
                        }
                    }
                }
            }
        }
    }
`)
