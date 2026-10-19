# Oliver Vu - Academic Website

A responsive, dependency-free academic portfolio inspired by the structure of https://winstonliyt.github.io/.

## Run locally
Open `index.html` in your browser, or from this folder run:

```bash
python3 -m http.server 8000
```

Visit http://localhost:8000.

## Deploy via GitHub Pages
Create a repository called `<YOUR-GITHUB-USERNAME>.github.io`, upload `index.html`, `styles.css`, `script.js`, and the `assets/` folder to the repository root, then enable GitHub Pages from the `main` branch in Settings → Pages. Alternatively deploy this folder on Netlify or Vercel.

## Before publication (important)
- Replace the `OV` initials in the sidebar with your own portrait; style a new `<img>` element with `.portrait` and `object-fit:cover`.
- Replace `YOUR_EMAIL_HERE` and the generic GitHub/Google Scholar placeholders with your real links.
- Add final exact publication titles, co-authors, abstracts, and links. Especially the AXIOM paper and TMLR/AISTATS submissions.
- Confirm exact job employment dates, affiliations, your official honours award date, and project/package repository.
- Review unit titles: QUT changes titles across handbook years. Current DSB102: Introduction to Machine Learning; CAB201 historical: Programming Principles; MXB107 historical: Introduction to Statistical Modelling; IFB104 current: Introduction to Programming.
- LinkedIn public profile could not be fetched directly; employment information is based on previously supplied details.

Built without frameworks so everything is easy to edit.


## Organisation logos & links
The Experience section features linked image logos for Quantium, Suncorp Group, PwC Australia, and QUT. Each organisation name and logo links directly to its official website. The QUT name is also linked in the Education section. All logos are currently referenced via external image URLs (they are not shipped as separate image files); JavaScript supplies a readable monogram fallback if an image cannot load. You may replace the image `src` values in `index.html` with approved local logo assets for a fully offline-compatible website.

Official sites:
- Quantium: https://quantium.com/
- Suncorp Group: https://www.suncorpgroup.com.au/
- PwC Australia: https://www.pwc.com.au/
- QUT: https://www.qut.edu.au/

Image credit/source URLs (brand logos belong to their respective trademark owners):
- Quantium: https://www.thefastmode.com/media/k2/items/src/2f4ef0deb525622fe67021ccc13da69d.jpg?t=20211117_003022
- Suncorp: https://companieslogo.com/img/orig/SUN.AX_BIG-25b9180f.png?t=1607533787
- PwC: https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/PwC_2025_Logo.svg/3840px-PwC_2025_Logo.svg.png
- QUT: https://www.insightgroup.com.au/media/cache/8a/b6/8ab60dda68ef3ef2649325d48414dcda/qut_logo.webp

**Important QUT logo permission:** QUT advises that using its official logo on external publications requires approval from its Brand and Creative Studio (brandandcreative@qut.edu.au). Confirm permission before publishing your public site: https://www.qut.edu.au/about/governance-and-policy/corporate-identity-and-qut-logo

These logos are for identifying past employers and educational institutions; using them does not imply their endorsement of this website.
