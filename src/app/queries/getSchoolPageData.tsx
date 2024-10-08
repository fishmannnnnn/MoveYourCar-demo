import { graphql } from '@/data/generated/gql'

export const getSchoolPageData = graphql(`
    query getSchoolPage {
        schoolPage {
            data {
                attributes {
                    AboutCourse {
                        AccordionItem {
                            title
                            description
                            image {
                                data {
                                    attributes {
                                        width
                                        height
                                        url
                                    }
                                }
                            }
                        }
                    }
                    Cases {
                        images {
                            data {
                                attributes {
                                    width
                                    height
                                    url
                                }
                            }
                        }
                    }
                    Teacher {
                        Title
                        text1
                        text2
                        Name
                        instagram
                        tiktok
                        youtube
                        image {
                            data {
                                attributes {
                                    width
                                    height
                                    url
                                }
                            }
                        }
                    }
                    FAQ {
                        FaqItem {
                            Question
                            Answer
                        }
                    }
                }
            }
        }
    }
`)
