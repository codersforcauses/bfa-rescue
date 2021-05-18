#
# MailHog Dockerfile
#

FROM golang:buster

RUN apt-get update && apt-get install -y \
  figlet=2.2.5-3 \
  postgresql-client-11=11.7-0+deb10u1 \
  git=1:2.20.1-2+deb10u3 \
  && rm -rf /var/lib/apt/lists/* \
  && mkdir -p /root/gocode \
  && export GOPATH=/root/gocode \
  && go get github.com/mailhog/MailHog \
  && mv /root/gocode/bin/MailHog /usr/bin \
  && rm -rf /root/gocode

RUN useradd -ms /bin/bash mailhog

# Copy runtime script & make it executable
COPY /docker/mailhog/runtime.sh /runtime.sh
RUN chmod +x /runtime.sh

USER mailhog

WORKDIR /home/mailhog

# Generate a timestamp of when this image was created for display in the logs / as the container comes up. Used as a sanity check.
RUN date > build_timestamp.txt
RUN cat build_timestamp.txt
RUN figlet 'BFA - MAILHOG'

# Expose the SMTP and HTTP ports:
EXPOSE 1025 8025

# ========================================
# ---- Executed at Container Runtime ----
# ========================================
# CMD commands get executed at container runtime!
CMD ["/runtime.sh"]
