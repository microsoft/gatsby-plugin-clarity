# Change Log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.2.0] - 2022-11-29

### Added

- support for gatstby 5

## [1.1.0] - 2022-07-24

### Added

- support for gatstby 4

## [1.0.0] - 2020-03-30

### Added

- gatsby-plugin-clarity is now available for atsby users to add clarity tracking code onto their websites.
- gatsby option - clarity_project_id that defines the clarity project to be injected (required)
- gatsby option - enable_on_dev_env that defines whether to inject clarity on dev environmnet (defaults to true)
- gatsby-node.js to make sure users define option clarity_project_id and show error messages if it's missing.
- gatsby-node.js to make sure that if users define option enable_on_dev_env as a boolean and show error messages if it's not a boolean.
