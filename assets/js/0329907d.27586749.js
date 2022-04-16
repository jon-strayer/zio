"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[9873],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),c=p(n),m=s,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,i=new Array(o);i[0]=c;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:s,i[1]=r;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6758:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return r},metadata:function(){return p},toc:function(){return u}});var a=n(7462),s=n(3366),o=(n(7294),n(3905)),i=["components"],r={id:"index",title:"Introduction"},l=void 0,p={unversionedId:"datatypes/test/index",id:"datatypes/test/index",title:"Introduction",description:"ZIO Test is a zero dependency testing library that makes it easy to test effectual programs. In ZIO Test, all tests are immutable values and tests are tightly integrated with ZIO, so testing effectual programs is as natural as testing pure ones.",source:"@site/docs/datatypes/test/index.md",sourceDirName:"datatypes/test",slug:"/datatypes/test/",permalink:"/next/datatypes/test/",editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/datatypes/test/index.md",tags:[],version:"current",frontMatter:{id:"index",title:"Introduction"},sidebar:"datatypes-sidebar",previous:{title:"JVM Metrics",permalink:"/next/datatypes/metrics/jvm"},next:{title:"Spec",permalink:"/next/datatypes/test/spec"}},u=[{value:"Motivation",id:"motivation",children:[],level:2},{value:"How ZIO Test was designed",id:"how-zio-test-was-designed",children:[],level:2},{value:"Installation",id:"installation",children:[],level:2},{value:"Our First Lines of ZIO Test",id:"our-first-lines-of-zio-test",children:[],level:2},{value:"Running Tests",id:"running-tests",children:[],level:2},{value:"Why ZIO Test?",id:"why-zio-test",children:[{value:"Test Environment",id:"test-environment",children:[],level:3},{value:"Resource Management",id:"resource-management",children:[],level:3},{value:"Property Based Testing",id:"property-based-testing",children:[],level:3},{value:"Results Reporting",id:"results-reporting",children:[],level:3},{value:"Test Aspects",id:"test-aspects",children:[],level:3},{value:"Zero Dependencies",id:"zero-dependencies",children:[],level:3},{value:"JUnit integration",id:"junit-integration",children:[],level:3}],level:2}],d={toc:u};function c(e){var t=e.components,n=(0,s.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"ZIO Test")," is a zero dependency testing library that makes it easy to test effectual programs. In ",(0,o.kt)("strong",{parentName:"p"},"ZIO Test"),", all tests are immutable values and tests are tightly integrated with ZIO, so testing effectual programs is as natural as testing pure ones. "),(0,o.kt)("h2",{id:"motivation"},"Motivation"),(0,o.kt)("p",null,"We can easily assert ordinary values and data types to test them:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import scala.Predef.assert\n\nassert(1 + 2 == 2 + 1)\nassert("Hi" == "H" + "i")\n\ncase class Point(x: Long, y: Long)\nassert(Point(5L, 10L) == Point.apply(5L, 10L))\n')),(0,o.kt)("p",null,"What about functional effects? Can we assert two effects using ordinary scala assertion to test whether they have the same functionality? As we know, a functional effect, like ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO"),", describes a series of computations. Unfortunately, we can't assert functional effects without executing them. If we assert two ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO")," effects, e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"assert(expectedEffect == actualEffect)"),", the result says nothing about whether these two effects behave similarly and produce the same result or not. Instead, we should ",(0,o.kt)("inlineCode",{parentName:"p"},"unsafeRun")," each one and assert their results."),(0,o.kt)("p",null,"Let's say we have a random generator effect, and we want to ensure that the output is bigger than zero, so we should ",(0,o.kt)("inlineCode",{parentName:"p"},"unsafeRun")," the effect and assert the result:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"import scala.Predef.assert\n\nval random = Runtime.default.unsafeRun(\n  Random.nextIntBounded(10).provideLayer(Random.live)\n)\n\nassert(random >= 0)\n")),(0,o.kt)("p",null,"Testing effectful programs is difficult since we should use many ",(0,o.kt)("inlineCode",{parentName:"p"},"unsafeRun")," methods. Also, we might need to make sure that the test is non-flaky. In these cases, running ",(0,o.kt)("inlineCode",{parentName:"p"},"unsafeRun")," multiple times is not straightforward. We need a testing framework that treats effects as ",(0,o.kt)("em",{parentName:"p"},"first-class values"),". So this is the primary motivation for creating the ZIO Test library."),(0,o.kt)("h2",{id:"how-zio-test-was-designed"},"How ZIO Test was designed"),(0,o.kt)("p",null,"We designed ZIO Test around the idea of ",(0,o.kt)("em",{parentName:"p"},"making tests first-class objects"),". This means that tests (and other concepts, like assertions) become ordinary values that can be passed around, transformed, and composed."),(0,o.kt)("p",null,"This approach allows for greater flexibility compared to some other testing frameworks, where tests and additional logic around tests had to be put into callbacks so that framework could make use of them."),(0,o.kt)("p",null,"As a result, this approach is also better suited to other ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO")," concepts like ",(0,o.kt)("inlineCode",{parentName:"p"},"Scope"),", which can only be used within a scoped block of code. This also created a mismatch between ",(0,o.kt)("inlineCode",{parentName:"p"},"BeforeAll"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"AfterAll")," callback-like methods when there were resources that should be opened and closed during test suite execution."),(0,o.kt)("p",null,"Another thing worth pointing out is that tests being values are also effects. Implications of this design are far-reaching:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'First, the well-known problem of testing asynchronous value is gone. Whereas in other frameworks we have to somehow "run" our effects and at best wrap them in ',(0,o.kt)("inlineCode",{parentName:"p"},"scala.util.Future")," because blocking would eliminate running on ScalaJS, ZIO Test expects us to create ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO")," objects. There is no need for indirect transformations from one wrapping object to another.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Second, because our tests are ordinary ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO")," values, we don't need to turn to a testing framework for things like retries, timeouts, and resource management. We can solve all those problems with the full richness of functions that ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO")," exposes."))),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"In order to use ZIO Test, we need to add the required configuration in our SBT settings:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies ++= Seq(\n  "dev.zio" %% "zio-test"          % zioVersion % "test",\n  "dev.zio" %% "zio-test-sbt"      % zioVersion % "test",\n  "dev.zio" %% "zio-test-magnolia" % zioVersion % "test" // optional\n)\ntestFrameworks += new TestFramework("zio.test.sbt.ZTestFramework")\n')),(0,o.kt)("h2",{id:"our-first-lines-of-zio-test"},"Our First Lines of ZIO Test"),(0,o.kt)("p",null,"The fastest way to start writing tests is to extend ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIOSpecDefault"),", which requires a ",(0,o.kt)("inlineCode",{parentName:"p"},"Spec"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIOSpecDefault")," is very similar in its logic of operations to ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIOAppDefault"),". Instead of providing one ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO")," application at the end of the world, we provide a suite that can be a tree of other suites and tests. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.test._\nimport zio.test.Assertion._\n\nimport java.io.IOException\n\nimport HelloWorld._\n\nobject HelloWorld {\n  def sayHello: ZIO[Any, IOException, Unit] =\n    Console.printLine("Hello, World!")\n}\n\nobject HelloWorldSpec extends ZIOSpecDefault {\n  def spec = suite("HelloWorldSpec")(\n    test("sayHello correctly displays output") {\n      for {\n        _      <- sayHello\n        output <- TestConsole.output\n      } yield assertTrue(output == Vector("Hello, World!\\n"))\n    }\n  )\n}\n')),(0,o.kt)("p",null,"In the example above, our test involved the effect of printing to the console, but we didn't have to do anything differently in our test. Also note that the ",(0,o.kt)("inlineCode",{parentName:"p"},"helloWorld")," method in the above program does not actually print a string to the console instead writes it to a buffer for testing."),(0,o.kt)("h2",{id:"running-tests"},"Running Tests"),(0,o.kt)("p",null,"We can run ZIO Tests in two ways:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If we ",(0,o.kt)("a",{parentName:"p",href:"#installation"},"added")," ",(0,o.kt)("inlineCode",{parentName:"p"},"zio.test.sbt.ZTestFramework")," to SBT's ",(0,o.kt)("inlineCode",{parentName:"p"},"testFrameworks"),", our tests should be automatically picked up by SBT on invocation of ",(0,o.kt)("inlineCode",{parentName:"p"},"test"),":"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sbt Test/test                      // run all tests\nsbt Test/testOnly HelloWorldSpec   // run a specific test\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"However, if we're not using SBT or have some other special needs, the ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIOSpecDefault")," has a ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," method which can be invoked directly or with SBTs ",(0,o.kt)("inlineCode",{parentName:"p"},"Test/run")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Test/runMain")," commands:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sbt Test/run                       // prompt to choose which test to run\nsbt Test/runMain HelloWorldSpec    // run a specific test\n")))),(0,o.kt)("h2",{id:"why-zio-test"},"Why ZIO Test?"),(0,o.kt)("h3",{id:"test-environment"},"Test Environment"),(0,o.kt)("p",null,"The library includes built-in ",(0,o.kt)("em",{parentName:"p"},"testable versions")," of all the standard ZIO services (",(0,o.kt)("inlineCode",{parentName:"p"},"Clock"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Console"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"System"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"Random"),"). For example, the ",(0,o.kt)("inlineCode",{parentName:"p"},"TestClock")," has some timing actions that enables us to control the passage of time. So instead of waiting for timeouts and passage of time, we can adjust the time in our test:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.test.{test, _}\nimport zio.test.Assertion._\n\ntest("timeout") {\n  for {\n    fiber  <- ZIO.sleep(5.minutes).timeout(1.minute).fork\n    _      <- TestClock.adjust(1.minute)\n    result <- fiber.join\n  } yield assertTrue(result.isEmpty)\n}\n')),(0,o.kt)("p",null,"In this example, to test the timeout function without waiting for one minute, we passed the time for one minute using the ",(0,o.kt)("inlineCode",{parentName:"p"},"adjust")," operation. Sometimes, we may want to run these kinds of tests with the ",(0,o.kt)("inlineCode",{parentName:"p"},"nonFlaky")," operator, which runs the test one hundred different times."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"TestRandom")," service has some extra functionality that enables us to test those functionalities with randomness. We can provide seed number to the ",(0,o.kt)("inlineCode",{parentName:"p"},"TestRandom"),", and then we can have an exact expectation of the random function results."),(0,o.kt)("p",null,"Each of these services, comes with a bunch of functionality that makes it very easy to test effects."),(0,o.kt)("p",null,"Whenever we need to access the ",(0,o.kt)("em",{parentName:"p"},"live")," environment, we can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"live")," method in the ",(0,o.kt)("inlineCode",{parentName:"p"},"test")," package or specify the live environment in the type signature like ",(0,o.kt)("inlineCode",{parentName:"p"},"Live[Console]"),"."),(0,o.kt)("h3",{id:"resource-management"},"Resource Management"),(0,o.kt)("p",null,"We may need to set up and tear down some fixtures in our test code before and after running tests. ZIO Test manages this seamlessly for us. So, instead of providing ",(0,o.kt)("inlineCode",{parentName:"p"},"before"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"after"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"beforeAll"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"afterAll")," hooks which are not composable, we can provide a ",(0,o.kt)("inlineCode",{parentName:"p"},"ZLayer")," to each test or a test suite. The ZIO test takes care of acquiring, utilizing, and releasing that layer."),(0,o.kt)("p",null,"For example, if we have a Kafka layer, we can provide it to one test, or we can provide it to an entire suite of tests, just like the example below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'suite("a test suite with shared kafka layer")(test1, test2, test3)\n  .provideCustomLayerShared(kafkaLayer)\n')),(0,o.kt)("p",null,"This layer going to get acquired once, then we have access to that service within all these three tests within the suite and then it is guaranteed to be released at the end of our tests."),(0,o.kt)("p",null,"So in ZIO Test, we have nice resource management which enables us to have tests where:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"They are resource safe"),(0,o.kt)("li",{parentName:"ul"},"Resources can be acquired and released per test or across a suite of tests"),(0,o.kt)("li",{parentName:"ul"},"Fully composable")),(0,o.kt)("h3",{id:"property-based-testing"},"Property Based Testing"),(0,o.kt)("p",null,"Support for property based testing is included out-of-the-box through the ",(0,o.kt)("inlineCode",{parentName:"p"},"check")," method and its variants and the ",(0,o.kt)("inlineCode",{parentName:"p"},"Gen")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Sample")," classes. For example, here is how we could write a property to test that integer addition is associative."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.test._\n\nval associativity =\n  check(Gen.int, Gen.int, Gen.int) { (x, y, z) =>\n    assertTrue(((x + y) + z) == (x + (y + z)))\n  }\n")),(0,o.kt)("p",null,"If a property fails, the failure will be automatically shrunk to the smallest failing cases to make it easier for us to diagnose the problem. And shrinking is integrated with the generation of random variables, so we are guaranteed that any shrunk counter example will meet the conditions of our original generator."),(0,o.kt)("p",null,"ZIO Test also supports automatic derivation of generators using the ZIO Test Magnolia module:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.test._\nimport zio.test.magnolia._\n\ncase class Point(x: Double, y: Double)\n\nval genPoint: Gen[Sized, Point] = DeriveGen[Point]\n \nsealed trait Color\ncase object Red   extends Color\ncase object Green extends Color\ncase object Blue  extends Color\n \nval genColor: Gen[Sized, Color] = DeriveGen[Color]\n")),(0,o.kt)("h3",{id:"results-reporting"},"Results Reporting"),(0,o.kt)("p",null,"When tests do fail, it is easy to see what went wrong because the test reporter will show us the entire assertion that failed and the specific part of the assertion that failed. To facilitate this, a variety of assertion combinators are included in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Assertion")," class."),(0,o.kt)("h3",{id:"test-aspects"},"Test Aspects"),(0,o.kt)("p",null,"Test aspects are powerful tools for modifying behavior of individual tests or even entire suites that we have already written. Convenient syntax ",(0,o.kt)("inlineCode",{parentName:"p"},"@@")," is provided for applying test aspects. "),(0,o.kt)("p",null,"For example, we can apply a timeout to a test by using ",(0,o.kt)("inlineCode",{parentName:"p"},"test @@ timeout(60.seconds)")," or only run a test on JavaScript by using ",(0,o.kt)("inlineCode",{parentName:"p"},"test @@ jsOnly"),". "),(0,o.kt)("p",null,"Test aspects are ",(0,o.kt)("em",{parentName:"p"},"highly composable"),", so we can combine multiple test aspects together: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.test._\nimport zio.test.TestAspect._\n\ntest("another zio test")(???) @@ timeout(60.seconds) @@ jvmOnly\n')),(0,o.kt)("h3",{id:"zero-dependencies"},"Zero Dependencies"),(0,o.kt)("p",null,"As a library with zero third party dependencies, this project is available on the JVM, ScalaJS, Dotty, and will be available on Scala Native in the near future. So we can write our tests once and make sure that our code works correctly across all platforms that we support."),(0,o.kt)("h3",{id:"junit-integration"},"JUnit integration"),(0,o.kt)("p",null,"A custom JUnit runner is provided for running ZIO Test specs under other build tools (like Maven, Gradle, Bazel, etc.) and under IDEs."),(0,o.kt)("p",null,"To get the runner, we need to add the equivalent of following dependency definition under our build tool:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'"dev.zio" %% "zio-test-junit" % zioVersion % "test"\n')),(0,o.kt)("p",null,"To make our spec appear as a JUnit test to build tools and IDEs, we should convert it to a ",(0,o.kt)("inlineCode",{parentName:"p"},"class")," (JUnit won't run scala objects) and annotate it with ",(0,o.kt)("inlineCode",{parentName:"p"},"@RunWith(classOf[zio.test.junit.ZTestJUnitRunner])")," or simply extend ",(0,o.kt)("inlineCode",{parentName:"p"},"zio.test.junit.JUnitRunnableSpec"),"."),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/zio/zio/blob/master/examples/jvm/src/test/scala/zio/examples/test/ExampleSpecWithJUnit.scala"},"ExampleSpecWithJUnit")),(0,o.kt)("p",null,"SBT (and thus Scala.JS) is not supported, as the JUnit Test Framework for SBT doesn't seem to support custom runners."))}c.isMDXComponent=!0}}]);