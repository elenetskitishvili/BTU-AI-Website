import {
  SectionHeadingWrapper,
  SectionHeadingTitle,
  FaqPrefix,
  SectionHeadingIcons,
} from "./SectionHeadingStyles";

function SectionHeading({ heading, faq, showIcons = true }) {
  return (
    <SectionHeadingWrapper>
      <SectionHeadingTitle>
        {faq && <FaqPrefix href="/faq">{faq} / </FaqPrefix>}
        {heading}
      </SectionHeadingTitle>

      {showIcons && (
        <SectionHeadingIcons>
          <a href="/faq/ailab">
            <img src="/icons/facebook.svg" alt="Facebook" />
          </a>
          <a href="/faq/ailab">
            <img src="/icons/linkedin.svg" alt="LinkedIn" />
          </a>
          <a href="/faq/ailab">
            <img src="/icons/instagram.svg" alt="Instagram" />
          </a>
          <a href="/faq/ailab">
            <img src="/icons/youtube.svg" alt="YouTube" />
          </a>
          <a href="/faq/ailab">
            <img src="/icons/tiktok.svg" alt="TikTok" />
          </a>
          <a href="/faq/ailab">
            <img src="/icons/google.svg" alt="Google" />
          </a>
        </SectionHeadingIcons>
      )}
    </SectionHeadingWrapper>
  );
}

export default SectionHeading;
