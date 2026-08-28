# Local stand-in for Netlify's pretty-URL behaviour: /gatherings -> gatherings.html
import http.server, os, socketserver
os.chdir(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..'))

class H(http.server.SimpleHTTPRequestHandler):
    def translate_path(self, path):
        p = super().translate_path(path)
        if not os.path.exists(p) and not path.rstrip('/').endswith('.html'):
            cand = p.rstrip('/') + '.html'
            if os.path.exists(cand):
                return cand
        return p
    def end_headers(self):
        # No caching locally, or edited CSS/JS silently serves stale while you
        # stare at an unchanged page. Netlify handles real caching in production.
        self.send_header('Cache-Control', 'no-store, must-revalidate')
        super().end_headers()

    def log_message(self, *a): pass

socketserver.TCPServer.allow_reuse_address = True
with socketserver.TCPServer(("127.0.0.1", 8788), H) as httpd:
    print("serving on 8788", flush=True)
    httpd.serve_forever()
