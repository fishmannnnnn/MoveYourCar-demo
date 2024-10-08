interface cardPriceReturnValue {
    transportTypeTax: string
    price: string
}

export const calcPrice = (
    distance: number,
    inoperation: number,
    year: string,
    date: string
): cardPriceReturnValue => {
    const value = distance * inoperation
    const valueWithNoTax = distance * 1
    const valueWithTax = distance * 1.4
    const yearTax = year < '1990' || year > '2023' ? (value / 100) * 10 : 0
    const dateTax = date === 'As soon as possible' ? (value / 100) * 20 : 0

    return {
        price: (value + yearTax + dateTax).toFixed(0),
        transportTypeTax: (valueWithTax - valueWithNoTax).toFixed(0),
    }
}
