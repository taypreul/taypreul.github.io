---
# Leave the homepage title empty to use the site title
title: ''
date: 2022-10-24
type: landing

design:
  # Default section spacing
  spacing: '6rem'

sections:
  - block: resume-biography-3
    content:
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin
      text: ''
      # Show a call-to-action button under your biography? (optional)
      button:
        text: Download CV
        url: uploads/resume.pdf
      headings:
        about me: ''
        education: ''
        interests: ''
    design:
       background:
    image:
      # Name of image in `assets/media/`.
      filename: IMG_2542.jpg
      size: cover
      # Image focal point. Options include `left`, `center` (default), or `right`.
      position: center
      # Text color (true=light, false=dark, or remove for the dynamic theme color).
      text_color_light: true
      # Avatar customization
      avatar:
        size: medium # Options: small (150px), medium (200px, default), large (320px), xl (400px), xxl (500px)
        shape: circle # Options: circle (default), square, rounded
  - block: markdown
    content:
      title: '📚 My Research'
      subtitle: ''
      text: |-
         I am a jack-of-all trades scientist broadly interested in fisheries ecology. I'm currently a research scientist with the WI DNR based at the Escanaba Lake Research Station. 
    design:
      columns: '1'
  - block: collection
    id: papers
    content:
      title: Publications
      filters:
        folders:
          - publications
        featured_only: true
    design:
      view: article-grid
      columns: 2
      card:
        # Card background color (CSS class)
        css_class: 'bg-primary-300 dark:bg-primary-700'
        css_style: ''
---
