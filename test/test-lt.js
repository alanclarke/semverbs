var lt = require('../index').lt
var eq = require('assert').deepEqual

describe('lt', function () {
  it('should return a truthy value if version a is less than version b', function () {
    eq(lt('2.2.1', '3.2.1'), true)
    eq(lt('3.1.1', '3.2.1'), true)
    eq(lt('3.2.0', '3.2.1'), true)
    eq(lt('1.2.2', '1.2.3'), true)
    eq(lt('1.1.3', '1.2.3'), true)
    eq(lt('0.2.3', '1.2.3'), true)
  })
  it('should return a falsey value if version a is not less than version b', function () {
    eq(lt('3.2.1', '3.2.1'), false)
    eq(lt('3.2.2', '3.2.1'), false)
    eq(lt('3.3.1', '3.2.1'), false)
    eq(lt('4.2.1', '3.2.1'), false)
    eq(lt('2.2.3', '1.2.3'), false)
    eq(lt('1.3.3', '1.2.3'), false)
    eq(lt('1.2.4', '1.2.3'), false)
  })
})
