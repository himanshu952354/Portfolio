import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiLinkedin, FiGithub, FiPhone, FiDownload, FiExternalLink } from 'react-icons/fi';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Resume = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="resume-page" style={{ 
      padding: '120px 20px 60px', 
      maxWidth: '1100px', 
      margin: '0 auto',
      minHeight: '100vh',
      backgroundColor: '#f5f5f5',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    }}>
      {/* Print and Page styles */}
      <style>{`
        @media print {
          .nav-container, .print-button, footer, .custom-cursor { display: none !important; }
          .resume-page { padding: 0 !important; margin: 0 !important; max-width: 100% !important; background: white !important; }
          .resume-paper { box-shadow: none !important; border: 1px solid #ddd !important; width: 100% !important; margin: 0 !important; padding: 2rem !important; }
          * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
        }
        .resume-paper {
          background-color: white;
          padding: 4rem;
          border: 2px solid #ddd;
          border-radius: 0.5rem;
          line-height: 1.5;
          color: #1e3a8a; /* blue-900 approx */
        }
        .section-title {
          font-size: 1.5rem;
          font-weight: bold;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
          color: #1e3a8a;
          margin-top: 1.5rem;
          margin-bottom: 0 !important;
          text-align: left !important;
        }
        .section-divider {
          border-bottom: 2px solid #1e3a8a;
          margin-bottom: 0.2rem;
          border-radius: 0.5rem;
        }
        .blue-link {
          color: #1d4ed8; /* blue-700 approx */
          text-decoration: underline;
        }
        .flex-between {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
        }
        .bold-blue {
          font-weight: bold;
          color: #1e3a8a;
        }
      `}</style>

      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'flex-end', 
        marginBottom: '4rem',
        flexWrap: 'wrap',
        gap: '2rem'
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
            backgroundColor: '#1e3a8a',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            textDecoration: 'none',
            fontWeight: '600',
            fontSize: '1rem',
            marginBottom: '0.5rem' // Small adjustment to align with baseline
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
          <h1 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#1e3a8a', margin: '0 0 0.5rem 0' }}>Himanshu Shekhar</h1>
          <div className="flex-between">
            <div>
              <p>LinkedIn: <a className="blue-link" href="https://www.linkedin.com/in/himanshu-shekhar-2003/">https://www.linkedin.com/in/himanshu-shekhar-2003/</a></p>
              <p>GitHub: <a className="blue-link" href="https://github.com/HimanshuShekhar2003">https://github.com/HimanshuShekhar2003</a></p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <p>Email: <a className="blue-link" href="mailto:himanshu.shekhar2003@gmail.com">himanshu.shekhar2003@gmail.com</a></p>
              <p>Phone: +91-9310055220</p>
            </div>
          </div>
        </header>

        {/* SKILLS */}
        <div style={{ marginTop: '2rem' }}>
          <h2 className="section-title">SKILLS</h2>
          <div className="section-divider"></div>
          <p style={{ marginTop: '0.2rem' }}>
            • <span className="bold-blue">Languages:</span> Java, JavaScript, C++, PHP<br />
            • <span className="bold-blue">Frameworks:</span> HTML, Tailwind CSS, NodeJS, React<br />
            • <span className="bold-blue">Tools/Platforms:</span> MySQL, Figma, MongoDB, Render, Vercel <br />
            • <span className="bold-blue">Soft Skills:</span> Problem-Solving, Team work, Adaptability, Critical Thinking
          </p>
        </div>

        {/* PROJECTS */}
        <div style={{ marginTop: '0.5rem' }}>
          <h2 className="section-title">PROJECTS</h2>
          <div className="section-divider"></div>
          
          <div style={{ padding: '0.5rem' }}>
            {/* project1 */}
            <div style={{ marginTop: '0.5rem' }}>
              <div className="flex-between">
                <p className="bold-blue">AgroTools - Farmers’ E-Commerce Platform | <span className="blue-link">GitHub</span></p>
                <p>Sep’ 2025</p>
              </div>
              <p>
                • Developed a full-stack e-commerce platform enabling farmers agricultural products online.<br />
                • Designed secure authentication, product categories, and a responsive UI.<br />
                • Optimized PHP–MySQL backend for fast loading and smooth product management.<br />
                • Delivered a simple and accessible online marketplace that improved farmers’ ease of purchasing supplies.<br />
                • <span style={{ fontWeight: 'bold' }}>Tech stack used:</span> HTML, Tailwind CSS, PHP, MySQL, JavaScript
              </p>
            </div>

            {/* project2 */}
            <div style={{ marginTop: '0.5rem' }}>
              <div className="flex-between">
                <p className="bold-blue">Contact Manager - Java Swing GUI Application | <span className="blue-link">GitHub</span></p>
                <p>Jul’ 2025</p>
              </div>
              <p>
                • Implemented a desktop-based contact manager using Java Swing with add, update, delete, and search functionalities.<br />
                • Integrated a Trie data structure for fast, prefix-based contact search similar to Truecaller.<br />
                • Built a clean, user-friendly GUI with real-time updates, input validation, and persistent file-based storage.<br />
                • <span style={{ fontWeight: 'bold' }}>Tech stack used:</span> Java, Java-Swing, AWT, Trie Data Structure, OOPs Concepts, File Handling
              </p>
            </div>

            {/* project3 */}
            <div style={{ marginTop: '0.5rem' }}>
              <div className="flex-between">
                <p className="bold-blue">Giftit - Gift Recommender Chatbot | <span className="blue-link">GitHub</span></p>
                <p>Jun’ 2025</p>
              </div>
              <p>
                • Engineered an AI chatbot that gives personalized gift suggestions.<br />
                • Incorporated real-time responses with loaders and error handling.<br />
                • Developed a clean and simple chat-based UI.<br />
                • Connected Google Gemini API with an Express.js backend.<br />
                • Delivered fast, accurate, and user-friendly gift recommendations.<br />
                • <span style={{ fontWeight: 'bold' }}>Tech stack used:</span> HTML, Tailwind CSS, JavaScript, Node.js, Google Gemini API.
              </p>
            </div>
          </div>
        </div>

        {/* TRAINING */}
        <div style={{ marginTop: '0.5rem' }}>
          <h2 className="section-title">TRAINING</h2>
          <div className="section-divider"></div>
          <div className="flex-between" style={{ marginTop: '0.5rem' }}>
            <p className="bold-blue">Placement Ace: Java Bootcamp (Leetcode-Codeforces Edition)</p>
            <p>Jun’ 2025 – Jul' 2025</p>
          </div>
          <p>Lovely Professional University</p>
          <p style={{ margin: '0.5rem' }}>
            • Learned and applied core Data Structures and Algorithms (DSA) concepts essential for placements.<br />
            • Solved 100+ coding questions on LeetCode and Codeforces to strengthen problem-solving and analytical skills.<br />
            • Tech stacks used: Java, Data Structures and Algorithms
          </p>
        </div>

        {/* CERTIFICATES */}
        <div style={{ marginTop: '0.5rem' }}>
          <h2 className="section-title">CERTIFICATES</h2>
          <div className="section-divider"></div>
          <div style={{ marginTop: '0.1rem' }}>
            <div className="flex-between">
              <p>ChatGPT- 4 Prompt Engineering - <span className="blue-link">Infosys</span></p>
              <p>Aug’ 2025</p>
            </div>
            <div className="flex-between">
              <p>Build Generative AI Apps and Solutions with No-Code Tools - <span className="blue-link">Infosys</span></p>
              <p>Aug’ 2025</p>
            </div>
            <div className="flex-between">
              <p>Fundamentals of Network Communication - <span className="blue-link">Coursera</span></p>
              <p>Oct’ 2024</p>
            </div>
            <div className="flex-between">
              <p>The Bits and Bytes of Computer Networking - <span className="blue-link">Coursera</span></p>
              <p>Sep’ 2024</p>
            </div>
            <div className="flex-between">
              <p>Introduction to Hardware and Operating Systems - <span className="blue-link">Coursera</span></p>
              <p>Sep’ 2024</p>
            </div>
          </div>
        </div>

        {/* ACHIEVEMENTS */}
        <div style={{ marginTop: '0.5rem' }}>
          <h2 className="section-title">ACHIEVEMENTS</h2>
          <div className="section-divider"></div>
          <div style={{ marginTop: '0.5rem' }}>
            <p className="bold-blue">Achieved a LeetCode contest rating of 1500+</p>
            <p>Improving problem-solving speed and logical thinking.</p>
            <p className="bold-blue" style={{ marginTop: '0.5rem' }}>Completed 300+ hours of hands-on training on freeCodeCamp</p>
            <p>Gaining hands-on experience in HTML, CSS, and responsive web design.</p>
          </div>
        </div>

        {/* EDUCATION */}
        <div style={{ marginTop: '0.5rem' }}>
          <h2 className="section-title">EDUCATION</h2>
          <div className="section-divider"></div>
          <div style={{ marginTop: '0.5rem' }}>
            {/* College */}
            <div>
              <div className="flex-between">
                <p className="bold-blue">Lovely Professional University</p>
                <p>Phagwara, Punjab</p>
              </div>
              <div className="flex-between">
                <p>Bachelor of Technology - Computer Science and Engineering; CGPA: 7.2</p>
                <p>Since August 2023</p>
              </div>
            </div>
            {/* 12th */}
            <div style={{ marginTop: '0.5rem' }}>
              <div className="flex-between">
                <p className="bold-blue">Ram Krishna College</p>
                <p>Madhubani, Bihar</p>
              </div>
              <div className="flex-between">
                <p>Intermediate; Percentage: 83%</p>
                <p>April 2020 - March 2022</p>
              </div>
            </div>
            {/* 10th */}
            <div style={{ marginTop: '0.5rem' }}>
              <div className="flex-between">
                <p className="bold-blue">Regional Secondary School</p>
                <p>Madhubani, Bihar</p>
              </div>
              <div className="flex-between">
                <p>Matriculation; Percentage: 82%</p>
                <p>April 2019 - March 2020</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
