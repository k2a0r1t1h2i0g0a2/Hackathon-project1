function generatePDF() {
  var pdf = new jsPDF({
    orientation: "p",
    unit: "mm",
    format: "a5",
    putOnlyUsedFonts: true,
  });

  const resumeContent = `
    Karthiga
    
    Web Developer
    
    Contact Information:
    Email: john@example.com
    Phone: (123) 456-7890
    LinkedIn: linkedin.com/in/johndoe
    GitHub: github.com/johndoe
    
    Summary:
    I am a web developer with 1 year of experience in MERN stack development. 
    I specialize in creating responsive and user-friendly web applications.
    
    Skills:
    - HTML5
    - CSS3
    - JavaScript
    - React.js
    - Node.js
    - Express.js
    - MongoDB
    - ...
    
    Experience:
    Web Developer - ABC Company (2022 - Present)
    - Developed and maintained web applications using the MERN stack.
    - Collaborated with a team of developers to deliver high-quality software.
    
    Education:
    - Bachelor's in Computer Science - XYZ University (2021)
    
    Projects:
    - Project 1: Description of Project 1
    - Project 2: Description of Project 2
    - ...
    
    Certifications:
    - Certified Web Developer (2022)
    
    Languages:
    - English (Fluent)`;
    
  pdf.text(resumeContent, 10, 10);
  pdf.save("Resume.pdf");
}
