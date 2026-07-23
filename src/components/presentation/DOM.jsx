import React, { useState } from 'react';

export default function DOMPresentation() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 8;

  const nextSlide = () => {
    if (currentSlide < totalSlides) setCurrentSlide(currentSlide + 1);
  };

  const prevSlide = () => {
    if (currentSlide > 1) setCurrentSlide(currentSlide - 1);
  };

  return (
    <div style={styles.container}>
      {/* Slide Navigation Overlay */}
      <div style={styles.navBar}>
        <button 
          onClick={prevSlide} 
          disabled={currentSlide === 1}
          style={{ ...styles.navButton, opacity: currentSlide === 1 ? 0.3 : 1 }}
        >
          ‹
        </button>
        <span style={styles.slideCounter}>Slide {currentSlide} of {totalSlides}</span>
        <button 
          onClick={nextSlide} 
          disabled={currentSlide === totalSlides}
          style={{ ...styles.navButton, opacity: currentSlide === totalSlides ? 0.3 : 1 }}
        >
          ›
        </button>
      </div>

      {/* Main Presentation Viewport */}
      <div style={styles.slideFrame}>
        {currentSlide === 1 && <Slide1 />}
        {currentSlide === 2 && <Slide2 />}
        {currentSlide === 3 && <Slide3 />}
        {currentSlide === 4 && <Slide4 />}
        {currentSlide === 5 && <Slide5 />}
        {currentSlide === 6 && <Slide6 />}
        {currentSlide === 7 && <Slide7 />}
        {currentSlide === 8 && <Slide8 />}
      </div>
    </div>
  );
}

/* ================= SLIDE COMPONENTS ================= */

// Slide 1: Cover Title
function Slide1() {
  return (
    <div style={styles.slideContentCenter}>
      <h1 style={styles.mainTitle}>DOM</h1>
      <p style={styles.subTitle}>Document Object Model</p>
    </div>
  );
}

// Slide 2: What is the DOM?
function Slide2() {
  return (
    <div style={styles.slideContent}>
      <p style={styles.topLabel}>DOCUMENT OBJECT MODEL STRUCTURES</p>
      <p style={styles.topSubLabel}>It is a hierarchy of elements presented in Browser</p>
      
      {/* Banner Title */}
      <div style={styles.bannerHeader}>
        <h2 style={styles.bannerText}>WHAT IS THE DOM?</h2>
      </div>

      {/* DOM Tree Diagram */}
      <div style={styles.treeContainer}>
        <div style={styles.treeNode}>DOCUMENT</div>
        <div style={styles.treeConnectorVertical}></div>
        <div style={styles.treeNode}>HTML</div>
        
        <div style={styles.treeBranchContainer}>
          {/* Head Branch */}
          <div style={styles.treeBranch}>
            <div style={styles.treeNode}>HEAD</div>
            <div style={styles.treeSubBranch}>
              <div style={styles.treeNode}>META</div>
              <div style={styles.treeNode}>TITLE</div>
            </div>
          </div>

          {/* Body Branch */}
          <div style={styles.treeBranch}>
            <div style={styles.treeNode}>BODY</div>
            <div style={styles.treeSubBranch}>
              <div style={styles.treeNode}>H1</div>
              <div style={styles.treeNode}>H2</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Slide 3: Rendering Engine Ecosystems
function Slide3() {
  const engineData = [
    { browser: 'Chrome', rendering: 'Blink', js: 'V8', icon: '🌐' },
    { browser: 'IE', rendering: 'Trident', js: 'Chakra', icon: '🌐' },
    { browser: 'Firefox', rendering: 'Gecko', js: 'SpiderMonkey', icon: '🦊' },
    { browser: 'Edge', rendering: 'EdgeHTML', js: 'Chakra', icon: '🌊' },
    { browser: 'Opera', rendering: 'Blink', js: 'V8', icon: '⭕' },
    { browser: 'Safari', rendering: 'WebKit', js: 'Nitro', icon: '🧩' },
  ];

  return (
    <div style={styles.slideContent}>
      <p style={styles.topLabel}>RENDERING ENGINE ECOSYSTEMS</p>
      <p style={styles.topSubLabel}>Rendering & Script compilation</p>
      <p style={styles.descriptionText}>
        Modern browser setups partition core layout rendering logic from JS program execution across specialized engine setups.
      </p>

      <h2 style={{ ...styles.centerHeading, color: '#111', fontSize: '28px', marginBottom: '30px' }}>
        Rendering Engines & JavaScript Engines
      </h2>

      <div style={styles.engineGrid}>
        {engineData.map((item, index) => (
          <div key={index} style={styles.engineCard}>
            <div style={{ fontSize: '30px' }}>{item.icon}</div>
            <div style={styles.browserName}>{item.browser}</div>
            <div style={styles.engineBoxes}>
              <div style={styles.blueBox}>{item.rendering}</div>
              <div style={styles.blueBox}>{item.js}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Slide 4: Subsystems & Architecture
function Slide4() {
  return (
    <div style={styles.slideContent}>
      <p style={styles.topLabel}>INTERNAL BROWSER SUBSYSTEMS</p>
      
      <div style={styles.centerBlock}>
        <h2 style={styles.architectureTitle}>Architecture of Browser</h2>
        <div style={styles.archGrid}>
          <div style={styles.archCard}>User Interface</div>
          <div style={styles.archCard}>Browser Engine</div>
          <div style={styles.archCard}>Rendering Engine</div>
          <div style={styles.archCard}>Data Persistence</div>
        </div>
      </div>
    </div>
  );
}

// Slide 5: Execution Cycle
function Slide5() {
  return (
    <div style={styles.slideContent}>
      <p style={styles.topLabel}>EXECUTION CYCLE & LAYOUT THREADING</p>
      <p style={styles.topSubLabel}>Critical Pipeline</p>
      <p style={styles.descriptionText}>
        Calculates document layout structure maps and rasterizes vectors into viewable pixel states.
      </p>

      <div style={styles.centerBlock}>
        <div style={styles.workflowBox}>
          <h2 style={{ fontSize: '26px', margin: 0, color: '#1a2e3b' }}>Workflow of Browser Engine</h2>
        </div>
      </div>
    </div>
  );
}

// Slide 6: DOM vs Virtual DOM Table
function Slide6() {
  return (
    <div style={styles.slideContent}>
      <p style={styles.topLabel}>MEMORY RECONCILIATION & SYNCHRONIZATION</p>
      <p style={styles.descriptionText}>
        The virtual DOM (VDOM) is a programming concept where an ideal, or "virtual", representation of a UI is kept in memory and synced with the "real" DOM by a library such as ReactDOM. This process is called reconciliation.
      </p>

      <h2 style={{ ...styles.centerHeading, color: '#111', fontSize: '24px', margin: '15px 0' }}>
        Introducing Virtual DOM
      </h2>

      <p style={{ ...styles.centerHeading, color: '#2b5278', fontSize: '20px', fontWeight: 'bold' }}>
        DOM vs Virtual DOM
      </p>

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.tableTh}>DOM (Real DOM)</th>
            <th style={styles.tableTh}>Virtual DOM</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={styles.tableTd}>The actual Document Object Model created by the browser.</td>
            <td style={styles.tableTd}>A lightweight JavaScript copy of the Real DOM maintained by React.</td>
          </tr>
          <tr>
            <td style={styles.tableTd}>Browser memory</td>
            <td style={styles.tableTd}>JavaScript memory</td>
          </tr>
          <tr>
            <td style={styles.tableTd}>Updates the actual DOM directly</td>
            <td style={styles.tableTd}>Updates Virtual DOM first, then compares with the previous Virtual DOM</td>
          </tr>
          <tr>
            <td style={styles.tableTd}>Slower for frequent updates</td>
            <td style={styles.tableTd}>Faster because only changed elements are updated</td>
          </tr>
          <tr>
            <td style={styles.tableTd}>HTML, CSS, JavaScript, jQuery</td>
            <td style={styles.tableTd}>React, React Native</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

// Slide 7: Engineering Advantages
function Slide7() {
  return (
    <div style={styles.slideContent}>
      <p style={styles.topLabel}>ENGINEERING ADVANTAGES</p>
      
      <div style={styles.centerBlock}>
        <h2 style={{ fontSize: '28px', color: '#1a2e3b', marginBottom: '30px' }}>
          Benefits of Virtual DOM
        </h2>

        <div style={styles.benefitsGrid}>
          <div style={styles.benefitCard}>Better User Experience</div>
          <div style={styles.benefitCard}>Faster Performance</div>
          <div style={styles.benefitCard}>Efficient Updates</div>
          <div style={styles.benefitCard}>Improves Developer Productivity</div>
        </div>
      </div>
    </div>
  );
}

// Slide 8: Thank You
function Slide8() {
  return (
    <div style={styles.slideContentCenter}>
      <h1 style={styles.thankYouTitle}>Thank You</h1>
      <p style={styles.endText}>END OF PRESENTATION</p>
      <p style={styles.seminarText}>VIRTUAL DOM ARCHITECTURE SEMINAR</p>
    </div>
  );
}

/* ================= CSS STYLES ================= */
const styles = {
  container: {
    width: '100vw',
    height: '100vh',
    backgroundColor: '#000',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Segoe UI, Helvetica, Arial, sans-serif',
    color: '#333',
    overflow: 'hidden',
  },
  navBar: {
    position: 'absolute',
    top: '20px',
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    zIndex: 10,
    backgroundColor: 'rgba(255,255,255,0.1)',
    padding: '8px 16px',
    borderRadius: '20px',
  },
  navButton: {
    background: 'none',
    border: 'none',
    color: '#fff',
    fontSize: '24px',
    cursor: 'pointer',
    padding: '0 8px',
  },
  slideCounter: {
    color: '#fff',
    fontSize: '14px',
  },
  slideFrame: {
    width: '90vw',
    maxWidth: '1200px',
    height: '80vh',
    maxHeight: '675px',
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
    boxShadow: '0 8px 30px rgba(0,0,0,0.5)',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    overflow: 'hidden',
  },
  slideContent: {
    padding: '40px 60px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
  },
  slideContentCenter: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  mainTitle: {
    fontSize: '72px',
    fontWeight: '700',
    letterSpacing: '2px',
    margin: '0',
    color: '#1a2e3b',
  },
  subTitle: {
    fontSize: '24px',
    color: '#555',
    marginTop: '10px',
  },
  topLabel: {
    fontSize: '12px',
    fontWeight: 'bold',
    letterSpacing: '1px',
    color: '#666',
    margin: '0 0 4px 0',
    textTransform: 'uppercase',
  },
  topSubLabel: {
    fontSize: '14px',
    color: '#2b5278',
    margin: '0 0 10px 0',
  },
  descriptionText: {
    fontSize: '14px',
    color: '#444',
    lineHeight: '1.5',
    marginBottom: '20px',
  },
  bannerHeader: {
    backgroundColor: '#0a1d2e',
    width: '100%',
    padding: '12px 0',
    textAlign: 'center',
    margin: '10px 0 30px 0',
  },
  bannerText: {
    color: '#d4af37',
    fontSize: '22px',
    letterSpacing: '2px',
    margin: 0,
  },
  treeContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
  },
  treeNode: {
    border: '1px solid #ccc',
    padding: '8px 20px',
    backgroundColor: '#fff',
    fontSize: '14px',
    fontWeight: 'bold',
    letterSpacing: '1px',
    color: '#1a2e3b',
    boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
  },
  treeConnectorVertical: {
    width: '12px',
    height: '20px',
    backgroundColor: '#555',
  },
  treeBranchContainer: {
    display: 'flex',
    gap: '120px',
    marginTop: '10px',
  },
  treeBranch: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '15px',
  },
  treeSubBranch: {
    display: 'flex',
    gap: '20px',
  },
  centerHeading: {
    textAlign: 'center',
    margin: '0',
  },
  engineGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
    marginTop: '10px',
  },
  engineCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '8px',
  },
  browserName: {
    fontSize: '14px',
    fontWeight: '600',
  },
  engineBoxes: {
    display: 'flex',
    gap: '6px',
    width: '100%',
  },
  blueBox: {
    flex: 1,
    backgroundColor: '#2b7fff',
    color: '#fff',
    textAlign: 'center',
    padding: '10px 4px',
    fontSize: '13px',
    fontWeight: '500',
    borderRadius: '2px',
  },
  centerBlock: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  architectureTitle: {
    fontSize: '28px',
    color: '#1a2e3b',
    marginBottom: '30px',
  },
  archGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '20px',
    width: '60%',
  },
  archCard: {
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    padding: '20px',
    textAlign: 'center',
    fontWeight: '600',
    color: '#2b5278',
    boxShadow: '0 4px 10px rgba(0,0,0,0.03)',
  },
  workflowBox: {
    border: '2px solid #ccc',
    padding: '40px 60px',
    backgroundColor: '#fff',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '15px',
    fontSize: '13px',
  },
  tableTh: {
    backgroundColor: '#2b5278',
    color: '#fff',
    padding: '10px',
    textAlign: 'left',
    width: '50%',
  },
  tableTd: {
    border: '1px solid #e0e0e0',
    padding: '10px',
    backgroundColor: '#fff',
  },
  benefitsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '20px',
    width: '80%',
  },
  benefitCard: {
    backgroundColor: '#fff',
    border: '1px solid #e0e0e0',
    padding: '24px',
    textAlign: 'center',
    fontSize: '16px',
    fontWeight: '600',
    color: '#1a2e3b',
    boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
  },
  thankYouTitle: {
    fontSize: '64px',
    fontWeight: '700',
    color: '#1a2e3b',
    margin: 0,
  },
  endText: {
    fontSize: '14px',
    letterSpacing: '2px',
    color: '#888',
    margin: '15px 0 5px 0',
  },
  seminarText: {
    fontSize: '12px',
    letterSpacing: '1px',
    color: '#555',
  },
};