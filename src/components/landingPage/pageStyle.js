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

.centerOfExcellence {
    text-align: center;
    text-align: center;
    border-bottom: 1px solid;
    margin: 0px -15px;
}

.centerOfExcellence b{
    padding: 10px;
    margin: 5px;
    display: inline-block;
    border: none;
}

.centerAlign {
    vertical-align: top;
    line-height: 22;
}

.withBorder{
    border: 1px dashed black;
    border-left: none;
    border-right: none;
    margin: 0 0 15px 0;
}

.withBorder p{
    color: darkblue;
}
@media (min-width:1025px) { 
    .instituteCopy {
        width: 62%;
        margin: 90px 25px;
        display: inline-block;
    } 
}

.blueCopy p {
    color: darkblue;
}
.instituteCopy p {
    font-weight: 400;
    font-family: sans-serif;
}

.landingRoundImage {
    width: 150px;
    height: 150px;
    position: relative;
    display: inline-block;
    overflow: hidden;
    border-radius: 50%;
}

`;

export default PageStyle;