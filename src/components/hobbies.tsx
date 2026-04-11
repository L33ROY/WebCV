import React, { FC } from 'react';
import { Badge, Col, Container, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import * as FaIcons from 'react-icons/fa';
import * as GiIcons from 'react-icons/gi';

type HobbyItem = {
    label: string;
    icon: string;
}

type HobbyCategory = {
    category: string;
    icon: string;
    items: HobbyItem[];
}

// Résout dynamiquement une icône depuis son nom string
const DynamicIcon: FC<{ name: string; size?: number }> = ({ name, size = 20 }) => {
    const FaIcon = (FaIcons as any)[name];
    const GiIcon = (GiIcons as any)[name];
    const Icon = FaIcon ?? GiIcon;
    if (!Icon) return null;
    return <Icon size={size} />;
};

export const Hobbies: FC = () => {
    const { t } = useTranslation();

    const rawHobbies = t('hobbies', { returnObjects: true });
    const hobbies: HobbyCategory[] = Array.isArray(rawHobbies) ? rawHobbies as HobbyCategory[] : [];

    return (
        <Container>
            <Row className="pt-5 mb-4 justify-content-center">
                <Col xs={true} className="pt-2 pb-2">
                    <Badge>
                        <h2 id="longTitle" className="rounded">{t('navbar.hobbies')}</h2>
                    </Badge>
                </Col>
            </Row>
            <Row className="pb-5 justify-content-center">
                <Col md={10}>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <ul style={{ textAlign: 'left', display: 'inline-block' }}>
                            {hobbies.map((category, idx) => (
                                <li key={idx} style={{ marginBottom: '12px' }}>
                                    <h5 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <DynamicIcon name={category.icon} />
                                        {category.category}
                                    </h5>
                                    <ul>
                                        {category.items.map((item, itemIdx) => (
                                            <li key={itemIdx} style={{ listStyleType: 'none', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                                                <DynamicIcon name={item.icon} size={16} />
                                                <span>{item.label}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}