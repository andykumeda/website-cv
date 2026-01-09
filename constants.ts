
export const RESUME_MARKDOWN = `
# ANDY KUMEDA
**Senior Cisco Network Engineer | Network Architect**

📧 andy@kumeda.com | 📱 (310) 493-1793 | 🌐 [andykumeda.com](https://andykumeda.com)
[LinkedIn](https://www.linkedin.com/in/andykumeda/) | [GitHub](https://github.com/andykumeda) | CCIE #3406

---

## PROFESSIONAL SUMMARY

Accomplished Senior Network Engineer with **over 25 years of hands-on experience** in complex, multi-platform enterprise environments. **CCIE #3406** with deep expertise in Cisco routing, switching, and security architecture. Proven track record in **mission-critical clinical environments** and high-density deployments supporting large-scale enterprise infrastructures. Expert in network modernization, SD-Access/ISE migrations, and packet-level traffic analysis. Strong leadership skills with experience mentoring technical teams and aligning infrastructure with strategic business goals.

---

## CORE COMPETENCIES

*   **Cisco Enterprise Architecture:** Catalyst 9000 series, Catalyst Center, SD-Access, ISE, ASA/Firepower, IOS-XE.
*   **Routing & Switching:** OSPF, BGP, EIGRP, ISIS, VXLAN, MPLS, QoS, Multicast, MetroEthernet.
*   **Security & Compliance:** NAC (ISE), IDS/IPS, Firewalls (Fortigate, ASA), VPN, FIPS 140-2, CJIS, SOX, PCI.
*   **Network Intelligence:** Packet-level analysis (Wireshark), SolarWinds, Vulnerability/Penetration Testing.
*   **Automation & DevOps:** Ansible, Python, Infrastructure-as-Code (IaC), Terraform.
*   **Leadership:** Project Management, Vendor Management, Team Mentorship, Strategic Planning.

---

## PROFESSIONAL EXPERIENCE

### Ventura County Health Care Agency (VCHCA)
**Senior Network Engineer** | *2023 – Present*

*Lead network architect for an enterprise clinical and corporate network, ensuring high availability for mission-critical hospital systems.*

*   **Modernization Leadership:** Architected and leading the migration of legacy Cisco infrastructure to **Catalyst 9000 series** platforms across campus and data center environments.
*   **SDN Migration:** Designing and deploying **Cisco SD-Access** and **ISE** for Network Access Control (NAC), replacing legacy authentication infrastructure to enhance security and segmentation.
*   **Enterprise Routing:** Optimized large-scale routing using **BGP, OSPF, and EIGRP** to support critical medical applications and multi-site connectivity.
*   **Security Integration:** Implementing automated security policies and segmentation to ensure regulatory compliance and protect sensitive data.
*   **Troubleshooting & Analysis:** Performing deep **packet-level analysis** to resolve complex latency and connectivity issues in a 24/7 clinical environment.

### Delta9 Technology, LLC
**Principal Consultant** | *2017 – 2023*

*   **Security Compliance:** Architected enterprise security solutions for law enforcement, incorporating IPS/IDS and firewalls compliant with **FBI CJIS** and **FIPS 140-2** standards.
*   **Infrastructure Design:** Designed high-availability network architectures for high-tech startups and universities, managing distributed deployments across multiple campuses.
*   **Threat Mitigation:** Led security incident response programs, implementing threat detection and remediation procedures.

### DexYP
**Network Architect** | *2015 – 2017*

*   **Enterprise Solutions:** Designed WAN/LAN and wireless architectures across a distributed enterprise, integrating **NFV and SDN** technologies.
*   **Automation:** Developed automation frameworks using **Ansible and Python** to streamline configuration management.
*   **Custom Tooling:** Built a custom DCIM application to track physical inventory and location data across multiple Tier 4 data centers.

### YP (Yellowpages.com)
**Executive Director, Network & Telecom** | *2012 – 2015*

*   **Strategic Oversight:** Managed performance metrics, SLAs, and infrastructure budgets for distributed enterprise network and telephony operations.

### AT&T Interactive
**Associate Director, Voice & Data** | *2009 – 2012*

*   **Data Center Expansion:** Engineered and built **Tier 4 high-density data centers**, supporting global-scale production and redundant multi-vendor environments.

---

## CERTIFICATIONS

*   **Cisco Certified Internetwork Expert (CCIE #3406)** – Routing & Switching
*   **CCIE Re-certifications:** Security, IP, VoIP, Service Provider, Data Center
*   **Certified Enterprise Blockchain Professional (CEBP)**

---

## EDUCATION

**Bachelor of Science in Computer Science and Engineering**
*California State University, Long Beach*
`;

export const SYSTEM_PROMPT = `
You are Andy Kumeda's Professional AI Assistant. You have access to Andy's resume and extensive background in network engineering.
Your goal is to answer questions from recruiters or potential employers about Andy's skills (Cisco, Routing, Security, SDN), his 25+ years of experience, and his CCIE #3406 certification.

Context:
${RESUME_MARKDOWN}

Always maintain a professional, technical, and helpful tone. If they want to contact Andy directly, they should use the contact details (email/phone) provided in the resume.
`;
