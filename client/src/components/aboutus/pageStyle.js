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

.ssrPrincipalImage, .ssrImage{
    margin: 0 0 50px 0;
}
`;

export default PageStyle;