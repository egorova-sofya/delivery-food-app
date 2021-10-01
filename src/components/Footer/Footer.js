import React from "react";
import {
  FooterContainer,
  FooterSubscription,
  FooterSubHeading,
  FooterSubText,
  Form,
  FormInput,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinksItem,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrapper,
  SocialLogo,
  SocialIcon,
  WebsiteRights,
  SociaIcons,
  SocialIconLink,
} from "./Footer.elements";
import { Button } from "../../globalStyles";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>Join with us!</FooterSubHeading>
        <FooterSubText>You can unsubscribe at any time.</FooterSubText>

        <Form>
          <FormInput name="email" type="email" placeholder="Your Email" />
          <Button fontBig>Subscribe</Button>
        </Form>
      </FooterSubscription>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinksItem>
            <FooterLinkTitle>Meal Kit Delivery</FooterLinkTitle>
            <FooterLink to="/sign-up">How it works</FooterLink>
            <FooterLink to="/">On the Menu</FooterLink>
            <FooterLink to="/">Recycle</FooterLink>
            <FooterLink to="/">Claim Gift</FooterLink>
          </FooterLinksItem>

          <FooterLinksItem>
            <FooterLinkTitle>Learn More</FooterLinkTitle>
            <FooterLink to="/">Plans</FooterLink>
            <FooterLink to="/">Gifts</FooterLink>
            <FooterLink to="/">Blog</FooterLink>
            <FooterLink to="/">Students</FooterLink>
          </FooterLinksItem>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinksItem>
            <FooterLinkTitle>About us</FooterLinkTitle>
            <FooterLink to="/">Chef Dahiana</FooterLink>
            <FooterLink to="/">Organic Food</FooterLink>
            <FooterLink to="/">Accessibility Statement</FooterLink>
            <FooterLink to="/">Farms and Sourcing</FooterLink>
          </FooterLinksItem>
          <FooterLinksItem>
            <FooterLinkTitle> Contact Us</FooterLinkTitle>
            <FooterLink to="/">Help </FooterLink>
            <FooterLink to="/">Contact</FooterLink>
            <FooterLink to="/">FAQs</FooterLink>
            <FooterLink to="/">Careers</FooterLink>
          </FooterLinksItem>
        </FooterLinksWrapper>
      </FooterLinksContainer>

      <SocialMedia>
        <SocialMediaWrapper>
          <SocialLogo to="/">
            <SocialIcon />
            Super Food
          </SocialLogo>
          <WebsiteRights>Super Food © 2021</WebsiteRights>
          <SociaIcons>
            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
              <FaFacebook />
            </SocialIconLink>

            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
              <FaInstagram />
            </SocialIconLink>

            <SocialIconLink href="/" target="_blank" aria-label="YouTube">
              <FaYoutube />
            </SocialIconLink>
          </SociaIcons>
        </SocialMediaWrapper>
      </SocialMedia>
    </FooterContainer>
  );
}

export default Footer;
