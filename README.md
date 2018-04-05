<a href="https://derekkent.com">
    <img height="125" src="src/images/kent-for-delegate-441x250.png" alt="Derek Kent for Delegate">
</a>

# Derek Kent for Maryland District 32 Delegate

[![Build Status](https://gitlab.com/DerekKent/derekkent.com/badges/master/build.svg)](https://gitlab.com/DerekKent/derekkent.com/pipelines)
[![Coverage Report](https://gitlab.com/DerekKent/derekkent.com/badges/master/coverage.svg)](https://gitlab.com/DerekKent/derekkent.com/commits/master)
[![Code Climate](https://codeclimate.com/github/DerekKent/derekkent.com/badges/gpa.svg)](https://codeclimate.com/github/DerekKent/derekkent.com)

Welcome to the official repository for the _Derek Kent for Maryland District 32 Delegate_ campaign web site.

This site is targeted at developers who would like to contribute to the campaign with code. If you are looking for the [campaign web site](https://derekkent.com), you can click the logo above. If you'd like to volunteer to improve the site, you can read on to learn how to setup your development environment. You can also take a look through the list of open Issues and read [CONTRIBUTING.md](CONTRIBUTING.md) for more information.

## Requirements

* Node.js v8.11.1+
* Ruby v2.2.3 (for testing)
* Gulp v4.0.0
* JSPM v0.17.0-beta.47
* SCSS-Lint v0.51 (for testing)

## Installation

All Mac installation instructions assume you already have [Homebrew](http://brew.sh) installed.

### Install Node.js

#### macOS

```bash
brew install node
```

#### Debian / Ubuntu

```bash
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs build-essential
sudo ln -s /usr/bin/nodejs /usr/bin/node
```

### Install Ruby

#### macOS

Newer versions of macOS use System Integrity Protection, which prevents modification of certain System directories, even as root.  This also prevents installation of Gems to the System copy of Ruby; therefore, you will need to install a separate copy of Ruby for development.

```bash
brew install rbenv ruby-build

# Add rbenv to bash so that it loads every time you open a terminal
echo 'if which rbenv > /dev/null; then eval "$(rbenv init -)"; fi' >> ~/.bash_profile
source ~/.bash_profile

# Install Ruby
rbenv install 2.2.3
rbenv global 2.2.3
ruby -v
```

#### Debian / Ubuntu

```bash
# Install Ruby Dependencies
sudo apt-get install git-core curl zlib1g-dev build-essential libssl-dev libreadline-dev libyaml-dev libsqlite3-dev sqlite3 libxml2-dev libxslt1-dev libcurl4-openssl-dev python-software-properties libffi-dev

# Install Ruby
cd
git clone git://github.com/sstephenson/rbenv.git .rbenv
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(rbenv init -)"' >> ~/.bashrc
exec $SHELL

git clone git://github.com/sstephenson/ruby-build.git ~/.rbenv/plugins/ruby-build
echo 'export PATH="$HOME/.rbenv/plugins/ruby-build/bin:$PATH"' >> ~/.bashrc
exec $SHELL

git clone https://github.com/sstephenson/rbenv-gem-rehash.git ~/.rbenv/plugins/rbenv-gem-rehash

rbenv install 2.2.3
rbenv global 2.2.3
ruby -v

# Tell Rubygems to not install documentation for each package locally, then install Bundler
echo "gem: --no-ri --no-rdoc" > ~/.gemrc
gem install bundler
```

### Install SCSS Lint

```bash
gem install scss_lint
```

### Install Gulp

```bash
npm install -g gulp-cli
```

Note: On macOS, you must have Xcode 9.0.1+ installed along with the associated Command Line Tools (Xcode will prompt you to install these when you launch it if they are not installed).

### Install JSPM

```bash
npm install -g jspm
```

Note: If you have not previously used JSPM, you may be prompted to set up your GitHub credentials.  It is recommended you do this in order to prevent being rate limited by GitHub.  You can [generate an access token](https://github.com/settings/tokens) in your GitHub account settings for JSPM, rather than providing your login credentials.

If you are not prompted, you can manually bring it up with:

```bash
jspm registry config github
```

### Install DerekKent.com Repo

```bash
git clone git@gitlab.com:DerekKent/derekkent.com.git
cd derekkent.com
npm install
```

## Development

To build the site for development and load it in your default web browser with [BrowserSync](http://www.browsersync.io), run:

```bash
gulp dev
```

That will create a new `dev` directory from which the site is served.  Changes should be made to files in the `src` directory.  Gulp will automatically watch for changes in `src`, perform any compilation and transpilation necessary, and update the result in `dev`.

You can also run individual tasks.  Enter `gulp --tasks` to see the full list.

## Production

To build the site for production, run:

```bash
gulp dist
```

## Testing

To run the linters and unit tests locally, enter:

```bash
npm test
```

You can also just run the linters (`gulp lint`) or unit tests (`gulp build --test && gulp ava`) individually.

If you have `nyc` installed globally (`npm i -g nyc`), you can also get code coverage (`gulp build --test && nyc gulp ava`).
