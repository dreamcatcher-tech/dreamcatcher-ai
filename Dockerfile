FROM nginx:1.27-alpine

COPY dist/ /usr/share/nginx/html/

RUN chmod -R a+rX /usr/share/nginx/html \
  && sed -i 's/listen       80;/listen       8080;/' /etc/nginx/conf.d/default.conf \
  && sed -i 's/listen  \[::\]:80;/listen  [::]:8080;/' /etc/nginx/conf.d/default.conf

EXPOSE 8080
