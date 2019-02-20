FROM nginx

RUN gulp dist

COPY static-html-directory /usr/share/nginx/html


EXPOSE 3030

