<?xml version="1.0" encoding="UTF-8"?>
<TestSuiteEntity>
   <description></description>
   <name>Amazon Suite</name>
   <tag></tag>
   <isRerun>false</isRerun>
   <mailRecipient></mailRecipient>
   <numberOfRerun>0</numberOfRerun>
   <pageLoadTimeout>30</pageLoadTimeout>
   <pageLoadTimeoutDefault>true</pageLoadTimeoutDefault>
   <rerunFailedTestCasesOnly>false</rerunFailedTestCasesOnly>
   <rerunImmediately>true</rerunImmediately>
   <testSuiteGuid>2a1a0fe8-fcae-424b-90e6-d735b79ad570</testSuiteGuid>
   <testCaseLink>
      <guid>5c69a728-5e56-4976-b32d-7367643b079d</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Amazon/AmazonLogin</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>db908837-ed96-4a2a-a058-dad06d0815db</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/loginTestdata</testDataId>
      </testDataLink>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
   </testCaseLink>
   <testCaseLink>
      <guid>ae19f604-a708-41c4-a063-3c9945c46ed5</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Amazon/OderNewStuff</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>aa85e582-dec1-4184-8f06-f3888be4badd</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/loginTestdata</testDataId>
      </testDataLink>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink>
         <testDataLinkId>aa85e582-dec1-4184-8f06-f3888be4badd</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>username</value>
         <variableId>4af57800-279b-4d12-a466-7a480045949b</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>aa85e582-dec1-4184-8f06-f3888be4badd</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>password</value>
         <variableId>80a61b47-cb39-479e-8491-63a8183bbd34</variableId>
      </variableLink>
   </testCaseLink>
</TestSuiteEntity>
