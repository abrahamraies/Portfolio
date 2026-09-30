import { routes } from './app-routing.module';

describe('AppRoutingModule', () => {
  it('redirects unknown URLs to the home page', () => {
    const wildcard = routes.find((route) => route.path === '**');
    expect(wildcard?.redirectTo).toBe('');
  });

  it('keeps the wildcard route last so it does not shadow real routes', () => {
    expect(routes[routes.length - 1].path).toBe('**');
  });
});
