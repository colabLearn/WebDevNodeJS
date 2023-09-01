//Import the code we are trying to test
const handlers  = require('../handlers')


/*
  Describe what is being tested:
    we want to ensure that the home gets rendered.
*/
test('home page renders', () => {
    const req = {}
    const res = {render: jest.fn()}
    handlers.home(req, res)
    expect(res.render.mock.calls[0][0]).toBe('home')
    
})