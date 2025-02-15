import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Typography } from '@mui/material';

const TermsConditions = ({ open, setOpen, setChecked }) => {
  const handleClose = (flag) => {
    setChecked(flag);
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        fullWidth={true}
        maxWidth={'md'}
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" display="flex" justifyContent="center">
          <Typography variant="subtitle1" className="text-center">
            MyJob Terms of Service
          </Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Typography variant="p">
              Welcome to MyJob, a service provided by Sellcord LLC. By using the MyJob website and its services, you agree to
              be bound by the following Terms of Service. Please read these terms carefully before using the site.
            </Typography>
            <ol>
              <li>
                <Typography variant="subtitle1" className="text-center" mt={1.2} mb={0.5}>
                  Definitions
                </Typography>
                <ul>
                  <li>
                    <Typography variant="p">MyJob refers to the website and its services provided by Sellcord LLC.</Typography>
                  </li>
                  <li>
                    <Typography variant="p">Sellcord LLC refers to the company operating MyJob.</Typography>
                  </li>
                  <li>
                    <Typography variant="p">Users refers to individuals or entities accessing and using MyJob.</Typography>
                  </li>
                  <li>
                    <Typography variant="p">
                      Sellers refers to users utilizing MyJob to track sales and performance on the Walmart Marketplace.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="p">
                      Brands refers to users leveraging MyJob for analysis and optimization of their presence on the Walmart
                      Marketplace.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="p">
                      Walmart Marketplace refers to the online marketplace operated by Walmart Inc.
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography variant="subtitle1" className="text-center" mt={1.2} mb={0.5}>
                  Service Description
                </Typography>
                <Typography variant="p">
                  MyJob is a platform that offers tools and services to sellers and brands on the Walmart Marketplace. Our
                  services include profit tracking, performance analytics, and other valuable tools designed to optimize your
                  experience on the Walmart Marketplace.
                </Typography>
              </li>
              <li>
                <Typography variant="subtitle1" className="text-center" mt={1.2} mb={0.5}>
                  User Accounts and Responsibilities
                </Typography>
                <Typography variant="p">
                  To use MyJob, users must create an account. Users are responsible for maintaining the confidentiality of their
                  account credentials and are liable for all activities conducted under their accounts. Any unauthorized use or
                  security breach must be reported to MyJob immediately.
                </Typography>
              </li>
              <li>
                <Typography variant="subtitle1" className="text-center" mt={1.2} mb={0.5}>
                  Prohibited Activities
                </Typography>
                <Typography variant="p">
                  Users must not engage in any of the following prohibited activities on MyJob:
                </Typography>
                <ul>
                  <li>
                    <Typography variant="p">Violating any applicable laws or regulations.</Typography>
                  </li>
                  <li>
                    <Typography variant="p">Committing fraud or misrepresenting information.</Typography>
                  </li>
                  <li>
                    <Typography variant="p">
                      Accessing or attempting to access unauthorized areas of the website or its systems.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="p">
                      Misusing, copying, or distributing any content or intellectual property without proper authorization.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="p">Impersonating any person or entity.</Typography>
                  </li>
                  <li>
                    <Typography variant="p">
                      Engaging in any activity that disrupts or interferes with the proper functioning of MyJob.
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography variant="subtitle1" className="text-center" mt={1.2} mb={0.5}>
                  Intellectual Property
                </Typography>
                <Typography variant="p">
                  The content and intellectual property on MyJob, including trademarks, logos, and service marks, are the
                  property of Sellcord LLC. Users are granted a non-exclusive, non-transferable license to use the services,
                  subject to compliance with these Terms of Service.
                </Typography>
              </li>
              <li>
                <Typography variant="subtitle1" className="text-center" mt={1.2} mb={0.5}>
                  Data Privacy and Security
                </Typography>
                <Typography variant="p">
                  We value your privacy. Our data practices are outlined in our Privacy Policy, which can be found on the MyJob
                  website. By using the services, you consent to the collection, processing, and storage of your data as described
                  in the Privacy Policy.
                </Typography>
              </li>
              <li>
                <Typography variant="subtitle1" className="text-center" mt={1.2} mb={0.5}>
                  Payment and Refunds
                </Typography>
                <Typography variant="p">
                  Certain services on MyJob may require payment. Payment terms will be specified during the checkout process.
                  Refunds, if applicable, will be subject to the Refund Policy posted on the website.
                </Typography>
              </li>
              <li>
                <Typography variant="subtitle1" className="text-center" mt={1.2} mb={0.5}>
                  Disclaimer of Warranty
                </Typography>
                <Typography variant="p">
                  MyJob and Sellcord LLC provide the services on an as-is basis. We do not make any warranties or guarantees
                  regarding the accuracy, reliability, or suitability of the services for any particular purpose.
                </Typography>
              </li>
              <li>
                <Typography variant="subtitle1" className="text-center" mt={1.2} mb={0.5}>
                  Limitation of Liability
                </Typography>
                <Typography variant="p">
                  In no event shall Sellcord LLC or MyJob be liable for any direct, indirect, incidental, consequential, or
                  special damages arising out of or in any way connected with the use of the services, even if advised of the
                  possibility of such damages.
                </Typography>
              </li>
              <li>
                <Typography variant="subtitle1" className="text-center" mt={1.2} mb={0.5}>
                  Indemnification
                </Typography>
                <Typography variant="p">
                  Users agree to indemnify, defend, and hold harmless Sellcord LLC and MyJob from any claims, losses,
                  liabilities, expenses, or damages arising from their use of the services or violation of these Terms of Service.
                </Typography>
              </li>
              <li>
                <Typography variant="subtitle1" className="text-center" mt={1.2} mb={0.5}>
                  Modifications to the Terms of Service
                </Typography>
                <Typography variant="p">
                  Sellcord LLC reserves the right to update or modify these Terms of Service at any time. Users will be notified
                  of such changes, and continued use of the services after changes are made constitutes acceptance of the revised
                  terms.
                </Typography>
              </li>
              <li>
                <Typography variant="subtitle1" className="text-center" mt={1.2} mb={0.5}>
                  Termination
                </Typography>
                <Typography variant="p">
                  Sellcord LLC may, at its sole discretion, terminate or suspend user accounts for any reason, including but not
                  limited to violations of these Terms of Service. Users may also request account termination by contacting
                  MyJob support.
                </Typography>
              </li>
              <li>
                <Typography variant="subtitle1" className="text-center" mt={1.2} mb={0.5}>
                  Governing Law and Jurisdiction
                </Typography>
                <Typography variant="p">
                  These Terms of Service shall be governed by and construed in accordance with the laws of [Your Jurisdiction].
                  Any dispute arising out of or relating to these terms shall be subject to the exclusive jurisdiction of the
                  courts in [Your Jurisdiction].
                </Typography>
              </li>
              <li>
                <Typography variant="subtitle1" className="text-center" mt={1.2} mb={0.5}>
                  Contact Information
                </Typography>
                <Typography variant="p">
                  If you have any questions or concerns regarding these Terms of Service or MyJob services, you can contact us
                  at info@MyJob.com.
                </Typography>
              </li>
            </ol>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose(false)}>Disagree</Button>
          <Button variant="contained" onClick={() => handleClose(true)} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default TermsConditions;
