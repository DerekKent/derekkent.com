FROM mhart/alpine-node:latest

# Build Essentials
RUN apk add --no-cache --update alpine-sdk bash openssh

# Ruby
RUN apk add --no-cache ruby ruby-dev ruby-bundler
RUN gem install bundler json scss_lint --no-document

# Node
RUN npm install -g gulp-cli jspm@beta nyc ava
