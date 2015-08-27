Naming Conventions in FreeO2
---

In general FreeO2 should follow Java naming conventions.

**Classes**

 - Example: `Compiler`, `ApplicationMetadata`
 - Camel case with first letter upper-case
 - In general prefer single words. (This is so that when appending
   `Proto` or `Factory` the class
       is still reasonable to work with.)
 - Should not end with `Impl` or any other word which describes a
   specific implementation of an interface.

**Interfaces**

 - Follow the same rules as Classes
 - Should not have `I` or `Interface` in the name or any other way of identifying it as an interface.

**Methods and functions**

 - Example: `bootstrap`, `startTherapy`
 - Should be camel case with first lower case

**Constants**

 - Example: `CORE_DIRECTIVES`
 - Should be all uppercase with SNAKE_CASE