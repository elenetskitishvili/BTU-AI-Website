import styled from 'styled-components';

export const SectionWrapper = styled.div`
  position: absolute;
  width: 1245px;
  height: 531px;
  left: 177px;
  top: 702px;
`;

export const Heading = styled.h2`
  position: absolute;
  width: 349px;
  height: 33px;
  left: 0;
  top: 0;

  font-family: 'Noto Sans Georgian', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  text-transform: uppercase;

  color: #fd007d;
`;

export const Divider = styled.div`
  position: absolute;
  width: 388px;
  height: 0;
  left: 0;
  top: 46px;

  border: 4px solid #fd007d;
`;

export const SubHeading = styled.p`
  position: absolute;
  width: 659px;
  height: 150px;
  left: 0;
  top: 117px;

  font-family: 'Bebas Neue', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 30px;

  color: #474747;
`;

export const Description = styled.div`
  position: absolute;
  width: 696px;
  height: 150px;
  left: 0;
  top: 310px;

  font-family: 'Bebas Neue', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 30px;

  color: #fd007d;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      margin-bottom: 8px;
    }
  }
`;
