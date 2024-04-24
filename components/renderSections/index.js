import React from 'react';
import Layout from "../../hoc/Layout";
import Hero from "../../components/sections/HeroSection"
import FeaturesSection from '../../components/sections/FeaturesSection'
import TalkUs from '../../components/sections/ContactFormSection';
import Faq from "../../components/sections/Faq/Faq";
import HappyUsers from "../../components/Home/HappyUsers";
import Platfom from "../../components/Home/Platfom";
import RightImgLefttext from '../sections/RightImgLefttext';
import LeftImgRighttext from '../sections/LeftImgRighttext';
import FeaturesSectionRightText from '../sections/FeatureSectionRightText';

const RenderSections = ({ data }) => {


    const renderSectionComponent = (section) => {
        switch (section.sectionType) {
            case 'HeroSection':
                return <Hero data={section} />;
            case 'FeaturesSection':
                return <FeaturesSection data={section} />;
            case 'RightImgLeftText':
                return <RightImgLefttext data={section} />;
            case 'LeftImageRightText':
                return <LeftImgRighttext data={section} />;
            case 'FeatureSectionRightText':
                return <FeaturesSectionRightText data={section} />;

            case 'ContactFormSection':
                return <TalkUs data={section} />;
            case 'FaqSection':
                return <Faq data={section} />;
            case 'HappyUsersSection':
                return <HappyUsers data={section} />;
            case 'PlatfomSection':
                return <Platfom data={section} />;
            default:
                return null;
        }
    };

    return (
        <Layout>
            {data?.sections?.map((section, index) => (
                <React.Fragment key={index}>
                    {renderSectionComponent(section)}
                </React.Fragment>
            ))}

        </Layout>
    );
}

export default RenderSections;