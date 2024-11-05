import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #474747;
`;

export const Wrapper = styled.div`
  padding: 25px 177px;
  img {
    width: 6.25rem;
    @media (max-width: 67.5em) {
      order: 2;
    }
  }
`;

export const Text = styled.p`
  font-size: 1rem;
  color: #f1f1f1;
  line-height: 1.6;
  margin: 0.5rem 0;
`;
export const ListItem = styled(Text).attrs({ as: "li" })``;

export const CopyrightContainer = styled.div`
  background-color: #d9d9d9;
`;
