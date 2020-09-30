/* eslint-disable unicorn/string-content */

module.exports = function configurePlop(
  /** @type {import('plop').NodePlopAPI} */
  plop,
) {
  plop.setGenerator('design component', {
    description: 'generate a UI component',
    prompts: [
      {
        type: 'input',
        message: 'Enter the component name',
        name: 'name',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'design/components/{{kebabCase name}}.tsx',
        templateFile: 'plop/component.hbs',
      },
      {
        type: 'add',
        path: 'design/components/{{kebabCase name}}.stories.tsx',
        templateFile: 'plop/component.stories.hbs',
      },
      {
        type: 'append',
        path: 'design/components/index.ts',
        template: `export * from './{{kebabCase name}}';`,
      },
    ],
  });
};
