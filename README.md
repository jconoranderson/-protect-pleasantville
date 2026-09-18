# Protect Pleasantville

Static campaign website hosted on GitHub Pages at https://protectpleasantville.org.

## Editing and preview

There is no build step, runtime CSS framework, external font, or third-party script. HTML, CSS, and JavaScript are served directly. Form submissions use the existing Formspree endpoint.

- `index.html`: action center, September meeting account, evidence hub, public petition, contact draft, resources, and campaign request form.
- `the-facts.html`: standalone evidence hub. Keep its five evidence panels in sync with the homepage.
- `site.css`: shared responsive styling, focus states, reduced motion, and print styles.
- `site.js`: mobile menu behavior, linked accordions, request intent, editable email draft, clipboard, and print expansion.
- `assets/`: printable campaign flyer (HTML and PDF), scalable lawn-sign SVG, and social card PNG.
- `CNAME`: custom domain; preserve when publishing.

Run `python3 -m http.server 8000` and open http://localhost:8000. Run `python3 scripts/check_site.py`, `node --check site.js`, and `git diff --check` before publishing.

The flyer PDF is exported from `assets/campaign-flyer.html` using Chrome with backgrounds enabled, Letter paper, and no margins. Its wording intentionally does not promise a confirmed hearing or vote. Lawn-sign artwork is a 24 × 18-inch SVG; a printer may need outlined text and bleed adjustments.

## Content that needs organizer input

1. The public petition links directly to the organizer-supplied Change.org page. The paper protest petition is separate and is not promoted as an online signup.
2. Supply the September 14 resolution, adopted minutes, or timestamped recording to substantiate the campaign’s 4–1 vote and meeting account. These statements are attributed to the campaign on the page.
3. Supply the October 26 rezoning hearing/vote notice and remote participation link. The official Village schedule confirms a Board meeting, not the specific hearing or vote. The site links to the official agenda and makes that distinction.
4. Confirm who fulfills lawn-sign requests. They use the existing campaign Formspree endpoint with `interest=lawn-sign`; availability is not guaranteed.
5. Attach dated exports and assumptions for the proposed 895 daily trips, DOT count, crash totals, soil ratings, and original EAF answers. The site labels these campaign scenarios/questions rather than verified agency findings.

## Source and wording decisions

See `CONTENT_REVIEW.md` for references and corrections to the supplied brief. In particular, the protest threshold concerns land area, the latest applicant memorandum describes an occupied second office building, and a protest does not permanently bar future applications.

The email action addresses the Mayor and four Trustees in the official directory and copies the Clerk. No messages are sent automatically. Form submissions remain standard HTML POSTs to Formspree; delivery and account settings must be checked by the account owner.

## Verification

The September 2026 redesign was checked in Chrome at 320, 375, 768, 1024, 1280, and 1440 pixels; keyboard navigation, mobile menus, accordions and deep links, editable email links, clipboard behavior, request selection, no-JavaScript fallback, and an intercepted form POST were exercised. Accessibility was checked with axe-core against WCAG A/AA rules. No live subscription or email was sent during testing.

## Publishing

Remote: https://github.com/jconoranderson/-protect-pleasantville.git. Push approved commits to `main`, then verify the GitHub Pages deployment and both live HTML pages, CSS/JS, and downloadable assets. A successful push can precede the public update by a minute or more.
