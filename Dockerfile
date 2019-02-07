FROM nginx

COPY ./initialize.sh /

RUN chmod +x /initialize.sh

RUN ./initialize.sh

COPY ./etc/fitme /etc/nginx/nginx.conf