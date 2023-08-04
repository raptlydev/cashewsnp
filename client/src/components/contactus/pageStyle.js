import styled from 'styled-components';

const PageStyle = styled.div`
.ant-card.landingPageContainer.ant-card-bordered {
    height: 86vh;
    background-image: url("../../assets/images/humdard-background.jpg");
}

.welcomeMessage {
    width: fit-content;
    margin: 35px auto 10px;
    font-size: 25px;
    font-weight: 600;
    text-decoration: underline;
}

.welcomeDesc {
    margin: 0 auto;
    width: fit-content;
    font-size: 18px;
    font-weight: 500;
}
.withBorder {
    border-right: 1px dashed black;
}
.contactUsImgContainer {
    min-height: 300px;
}

.contactUsImgContainer .service-img {
    min-height: 150px;
}

.contactDesignation {
    margin: 0;
}
`;

export default PageStyle;