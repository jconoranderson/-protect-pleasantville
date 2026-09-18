"""Check local website links and basic document structure without dependencies."""
from collections import Counter
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit

ROOT = Path(__file__).resolve().parent.parent


class Page(HTMLParser):
    def __init__(self, path):
        super().__init__()
        self.ids = []
        self.links = []
        self.counts = Counter()
        self.feed(path.read_text())

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        self.counts[tag] += 1
        if 'id' in attrs:
            self.ids.append(attrs['id'])
        for key in ('href', 'src'):
            if key in attrs:
                self.links.append(attrs[key])


pages = {p: Page(p) for p in ROOT.rglob('*.html') if '.git' not in p.parts}
for path, page in pages.items():
    assert len(page.ids) == len(set(page.ids)), f'Duplicate IDs: {path}'
    assert page.counts['main'] == page.counts['h1'] == 1, f'Expected one main and H1: {path}'
    for link in page.links:
        url = urlsplit(link)
        if url.scheme or url.netloc:
            continue
        dest = (path.parent / unquote(url.path)).resolve() if url.path else path
        assert dest.is_file(), f'Missing local file: {path.name}: {link}'
        if url.fragment:
            assert dest in pages and unquote(url.fragment) in pages[dest].ids, f'Missing anchor: {link}'
    print(f'{path.relative_to(ROOT)}: document structure and local links passed')
