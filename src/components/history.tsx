import React, { FC } from 'react';
import { Badge, Col, Container, Figure, Row } from 'react-bootstrap';
import { Trans, useTranslation } from 'react-i18next';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdWork, MdSchool, MdStar } from 'react-icons/md';
import carsatam from '../assets/company/carsat-am.png';
import fml from '../assets/company/fml.png';
import cnam from '../assets/education/le-cnam-grand-est.png';
import orsay from '../assets/company/orsay.png';
import orsay_old from '../assets/company/orsay-old.png';
import am from '../assets/education/andre-maurois.png';
import ulp from '../assets/education/universite-louis-pasteur.png';
import uds from '../assets/education/uds.png';
import ah from '../assets/education/alphonse-heinrich.png';

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

const JOB_COLOR = 'rgb(33, 149, 243)';
const EDU_COLOR = 'rgb(233, 30, 99)';

export const History: FC = () => {
  const { t, i18n } = useTranslation();

  const pictures = new Map<number, PictureInfo>([
    [0, { icon: carsatam, url: "https://www.carsat-alsacemoselle.fr/", height: "120px", width: "120px", name: "Carsat Alsace-Moselle" }],
    [1, { icon: carsatam, url: "https://www.carsat-alsacemoselle.fr/", height: "120px", width: "120px", name: "Carsat Alsace-Moselle" }],
    [2, { icon: cnam, url: "https://www.cnam-grandest.fr/formations/cyc9105a/", height: "120px", width: "120px", name: "Conservatoire National des Arts et Métiers" }],
    [3, { icon: carsatam, url: "https://www.carsat-alsacemoselle.fr/", height: "120px", width: "120px", name: "Carsat Alsace-Moselle" }],
    [4, { icon: fml, url: "https://www.fmlogistic.com/fr/", height: "120px", width: "120px", name: "FM Logistic" }],
    [5, { icon: orsay, url: "https://www.orsay.de/", height: "120px", width: "120px", name: "Orsay" }],
    [6, { icon: uds, url: "https://mathinfo.unistra.fr/formations/licence-professionnelle/licence-professionnelle-administration-de-reseaux-et-services/", height: "120px", width: "120px", name: "Lycée Alphonse Heinrich" }],
    [7, { icon: orsay_old, url: "https://www.orsay.de/", height: "120px", width: "120px", name: "Orsay" }],
    [8, { icon: ah, url: "https://lycee-heinrich-nessel.fr/index.php/enseignement-superieur", height: "120px", width: "120px", name: "Lycée Alphonse Heinrich" }],
    [9, { icon: ulp, url: "https://ecogestion.unistra.fr/formations/licences/economie-et-gestion/", height: "120px", width: "120px", name: "Université Louis Pasteur" }],
    [10, { icon: am, url: "https://cite-maurois.monbureaunumerique.fr/", height: "120px", width: "120px", name: "Lycée André-Maurois" }],
  ]);

  const rawHistory = t("history", { returnObjects: true });
  const historyItems: HistoryItem[] = Array.isArray(rawHistory) ? (rawHistory as HistoryItem[]) : [];

  type Years = { start: string | null; end: string | null };

  const currentLang = (i18n.language ?? 'fr').split('-')[0]; // "fr", "en", "de" (le split gère les cas "fr-FR", "en-US", etc.)

  const monthNames: { [lang: string]: { [key: string]: string } } = {
    fr: {
      '01': 'Janvier', '02': 'Février', '03': 'Mars', '04': 'Avril',
      '05': 'Mai', '06': 'Juin', '07': 'Juillet', '08': 'Août',
      '09': 'Septembre', '10': 'Octobre', '11': 'Novembre', '12': 'Décembre'
    },
    en: {
      '01': 'January', '02': 'February', '03': 'March', '04': 'April',
      '05': 'May', '06': 'June', '07': 'July', '08': 'August',
      '09': 'September', '10': 'October', '11': 'November', '12': 'December'
    },
    de: {
      '01': 'Januar', '02': 'Februar', '03': 'März', '04': 'April',
      '05': 'Mai', '06': 'Juni', '07': 'Juli', '08': 'August',
      '09': 'September', '10': 'Oktober', '11': 'November', '12': 'Dezember'
    }
  };

  const extractYears = (dateStr: string): Years => {
    const years = dateStr.match(/\d{4}/g);
    if (!years) return { start: null, end: null };

    const endWord = dateStr.match(/[-–]\s*([^\d\s][^\d]*)\s*$/);
    const monthYearPattern = /(\d{2})\/(\d{4})/g;
    const matches = [...dateStr.matchAll(monthYearPattern)];

    // Récupérer les mois dans la bonne langue, fallback sur 'en' si langue inconnue
    const months = monthNames[currentLang] ?? monthNames['en'];

    let start: string | null = null;
    let end: string | null = null;

    if (matches.length >= 1) {
      const monthStart = months[matches[0][1]] ?? null;
      start = monthStart ? `${monthStart} ${matches[0][2]}` : matches[0][2];
    } else {
      start = years[0];
    }

    if (endWord) {
      end = endWord[1].trim();
    } else if (matches.length >= 2) {
      const monthEnd = months[matches[1][1]] ?? null;
      end = monthEnd ? `${monthEnd} ${matches[1][2]}` : matches[1][2];
    } else if (years.length > 1) {
      end = years[1];
    }

    return { start, end };
  };

  return (
    <Container id="History" className="pt-5">
      <Row className="mb-4 justify-content-center">
        <Col xs={true} md={8} className="pt-2 pb-2">
          <Badge>
            <h2 className="titles rounded">{t("navbar.history")}</h2>
          </Badge>
        </Col>
      </Row>

      <VerticalTimeline lineColor={"#ddd"} layout="2-columns">
        {historyItems.map((historyItem, idx) => {
          const picture = pictures.get(idx);
          const { start, end } = extractYears(historyItem.date);
          const color = historyItem.job ? JOB_COLOR : EDU_COLOR;
          const lightColor = historyItem.job ? 'rgba(33, 149, 243, 0.15)' : 'rgba(233, 30, 99, 0.15)';
          const dateLabel = start
            ? end && start !== end
              ? `${start} → ${end}`
              : start
            : historyItem.date;

          return (
            <VerticalTimelineElement
              key={idx}
              className={historyItem.job ? 'vertical-timeline-element--work' : 'vertical-timeline-element--education'}
              contentStyle={{
                background: lightColor,
                color: '#333',
                border: `2px solid ${color}`
              }}
              contentArrowStyle={{ borderRight: `7px solid ${color}` }}
              date={dateLabel}
              iconStyle={{ background: color, color: '#fff' }}
              icon={historyItem.job ? <MdWork /> : <MdSchool />}
            >
              <h3 className="vertical-timeline-element-title" style={{ color: color }}>{historyItem.title}</h3>

              {picture && (
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
              )}

              <p className="text-left" style={{ color: '#333' }}>
                <Trans i18nKey={`history[${idx}].body`}>
                  <strong></strong> {historyItem.body}
                </Trans>
              </p>
            </VerticalTimelineElement>
          );
        })}

        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon={<MdStar />}
        />
      </VerticalTimeline>
    </Container>
  );
}