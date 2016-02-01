var gaugeExecutionResult = {"suiteResult":{"specResults":[{"protoSpec":{"specHeading":"Customers","items":[{"itemType":2,"comment":{"text":"Specifications are defined via H1 tag, you could either use the syntax above or \"# Customers\""}},{"itemType":2,"comment":{"text":"\n"}},{"itemType":2,"comment":{"text":"The below is a context step, gets executed before every scenario. Every unordered list is a step."}},{"itemType":2,"comment":{"text":"\n"}},{"itemType":1,"step":{"actualText":"On the customer page","parsedText":"On the customer page","fragments":[{"fragmentType":1,"text":"On the customer page"}],"stepExecutionResult":{"skipped":false}}},{"itemType":2,"comment":{"text":"\n"}},{"itemType":2,"comment":{"text":"The below is a scenario, defined via H2 tag. You could also use \"## Search for a customer\""}},{"itemType":2,"comment":{"text":"\n"}},{"itemType":4,"scenario":{"scenarioHeading":"Search for a customer","failed":false,"contexts":[{"itemType":1,"step":{"actualText":"On the customer page","parsedText":"On the customer page","fragments":[{"fragmentType":1,"text":"On the customer page"}],"stepExecutionResult":{"executionResult":{"failed":false,"recoverableError":false,"executionTime":2729},"skipped":false}}}],"scenarioItems":[{"itemType":7,"tags":{"tags":["admin","customer","search"]}},{"itemType":2,"comment":{"text":"\n"}},{"itemType":1,"step":{"actualText":"Search for customer \"ScroogeMcduck\"","parsedText":"Search for customer {}","fragments":[{"fragmentType":1,"text":"Search for customer "},{"fragmentType":2,"parameter":{"parameterType":1,"value":"ScroogeMcduck","name":""}}],"stepExecutionResult":{"executionResult":{"failed":false,"recoverableError":false,"executionTime":1190},"skipped":false}}},{"itemType":1,"step":{"actualText":"The customer \"ScroogeMcduck\" is listed","parsedText":"The customer {} is listed","fragments":[{"fragmentType":1,"text":"The customer "},{"fragmentType":2,"parameter":{"parameterType":1,"value":"ScroogeMcduck","name":""}},{"fragmentType":1,"text":" is listed"}],"stepExecutionResult":{"executionResult":{"failed":false,"recoverableError":false,"executionTime":27},"skipped":false}}},{"itemType":2,"comment":{"text":"\n"}}],"tags":["admin","customer","search"],"executionTime":3946,"skipped":false}},{"itemType":4,"scenario":{"scenarioHeading":"Verify a bunch of customers","failed":false,"contexts":[{"itemType":1,"step":{"actualText":"On the customer page","parsedText":"On the customer page","fragments":[{"fragmentType":1,"text":"On the customer page"}],"stepExecutionResult":{"executionResult":{"failed":false,"recoverableError":false,"executionTime":1176},"skipped":false}}}],"scenarioItems":[{"itemType":7,"tags":{"tags":["admin","customer","search"]}},{"itemType":2,"comment":{"text":"Can use a csv datasource!"}},{"itemType":2,"comment":{"text":"\n"}},{"itemType":1,"step":{"actualText":"Search for customers \u003ctable:resources/user.csv\u003e","parsedText":"Search for customers {}","fragments":[{"fragmentType":1,"text":"Search for customers "},{"fragmentType":2,"parameter":{"parameterType":4,"name":"table:resources/user.csv","table":{"headers":{"cells":["FredFlintstone"]},"rows":[{"cells":["JohnnyQuest"]},{"cells":["ScroogeMcduck"]}]}}}],"stepExecutionResult":{"executionResult":{"failed":false,"recoverableError":false,"executionTime":1296},"skipped":false}}}],"tags":["admin","customer","search"],"executionTime":2472,"skipped":false}}],"isTableDriven":false,"fileName":"/var/snap-ci/repo/specs/customer.spec"},"scenarioCount":2,"scenarioFailedCount":0,"failed":false,"executionTime":6418,"skipped":false,"scenarioSkippedCount":0},{"protoSpec":{"specHeading":"Products","items":[{"itemType":2,"comment":{"text":"\n"}},{"itemType":4,"scenario":{"scenarioHeading":"Create a new product","failed":false,"scenarioItems":[{"itemType":7,"tags":{"tags":["admin","product","create"]}},{"itemType":2,"comment":{"text":"\n"}},{"itemType":1,"step":{"actualText":"Create a product","parsedText":"Create a product {}","fragments":[{"fragmentType":1,"text":"Create a product "},{"fragmentType":2,"parameter":{"parameterType":5,"name":"","table":{"headers":{"cells":["Title","Description","Author","Price"]},"rows":[{"cells":["Go Programming","ISBN: 978-1453636671","John P. Baugh","25.00"]},{"cells":["The Way to Go","ISBN: 978-1469769165","Ivo Balbaert","20.00"]},{"cells":["Go In Action","ISBN: 9781617291784","Brian Ketelsen","30.00"]},{"cells":["Learning Go","ebook","Miek Gieben","0.00"]}]}}}],"stepExecutionResult":{"executionResult":{"failed":false,"recoverableError":false,"executionTime":5575},"skipped":false}}},{"itemType":2,"comment":{"text":"\n"}}],"tags":["admin","product","create"],"executionTime":5575,"skipped":false}},{"itemType":4,"scenario":{"scenarioHeading":"Search for a product","failed":false,"scenarioItems":[{"itemType":7,"tags":{"tags":["admin","product","search"]}},{"itemType":2,"comment":{"text":"\"Find and Open product page for\" is a concept"}},{"itemType":2,"comment":{"text":"\n"}},{"itemType":3,"concept":{"conceptStep":{"actualText":"Find and Open product page for \u003cname\u003e","parsedText":"Find and Open product page for {}","fragments":[{"fragmentType":1,"text":"Find and Open product page for "},{"fragmentType":2,"parameter":{"parameterType":1,"value":"Go Programming","name":""}}],"stepExecutionResult":{"executionResult":{"failed":false,"executionTime":1693},"skipped":false}},"steps":[{"itemType":1,"step":{"actualText":"On product page","parsedText":"On product page","fragments":[{"fragmentType":1,"text":"On product page"}],"stepExecutionResult":{"executionResult":{"failed":false,"recoverableError":false,"executionTime":874},"skipped":false}}},{"itemType":1,"step":{"actualText":"Search for product \u003cname\u003e","parsedText":"Search for product {}","fragments":[{"fragmentType":1,"text":"Search for product "},{"fragmentType":2,"parameter":{"parameterType":2,"value":"Go Programming","name":""}}],"stepExecutionResult":{"executionResult":{"failed":false,"recoverableError":false,"executionTime":689},"skipped":false}}},{"itemType":1,"step":{"actualText":"Open description for product \u003cname\u003e","parsedText":"Open description for product {}","fragments":[{"fragmentType":1,"text":"Open description for product "},{"fragmentType":2,"parameter":{"parameterType":2,"value":"Go Programming","name":""}}],"stepExecutionResult":{"executionResult":{"failed":false,"recoverableError":false,"executionTime":130},"skipped":false}}}],"conceptExecutionResult":{"executionResult":{"failed":false,"executionTime":1693},"skipped":false}}},{"itemType":1,"step":{"actualText":"Verify product \"author\" as \"John P. Baugh\"","parsedText":"Verify product {} as {}","fragments":[{"fragmentType":1,"text":"Verify product "},{"fragmentType":2,"parameter":{"parameterType":1,"value":"author","name":""}},{"fragmentType":1,"text":" as "},{"fragmentType":2,"parameter":{"parameterType":1,"value":"John P. Baugh","name":""}}],"stepExecutionResult":{"executionResult":{"failed":false,"recoverableError":false,"executionTime":289},"skipped":false}}},{"itemType":2,"comment":{"text":"\n"}}],"tags":["admin","product","search"],"executionTime":1982,"skipped":false}},{"itemType":4,"scenario":{"scenarioHeading":"Search and edit and existing product","failed":false,"scenarioItems":[{"itemType":7,"tags":{"tags":["admin","product","edit"]}},{"itemType":2,"comment":{"text":"\"Find and store productId for\" and \"Open product edit page for stored productId\" uses the sceanrio datastore"}},{"itemType":2,"comment":{"text":"\n"}},{"itemType":1,"step":{"actualText":"Open product edit page for stored productId","parsedText":"Open product edit page for stored productId","fragments":[{"fragmentType":1,"text":"Open product edit page for stored productId"}],"stepExecutionResult":{"executionResult":{"failed":false,"recoverableError":false,"executionTime":507},"skipped":false}}},{"itemType":1,"step":{"actualText":"Update product specifier to new value \u003ctable:resources/product_data.csv\u003e","parsedText":"Update product specifier to new value {}","fragments":[{"fragmentType":1,"text":"Update product specifier to new value "},{"fragmentType":2,"parameter":{"parameterType":4,"name":"table:resources/product_data.csv","table":{"headers":{"cells":["specifier","value"]},"rows":[{"cells":["title","The Way to Go On"]},{"cells":["author","Ivo Jay Balbaert"]},{"cells":["description","hohoho"]}]}}}],"stepExecutionResult":{"executionResult":{"failed":false,"recoverableError":false,"executionTime":3207},"skipped":false}}},{"itemType":1,"step":{"actualText":"Check product specifier has new value \u003ctable:resources/product_data.csv\u003e","parsedText":"Check product specifier has new value {}","fragments":[{"fragmentType":1,"text":"Check product specifier has new value "},{"fragmentType":2,"parameter":{"parameterType":4,"name":"table:resources/product_data.csv","table":{"headers":{"cells":["specifier","value"]},"rows":[{"cells":["title","The Way to Go On"]},{"cells":["author","Ivo Jay Balbaert"]},{"cells":["description","hohoho"]}]}}}],"stepExecutionResult":{"executionResult":{"failed":false,"recoverableError":false,"executionTime":58},"skipped":false}}},{"itemType":2,"comment":{"text":"\n"}}],"tags":["admin","product","edit"],"executionTime":5522,"skipped":false}},{"itemType":4,"scenario":{"scenarioHeading":"Delete a product","failed":false,"scenarioItems":[{"itemType":7,"tags":{"tags":["admin","product","delete"]}},{"itemType":2,"comment":{"text":"The below concept is an example of nested concept, check out the definition."}},{"itemType":2,"comment":{"text":"\n"}},{"itemType":3,"concept":{"conceptStep":{"actualText":"Delete product \u003cname\u003e","parsedText":"Delete product {}","fragments":[{"fragmentType":1,"text":"Delete product "},{"fragmentType":2,"parameter":{"parameterType":1,"value":"Learning Go","name":""}}],"stepExecutionResult":{"executionResult":{"failed":false,"executionTime":2122},"skipped":false}},"steps":[{"itemType":3,"concept":{"conceptStep":{"actualText":"Find and Open product page for \u003cname\u003e","parsedText":"Find and Open product page for {}","fragments":[{"fragmentType":1,"text":"Find and Open product page for "},{"fragmentType":2,"parameter":{"parameterType":1,"value":"Learning Go","name":""}}],"stepExecutionResult":{"executionResult":{"failed":false,"executionTime":1634},"skipped":false}},"steps":[{"itemType":1,"step":{"actualText":"On product page","parsedText":"On product page","fragments":[{"fragmentType":1,"text":"On product page"}],"stepExecutionResult":{"executionResult":{"failed":false,"recoverableError":false,"executionTime":819},"skipped":false}}},{"itemType":1,"step":{"actualText":"Search for product \u003cname\u003e","parsedText":"Search for product {}","fragments":[{"fragmentType":1,"text":"Search for product "},{"fragmentType":2,"parameter":{"parameterType":2,"value":"Learning Go","name":""}}],"stepExecutionResult":{"executionResult":{"failed":false,"recoverableError":false,"executionTime":699},"skipped":false}}},{"itemType":1,"step":{"actualText":"Open description for product \u003cname\u003e","parsedText":"Open description for product {}","fragments":[{"fragmentType":1,"text":"Open description for product "},{"fragmentType":2,"parameter":{"parameterType":2,"value":"Learning Go","name":""}}],"stepExecutionResult":{"executionResult":{"failed":false,"recoverableError":false,"executionTime":116},"skipped":false}}}],"conceptExecutionResult":{"executionResult":{"failed":false,"executionTime":1634},"skipped":false}}},{"itemType":1,"step":{"actualText":"Delete this product","parsedText":"Delete this product","fragments":[{"fragmentType":1,"text":"Delete this product"}],"stepExecutionResult":{"executionResult":{"failed":false,"recoverableError":false,"executionTime":488},"skipped":false}}}],"conceptExecutionResult":{"executionResult":{"failed":false,"executionTime":2122},"skipped":false}}}],"tags":["admin","product","delete"],"executionTime":2122,"skipped":false}}],"isTableDriven":false,"fileName":"/var/snap-ci/repo/specs/products.spec"},"scenarioCount":4,"scenarioFailedCount":0,"failed":false,"executionTime":15201,"skipped":false,"scenarioSkippedCount":0},{"protoSpec":{"specHeading":"Signup","items":[{"itemType":2,"comment":{"text":"\n"}},{"itemType":2,"comment":{"text":"The below Scenarios usees the datastore on scenario level."}},{"itemType":2,"comment":{"text":"A new customer gets registered, its name gets stored and reused."}},{"itemType":2,"comment":{"text":"\n"}},{"itemType":4,"scenario":{"scenarioHeading":"Register a customer","failed":false,"scenarioItems":[{"itemType":2,"comment":{"text":"Use tags to enrich information about:"}},{"itemType":2,"comment":{"text":"Which interface is used? user, admin, manager, ..."}},{"itemType":2,"comment":{"text":"What functionality is tested?  signup, login, serach, ..."}},{"itemType":2,"comment":{"text":"What is the status of the implementation? inprogress, final, dericated, ..."}},{"itemType":2,"comment":{"text":"What is the execution priority / iteration? low, medium, high, smoke, nightly, ..."}},{"itemType":2,"comment":{"text":"e.g.:"}},{"itemType":7,"tags":{"tags":["user","signup","high","final","smoke"]}},{"itemType":2,"comment":{"text":"\n"}},{"itemType":3,"concept":{"conceptStep":{"actualText":"Sign up a new customer","parsedText":"Sign up a new customer","fragments":[{"fragmentType":1,"text":"Sign up a new customer"}],"stepExecutionResult":{"executionResult":{"failed":false,"executionTime":804},"skipped":false}},"steps":[{"itemType":1,"step":{"actualText":"On signup page","parsedText":"On signup page","fragments":[{"fragmentType":1,"text":"On signup page"}],"stepExecutionResult":{"executionResult":{"failed":false,"recoverableError":false,"executionTime":39},"skipped":false}}},{"itemType":1,"step":{"actualText":"Fill in and send registration form","parsedText":"Fill in and send registration form","fragments":[{"fragmentType":1,"text":"Fill in and send registration form"}],"stepExecutionResult":{"executionResult":{"failed":false,"recoverableError":false,"executionTime":765},"skipped":false}}}],"conceptExecutionResult":{"executionResult":{"failed":false,"executionTime":804},"skipped":false}}},{"itemType":1,"step":{"actualText":"On the customer page","parsedText":"On the customer page","fragments":[{"fragmentType":1,"text":"On the customer page"}],"stepExecutionResult":{"executionResult":{"failed":false,"recoverableError":false,"executionTime":693},"skipped":false}}},{"itemType":1,"step":{"actualText":"Just registered customer is listed","parsedText":"Just registered customer is listed","fragments":[{"fragmentType":1,"text":"Just registered customer is listed"}],"stepExecutionResult":{"executionResult":{"failed":false,"recoverableError":false,"executionTime":21},"skipped":false}}},{"itemType":2,"comment":{"text":"\n"}},{"itemType":2,"comment":{"text":"\n"}}],"tags":["user","signup","high","final","smoke"],"executionTime":1518,"skipped":false}}],"isTableDriven":false,"fileName":"/var/snap-ci/repo/specs/user.spec"},"scenarioCount":1,"scenarioFailedCount":0,"failed":false,"executionTime":1518,"skipped":false,"scenarioSkippedCount":0}],"failed":false,"specsFailedCount":0,"executionTime":25911,"successRate":100,"environment":"default","tags":"","projectName":"repo","timestamp":"Jan 30, 2016 at 12:36pm","specsSkippedCount":0}};
 var itemTypesMap = {"1":"Step","2":"Comment","3":"Concept","4":"Scenario","5":"TableDrivenScenario","6":"Table","7":"Tags"};
 var parameterTypesMap = {"1":"Static","2":"Dynamic","3":"Special_String","4":"Special_Table","5":"Table"};
 var fragmentTypesMap = {"1":"Text","2":"Parameter"};