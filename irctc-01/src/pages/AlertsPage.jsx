import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const alertsData = {
  alerts: [
    { color: '#1a1a2e', text: 'Booking and Cancellation for Kolkata site will not be available from 00:20 hrs to 04:30 hrs of 29/03/2026 due to maintenance activity. Inconvenience caused is deeply regretted.' },
    { color: '#0044cc', text: 'Please visit Ticket Cancellation and Refund Rules under Refund Rules section for newly started Vande Bharat Sleeper Express and Amrit Bharat II Express trains.' },
    { color: '#1a1a2e', text: 'With effect from 12 January 2026, only Aadhaar-authenticated users shall be allowed to book general reserved tickets on the opening day of Advance Reservation Period (ARP).' },
    { color: '#0044cc', text: 'User registration, Updating of profile and ERS in pdf format will not be available from 07:30hrs to 12:00hrs.' },
    { color: '#1a1a2e', text: 'Customer Care Numbers: 📞 Dial 14646 (Within India) (Language: Hindi, English, Punjabi, Bengali, Assamese, Odia, Marathi, Gujarati, Tamil, Telugu, Kannada and Malayalam); Customer Support (Outside India): 📞 Call: +91-8044647999 / +91-8035734999' },
    { color: '#1a1a2e', text: 'Money debited but ticket not booked. Click here to know more.', link: true },
    { color: '#0044cc', text: 'Claim Process for trip delay on IRCTC Tejas Express (Train No: 82501/82502/82901/82902)' },
    { color: '#cc0000', bold: true, text: 'PASSENGERS ARE REQUESTED TO CHECK THE DEPARTURE TIME OF THEIR TRAINS FROM INDIAN RAILWAY WEBSITE www.indianrail.gov.in , NTES OR 139 BEFORE BOARDING.' },
    { color: '#0044cc', text: 'Railway Board Circular dated 16.11.2021 on Carrying valid proof of Identity by passengers during journey. Click here.' },
    { color: '#0044cc', text: 'Users can book cooked food in Rajdhani, Shatabdi, Duronto, Vande Bharat & Gatiman trains by visiting & making payment on IRCTC tourism URL https://www.irctctourism.com/BookFood' },
    { color: '#0044cc', text: 'Please input correct mobile number of passenger for getting timely alerts on booked journey.' },
    { color: '#cc0000', text: 'Tickets booked through unauthorized agents or scripting can be released without refund.' },
    { color: '#1a1a2e', text: 'Dear Customer, www.irctc.co.in and IRCTC Rail Connect App are the only website/app to query/complaint/suggestions regarding your train tickets. If you find any websites/person which are claiming to refund/resolution of your ticket, Please ignore and complain at https://equery.irctc.co.in/' },
    { color: '#0044cc', text: 'In view of COVID-19 situation, and as per instructions from Railway Board, no concessional tickets for all categories of passengers except 4 categories of Divyangjan passengers shall be issued for tickets booked on or after date 20 March 2020 till further advice. Inconvenience caused is deeply regretted.' },
    { color: '#1a1a2e', text: 'Debit/Credit cards of all banks are accepted on any payment gateway. No truth in news of having blocked any card of any bank. To use any Debit/Credit Card on Payment page, select "Payment Gateway/Credit/Debit Cards" and use any Payment Gateway.' },
  ],
  updates: [
    { color: '#0044cc', text: 'New feature: Book Sleeper class tickets for Vande Bharat Sleeper Express from 01-Apr-2026.' },
    { color: '#1a1a2e', text: 'IRCTC website will undergo scheduled maintenance every Tuesday between 11:30 PM to 12:30 AM.' },
    { color: '#cc0000', text: 'Important: OTP-based ticket booking is now mandatory for all Tatkal bookings.' },
    { color: '#1a1a2e', text: 'E-ticket cancellation refund process is fully automatic. There is no human intervention required in the refund process.' },
    { color: '#0044cc', text: 'Atom PG (International card) payment option is available for ticket booking only when Journey Date is at least 02 days in advance of booking date.' },
  ],
  generalInfo: [
    { color: '#1a1a2e', text: 'Refund in case of train late more than 3 hours: In case train is late more than 3 hours, refund is admissible as per railway refund rules only when TDR is filed by the user before the actual departure of the train at boarding station and passenger has not travelled.' },
    { color: '#0044cc', text: 'E-ticket confirmed through charting at originating station or at the previous remote location cannot be cancelled. The refund of such ticket will be processed through TDR.' },
    { color: '#1a1a2e', text: 'You are allowed to do only one (1) booking in one user login session except for return/onward journey between 0800 and 1200 hours. To do another booking please logout and login again.' },
    { color: '#1a1a2e', text: 'In case you are not able to find your payment bank under Net banking or Debit Card category, Please visit "Multiple Payment Service" tab to get payment bank or getting more payment options.' },
    { color: '#0044cc', text: 'SMS delivery is subject to effective transmission from your mobile service operator and mobile carrier network availability. In case, you have not received Booking SMS, Please check "Booked Ticket History" before proceeding for new ticket booking.' },
  ],
  quickLinks: [
    { color: '#0044cc', text: 'Check PNR Status → /pnr-enquiry', link: true },
    { color: '#0044cc', text: 'Train Schedule → /train-schedule', link: true },
    { color: '#0044cc', text: 'Refund Rules - Click to view Cancellation & Refund Policy', link: true },
    { color: '#0044cc', text: 'IRCTC Official App - Download from Play Store / App Store', link: true },
    { color: '#0044cc', text: 'Book Food on Train - https://www.irctctourism.com/BookFood', link: true },
    { color: '#0044cc', text: 'File TDR Online - Click here for TDR filing guidelines', link: true },
    { color: '#0044cc', text: 'Track your Train - National Train Enquiry System (NTES)', link: true },
  ],
  railwayUpdates: [
    { color: '#cc0000', bold: true, text: 'Special trains announced for Summer Season 2026 - Check indianrail.gov.in for complete list.' },
    { color: '#1a1a2e', text: 'New Premium Rajdhani services to be introduced on Bangalore-New Delhi route from May 2026.' },
    { color: '#0044cc', text: 'Vande Bharat Sleeper Express Phase-2 launch: 50 new rakes being manufactured at ICF Chennai.' },
    { color: '#1a1a2e', text: 'Kavach Anti-Collision System now operational on 3000+ km of track across Central Railway Zone.' },
    { color: '#0044cc', text: 'Amrit Bharat Express new routes announced connecting Tier-2 and Tier-3 cities.' },
    { color: '#cc0000', text: 'Platform ticket price revision: Now ₹50 at A1 and A category stations effective from 01-Feb-2026.' },
  ],
};

const tabs = [
  { key: 'alerts', label: 'ALERTS' },
  { key: 'updates', label: 'UPDATES' },
  { key: 'generalInfo', label: 'GENERAL INFO' },
  { key: 'quickLinks', label: 'QUICK LINKS' },
  { key: 'railwayUpdates', label: 'RAILWAY UPDATES' },
];

const AlertsPage = () => {
  const [activeTab, setActiveTab] = useState('alerts');

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--blue-navy)' }}>
      <Navbar />

      <main style={{ flex: 1, padding: '40px 20px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

          {/* Page Title */}
          <h1 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '24px', textAlign: 'center' }}>
            IRCTC Alerts & <span style={{ color: 'var(--orange-primary)' }}>Notifications</span>
          </h1>

          {/* Tab Bar */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginBottom: '0', background: 'rgba(255,255,255,0.05)', borderRadius: '12px 12px 0 0', padding: '8px 8px 0', border: '1px solid var(--border-glass)', borderBottom: 'none' }}>
            {tabs.map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                style={{
                  padding: '10px 22px',
                  border: 'none',
                  borderRadius: '8px 8px 0 0',
                  cursor: 'pointer',
                  fontWeight: 700,
                  fontSize: '0.82rem',
                  letterSpacing: '0.5px',
                  transition: 'all 0.2s',
                  backgroundColor: activeTab === tab.key ? 'var(--orange-primary)' : 'transparent',
                  color: activeTab === tab.key ? '#fff' : 'var(--text-muted)',
                  whiteSpace: 'nowrap',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Alerts List */}
          <div style={{
            background: 'rgba(255,255,255,0.97)',
            borderRadius: '0 0 12px 12px',
            padding: '28px 32px',
            border: '1px solid var(--border-glass)',
            borderTop: '3px solid var(--orange-primary)',
            minHeight: '400px',
          }}>
            <ul style={{ listStyle: 'disc', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '0' }}>
              {alertsData[activeTab].map((alert, i) => (
                <li
                  key={i}
                  style={{
                    color: alert.color,
                    fontSize: '0.9rem',
                    lineHeight: 1.7,
                    fontWeight: alert.bold ? 700 : 400,
                    padding: '10px 8px',
                    borderBottom: i < alertsData[activeTab].length - 1 ? '1px solid #e8e8e8' : 'none',
                    cursor: alert.link ? 'pointer' : 'default',
                    textDecoration: alert.link ? 'underline' : 'none',
                  }}
                >
                  {alert.text}
                </li>
              ))}
            </ul>
          </div>

          {/* Bottom notice */}
          <div style={{ marginTop: '20px', padding: '14px 20px', background: 'rgba(255,109,0,0.08)', borderRadius: '10px', border: '1px solid rgba(255,109,0,0.2)', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '1.4rem' }}>📢</span>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', margin: 0 }}>
              For any grievances, please contact IRCTC Customer Care: <strong style={{ color: 'var(--text-main)' }}>14646</strong> (within India) or email at <strong style={{ color: 'var(--orange-primary)' }}>care@irctc.co.in</strong>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AlertsPage;
