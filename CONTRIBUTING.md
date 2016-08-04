# Contributing to DerekKent.com

:flag_us::tada: Thank you for your support! :tada::flag_us:

The following is a set of guidelines for contributing code to the campaign. You can find all public projects related to the campaign hosted in the DerekKent group on [GitLab](https://gitlab.com/groups/DerekKent) and the DerekKent organization on [GitHub](http://github.com/DerekKent).

These are just guidelines, not rules. Use your best judgment and feel free to propose changes to this document in a merge request.

#### Table Of Contents

[What should I know before I get started?](#what-should-i-know-before-i-get-started)
  * [Code of Conduct](#code-of-conduct)
  * [License](#license)
  * [Contributors](#contributors)

[How Can I Contribute?](#how-can-i-contribute)
  * [Reporting Bugs](#reporting-bugs)
  * [Suggesting Enhancements](#suggesting-enhancements)
  * [Merge Requests](#merge-requests)

[Styleguides](#styleguides)
  * [Git Commit Messages](#git-commit-messages)
  * [JavaScript Styleguide](#javascript-styleguide)
  * [SCSS Styleguide](#scss-styleguide)

[Additional Notes](#additional-notes)
  * [Issue and Merge Request Labels](#issue-and-merge-request-labels)

## What should I know before I get started?

### Code of Conduct

This campaign is welcoming of everyone, regardless of age, body size, disability, ethnicity, gender identity and expression, level of experience, personal appearance, race, religion, or sexual identity and orientation. Volunteers and contributors to this campaign are expected to foster and uphold that welcoming environment.

Remember there's another person on the other side of the screen.

### License

This project is licensed under the [CC0 1.0 Universal License](https://creativecommons.org/publicdomain/zero/1.0/), which effectively means that it waives all Copyright claims and is part of the public domain. By contributing to this project, you agree to release all such contributions under the CC0 1.0 license.

That means others may freely reuse and redistribute your contributions for any purposes without being required to provide you attribution or compensation (although nor are they precluded from doing so).

### Contributors

A [humans.txt](https://derekkent.com/humans.txt) file is generated with every release from the project's git log as a small token of thanks to everyone who has generously donated their time, sweat, and code to our success.

## How Can I Contribute?

### Reporting Bugs

You don't have to know how to code to contribute. We make every effort to review and test code, but with the huge variety of different devices and browsers, bugs are an inevitability. If you find an issue, chances are other people are going to be affected by it as well. By reporting issues, you help us improve the user experience and better reach more people to spread our message.

Following the below guidelines helps us more quickly understand and address the issue you're reporting.

#### Before Submitting A Bug Report

* Check the [list of open issues](https://gitlab.com/DerekKent/derekkent.com/issues) to see if somebody else has already reported it.
* Include as many details as possible in your report.
* Read through the [recommendations for submitting a good bug report](#how-do-i-submit-a-good-bug-report).
* Review the [recommended bug reporting template](#template-for-submitting-bug-reports). You don't have to follow it exactly and some sections may not be relevant, but it will help you formulate your report.

#### How Do I Submit A (Good) Bug Report?

Bugs are tracked as [GitLab issues](https://gitlab.com/DerekKent/derekkent.com/issues). After you've determined you're reporting a new issue, create an issue and provide the following:

* A clear and descriptive title
* The URL(s) (web address) where the issue can be replicated, if applicable
* The exact steps to follow to reproduce the problem
* A description of the current behavior you observed and the expected behavior
* Screenshots of the steps and/or issue, as applicable
* The name and version of the browser(s) you used
* The name and version of the Operating System you used
* A printout of anything logged to the console (if you know how)

#### Template For Submitting Bug Reports

    [Short description of problem here]

    URL: [URL where the problem can be seen here]

    **Reproduction Steps:**

    1. [First Step]
    2. [Second Step]
    3. [Other Steps...]

    **Expected behavior:**

    [Describe expected behavior here]

    **Observed behavior:**

    [Describe observed behavior here]

    **Screenshots**

    ![Screenshots which demonstrate the problem](url)

    **Browser and version:** [Enter the browser and version used here]
    **OS and version:** [Enter OS name and version used here]

    **Additional information:**

    * Problem can be reliably reproduced, doesn't happen randomly: [Yes/No]

### Suggesting Enhancements

Enhancements can be big or small. Is there a language you think the project should be translated into? Let us know! Do you think the font size on a page is too small to read easily? That's useful feedback too! If you have an idea to improve the project, or just want to knock around a few ideas, don't hesitate to submit your thoughts.

Following the below guidelines helps us best understand and implement your idea.

#### Before Submitting An Enhancement Suggestion

* Check the [list of open issues](https://gitlab.com/DerekKent/derekkent.com/issues) to see if somebody else has already proposed the same or similar idea. You can always add additional comments on to that thread if you want to expand on or disagree with a suggestion.
* Read through the [recommendations for submitting a good enhancement suggestion](#how-do-i-submit-a-good-enhancement-suggestion).
* Review the [recommended bug reporting template](#template-for-submitting-enhancement-suggestions). You don't have to follow it exactly and some sections may not be relevant, but it will help you formulate your suggestion.

#### How Do I Submit A (Good) Enhancement Suggestion?

Enhancement suggestions are tracked as [GitLab issues](https://gitlab.com/DerekKent/derekkent.com/issues). After you've determined you're suggesting a new enhancement, create an issue and provide the following:

* A clear and descriptive title
* Steps explaining the enhancement, if applicable
* A detailed explanation of the suggested enhancement and current behavior
* Mockups of the suggested enhancement, if applicable and you're able
* An explanation why this enhancement would be useful

If you'd like to suggest a change to a policy position or suggest a position be taken on a policy that isn't covered, you're welcome to open an issue here for public discussion.

#### Template For Submitting Enhancement Suggestions

    [Short description of suggestion]

    **Steps which explain the enhancement**

    1. [First Step]
    2. [Second Step]
    3. [Other Steps...]

    **Current and suggested behavior**

    [Describe current and suggested behavior here]

    **Why would the enhancement be useful to most users**

    [Explain why the enhancement would be useful]

### Merge Requests

* Include screenshots in your merge request whenever possible.
* Follow the [JavaScript](#javascript-styleguide)
  and [SCSS](#scss-styleguide) styleguides.
* End files with a newline.
* Create well-crafted git commits that provide a useful and accurate history.
* Pass all linters and Ava unit tests (`npm test`).

## Styleguides

### Git Commit Messages

* Limit the subject (first) line to 50 characters or less.
* Capitalize the subject line.
* Use the imperative mood in the subject line.
* Do not end the subject line with a period.
* Separate subject from body with a blank line.
* Wrap the body at 72 characters.
* Use the body to explain what and why vs. how (if useful).
* Reference related issues and merge requests.

[Read more](http://chris.beams.io/posts/git-commit/) about how to write a good git commit message.

### JavaScript Styleguide

* Prefer ES2015 classes over prototypes.
* Use strict equality checks (`===` and `!==`).
* Prefer [arrow functions] `=>`, over the `function` keyword.
* Prefer function definitions over function expressions.
* Use semicolons at the end of each statement.
* Prefer single quotes.
* Use `PascalCase` for classes, `lowerCamelCase` for variables and functions,
  `SCREAMING_SNAKE_CASE` for constants, and [symbols] for private
  variables and functions.
* Prefer [template strings] over string concatenation.
* Prefer promises over callbacks.
* Prefer array functions like `map` and `forEach` over `for` loops.
* Use `const` for declaring variables that will never be re-assigned, and `let`
  otherwise.
* Avoid `var` to declare variables.
* Use a trailing comma after each item in a multi-line array or object
  literal, except the last item.
* Use the [one true brace style].
* Indent using 4 spaces.

[symbols]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol
[template strings]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/template_strings
[arrow functions]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
[one true brace style]: https://en.wikipedia.org/wiki/Indent_style#Variant:_1TBS

### SCSS Styleguide

* List properties in alphabetical order.
* Avoid deeply nesting rules and selectors.
* Prefer flexible, scalable units (rem, em, vw...) over px.
* Prefer rem over em unless you really mean em.
* Include a leading zero for magnitudes between -1 and 1.
* Utilize globally defined variables wherever possible.
* Ensure rules are properly namespaced to a page when appropriate.
* Indent using 4 spaces.

## Additional Notes

### Issue and Merge Request Labels

#### Type of Issue and Issue State

| Label Name | Search Link | Description |
| --- | --- | --- |
| `bug` | [search][search-repo-label-bug] | Confirmed or likely bugs. |
| `accessibility` | [search][search-repo-label-accessibility] | Issues impacting accessibility. |
| `enhancement` | [search][search-repo-label-enhancement] | Suggested enhancements. |
| `policy` | [search][search-repo-label-policy] | Suggested policy change or new policy position. |
| `question` | [search][search-repo-label-question] | Questions more than bug reports or feature requests. |
| `feedback` | [search][search-repo-label-feedback] | General feedback more than bug reports or feature requests. |
| `help-wanted` | [search][search-repo-label-help-wanted] | Issues where community help would be appreciated. |
| `more-information-needed` | [search][search-repo-label-more-information-needed] | More information needs to be collected about these problems or feature requests (e.g. steps to reproduce). |
| `needs-reproduction` | [search][search-repo-label-needs-reproduction] | Likely bugs that have yet to be reliably reproduced. |
| `blocked` | [search][search-repo-label-blocked] | Issues blocked by other issues. |
| `duplicate` | [search][search-repo-label-duplicate] | Issues which are duplicates of other issues. |
| `wontfix` | [search][search-repo-label-wontfix] | Issues where no changes will be made for reasons addressed in comments on the issue. |
| `invalid` | [search][search-repo-label-invalid] | Issues which aren't valid (e.g. user errors). |

#### Topic Categories

| Label Name | Search Link | Description |
| --- | --- | --- |
| `documentation` | [search][search-repo-label-documentation] | Related to any type of documentation. |
| `performance` | [search][search-repo-label-performance] | Related to performance. |
| `security` | [search][search-repo-label-security] | Related to security. |
| `ui` | [search][search-repo-label-ui] | Related to visual design. |
| `chrome` | [search][search-repo-label-chrome] | Related to viewing the site on Chrome. |
| `safari` | [search][search-repo-label-safari] | Related to viewing the site on Safari. |
| `firefox` | [search][search-repo-label-firefox] | Related to viewing the site on Firefox. |
| `edge` | [search][search-repo-label-edge] | Related to viewing the site on Edge. |
| `ie` | [search][search-repo-label-ie] | Related to viewing the site on IE. |
| `git` | [search][search-repo-label-git] | Related to Git functionality (e.g. problems with gitignore). |
| `gulp` | [search][search-repo-label-gulp] | Related to Gulp functionality. |

#### Merge Request Labels

| Label Name | Search Link | Description
| --- | --- | --- |
| `work-in-progress` | [search][search-repo-label-work-in-progress] | Merge requests which are still being worked on. |
| `needs-review` | [search][search-repo-label-needs-review] | Merge requests which need code review. |
| `under-review` | [search][search-repo-label-under-review] | Merge requests actively under review. |
| `requires-changes` | [search][search-repo-label-requires-changes] | Merge requests which need changes based on review comments. |
| `needs-testing` | [search][search-repo-label-needs-testing] | Merge requests which need manual testing. |

[search-repo-label-bug]:https://gitlab.com/DerekKent/derekkent.com/issues?label_name=bug
[search-repo-label-accessibility]:https://gitlab.com/DerekKent/derekkent.com/issues?label_name=accessibility
[search-repo-label-enhancement]:https://gitlab.com/DerekKent/derekkent.com/issues?label_name=enhancement
[search-repo-label-policy]:https://gitlab.com/DerekKent/derekkent.com/issues?label_name=policy
[search-repo-label-question]:https://gitlab.com/DerekKent/derekkent.com/issues?label_name=question
[search-repo-label-feedback]:https://gitlab.com/DerekKent/derekkent.com/issues?label_name=feedback
[search-repo-label-help-wanted]:https://gitlab.com/DerekKent/derekkent.com/issues?label_name=help-wanted
[search-repo-label-more-information-needed]:https://gitlab.com/DerekKent/derekkent.com/issues?label_name=more-information-needed
[search-repo-label-needs-reproduction]:https://gitlab.com/DerekKent/derekkent.com/issues?label_name=needs-reproduction
[search-repo-label-blocked]:https://gitlab.com/DerekKent/derekkent.com/issues?label_name=blocked
[search-repo-label-duplicate]:https://gitlab.com/DerekKent/derekkent.com/issues?label_name=duplicate
[search-repo-label-wontfix]:https://gitlab.com/DerekKent/derekkent.com/issues?label_name=wontfix
[search-repo-label-invalid]:https://gitlab.com/DerekKent/derekkent.com/issues?label_name=invalid
[search-repo-label-documentation]:https://gitlab.com/DerekKent/derekkent.com/issues?label_name=documentation
[search-repo-label-performance]:https://gitlab.com/DerekKent/derekkent.com/issues?label_name=performance
[search-repo-label-security]:https://gitlab.com/DerekKent/derekkent.com/issues?label_name=security
[search-repo-label-ui]:https://gitlab.com/DerekKent/derekkent.com/issues?label_name=ui
[search-repo-label-chrome]:https://gitlab.com/DerekKent/derekkent.com/issues?label_name=chrome
[search-repo-label-safari]:https://gitlab.com/DerekKent/derekkent.com/issues?label_name=safari
[search-repo-label-firefox]:https://gitlab.com/DerekKent/derekkent.com/issues?label_name=firefox
[search-repo-label-edge]:https://gitlab.com/DerekKent/derekkent.com/issues?label_name=edge
[search-repo-label-ie]:https://gitlab.com/DerekKent/derekkent.com/issues?label_name=ie
[search-repo-label-git]:https://gitlab.com/DerekKent/derekkent.com/issues?label_name=git
[search-repo-label-gulp]:https://gitlab.com/DerekKent/derekkent.com/issues?label_name=gulp
[search-repo-label-work-in-progress]:https://gitlab.com/DerekKent/derekkent.com/issues?label_name=work-in-progress
[search-repo-label-needs-review]:https://gitlab.com/DerekKent/derekkent.com/issues?label_name=needs-review
[search-repo-label-under-review]:https://gitlab.com/DerekKent/derekkent.com/issues?label_name=under-review
[search-repo-label-requires-changes]:https://gitlab.com/DerekKent/derekkent.com/issues?label_name=requires-changes
[search-repo-label-needs-testing]:https://gitlab.com/DerekKent/derekkent.com/issues?label_name=needs-testing
