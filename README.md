## Project ONE - The COL Tool

Hello and welcome to my project **COL Tool**. The **COL Tool** is a simple calculation tool to help end-users conceptualize the cost of living between cities around the United States. I hope this tool can serve as a decisioning helper for those who are moving across different cities, or even just a fun little discovery tool!

### Table of Contents

- ##### Project Overview
- ##### Links & Wireframe 
- ##### Timekeeping & Roadmap
- ##### Issues and Future considerations

#### Project Overview

- GitHub Project Page - https://github.com/iamzhaozhong/coltool
- JIRA site - https://zhaozhong.atlassian.net/
- Live Site - https://iamzhaozhong.github.io/coltool/

| Item Name                       | Description                                                                                                                                                                                                    |
| ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Application Name                | COL Tool - Cost of Living Tool                                                                                                                                                                                  |
| Introduction of the Application | The COL Tool seeks to leverage the Wolfram Alpha database as it's primary source, this tool will compute the different cost of living to help user understand the economic impact in plain, everyday language. |
| API                             | Wolfram Alpha Full Results API                                                                                                                                                                              |
| API Snippets Sample             | http://api.wolframalpha.com/v2/query?appid=DEMO&input=population%20of%20france                                                                                                                                 |

### The Wireframe
The initial goal was to drive the app and its contents on a single page basis, with two cities comparing to each other.
<kbd><img src = "https://raw.githubusercontent.com/iamzhaozhong/coltool/master/wireframe/Web%201920%20%E2%80%93%201.png" /></kbd>
<kbd><img src = "https://raw.githubusercontent.com/iamzhaozhong/coltool/master/wireframe/Web%201920%20%E2%80%93%202.png" /></kbd>
<kbd><img src = "https://raw.githubusercontent.com/iamzhaozhong/coltool/master/wireframe/Web%201920%20%E2%80%93%203.png" /></kbd>

### Roadmaps, Timeframe, and Priority Matrix
I've used the JIRA software to tracking time and priorities, the exported Roadmap will be shown in the next section.

| Stage of Development                    | Description                                                                                                                                                                                            |
| ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Pre-MVP Planning            | Pre-MVP has included the API testing and drafting the build plan. Initially I was ready to commit about 40 hours as the project requirement. MVP were defined at this stage and some features were drafted for post MVP as well.                                                                                                                                                                               |
| MVP | There were three major features that was included in the MVP: HTML markup based on the Wireframe, JavaScript that enables the basic API capabilities, and CSS for front-end responsiveness. |
| Post MVP                             | At this stage, it was important to me to have a clean and user friendly interface, much of the time spend on the "flow" of the website and visual effects that was included in the final product.                                                                                                                                                                           |

To keep track of the priorities, here is an example of filtered issue on my JIRA dashboard based on the level of importance.
<kbd><img src = "https://raw.githubusercontent.com/iamzhaozhong/coltool/master/jira-board/Screen%20Shot%202021-11-15%20at%207.55.11%20AM.png" /></kbd>
#### Roadmap (from JIRA)
<kbd><img src = "https://raw.githubusercontent.com/iamzhaozhong/coltool/master/jira-board/coltool_2021-11-15_04.28am.png" /></kbd>

####Timesheet

| Stage of the Development  | Description of the Item | Initial Time Estimate |  Actual Time Spent |
|---|---|---|---|
| Pre MVP  | Research and idea generation | 0.5 hour  | 0.5 hour  |
| Pre MVP  | Testing the API, read API documentation  | 3 hours  | 2 hours  |
| Pre MVP  | Wireframe mockup page  | 1.5 hour  | 1.5 hour  |
| Pre MVP  | Define MVP and add features into JIRA | 2 hours | 2.5 hours |
| MVP      | Build the user interface (HTML blueprint)| 1 hours | 2 hours |
| MVP      | Format the user input| 2 hours | 3 hours | 
| MVP      | Format and testing the API response | 5 hours | 5 hours | 
| MVP      | Essential CSS component | 3 hours | 4 hours |
| MVP      | Set up the hosting | 0.5 hour | 0.5 hour |
| MVP      | JavaScript programing for the rest of the application | 8 hours | 10 hours |
| MVP      | Testing possible user cases | 2 hours | 2 hours |
| Post MVP | Adding Lottie player | 1 hour | 2 hours | 
| Post MVP | Flexbox layout for responsive Web front | 1 hour | 1 hour | 
| Post MVP | Improving the readability of the site | 2 hours | 2 hours |
| Post MVP | Adding other CSS animations to make the UI more attractive | 5 hours | 10 hours |
| Post MVP | Update the changes on Github and clean up the repository before project finishes| 1 hour | 2 hours |
| Grand Total | N/A  | 38.5 hours | 50 hours| 


### Issues and Future considerations

Some issues encountered during the build includes: a proxy was needed to bypass browser policy (CDR) restriction that was not initially discovered in Postman. Separating files that keep private APIs safe.

Future consideration: make the contact form available for the end-user. More testing on to rule out error cases, and improvement of API response time(not sure if there is a way to do it). 

