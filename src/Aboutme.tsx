import "./Aboutme.css";

function Aboutme() {
  return (
    <section className="about" id="about">
      <div className="about-row">

        {/* About Me Container */}
        <div className="about-container">
          <h2>About Me</h2>

          <p>
            <strong>Hey I'm Praj, </strong><br />
            <li>Currently a Deployment Technician for CCS and a Software Engineer for BPL<br /></li>
            <li>Alumni from SUNY Farmingdale State College with a bachelors in Computer Science<br /></li>
            <li>In my working & academic career, my experience spans from core software and hardware computer concepts, software development life cycle practices, data analysis and database management as well as problem solving, collaboration and interpersonal skills.<br /></li>
          </p>

          <p>
          <br/> <h2> What I Do </h2>

            Through projects and simple applications, I’ve worked on creating interactive
            platforms that combine clean UI, performance, and real world
            functionality. I’m especially interested in software engineering,
            analyzing data and troubleshooting software and hardware issues.
          </p>

          <p>
            LabPrajX is where I bring ideas to show, experiment and 
            build projects that push my skills forward.
          </p>


        {/* Skills Section */}
          <br /><h2>Skills</h2>
          <p>
          <strong>Technical Skills :</strong>
          <li>IT : System Troubleshooting,
          Hardware Troubleshooting,
          System Testing, Data Analysis,
          Excel</li>
          <li>Programming :
          JavaScript, TypeScript, HTML,
          CSS, Java, JavaFX, Python,
          SQL, Database Management,
          Agile/Scrum, SDLC</li>
          <li>Tools & Platforms :
          Git/GitHub, Figma/Canva, MS 365,
          Google Workspace, IDEs, Scene
          Builder, Vercel, AWS</li>

          <p> 
            <strong>Soft Skills :</strong>
          <li>Interpersonal Skills :
          Problem Solving, Communication,
          Multitasking, Attention to Detail,
          Independence, Collaboration,
          Customer Service </li>   
          </p>     
          </p>

          <p>
          <br /><h2>Extracurriculars</h2>
          <strong>| Farmingdale State College | </strong><br /><br />
          <strong>Machine Learning & AI Club | 2024 - 2025 | Secretary |</strong>
          <br />
          <li>Assist in organizing biweekly
          presentations and coding
          workshops</li>
          <li>Organized and staffed
          hackathon by assisting
          attendees and managing event
          functions</li>
          </p>

        <p>
        <strong>South Asian Student Association |  2023 - 2025 | Social Media Manager </strong>
        <li>Design event posts on Canva/Figma,</li> 
        <li>Manage social media posts</li>
        <li>Photographer for general meetings and events</li>
          </p>

        </div>

        {/* Experience Container */}
        <div className="about-container experience">
          <h2>Professional Career</h2>

          <div className="experience-item">
            <h4>Custom Computer Specialists | Hauppauge, NY | Dec 2025 - Present</h4>
            <p>IT Deployment Technician | Full Time</p>
            <ul>
              <li><strong>Client Collaboration & Support:</strong> Collaborate directly with clinical staff and end users to understand needs, deploy hardware, provide deployment support and ensure smooth Go-Live transitions</li>
              <li><strong>EPIC TDR Testing:</strong> Perform TDR testing on new and existing workstations to validate full system functionality</li>
              <li><strong>Deployment & Troubleshooting:</strong> Install, configure, and troubleshoot peripherals including document scanners, tap badges, signature pads, and barcode scanners. Diagnose and resolve hardware, software, and peripheral issues on site to minimize downtime</li>
              <li><strong>Documentation:</strong> Maintain detailed documentation of deployments, inventory, and equipment changes in FileMaker database and Excel</li>
              <li><strong>On-Site Travel:</strong> Transport and deploy IT hardware across Long Island and NYC five boroughs while managing accurate inventory logistics</li>
            </ul>
          </div>

          <div className="experience-item">
            <h4>BPL Web Development | NY | May 2025 - Present</h4>
            <p>Software Engineer | Freelance</p>
            <ul>
              <li><strong>Stakeholder Communication:</strong> Partnered with clients to gather requirements, define project scope, and translate needs into technical solutions. Regularly engage with clients through meetings and updates</li>
              <li><strong>Software Solutions:</strong> Designed, developed, and maintained web solutions with focus on UX/UI and user experience. Managed complete software development lifecycle (SDLC) using Agile methodologies from planning to deployment and maintenance</li>
              <li><strong>Troubleshooting:</strong> Diagnosed and resolved complex technical issues across development, staging, and production environments</li>
              <li><strong>Startup Leadership & Collaboration:</strong> Co-founded and contributed to a small startup team delivering custom web solutions while handling client communication and technical decisions</li>
            </ul>
          </div>

          <div className="experience-item">
            <h4>J. C. Broderick & Associates, Inc. | Hauppauge, NY | May 2025 - Oct 2025</h4>
            <p>Sampling Field Technician | Internship</p>
            <ul>
              <li><strong>Field Operations & Compliance:</strong> Conducted licensed asbestos air monitoring at active abatement sites while adhering to NYSDOL regulations and safety protocols</li>
              <li><strong>Data Collection & Documentation:</strong> Collected, calibrated, and documented air samples for laboratory analysis while maintaining detailed field reports</li>
              <li><strong>Cross-Functional Collaboration:</strong> Worked closely with project managers, contractors, and site teams to ensure accurate sampling and smooth project execution</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Aboutme;