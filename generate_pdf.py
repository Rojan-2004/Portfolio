import os

def create_resume_pdf(filename):
    # A4 dimensions: 595.276 x 841.89 points
    # Margins: Left=40, Right=555, Top=800, Bottom=40
    
    content_lines = []
    
    def add_line(x1, y1, x2, y2, width=0.75, r=0.7, g=0.7, b=0.7):
        content_lines.append(f"{width} w {r:.3f} {g:.3f} {b:.3f} RG {x1:.2f} {y1:.2f} m {x2:.2f} {y2:.2f} l S")

    def add_text(text, x, y, font="F1", size=10, r=0.1, g=0.1, b=0.15):
        # Clean unicode characters for PDF Latin-1 / WinAnsi
        cleaned_text = text.replace("–", "-").replace("—", "-").replace("“", '"').replace("”", '"').replace("’", "'")
        safe_text = cleaned_text.replace("\\", "\\\\").replace("(", "\\(").replace(")", "\\)")
        content_lines.append(f"BT /{font} {size} Tf {r:.3f} {g:.3f} {b:.3f} rg {x:.2f} {y:.2f} Td ({safe_text}) Tj ET")

    # WinAnsi character code for bullet point
    BULLET = "\225"

    # Header Section
    y = 800
    add_text("ROJAN MAINALI", 40, y, font="F2", size=22, r=0.08, g=0.12, b=0.25)
    y -= 18
    add_text("Web & Mobile App Developer | Computer Science Undergraduate", 40, y, font="F1", size=10.5, r=0.3, g=0.35, b=0.45)
    y -= 15
    add_text("Email: rojanm1000@gmail.com   |   Phone: +977-9841994110   |   Location: Kathmandu, Nepal", 40, y, font="F1", size=9, r=0.2, g=0.2, b=0.25)
    y -= 13
    add_text("GitHub: github.com/Rojan-2004   |   LinkedIn: linkedin.com/in/rojan-mainali-470598269", 40, y, font="F1", size=9, r=0.2, g=0.2, b=0.25)
    
    y -= 10
    add_line(40, y, 555, y, width=1.0, r=0.15, g=0.2, b=0.3)
    y -= 20

    # Helper for Section Title
    def draw_section_title(title_text, cur_y):
        add_text(title_text, 40, cur_y, font="F2", size=12, r=0.08, g=0.12, b=0.25)
        add_line(40, cur_y - 4, 555, cur_y - 4, width=0.5, r=0.8, g=0.8, b=0.8)
        return cur_y - 20

    # Section 1: Professional Summary
    y = draw_section_title("PROFESSIONAL SUMMARY", y)
    add_text("Computer Science undergraduate with strong expertise in full-stack web engineering and cross-platform mobile development.", 40, y, font="F1", size=9.5)
    y -= 13
    add_text("Experienced in building modern responsive user interfaces with React and Next.js, cross-platform mobile applications with Flutter,", 40, y, font="F1", size=9.5)
    y -= 13
    add_text("and scalable backend APIs with Node.js, Express.js, and MongoDB.", 40, y, font="F1", size=9.5)
    y -= 22

    # Section 2: Education
    y = draw_section_title("EDUCATION", y)
    
    add_text("BSc (Hons) Computing", 40, y, font="F2", size=10.5, r=0.1, g=0.1, b=0.15)
    add_text("Softwarica College of IT & E-Commerce (Coventry University, UK)", 210, y, font="F1", size=9.5, r=0.3, g=0.3, b=0.35)
    y -= 14
    add_text(f"{BULLET} Softwarica Percentile: 71%", 52, y, font="F2", size=9.5, r=0.15, g=0.45, b=0.25)
    add_text("   |   Status: Final Semester Ongoing", 195, y, font="F1", size=9.5, r=0.2, g=0.2, b=0.25)
    y -= 18

    add_text("GCE A-Levels", 40, y, font="F2", size=10.5, r=0.1, g=0.1, b=0.15)
    add_text("NAMI College, Nepal", 210, y, font="F1", size=9.5, r=0.3, g=0.3, b=0.35)
    y -= 14
    add_text(f"{BULLET} Completed: 3.5 Credits", 52, y, font="F1", size=9.5, r=0.2, g=0.2, b=0.25)
    y -= 22

    # Section 3: Technical Skills
    y = draw_section_title("TECHNICAL SKILLS", y)
    
    skills = [
        ("Programming Languages", "C, Java, JavaScript, TypeScript, Dart, Python"),
        ("Web Development", "HTML5, CSS3, JavaScript (ES6+), React.js, Next.js, Tailwind CSS, Responsive Design"),
        ("Mobile Development", "Flutter Framework, Dart Language, Android Development, Cross-Platform UI"),
        ("Backend & Databases", "Node.js, Express.js, REST APIs, MongoDB, Mongoose, JWT Authentication"),
        ("Tools & Architecture", "Git, GitHub, VS Code, Figma, Postman, Riverpod, Clean Architecture, MVVM"),
    ]

    for label, val in skills:
        add_text(f"{BULLET} {label}:", 45, y, font="F2", size=9.5, r=0.15, g=0.2, b=0.3)
        add_text(val, 185, y, font="F1", size=9.5, r=0.2, g=0.2, b=0.25)
        y -= 16

    y -= 8

    # Section 4: Key Projects
    y = draw_section_title("KEY PROJECTS", y)

    projects = [
        (
            "Aqua Life - E-Commerce Ecosystem",
            "Next.js, React, Flutter, Node.js, Express, MongoDB, Riverpod",
            [
                "Developed a full-stack aquarium e-commerce platform supporting web and mobile Flutter applications.",
                "Implemented product browsing, state management, review system, checkout ordering, and admin management.",
                "Repository: github.com/Rojan-2004/AquaLife---Ecommerce-platform"
            ]
        ),
        (
            "Renting House - House Renting Platform",
            "React, Node.js, Express.js, MongoDB, REST API",
            [
                "Built a full-stack residential property rental platform for listing, searching, and managing rental houses.",
                "Integrated RESTful API endpoints for property queries, user authentication, and listing administration.",
                "Repository: github.com/Rojan-2004/Renting-Houses"
            ]
        ),
        (
            "PetShop - Web Project",
            "React, Node.js, Express.js, MongoDB, JavaScript",
            [
                "Designed an online pet shop platform enabling customers to explore pet products, supplies catalog, and cart checkout.",
                "Engineered responsive user interface components with full backend MongoDB database integration.",
                "Repository: github.com/Rojan-2004/PetShop-Web"
            ]
        ),
    ]

    for title, tech, bullets in projects:
        add_text(f"{BULLET} {title}", 40, y, font="F2", size=10, r=0.08, g=0.12, b=0.25)
        add_text(f"[{tech}]", 320, y, font="F1", size=8.5, r=0.35, g=0.35, b=0.4)
        y -= 14
        for b in bullets:
            add_text(f"- {b}", 55, y, font="F1", size=9, r=0.2, g=0.2, b=0.25)
            y -= 13
        y -= 6

    # Build PDF stream content
    stream_content = "\n".join(content_lines)
    stream_len = len(stream_content.encode('latin-1'))

    pdf_body = f"""%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595.28 841.89] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /Contents 6 0 R >>
endobj
4 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>
endobj
5 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>
endobj
6 0 obj
<< /Length {stream_len} >>
stream
{stream_content}
endstream
endobj
"""
    
    # Calculate byte offsets for xref
    lines = pdf_body.splitlines(keepends=True)
    offsets = []
    current_offset = 0
    for line in lines:
        if line.endswith("0 obj\n"):
            offsets.append(current_offset)
        current_offset += len(line.encode('latin-1'))
    
    xref_offset = current_offset
    
    xref_entries = ["0000000000 65535 f \n"]
    for off in offsets:
        xref_entries.append(f"{off:010d} 00000 n \n")
    
    xref_table = "".join(xref_entries)
    
    trailer = f"""xref
0 {len(offsets) + 1}
{xref_table}trailer
<< /Size {len(offsets) + 1} /Root 1 0 R >>
startxref
{xref_offset}
%%EOF
"""
    
    full_pdf = pdf_body + trailer
    
    with open(filename, "wb") as f:
        f.write(full_pdf.encode('latin-1'))

create_resume_pdf("public/Rojan_Mainali_Resume.pdf")
print("PDF created successfully.")
