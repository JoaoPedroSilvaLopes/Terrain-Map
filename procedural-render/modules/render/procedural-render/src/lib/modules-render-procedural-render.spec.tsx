import { render } from '@testing-library/react';

import ModulesRenderProceduralRender from './modules-render-procedural-render';

describe('ModulesRenderProceduralRender', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ModulesRenderProceduralRender />);
    expect(baseElement).toBeTruthy();
  });
});
