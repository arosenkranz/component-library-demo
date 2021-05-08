import { GlobalStyle } from '../src/utils';

export const decorators = [
  (Story, context) => (
    <>
      <GlobalStyle />
      <main>
        <Story {...context} />
      </main>
    </>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
