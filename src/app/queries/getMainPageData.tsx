import { graphql } from '@/data/generated/gql'

export const getMainPageData = graphql(`
    query getMainPage {
        mainPage {
            data {
                attributes {
                    Licenses {
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
                        CaseItem {
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
                            CaseName
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
                    }
                    Reviews {
                        ReviewItem {
                            rate
                            date
                            name
                            text
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
                    FAQ {
                        FaqItem(pagination: { pageSize: 20 }) {
                            Question
                            Answer
                        }
                    }
                }
            }
        }
    }
`)
