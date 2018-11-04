const chai = require('chai')

require('./unit/test-config/index-test')(chai)
require('./unit/test-config/express-test')(chai)
require('./unit/test-config/mongoose-test')(chai)
require('./unit/test-data/message-model-test')(chai)
require('./unit/test-data/message-data-test')(chai)
require('./unit/test-data/message-data-methods-test')(chai)
require('./unit/test-data/message-control-test')(chai)
require('./unit/test-data/message-control-methods-test')(chai)
require('./unit/test-services/db-requester-test')(chai)

//require('./integration/http')(chai)