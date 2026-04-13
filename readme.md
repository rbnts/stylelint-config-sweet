# stylelint-config-sweet

[![latest version](https://badgen.net/npm/v/stylelint-config-sweet)](https://npmx.dev/package/stylelint-config-sweet)
[![npm downloads a week](https://badgen.net/npm/dw/stylelint-config-sweet)](https://npmx.dev/package/stylelint-config-sweet)
[![license](https://badgen.net/npm/license/stylelint-config-sweet)](https://choosealicense.com/licenses/mit/)

> Stylelint [extendable config](https://stylelint.io/user-guide/configure/#extends) for the most sweet-ass CSS and Sass. 🤙🏼

## Installation

```sh
npm i -D stylelint-config-sweet
```

## Usage

As soon as you've installed the package, you can extend from it. To do that, create your [config file](https://stylelint.io/user-guide/configure/), and add the following line:

```js
/** @type {import("stylelint").Config} */
export default {
  extends: "stylelint-config-sweet"
};
```

## How will my code look when using this?

Sweet, man. That's the point. On a more serious note though: It mostly enforces consistency, even though it may not look like it the first few moments. It will make your code feel more lightweight and nudge you towards using more modern APIs and good practices, while maintaining readability and keeping complexity down.

## Good to know

If you're experiencing performance issues, or just want to boost the speed of linting, you can enable Stylelint's built-in [caching](https://stylelint.io/user-guide/options/#cache):

```js
/** @type {import("stylelint").Config} */
export default {
  cache: true,
  extends: "stylelint-config-sweet"
};
```

Don't forget to add `.stylelintcache` to your `.gitignore`!

## License

[MIT](https://choosealicense.com/licenses/mit/)
