import styled from "styled-components";

// Outer Section Wrapper
export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 1245px;
  margin: 0 auto;
  padding: 20px;
  background-color: #ffffff;
`;

// Two-Column Content Wrapper
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
`;

// Left Column: Text Content
export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;
`;

// Heading
export const Heading = styled.h2`
  font-family: "Noto Sans Georgian", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  text-transform: uppercase;
  color: #fd007d;
`;

// Divider
export const Divider = styled.div`
  width: 100%;
  max-width: 388px;
  height: 4px;
  background-color: #fd007d;
`;

// Subheading
export const SubHeading = styled.div`
  font-family: "Bebas Neue", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 30px;
  color: #474747;
  text-align: left;

  ul {
    margin: 0;
    padding-left: 20px;
    list-style-type: disc;

    li {
      margin-bottom: 10px;
    }
  }
`;

// Description with Links
export const Description = styled.div`
  font-family: "Bebas Neue", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 30px;
  color: #fd007d;

  ul {
    margin: 0;
    padding-left: 20px;
    list-style-type: disc;
  }

  li {
    margin-bottom: 8px;
    color: #474747;
    text-decoration: underline;

    a {
      text-decoration: underline;
      color: inherit;
      &:hover {
        text-decoration: none;
      }
    }
  }
`;

// Right Column: Video Wrapper
export const VideoWrapper = styled.div`
  flex: 1;
  max-width: 560px;
  aspect-ratio: 16 / 9;

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;
