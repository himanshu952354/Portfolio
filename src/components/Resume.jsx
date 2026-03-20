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

  const handlePrint = () => {
    window.print();
  };

  // Primary color from the image
  const primaryColor = '#283593';

  return (
    <div className="resume-page" style={{ 
      padding: '120px 20px 60px', 
      minHeight: '100vh', 
      backgroundColor: '#f5f5f5',
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
          line-height: 1.4;
        }
        .section-title {
          font-size: 1rem;
          font-weight: bold;
          color: ${primaryColor};
          margin-top: 1.2rem;
          margin-bottom: 0.1rem !important;
          text-align: left !important;
          text-transform: uppercase;
        }
        .section-divider {
          border-bottom: 1.5px solid #333;
          margin-bottom: 0.4rem;
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
        ul {
          padding-left: 1.2rem;
          margin: 0.2rem 0;
        }
        li {
          margin-bottom: 0.1rem;
        }
        p {
          margin: 0.1rem 0;
        }
      `}</style>

      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'flex-end', 
        width: '100%',
        maxWidth: '900px',
        marginBottom: '2rem',
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
          href="/Portfolio_NEW/Resume.pdf"
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
        {/* Header Section */}
        <header>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: primaryColor, margin: '0 0 0.2rem 0' }}>Himanshu Shekhar</h1>
          <div className="flex-between">
            <div style={{ fontSize: '0.95rem' }}>
              <p>LinkedIn: <a className="blue-link" href="https://linkedin.com/in/himanshu9523">linkedin.com/in/himanshu9523</a></p>
              <p>GitHub: <a className="blue-link" href="https://github.com/himanshu952354">github.com/himanshu952354</a></p>
            </div>
            <div style={{ textAlign: 'right', fontSize: '0.95rem' }}>
              <p>Email: <a className="blue-link" href="mailto:shekhar952354@gmail.com">shekhar952354@gmail.com</a></p>
              <p>Mobile: +91-7368989376</p>
            </div>
          </div>
        </header>

        {/* SKILLS */}
        <section>
          <h2 className="section-title">SKILLS</h2>
          <div className="section-divider"></div>
          <ul style={{ listStyleType: 'disc', fontSize: '0.95rem' }}>
            <li><span className="bold-blue">Languages:</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Java, JavaScript, C++, PHP, HTML</li>
            <li><span className="bold-blue">Frameworks:</span> &nbsp;&nbsp;&nbsp; React, Tailwind CSS, NodeJS</li>
            <li><span className="bold-blue">Tools/Platforms:</span> MySQL, MongoDB, Figma, Git, GitHub, Render, Vercel</li>
            <li><span className="bold-blue">Soft Skills:</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Problem-Solving, Team work, Adaptability, Critical Thinking</li>
          </ul>
        </section>

        {/* PROJECTS */}
        <section>
          <h2 className="section-title">PROJECTS</h2>
          <div className="section-divider"></div>
          
          <div style={{ marginTop: '0.4rem', fontSize: '0.9rem' }}>
            <div className="flex-between">
              <p className="bold-blue">Echo - Sentiment Analysis of Incoming Helpdesk Calls | <a href="https://github.com/himanshu952354" className="blue-link">GitHub</a></p>
              <p>Dec’ 2025</p>
            </div>
            <ul style={{ listStyleType: 'disc' }}>
              <li>Architected an AI-driven pipeline to evaluate emotional tone in live helpdesk calls.</li>
              <li>Automated speech-to-text conversion paired with real-time sentiment tagging.</li>
              <li>Crafted an interactive dashboard for continuous sentiment visualization.</li>
              <li>Leveraged NLP and ML techniques to extract behavioral insights.</li>
              <li>Streamlined escalation workflows via intelligent high-risk call alerts.</li>
              <li><span className="bold-blue">Tech stack used:</span> React, JavaScript, Node.js, APIs, NLP, Speech-to-text, MongoDB</li>
            </ul>
          </div>

          <div style={{ marginTop: '0.8rem', fontSize: '0.9rem' }}>
            <div className="flex-between">
              <p className="bold-blue">AgroTools - Farmers’ E-Commerce Platform | <a href="https://github.com/himanshu952354" className="blue-link">GitHub</a></p>
              <p>Sept’ 2025</p>
            </div>
            <ul style={{ listStyleType: 'disc' }}>
              <li>Developed a scalable full-stack marketplace tailored for agricultural commerce.</li>
              <li>Implemented role-based authentication and structured product categorization.</li>
              <li>Enhanced backend efficiency through optimized PHP–MySQL operations.</li>
              <li>Delivered a responsive interface promoting seamless farmer accessibility.</li>
              <li><span className="bold-blue">Tech stack used:</span> HTML, Tailwind CSS, PHP, MySQL, JavaScript</li>
            </ul>
          </div>

          <div style={{ marginTop: '0.8rem', fontSize: '0.9rem' }}>
            <div className="flex-between">
              <p className="bold-blue">Contact Manager - Java Swing GUI Application | <a href="https://github.com/himanshu952354" className="blue-link">GitHub</a></p>
              <p>Jul’ 2025</p>
            </div>
            <ul style={{ listStyleType: 'disc' }}>
              <li>Designed a desktop contact system supporting CRUD and instant search operations.</li>
              <li>Applied Trie-based indexing for rapid prefix filtering.</li>
              <li>Engineered a structured GUI with input validation and persistent storage handling.</li>
              <li>Demonstrated strong object-oriented design and file management practices.</li>
              <li><span className="bold-blue">Tech stack used:</span> Java, Java-Swing, AWT, Trie Data Structure, OOPs, FileHandling</li>
            </ul>
          </div>
        </section>

        {/* TRAINING */}
        <section>
          <h2 className="section-title">TRAINING</h2>
          <div className="section-divider"></div>
          <div style={{ marginTop: '0.4rem', fontSize: '0.9rem' }}>
            <div className="flex-between">
              <p className="bold-blue">Lovely Professional University | <a href="#" className="blue-link">Certificate</a></p>
              <p>Jun’ 2025 – Jul’ 2025</p>
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
          <div style={{ marginTop: '0.4rem', fontSize: '0.9rem' }}>
            <div className="flex-between">
              <p>ChatGPT- 4 Prompt Engineering - <a href="#" className="blue-link">Infosys</a></p>
              <p>Aug’ 2025</p>
            </div>
            <div className="flex-between">
              <p>Java Programming - <a href="#" className="blue-link">NeoColab</a></p>
              <p>May’ 2025</p>
            </div>
            <div className="flex-between">
              <p>Human Computer Interaction - <a href="#" className="blue-link">NPTEL</a></p>
              <p>Apr’ 2025</p>
            </div>
            <div className="flex-between">
              <p>Data Structures and Algorithm - <a href="#" className="blue-link">NeoColab</a></p>
              <p>Dec’ 2024</p>
            </div>
            <div className="flex-between">
              <p>Responsive Web Design - <a href="#" className="blue-link">FreeCodeCamp</a></p>
              <p>Nov’ 2023</p>
            </div>
          </div>
        </section>

        {/* ACHIEVEMENTS */}
        <section>
          <h2 className="section-title">ACHIEVEMENTS</h2>
          <div className="section-divider"></div>
          <ul style={{ listStyleType: 'disc', marginTop: '0.4rem', fontSize: '0.9rem' }}>
            <li>Solved 200+ algorithmic problems across LeetCode, CodeChef, and Codeforces.</li>
            <li>Achieved ratings of 1500+ (LeetCode), 1200+ (CodeChef), and 1000+ (Codeforces). <a href="#" className="blue-link">Codolio</a></li>
          </ul>
        </section>

        {/* EDUCATION */}
        <section>
          <h2 className="section-title">EDUCATION</h2>
          <div className="section-divider"></div>
          <div style={{ marginTop: '0.4rem', fontSize: '0.9rem' }}>
            <div className="flex-between">
              <p className="bold-blue">Lovely Professional University</p>
              <p>Phagwara, Punjab</p>
            </div>
            <div className="flex-between">
              <p>Bachelor of Technology - Computer Science and Engineering; <strong>CGPA: 7.37</strong></p>
              <p>Since August 2023</p>
            </div>
            <div style={{ marginTop: '0.5rem' }}>
              <div className="flex-between">
                <p className="bold-blue">Ram Krishna College</p>
                <p>Madhubani, Bihar</p>
              </div>
              <div className="flex-between">
                <p>Intermediate; <strong>Percentage: 83%</strong></p>
                <p>April 2020 - March 2022</p>
              </div>
            </div>
            <div style={{ marginTop: '0.5rem' }}>
              <div className="flex-between">
                <p className="bold-blue">Regional Secondary School</p>
                <p>Madhubani, Bihar</p>
              </div>
              <div className="flex-between">
                <p>Matriculation; <strong>Percentage: 82%</strong></p>
                <p>April 2019 - March 2020</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resume;
