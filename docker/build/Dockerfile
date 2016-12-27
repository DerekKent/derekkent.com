FROM mhart/alpine-node:7.3.0

# Build Essentials
RUN apk add --no-cache --update alpine-sdk bash openssh

# Ruby
RUN apk add --no-cache ruby ruby-dev ruby-bundler
RUN gem install bundler json scss_lint --no-document

# Node
RUN npm install -g gulp-cli jspm@0.17.0-beta.32 nyc ava
