// General Elements
const body = document.body;
const btnTheme = document.querySelector(".fa-moon");
const btnHamburger = document.querySelector(".fa-bars");
const certificationCard = document.getElementById("certification-card");

// Theme Management
const addThemeClass = (bodyClass, btnClass) => {
  body.classList.add(bodyClass);
  btnTheme.classList.add(btnClass);
};

const setTheme = (bodyClass, btnClass) => {
  const prevBodyTheme = localStorage.getItem("portfolio-theme");
  const prevBtnTheme = localStorage.getItem("portfolio-btn-theme");

  if (prevBodyTheme) body.classList.remove(prevBodyTheme);
  if (prevBtnTheme) btnTheme.classList.remove(prevBtnTheme);

  addThemeClass(bodyClass, btnClass);
  localStorage.setItem("portfolio-theme", bodyClass);
  localStorage.setItem("portfolio-btn-theme", btnClass);
};

const toggleTheme = () =>
  body.classList.contains("dark")
    ? setTheme("light", "fa-moon")
    : setTheme("dark", "fa-sun");

// Initial Theme Setup
addThemeClass(localStorage.getItem("portfolio-theme"), localStorage.getItem("portfolio-btn-theme"));
btnTheme.addEventListener("click", toggleTheme);

// Hamburger Menu Toggle
const displayList = () => {
  const navUl = document.querySelector(".nav__list");
  btnHamburger.classList.toggle("fa-bars");
  btnHamburger.classList.toggle("fa-times");
  navUl.classList.toggle("display-nav-list");
};

btnHamburger.addEventListener("click", displayList);

// Scroll-to-Top Button
const scrollUp = () => {
  const btnScrollTop = document.querySelector(".scroll-top");
  btnScrollTop.style.display =
    window.scrollY > 500 ? "block" : "none";
};

document.addEventListener("scroll", scrollUp);

// Certification Carousel
document.addEventListener("DOMContentLoaded", () => {
	const certifications = [
		{
			title: "AWS APAC - Solutions Architecture Simulation",
			issuer: "Forage",
			date: "Issued: Sep 2024",
			description: "Designed scalable and cost-efficient cloud architectures using AWS services to solve real-world challenges, including system reliability and disaster recovery.",
			skills: [
				"AWS Solutions Architecture",
				"Cloud Optimization",
				"Disaster Recovery Planning"
			],
			icon: "images/image.png",
			link: "https://www.theforage.com/simulations/aws-apac/solutions-architecture"
		},
		
		{
			title: "Security & Identity Fundamentals",
			issuer: "Google Cloud",
			date: "Issued: Nov 2024",
			description: "Learned core principles of cloud security, identity management, and secure connectivity using Google Cloud Platform (GCP) tools.",
			skills: [
				"Identity and Access Management (IAM)",
				"Cloud Security Basics",
				"VPNs and Network Protection"
			],
			icon: "images/google.png",
			link: "https://cloud.google.com/training/certifications"
		},
		
		
		{
			title: "CompTIA A+ Certification",
			issuer: "CompTIA",
			date: "Issued: May 2023 · Expires: May 2025",
			description: "Validated IT skills in hardware, software troubleshooting, and operating system configuration across diverse environments.",
			skills: [
				"Hardware & Software Troubleshooting",
				"Operating Systems (Windows, Linux, macOS)",
				"IT Infrastructure Maintenance"
			],
			icon: "images/CompTIA.png",
			link: "https://www.comptia.org/certifications/a"
		},
		
		
	];
  
	const certificationCard = document.getElementById("certification-card");
	let currentIndex = 0;
  
	const renderCertification = () => {
		// Add fade-out effect
		certificationCard.classList.add("fade-out");
	
		// Wait for the fade-out animation to complete
		setTimeout(() => {
			// Destructure current certification
			const {
				icon,
				issuer,
				title,
				date,
				id,
				description,
				highlights,
				skills,
				link,
			} = certifications[currentIndex];
	
			// Distribute and organize sections logically
	
			// Certification Header
			const certificationHeader = `
				<div class="certification__header">
					<img src="${icon}" alt="${issuer} Logo" class="certification__icon" />
					<h3 class="certification__title">${title}</h3>
				</div>
			`;
	
			// Certification Metadata
			const certificationMetadata = `
				<div class="certification__metadata">
					<p><strong>Issuer:</strong> ${issuer}</p>
					<p><strong>Date:</strong> ${date}</p>
					${id ? `<p><strong>Credential ID:</strong> ${id}</p>` : ""}
				</div>
			`;
	
			// Certification Description
			const certificationDescription = `
				<div class="certification__description">
					<p>${description}</p>
				</div>
			`;
	
			// Key Highlights Section
			const highlightsSection = highlights?.length
				? `
				<div class="certification__section">
					<h4>Key Highlights:</h4>
					<ul class="certification__list">
						${highlights.map((item) => `<li>${item}</li>`).join("")}
					</ul>
				</div>
				`
				: "";
	
			// Skills Section
			const skillsSection = skills?.length
				? `
				<div class="certification__section">
					<h4>Skills Gained:</h4>
					<ul class="certification__list">
						${skills.map((skill) => `<li>${skill}</li>`).join("")}
					</ul>
				</div>
				`
				: "";
	
			// Credential Link
			const credentialLink = `
				<div class="certification__link-container">
					<a href="${link}" class="certification__link" target="_blank">Show Credential</a>
				</div>
			`;
	
			// Combine Sections into Certification Card
			certificationCard.innerHTML = `
				<div class="certification__card-container">
					${certificationHeader}
					${certificationDescription}
					${highlightsSection}
					${skillsSection}
					${certificationMetadata}
					${credentialLink}
				</div>
			`;
	
			// Switch fade-out to fade-in effect
			certificationCard.classList.replace("fade-out", "fade-in");
	
			// Update the index for the next certification
			currentIndex = (currentIndex + 1) % certifications.length;
		}, 1000); // Matches CSS fade-out duration
	};
	
	// Initial render
	renderCertification();
	
	// Rotate certifications every 6 seconds
	setInterval(renderCertification, 6000)});
	