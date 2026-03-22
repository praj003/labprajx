import "./Aboutme.css";

function Aboutme() {
  return (
    <section className="about" id="about">
      <div className="about-row">

        {/* About Me Container */}
        <div className="about-container">
          <h2>About Me</h2>

          <p>
            Hey I'm Praj, <br />
            - Currently a Deployment Technician for CCS and a Software Engineer for BPL<br />
            - Alumni from SUNY Farmingdale State College with a bachelors in Computer Science<br />
            - In my working & academic career, my experience spans from core software and hardware computer concepts, software development life cycle practices, data analysis and database management as well as problem solving, collaboration and interpersonal skills.<br />
          </p>

          <p>
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
            Networking & IT: System Troubleshooting, OS Navigation, Hardware Support <br />
            Programming: SQL, Java, JavaFX, Python, C++, JavaScript, TypeScript, React, HTML, CSS, UI/UX Design<br />
            Data & Cloud: Data Analysis, Database Design, Database Management, Microsoft SQL Server, Supabase, Azure<br />
            Tools & Platforms: Git/GitHub, Microsoft 365, Google Workspace, Excel, Figma/Canva, VMware, XAMPP, ZAP, IDEs<br />
            Soft Skills: Problem Solving, Agile/Scrum, Communication, Customer Service, Multitasking, Time Management,
            Attention to Detail, Independence, Collaboration, Interpersonal Skills
          </p>
        </div>


        {/* Experience Container */}
        <div className="about-container experience">
          <h2>Career  </h2>

          <div className="experience-item">
            <h4>Custom Computer Specialists | Hauppauge NY | Dec 2025 - Present</h4>
            <p>IT Deployment Technician | Full Time</p>
            <ul>
              <li>Northwell OCIO; Travel and transportation of hardware to various Northwell Health facilities</li>
              <li>Install new peripherals and related drivers if needed, perform EPIC testing to validate device readiness for application Go-Live</li>
              <li>Integrate new workstations into the network environment, test and troubleshoot functionality of workstation hardware/software</li>
            </ul>
          </div>

          <div className="experience-item">
            <h4>BPL Web Development | NY | May 2025 - Present</h4>
            <p>Web Developer | Freelance</p>
            <ul>
              <li>Collaborate directly with client companies to define requirements and tailor requested products</li>
              <li>Applied full stack software engineering practices to design and develop websites</li>
              <li>Provided technical support and troubleshooting across frontend and backend</li>
              <li>Launched a startup with two peers, delivering custom web solutions for businesses</li>
            </ul>
          </div>

          <div className="experience-item">
            <h4>J. C. Broderick & Associates, Inc. | Hauppauge NY | May 2025 - Oct 2025</h4>
            <p>Air Sampling Field Technician | Intern</p>
            <ul>
              <li>Conduct licensed asbestos air monitoring at active abatement sites in compliance with NYSDOL regulations</li>
              <li>Collect, calibrate, and document air samples for lab analysis</li>
              <li>Maintain detailed field reports while working alongside project managers / contractors</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Aboutme;