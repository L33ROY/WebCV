import React, { FC } from 'react';
import { Badge, Col, Container, Figure, Row } from 'react-bootstrap';
import { Trans, useTranslation } from 'react-i18next';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import deliveroo from '../assets/deliveroo.png';
import mcdonalds from '../assets/mcdonalds.png';
import peip from '../assets/peip.png';
import sebben from '../assets/sebben.png';

import carsatam from '../assets/company/logo_carsat-am.png';
import cnam from '../assets/education/logo_cnam.jpg';

type HistoryItem = {
    date: string,
    title: string,
    body: string,
    job: boolean
}

type PictureInfo = {
    icon: string,
    url?: string,
    width: string,
    height: string,
    name: string
}

/**
* Contains Education and professionnal experience
*/
export const History: FC = () => {
    const { t } = useTranslation()

    const pictures = new Map<number, PictureInfo>(
        [
            [0, {
                icon: carsatam,
                url: "https://www.carsat-alsacemoselle.fr/",
                height: "120px",
                width: "120px",
                name: "Carsat Alsace-Moselle"
            }],
            [1, {
                icon: cnam,
                url: "http://formation.cnam.fr/rechercher-par-metier/diplome-d-ingenieur-specialite-informatique-systemes-d-information-isi--200645.kjsp?RF=newcat_metiers",
                height: "120px",
                width: "120px",
                name: "Conservatoire National des Arts et Métiers"
            }],
            [2, {
                icon: carsatam,
                url: "https://www.carsat-alsacemoselle.fr/",
                height: "120px",
                width: "120px",
                name: "Carsat Alsace-Moselle"
            }],
            [3, {
                icon: carsatam,
                url: "https://www.carsat-alsacemoselle.fr/",
                height: "120px",
                width: "120px",
                name: "Carsat Alsace-Moselle"
            }],
            [4, {
                icon: mcdonalds,
                url: "https://www.mcdonalds.fr/",
                height: "80px",
                width: "80px",
                name: "McDonald's"
            }],
            [5, {
                icon: deliveroo,
                url: "https://deliveroo.fr",
                height: "80px",
                width: "80px",
                name: "Deliveroo"
            }],
            [6, {
                icon: peip,
                url: "https://polytech.univ-amu.fr/formations/cycle-preparatoire",
                height: "80px",
                width: "80px",
                name: "PEIP"
            }],
            [7, {
                icon: sebben,
                height: "80px",
                width: "80px",
                name: "Sebben"
            }],
        ]
    )
    const historyItems: HistoryItem[] = t("history", { returnObjects: true })
    return (
        <Container id="History" className="pt-5">
            <Row className="mb-4 justify-content-center">
                <Col xs={true} md={8} className="pt-2 pb-2">
                    <Badge><h2 className="mytitle titles rounded ">{t('navbar.history')}</h2></Badge>
                </Col>
            </Row>
            <Timeline lineColor={'#ddd'}>
                {historyItems.map((historyItem, idx) => {
                    const picture = pictures.get(idx)
                    return (
                        <TimelineItem
                            key={idx}
                            dateText={historyItem.date}
                            style={historyItem.job ? { color: '#e86971' } : { color: '#61b8ff' }}
                            dateInnerStyle={historyItem.job ? {} : { background: '#61b8ff', color: '#000' }}
                            bodyContainerStyle={historyItem.job ? {
                                background: '#ddd',
                                padding: '20px',
                                borderRadius: '8px',
                                boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                            } : {}}
                            className="longDate"
                        >
                            <h4>{historyItem.title}</h4>
                            {picture &&
                                <a href={picture.url} target="_blank" rel="noopener noreferrer">
                                    <Figure className="mt-4">
                                        <Figure.Image
                                            height={picture.height}
                                            width={picture.width}
                                            alt={picture.name}
                                            src={picture.icon}
                                        />
                                    </Figure>
                                </a>
                            }
                            <p className="text-left">
                                <Trans i18nKey={`history[${idx}].body`}>
                                    <strong></strong> {historyItem.body}
                                </Trans>
                            </p>
                        </TimelineItem>
                    )
                })}
            </Timeline>
        </Container>
    )
}