# Resume Section Configuration Guide

## Dynamic Section Rendering

Your resume now supports dynamic section rendering based on the `config.sectionOrder` array in `resume.json`.

### How It Works

1. **Section Order**: Sections appear in the order specified in `sectionOrder`
2. **Optional Sections**: If a section has no data or is omitted, it won't render
3. **Custom Titles**: Use `config.titles` to customize section headers

### Configuration Example

```json
{
  "config": {
    "titles": {
      "summary": "Professional Summary",
      "experience": "Professional Experience",
      "skills": "Technical Expertise",
      "education": "Education",
      "certifications": "Certifications",
      "projects": "Selected Projects"
    },
    "sectionOrder": ["summary", "experience", "projects", "skills", "certifications", "education"]
  }
}
```

### Available Sections

- `summary` - Professional summary paragraph
- `experience` - Work history
- `projects` - Project highlights
- `skills` - Technical skills
- `education` - Education background
- `certifications` - Certifications and awards

### Hiding Sections

To hide a section, either:
1. Remove it from `sectionOrder` array
2. Remove the data from the JSON (e.g., delete the `projects` array)
3. Set it to empty/null

### Default Order

If `sectionOrder` is not specified, the default order is:
`["summary", "experience", "projects", "skills", "education", "certifications"]`

### Custom Titles

To hide a section title, omit it from `config.titles` or set it to an empty string.

Example:
```json
{
  "config": {
    "titles": {
      "summary": "",  // No title will be shown
      "experience": "Work History"  // Custom title
    }
  }
}
```
