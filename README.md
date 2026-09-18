# Protect Pleasantville

Static website for https://protectpleasantville.org, hosted on GitHub Pages.

## Files

- `index.html`: homepage and Formspree signup form.
- `the-facts.html`: project concerns and ways to get involved.
- `site.css`: shared accessibility and navigation styles.
- `CNAME`: custom domain; preserve this file when publishing.
- `social_thumbnail_v2.png`: social sharing image.

There is no build step. Both pages currently load Tailwind CSS from its runtime CDN, Google Fonts, and (on the homepage) an Unsplash image.

## Local preview

From the repository root, run `python3 -m http.server 8000`, then open http://localhost:8000.

Before publishing, check both pages at mobile, tablet, and desktop widths; open the mobile menu and follow section links; navigate with the keyboard; and verify local links and form validation. Do not submit test subscriptions to the live Formspree endpoint without coordinating with the site owner.

## Publishing

The GitHub remote is https://github.com/jconoranderson/-protect-pleasantville.git. The public site responds from GitHub Pages. Confirm the publishing branch and folder under GitHub **Settings → Pages** before the first deployment; the unauthenticated Pages API does not expose these settings.

1. Review the changes with `git diff` and run `git diff --check`.
2. Commit the approved website files.
3. Push to the configured publishing branch (the current local branch is `main`).
4. Check the Pages deployment status in GitHub, then verify both live pages and the custom domain after deployment completes.

## Remaining review items

- The project claims, quotations, figures, and “Important Update” lack primary-source links and dates. Their factual accuracy and currency have not been verified in this technical review.
- Replace the Tailwind runtime CDN with a generated, versioned stylesheet in a future performance/reliability update.
- Confirm Formspree delivery and the configured post-submission redirect with the account owner. This review does not submit personal information or verify inbox delivery.
