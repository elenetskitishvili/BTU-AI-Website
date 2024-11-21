import styled from "styled-components";

export const ArticleContent = styled.article`
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-size: 16px;
  line-height: 25px;
  letter-spacing: -0.5%;
`;

export const ArticleText = styled.p`
  margin: 0;
`;

export const ArticleLink = styled.a`
  text-decoration: underline;
  color: inherit;
  padding: 0 4px;
  font-weight: 400;

  &:hover {
    text-decoration: underline;
  }
`;

export const ArticleList = styled.ul`
  margin-left: 25px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ArticleListItem = styled.li`
  list-style: disc;
`;
