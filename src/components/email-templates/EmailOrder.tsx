import * as React from 'react'
import {
    Html,
    Img,
    Text,
    Section,
    Heading,
    Row,
    Column,
    Body,
    Hr,
    Button,
    Container,
} from '@react-email/components'

const ItemTitles = ({ text }: { text: string }) => {
    return (
        <>
            <span style={{ color: '#657981', marginRight: '5px' }}>{'['}</span>
            {text}
            <span style={{ color: '#657981', marginLeft: '5px' }}>{']'}</span>
        </>
    )
}

export interface ClientFormOrder {
    id: string
    price: string
    distance: string
    firstAvailDate: string
    vechicle: string
    from: string
    to: string
    conditions: string
    transportType: string
    email: string
    date: string
    extraPhone?: string
    representation: string
    phone: string
    pickup: {
        address: string
        details: string
        representation: string
        whoToContact: string
    }
    delivery: {
        address: string
        details: string
        representation: string
        specialInstruction?: string
        whoToContact: string
    }
}

export function EmailOrder({
    conditions,
    distance,
    firstAvailDate,
    from,
    price,
    to,
    transportType,
    vechicle,
    id,
}: ClientFormOrder) {
    return (
        <Html lang="en">
            <Body
                style={{
                    width: '100%',
                    background: '#e9e9e9a9',
                    padding: '50px 0px',
                }}
            >
                <Container
                    style={{
                        width: '100%',
                        maxWidth: '600px',
                        background: '#fff',
                    }}
                >
                    <Section
                        style={{
                            width: '100%',
                            borderBottom: '1px solid #11252C26',
                            padding: '30px',
                        }}
                    >
                        <Img
                            src="https://move-your-car.vercel.app/emai-logo-2.png"
                            alt="navbar-logo"
                            width={182}
                            height={40}
                        />
                    </Section>
                    <Section style={{ marginTop: '70px' }}>
                        <Text
                            style={{
                                fontSize: '16px',
                                color: '#FE470D',
                                marginBottom: '50px',
                                fontWeight: '700',
                                padding: '0px 30px',
                            }}
                        >
                            Car shipping Quote{' '}
                        </Text>
                        <Row style={{ padding: '0px 30px' }}>
                            <Column style={{ width: '76%' }}>
                                <Heading
                                    style={{
                                        fontSize: '54px',
                                        color: '#11252C',
                                        margin: '0px',
                                    }}
                                >
                                    #{id}
                                </Heading>
                                <Text
                                    style={{
                                        color: '#657981',
                                        fontSize: '16px',
                                        lineHeight: '24px',
                                        fontWeight: '400',
                                        maxWidth: '295px',
                                        marginTop: '16px',
                                    }}
                                >
                                    Your personalized quote to transport your{' '}
                                    {vechicle} is ready
                                </Text>
                            </Column>
                            <Column>
                                <Img
                                    src="https://move-your-car.vercel.app/_next/static/media/ok-btn.e3867e44.png"
                                    alt="logo"
                                    width={121}
                                    height={121}
                                    style={{ marginBottom: '10px' }}
                                />
                            </Column>
                        </Row>
                        <Section style={{ padding: '50px 30px' }}>
                            <Button
                                href="tel:+19372723744"
                                style={{
                                    background: '#11252C',
                                    borderRadius: '100px',
                                    width: '100%',
                                    height: '54px',
                                    border: 'none',
                                    textAlign: 'center',
                                }}
                            >
                                <Container style={{ paddingTop: '2px' }}>
                                    <Text
                                        style={{
                                            color: '#FFFFFF',
                                            fontSize: '16px',
                                            lineHeight: '18.75px',
                                        }}
                                    >
                                        Call: +1 (937) 272 37-44
                                    </Text>
                                </Container>
                            </Button>
                        </Section>
                        <Hr
                            style={{
                                width: '100%',
                                background: '#11252C26',
                                height: '1px',
                            }}
                        />
                    </Section>
                    <Section
                        style={{ marginTop: '100px', padding: '0px 30px' }}
                    >
                        <Column>
                            <Row style={{ width: '100%' }}>
                                <Column style={{ width: '50%' }}>
                                    <Text
                                        style={{
                                            fontSize: '20px',
                                            fontWeight: '700',
                                            lineHeight: '28.8px',
                                            textTransform: 'uppercase',
                                            color: '#11252C',
                                            margin: '0px',
                                        }}
                                    >
                                        Summary for quote
                                    </Text>
                                </Column>
                                <Column style={{ width: '50%' }}>
                                    <Text
                                        style={{
                                            fontSize: '24px',
                                            fontWeight: '700',
                                            lineHeight: '28.8px',
                                            textTransform: 'uppercase',
                                            color: '#FE470D',
                                            margin: '0px',
                                        }}
                                    >
                                        #{id}
                                    </Text>
                                </Column>
                            </Row>
                        </Column>
                    </Section>
                    <Section style={{ marginTop: '50px' }}>
                        <Column
                            style={{
                                width: '100%',
                                padding: '0px 30px',
                            }}
                        >
                            <Row
                                style={{
                                    padding: '20px 0px',
                                    borderTop: '1px solid #DCDFE0',
                                    borderBottom: '1px solid #DCDFE0',
                                }}
                            >
                                <Column style={{ width: '50%' }}>
                                    <Text style={textInGrid2}>
                                        <ItemTitles text="Regular price" />
                                    </Text>
                                </Column>
                                <Column style={{ width: '50%' }}>
                                    <Text style={textInGrid}>{price} USD</Text>
                                </Column>
                            </Row>

                            <Row
                                style={{
                                    padding: '20px 0px',
                                    borderBottom: '1px solid #DCDFE0',
                                }}
                            >
                                <Column style={{ width: '50%' }}>
                                    <Text style={textInGrid2}>
                                        <ItemTitles text="Distance" />
                                    </Text>
                                </Column>
                                <Column style={{ width: '50%' }}>
                                    <Text style={textInGrid}>
                                        {distance} MI
                                    </Text>
                                </Column>
                            </Row>

                            <Row
                                style={{
                                    padding: '20px 0px',
                                    borderBottom: '1px solid #DCDFE0',
                                }}
                            >
                                <Column style={{ width: '50%' }}>
                                    <Text style={textInGrid2}>
                                        <ItemTitles text="Transit time" />
                                    </Text>
                                </Column>
                                <Column style={{ width: '50%' }}>
                                    <Text style={textInGrid}>3-5 days</Text>
                                </Column>
                            </Row>

                            <Row
                                style={{
                                    padding: '20px 0px',
                                    borderBottom: '1px solid #DCDFE0',
                                }}
                            >
                                <Column style={{ width: '50%' }}>
                                    <Text style={textInGrid2}>
                                        <ItemTitles text="First avail. date" />
                                    </Text>
                                </Column>
                                <Column style={{ width: '50%' }}>
                                    <Text style={textInGrid}>
                                        {firstAvailDate}
                                    </Text>
                                </Column>
                            </Row>

                            <Row
                                style={{
                                    padding: '20px 0px',
                                    borderBottom: '1px solid #DCDFE0',
                                }}
                            >
                                <Column style={{ width: '50%' }}>
                                    <Text style={textInGrid2}>
                                        <ItemTitles text="Vehicle" />
                                    </Text>
                                </Column>
                                <Column style={{ width: '50%' }}>
                                    <Text style={textInGrid}>{vechicle}</Text>
                                </Column>
                            </Row>

                            <Row
                                style={{
                                    padding: '20px 0px',
                                    borderBottom: '1px solid #DCDFE0',
                                }}
                            >
                                <Column style={{ width: '50%' }}>
                                    <Text style={textInGrid2}>
                                        <ItemTitles text="Ship from" />
                                    </Text>
                                </Column>
                                <Column style={{ width: '50%' }}>
                                    <Text style={textInGrid}>{from}</Text>
                                </Column>
                            </Row>

                            <Row
                                style={{
                                    padding: '20px 0px',
                                    borderBottom: '1px solid #DCDFE0',
                                }}
                            >
                                <Column style={{ width: '50%' }}>
                                    <Text style={textInGrid2}>
                                        <ItemTitles text="Ship to" />
                                    </Text>
                                </Column>
                                <Column style={{ width: '50%' }}>
                                    <Text style={textInGrid}>{to}</Text>
                                </Column>
                            </Row>

                            <Row
                                style={{
                                    padding: '20px 0px',
                                    borderBottom: '1px solid #DCDFE0',
                                }}
                            >
                                <Column style={{ width: '50%' }}>
                                    <Text style={textInGrid2}>
                                        <ItemTitles text="Vehicle condition" />
                                    </Text>
                                </Column>
                                <Column style={{ width: '50%' }}>
                                    <Text style={textInGrid}>{conditions}</Text>
                                </Column>
                            </Row>

                            <Row
                                style={{
                                    padding: '20px 0px',
                                    borderBottom: '1px solid #DCDFE0',
                                }}
                            >
                                <Column style={{ width: '50%' }}>
                                    <Text style={textInGrid2}>
                                        <ItemTitles text="Transport type" />
                                    </Text>
                                </Column>
                                <Column style={{ width: '50%' }}>
                                    <Text style={textInGrid}>
                                        {transportType}
                                    </Text>
                                </Column>
                            </Row>

                            <Row
                                style={{
                                    padding: '20px 0px',
                                    borderBottom: '1px solid #DCDFE0',
                                }}
                            >
                                <Column style={{ width: '50%' }}>
                                    <Text style={textInGrid2}>
                                        <ItemTitles text="Service type" />
                                    </Text>
                                </Column>
                                <Column style={{ width: '50%' }}>
                                    <Text style={textInGrid}>Door to door</Text>
                                </Column>
                            </Row>

                            <Row
                                style={{
                                    padding: '20px 0px',
                                    borderBottom: '1px solid #DCDFE0',
                                }}
                            >
                                <Column style={{ width: '50%' }}>
                                    <Text style={textInGrid2}>
                                        <ItemTitles text="Insurance" />
                                    </Text>
                                </Column>
                                <Column style={{ width: '50%' }}>
                                    <Text style={textInGrid}>Included</Text>
                                </Column>
                            </Row>
                        </Column>
                    </Section>
                    <Section
                        style={{
                            marginTop: '102px',
                            marginBottom: '50px',
                            padding: '0px 30px',
                        }}
                    >
                        <Column
                            style={{
                                width: '100%',
                            }}
                        >
                            <Row style={{ width: '100%' }}>
                                <Column style={{ width: '85%' }}>
                                    <Text
                                        style={{
                                            fontSize: '24px',
                                            color: '#000',
                                            textTransform: 'uppercase',
                                            fontWeight: '700',
                                            lineHeight: '28.8px',
                                            margin: '0px',
                                            letterSpacing: '-4%',
                                        }}
                                    >
                                        <span style={{ color: '#FE470D' }}>
                                            Save up to 10%
                                        </span>{' '}
                                        with our discounted cash price option
                                    </Text>
                                </Column>
                                <Column>
                                    <Img
                                        src="https://move-your-car.vercel.app/email-icon.png"
                                        alt="check-icon"
                                        width={62}
                                        height={62}
                                    />
                                </Column>
                            </Row>
                        </Column>
                    </Section>
                </Container>
            </Body>
        </Html>
    )
}

const textInGrid = {
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: '400',
    color: '#657981',
    margin: '0px',
}

const textInGrid2 = {
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: '400',
    color: '#000',
    margin: '0px',
}
