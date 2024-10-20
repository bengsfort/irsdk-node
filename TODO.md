# @todo:

- Codebase is ancient; need to update.
    - Workflows/actions need modernization.
        + Need to utilise caching, windows runners need to be speedy.
        + It should only build/lint/check the packages that actually change.
    - Every build tool in here needs to be upgraded; ts, eslint, jest, etc. are all insanely out of date.
- Make publishing a triggerable workflow.
    - Should optionally generate changelogs and commit them back to repo, while also cutting a new release in the repo and npm.

## Legacy todo:

- Re-add proper tests (need to figure out a good way to do this as it is dependent on having the sim running and etc.)
- Publish via github packages
- Should this package parse the yaml session info?
    - if so, we need to generate types for that as well
    - implement similar to irsdkClient::GetSessionStrVal
    - how do we know its changed?
- Provide helper getters for retrieving larger chunks of data (for ex. session info only, local driver only, etc?)
- Make `dump-data.ts` script into a proper utility script (similar to generate types)
- Create new package for actual event detection
- async
