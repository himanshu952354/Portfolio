import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Resume = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const primaryColor = '#283593';

  return (
    <div className="resume-page" style={{ 
      padding: '120px 20px 60px', 
      minHeight: '100vh', 
      backgroundColor: 'var(--bg-color)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <style>{`
        @media print {
          .resume-page { padding: 0 !important; background: white !important; }
          .print-button, .resume-page > h2 { display: none !important; }
          .resume-paper { 
            box-shadow: none !important; 
            margin: 0 !important; 
            width: 100% !important; 
            max-width: none !important;
            border: none !important;
            padding: 20px 40px !important;
          }
        }
        .resume-paper {
          background: white;
          width: 100%;
          max-width: 900px;
          padding: 40px 60px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          border: 1px solid #ddd;
          color: #333;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          line-height: 1.35;
        }
        .resume-paper section {
          padding: 0 !important;
          display: block !important;
        }
        .resume-paper ul {
          list-style-type: disc !important;
          padding-left: 1.5rem !important;
        }
        .resume-paper li {
          display: list-item !important;
        }
        .section-title {
          font-size: 0.95rem;
          font-weight: bold;
          color: ${primaryColor};
          margin-top: 0.4rem;
          margin-bottom: 0.05rem !important;
          text-align: left !important;
          text-transform: uppercase;
        }
        .section-divider {
          border-bottom: 1.3px solid ${primaryColor};
          margin-bottom: 0.1rem;
        }
        .blue-link {
          color: ${primaryColor};
          text-decoration: underline;
        }
        .bold-blue {
          color: ${primaryColor};
          font-weight: bold;
        }
        .flex-between {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
        }
        .skill-item {
          margin-bottom: 0.05rem;
          font-size: 0.92rem;
        }
        .skill-label {
          display: inline-block;
          min-width: 130px;
          color: ${primaryColor};
          font-weight: bold;
          vertical-align: top;
        }
        .skill-item > span:nth-child(2) {
          display: inline-block;
          width: calc(100% - 135px);
          vertical-align: top;
        }
        ul {
          padding-left: 1.2rem;
          margin: 0.1rem 0;
        }
        li {
          margin-bottom: 0.05rem;
        }
        p {
          margin: 0.05rem 0;
        }

        /* Responsive Mobile Layout */
        @media (max-width: 768px) {
          .resume-page {
            padding: 100px 15px 40px !important;
          }
          .resume-paper {
            padding: 25px 20px !important;
          }
          header h1 {
            font-size: 1.8rem !important;
          }
          .flex-between {
            flex-direction: column;
            align-items: flex-start !important;
            gap: 0.2rem;
            margin-bottom: 0.5rem;
          }
          .flex-between > div {
            text-align: left !important;
            width: 100%;
          }
          .skill-label {
            display: block !important;
            min-width: 100% !important;
          }
          .skill-item > span:nth-child(2) {
            display: block !important;
            width: 100% !important;
          }
        }
      `}</style>

      {/* Page Header (Heading & Button) */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'flex-end', 
        width: '100%',
        maxWidth: '900px',
        marginBottom: '1.5rem',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <h2
          data-aos="fade-up"
          data-aos-duration="800"
          style={{
            fontSize: 'clamp(3rem, 7vw, 10rem)',
            lineHeight: 1,
            margin: 0,
            fontWeight: 400,
            letterSpacing: '-2px',
            color: 'var(--text-primary)'
          }}
        >
          Resume
        </h2>

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          data-aos="fade-up"
          data-aos-duration="800"
          href="/Portfolio/Resume.pdf"
          download="Himanshu_Shekhar_Resume.pdf"
          className="print-button"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.8rem 1.5rem',
            backgroundColor: primaryColor,
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            textDecoration: 'none',
            fontWeight: '600',
            fontSize: '1rem'
          }}
        >
          <FiDownload /> Download Resume
        </motion.a>
      </div>

      <div 
        className="resume-paper"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        {/* Document Header Section */}
        <header>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: primaryColor, margin: '0 0 0.1rem 0' }}>Himanshu Shekhar</h1>
          <div className="flex-between" style={{ fontSize: '0.92rem' }}>
            <div style={{ flex: 1 }}>
              <p>LinkedIn: <a className="blue-link" href="https://linkedin.com/in/himanshu9523" target="_blank" rel="noreferrer">linkedin.com/in/himanshu9523</a></p>
              <p>GitHub: <a className="blue-link" href="https://github.com/himanshu952354" target="_blank" rel="noreferrer">github.com/himanshu952354</a></p>
            </div>
            <div style={{ textAlign: 'right', flex: 1 }}>
              <p>Email: <a className="blue-link" href="mailto:shekhar952354@gmail.com">shekhar952354@gmail.com</a></p>
              <p>Mobile: +91-7368989376</p>
            </div>
          </div>
        </header>

        {/* SKILLS */}
        <section>
          <h2 className="section-title">SKILLS</h2>
          <div className="section-divider"></div>
          <ul style={{ marginTop: '0.1rem', listStyleType: 'disc' }}>
            <li className="skill-item">
              <span className="skill-label">Languages:</span>
              <span>Java, JavaScript, C++, PHP, HTML</span>
            </li>
            <li className="skill-item">
              <span className="skill-label">Frameworks:</span>
              <span>React, Tailwind CSS, NodeJS</span>
            </li>
            <li className="skill-item">
              <span className="skill-label">Tools/Platforms:</span>
              <span>MySQL, MongoDB, Figma, Git, GitHub, Render, Vercel</span>
            </li>
            <li className="skill-item">
              <span className="skill-label">Soft Skills:</span>
              <span>Problem-Solving, Team work, Adaptability, Critical Thinking</span>
            </li>
          </ul>
        </section>

        {/* PROJECTS */}
        <section>
          <h2 className="section-title">PROJECTS</h2>
          <div className="section-divider"></div>
          
          <div style={{ marginTop: '0.1rem', fontSize: '0.9rem' }}>
            <div className="flex-between">
              <p className="bold-blue">Echo - Sentiment Analysis of Incoming Helpdesk Calls | <a href="https://github.com/himanshu952354" target="_blank" rel="noreferrer" className="blue-link">GitHub</a></p>
              <p style={{ fontWeight: 500 }}>Dec’ 2025</p>
            </div>
            <ul style={{ listStyleType: 'disc' }}>
              <li>Architected an AI-driven pipeline to evaluate emotional tone in live helpdesk calls.</li>
              <li>Automated speech-to-text conversion paired with real-time sentiment tagging.</li>
              <li>Leveraged NLP and ML techniques to extract behavioral insights.</li>
              <li>Streamlined escalation workflows via intelligent high-risk call alerts.</li>
            </ul>
          </div>

          <div style={{ marginTop: '0.2rem', fontSize: '0.9rem' }}>
            <div className="flex-between">
              <p className="bold-blue">AgroTools - Farmers’ E-Commerce Platform | <a href="https://github.com/himanshu952354" target="_blank" rel="noreferrer" className="blue-link">GitHub</a></p>
              <p style={{ fontWeight: 500 }}>Sept’ 2025</p>
            </div>
            <ul style={{ listStyleType: 'disc' }}>
              <li>Developed a scalable full-stack marketplace tailored for agricultural commerce.</li>
              <li>Implemented role-based authentication and structured product categorization.</li>
              <li>Enhanced backend efficiency through optimized PHP–MySQL operations.</li>
              <li>Delivered a responsive interface promoting seamless farmer accessibility.</li>
            </ul>
          </div>

          <div style={{ marginTop: '0.2rem', fontSize: '0.9rem' }}>
            <div className="flex-between">
              <p className="bold-blue">Contact Manager - Java Swing GUI Application | <a href="https://github.com/himanshu952354" target="_blank" rel="noreferrer" className="blue-link">GitHub</a></p>
              <p style={{ fontWeight: 500 }}>Jul’ 2025</p>
            </div>
            <ul style={{ listStyleType: 'disc' }}>
              <li>Designed a desktop contact system supporting CRUD and instant search operations.</li>
              <li>Applied Trie-based indexing for rapid prefix filtering.</li>
              <li>Engineered a structured GUI with input validation and persistent storage handling.</li>
              <li><span className="bold-blue">Tech stack used:</span> Java, Java-Swing, AWT, Trie Data Structure, OOPs, FileHandling</li>
            </ul>
          </div>
        </section>

        {/* TRAINING */}
        <section>
          <h2 className="section-title">TRAINING</h2>
          <div className="section-divider"></div>
          <div style={{ marginTop: '0.1rem', fontSize: '0.9rem' }}>
            <div className="flex-between">
              <p className="bold-blue">Lovely Professional University | <a href="#" className="blue-link">Certificate</a></p>
              <p style={{ fontWeight: 500 }}>Jun’ 2025 – Jul’ 2025</p>
            </div>
            <p style={{ fontWeight: 500 }}>Placement Ace: Java Bootcamp (Leetcode-Codeforces Edition)</p>
            <ul style={{ listStyleType: 'disc' }}>
              <li>Applied core Data Structures and Algorithms concepts for placements.</li>
              <li>Solved 100+ problems on LeetCode and Codeforces to improve problem-solving skills.</li>
              <li><span className="bold-blue">Tech stacks used:</span> Java, Data Structures and Algorithms</li>
            </ul>
          </div>
        </section>

        {/* CERTIFICATES */}
        <section>
          <h2 className="section-title">CERTIFICATES</h2>
          <div className="section-divider"></div>
          <div style={{ marginTop: '0.1rem', fontSize: '0.9rem' }}>
            <div className="flex-between" style={{ marginBottom: '0.02rem' }}>
              <p>ChatGPT- 4 Prompt Engineering - <a href="#" className="blue-link">Infosys</a></p>
              <p style={{ fontWeight: 500 }}>Aug’ 2025</p>
            </div>
            <div className="flex-between" style={{ marginBottom: '0.02rem' }}>
              <p>Introduction to Front-End Development - <a href="#" className="blue-link">Coursera</a></p>
              <p style={{ fontWeight: 500 }}>Jun’ 2024</p>
            </div>
            <div className="flex-between" style={{ marginBottom: '0.02rem' }}>
              <p>Java Programming - <a href="#" className="blue-link">NeoColab</a></p>
              <p style={{ fontWeight: 500 }}>May’ 2025</p>
            </div>
            <div className="flex-between" style={{ marginBottom: '0.02rem' }}>
              <p>Human Computer Interaction - <a href="https://drive.google.com/file/d/1N2iTGO2KtDmcqHEEn_dVyXgwxnX03KOy/view?usp=sharing" className="blue-link" target="_blank" rel="noreferrer">NPTEL</a></p>
              <p style={{ fontWeight: 500 }}>Apr’ 2025</p>
            </div>
            <div className="flex-between" style={{ marginBottom: '0.02rem' }}>
              <p>Data Structures and Algorithm - <a href="#" className="blue-link">NeoColab</a></p>
              <p style={{ fontWeight: 500 }}>Dec’ 2024</p>
            </div>
            <div className="flex-between" style={{ marginBottom: '0.02rem' }}>
              <p>Responsive Web Design - <a href="#" className="blue-link">FreeCodeCamp</a></p>
              <p style={{ fontWeight: 500 }}>Nov’ 2023</p>
            </div>
          </div>
        </section>

        {/* ACHIEVEMENTS */}
        <section>
          <h2 className="section-title">ACHIEVEMENTS</h2>
          <div className="section-divider"></div>
          <ul style={{ listStyleType: 'disc', marginTop: '0.1rem', fontSize: '0.9rem' }}>
            <li>Solved 200+ algorithmic problems across LeetCode, CodeChef, and Codeforces.</li>
            <li>Achieved ratings of 1500+ (LeetCode), 1200+ (CodeChef), and 1000+ (Codeforces). <a href="#" className="blue-link">Codolio</a></li>
          </ul>
        </section>

        {/* EDUCATION */}
        <section>
          <h2 className="section-title">EDUCATION</h2>
          <div className="section-divider"></div>
          <div style={{ marginTop: '0.1rem', fontSize: '0.9rem' }}>
            <div className="flex-between">
              <p className="bold-blue">Lovely Professional University</p>
              <p style={{ fontWeight: 500 }}>Phagwara, Punjab</p>
            </div>
            <div className="flex-between">
              <p>Bachelor of Technology - Computer Science and Engineering; <strong>CGPA: 7.37</strong></p>
              <p style={{ fontWeight: 500 }}>Since August 2023</p>
            </div>
            
            <div style={{ marginTop: '0.2rem' }}>
              <div className="flex-between">
                <p className="bold-blue">Ram Krishna College</p>
                <p style={{ fontWeight: 500 }}>Madhubani, Bihar</p>
              </div>
              <div className="flex-between">
                <p>Intermediate; <strong>Percentage: 83%</strong></p>
                <p style={{ fontWeight: 500 }}>April 2020 - March 2022</p>
              </div>
            </div>

            <div style={{ marginTop: '0.2rem' }}>
              <div className="flex-between">
                <p className="bold-blue">Regional Secondary School</p>
                <p style={{ fontWeight: 500 }}>Madhubani, Bihar</p>
              </div>
              <div className="flex-between">
                <p>Matriculation; <strong>Percentage: 82%</strong></p>
                <p style={{ fontWeight: 500 }}>April 2019 - March 2020</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resume;
