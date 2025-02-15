import * as React from 'react';
import styled from 'styled-components';
import { FaSearch, FaCheckCircle } from 'react-icons/fa';
import { IoHomeOutline, IoLocationOutline } from "react-icons/io5";
import { MdLocationOn, MdCall, MdCalendarViewDay } from 'react-icons/md';
import { FaUserGraduate, FaGraduationCap } from 'react-icons/fa';
import { MdSchool } from 'react-icons/md';
import { IoSchoolOutline } from 'react-icons/io5';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';

const UberLogo = 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png';
const GoogleLogo = 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg';
const MicrosoftLogo = 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg';
const AppleLogo = 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg';
const SamsungLogo = 'https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg';

const HeroContainer = styled.div`
  text-align: center;
`;

const HeroSection = styled.div`
  background-color: #e6f2ff;
  padding: 50px;

  @media (max-width: 768px) {
    padding: 25px;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #1e3a8a;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #64748b;
  text-align: center;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SearchForm = styled.form`
  display: grid;
  grid-template-columns: repeat(4, 1fr) auto;
  gap: 1rem;
  background: white;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 1000px;
  margin: 0 auto 3rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0 1rem;
  border-right: 1px solid #e2e8f0;

  &:last-child {
    border-right: none;
  }

  @media (max-width: 1024px) {
    border-right: none;
    padding: 0;
  }
`;

const FormInput = styled.input`
  border: none;
  padding: 0.5rem;
  width: 100%;
  font-size: 1rem;
  outline: none;

  &::placeholder {
    color: #94a3b8;
  }
`;

const SearchButton = styled.button`
  background: #3b82f6;
  color: white;
  border: none;
  padding: 0.75rem 2rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.3s ease;

  &:hover {
    background: #2563eb;
  }

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const CategoriesContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

const CategoryButton = styled.button`
  background-color: #fff;
  color: #555;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.1em;
  display: flex;
  align-items: center;
  gap: 5px;

  &:hover {
    background-color: #f0f0f0;
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 1em;
  }
`;

const OuterInfoSection = styled.div`
  background-color: #fff;
  padding: 40px;
  margin-top: 30px; /* Adjusted margin-top */

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const InfoSection = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 40px;
  border-radius: 10px;
  background-color: #e6f2ff;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    padding: 20px;
  }
`;

const TrustCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const TrustText = styled.p`
  font-size: 1.3em;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1.1em;
  }
`;

const RegisterButton = styled.button`
  background-color: #3b82f6;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.1em;

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 1em;
  }
`;

const FeatureItem = styled.div`
  text-align: center;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const FeatureIcon = styled.div`
  font-size: 2em;
  color: #333;
  margin-bottom: 10px;
`;

const TopCompaniesSection = styled.div`
  background-color: #e6f2ff;
  padding: 20px;
  text-align: center;
  border-radius: 10px;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const CompanyList = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

const CompanyCard = styled.div`
  background-color: #fff;
  border-radius: 5px;
  padding: 10px;
  width: 120px;
  text-align: center;

  @media (max-width: 768px) {
    width: 100px;
  }
`;

const CompanyLogo = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
  margin-bottom: 5px;

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
  }
`;

const CompanyName = styled.h4`
  font-size: 1em;
  margin-bottom: 5px;
  color: #333;
`;

const ViewJobsButton = styled.button`
  background-color: #fff;
  color: #3b82f6;
  padding: 10px;
  border: none;
  cursor: pointer;
  font-size: 0.9em;

  @media (max-width: 768px) {
    font-size: 0.8em;
  }
`;

const ShowMoreButton = styled.button`
  background-color: #3b82f6;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  margin-top: 20px;

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 0.9em;
  }
`;

const QualificationSection = styled.div`
  background-color: #e6f2ff;
  padding: 20px;
  text-align: center;
  border-radius: 10px;
  margin-top: 20px;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const QualificationList = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 20px;

  @media (max-width: 768px) {
    gap: 5px;
  }
`;

const QualificationCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  width: 150px;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 120px;
    padding: 10px;
  }
`;

const QualificationIcon = styled.div`
  font-size: 2em;
  color: #3b82f6;
  margin-bottom: 10px;
`;

const QualificationTitle = styled.h3`
  font-size: 1em;
  margin-bottom: 5px;

  @media (max-width: 768px) {
    font-size: 0.9em;
  }
`;

const VacancyText = styled.p`
  font-size: 0.8em;
  color: #555;

  @media (max-width: 768px) {
    font-size: 0.7em;
  }
`;

const HRSection = styled.div`
  background-color: #e6f2ff;
  padding: 20px;
  max-width: 1000px;
  border-radius: 10px;
  margin: 20px auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const HRText = styled.div`
  text-align: left;
  width: 40%;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

const HRTitle = styled.h2`
  font-size: 1.3em;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1.1em;
  }
`;

const HRSubtitle = styled.p`
  font-size: 1em;
  color: #555;

  @media (max-width: 768px) {
    font-size: 0.9em;
  }
`;

const MobileInputContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 40%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const MobileInputLabel = styled.label`
  font-size: 1em;
  margin-bottom: 5px;

  @media (max-width: 768px) {
    font-size: 0.9em;
  }
`;

const MobileInput = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  width: 100%;
`;

const GetStartedButton = styled.button`
  background-color: #3b82f6;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 0.9em;
  }
`;

const companyNames = {
  [UberLogo]: "Uber",
  [GoogleLogo]: "Google",
  [MicrosoftLogo]: "Microsoft",
  [AppleLogo]: "Apple",
  [SamsungLogo]: "Samsung",
};

// Footer Styles
const FooterContainer = styled.footer`
  background-color: #fff;
  padding: 40px 20px;
  text-align: center;
  border-top: 1px solid #eee;
`;

const StatsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 40px 0;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const StatItem = styled.div`
  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

const StatNumber = styled.h3`
  font-size: 1.5em;
  margin-bottom: 5px;
`;

const StatLabel = styled.p`
  font-size: 1em;
  color: #555;
`;

const ConnectWithUs = styled.div`
  margin: 40px 0;
`;

const ConnectTitle = styled.h4`
  font-size: 1.2em;
  margin-bottom: 40px;
  text-decoration: underline;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  font-size: 1.5em;
  color: #333;
`;

const FooterLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Creates 3 columns */
  gap: 30px;
  max-width: 1100px; /* Adjust as needed */
  margin: 50px auto; /* Center the links */

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* Two columns on smaller screens */
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr; /* One column on even smaller screens */
  }
`;

const FooterLink = styled.a`
  color: #555;
  text-decoration: none;
  font-size: 0.9em;

  &:hover {
    text-decoration: underline;
  }
`;

const Copyright = styled.p`
  font-size: 0.8em;
  color: #888;
  margin-top: 20px;
`;

export default function ProductHero() {
  return (
    <HeroContainer>
      <HeroSection>
      <Title>Find Your Dream Job Now</Title>
        <Subtitle>1 lakh+ jobs for you to explore</Subtitle>

        <SearchForm>
          <InputGroup>
            <FaSearch color="#94a3b8" />
            <FormInput placeholder="Job title, skills, or company" />
          </InputGroup>
          
          <InputGroup>
            <IoLocationOutline color="#94a3b8" />
            <FormInput placeholder="Location" />
          </InputGroup>

          <InputGroup>
            <MdCalendarViewDay color="#94a3b8" />
            <FormInput placeholder="Experience" />
          </InputGroup>

          <SearchButton>
            Search Jobs
          </SearchButton>
        </SearchForm>

        <h2>Popular categories</h2>
        <CategoriesContainer>
          <CategoryButton><IoHomeOutline /> Remote job</CategoryButton>
          <CategoryButton><IoHomeOutline /> Internship</CategoryButton>
          <CategoryButton><IoHomeOutline /> Full time</CategoryButton>
          <CategoryButton><IoHomeOutline /> Part time job</CategoryButton>
          <CategoryButton><IoHomeOutline /> Startup</CategoryButton>
          <CategoryButton><IoHomeOutline /> Fresher</CategoryButton>
        </CategoriesContainer>
      </HeroSection>

      <OuterInfoSection>
        <InfoSection>
          <TrustCard>
            <TrustText>More than 20 lakh Indians trust Job Hai 🤝</TrustText>
            <RegisterButton>Register now</RegisterButton>
          </TrustCard>

          <FeatureItem>
            <FeatureIcon><FaCheckCircle /></FeatureIcon>
            <p>100% free & verified job</p>
          </FeatureItem>

          <FeatureItem>
            <FeatureIcon><MdLocationOn /></FeatureIcon>
            <p>Best job in your locality</p>
          </FeatureItem>
          <FeatureItem>
            <FeatureIcon><MdCall /></FeatureIcon>
            <p>Direct call with HR for interview</p>
          </FeatureItem>
        </InfoSection>
      </OuterInfoSection>

      <OuterInfoSection>
        <TopCompaniesSection>
          <h2>Top companies hiring now</h2>
          <CompanyList>
            {[UberLogo, GoogleLogo, MicrosoftLogo, AppleLogo, SamsungLogo].map((logo, index) => (
              <CompanyCard key={index}>
                <CompanyLogo src={logo} alt="Company Logo" />
                <CompanyName>{companyNames[logo]}</CompanyName>
                <ViewJobsButton>View jobs</ViewJobsButton>
              </CompanyCard>
            ))}
          </CompanyList>
          <ShowMoreButton>Show more companies</ShowMoreButton>
        </TopCompaniesSection>
      </OuterInfoSection>

      <OuterInfoSection>
        <QualificationSection>
          <h2>What is your qualifications?</h2>
          <QualificationList>
            <QualificationCard>
              <QualificationIcon>
                <MdSchool />
              </QualificationIcon>
              <QualificationTitle>10th pass</QualificationTitle>
              <VacancyText>100000+ vacancy</VacancyText>
            </QualificationCard>

            <QualificationCard>
              <QualificationIcon>
                <IoSchoolOutline />
              </QualificationIcon>
              <QualificationTitle>12th pass</QualificationTitle>
              <VacancyText>100000+ vacancy</VacancyText>
            </QualificationCard>
             <QualificationCard>
              <QualificationIcon>
                <FaGraduationCap />
              </QualificationIcon>
              <QualificationTitle>Diploma</QualificationTitle>
              <VacancyText>100000+ vacancy</VacancyText>
            </QualificationCard>

            <QualificationCard>
              <QualificationIcon>
                <FaUserGraduate />
              </QualificationIcon>
              <QualificationTitle>Graduate</QualificationTitle>
              <VacancyText>100000+ vacancy</VacancyText>
            </QualificationCard>

            <QualificationCard>
              <QualificationIcon>
                <FaUserGraduate />
              </QualificationIcon>
              <QualificationTitle>Post Graduate</QualificationTitle>
              <VacancyText>100000+ vacancy</VacancyText>
            </QualificationCard>
          </QualificationList>
        </QualificationSection>
        </OuterInfoSection>
        <OuterInfoSection>
          <HRSection>
          <HRText>
            <HRTitle>Talk to HR directly & get a job with better salary!</HRTitle>
            <HRSubtitle>Get local job in your city! 👍</HRSubtitle>
          </HRText>

          <MobileInputContainer>
            <MobileInputLabel>Enter your number to continue</MobileInputLabel>
            <MobileInput type="tel" placeholder="Enter your mobile number to get OTP" />
            <GetStartedButton>Get started</GetStartedButton>
          </MobileInputContainer>
        </HRSection>
      </OuterInfoSection>

      {/* Footer Section */}
      <FooterContainer>
        <StatsContainer>
          <StatItem>
            <StatNumber>100k+</StatNumber>
            <StatLabel>Active jobs</StatLabel>
          </StatItem>

          <StatItem>
            <StatNumber>10k+</StatNumber>
            <StatLabel>New Opening Everyday</StatLabel>
          </StatItem>

          <StatItem>
            <StatNumber>5k+</StatNumber>
            <StatLabel>Work from jobs</StatLabel>
          </StatItem>
        </StatsContainer>

        <ConnectWithUs>
          <ConnectTitle>Connect with us</ConnectTitle>
          <SocialIcons>
            <FaFacebookF />
            <FaLinkedinIn />
            <FaTwitter />
            <FaYoutube />
            <FaInstagram />
          </SocialIcons>
        </ConnectWithUs>

        <FooterLinks>
          <FooterLink href="#">About us</FooterLink>
          <FooterLink href="#">Help center</FooterLink>
          <FooterLink href="#">Privacy policy</FooterLink>
          <FooterLink href="#">Career</FooterLink>
          <FooterLink href="#">Grievance</FooterLink>
          <FooterLink href="#">Terms & conditions</FooterLink>
          <FooterLink href="#">Employee stories</FooterLink>
          <FooterLink href="#">Report issues</FooterLink>
           <FooterLink href="#">Fraud alert</FooterLink>
          <FooterLink href="#">Sitemap</FooterLink>
          <FooterLink href="#">Summary notice</FooterLink>
          <FooterLink href="#">Trust & safety</FooterLink>
        </FooterLinks>

        <Copyright>All right reserved ©2025 NovaNector Pvt. Ltd.</Copyright>
      </FooterContainer>
    </HeroContainer>
  );
}
