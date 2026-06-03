FROM caddy:2.9-alpine

COPY Caddyfile /etc/caddy/Caddyfile
COPY dist/ /srv/

RUN chmod -R a+rX /srv /etc/caddy/Caddyfile

EXPOSE 80 443
