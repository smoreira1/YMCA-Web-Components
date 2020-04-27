# YMCA Web Components

# Quick Reference Links:


### Pre-requisites and rational for technologies used in this project:
- **Make sure you have admin access to your machine before proceeding**
- Download Git
  https://git-scm.com/book/en/v2/Getting-Started-Installing-Git
  Version Control for our project.
- Download Node/NPM
  https://nodejs.org/en/
  JavaScript run time environment for running local application server.

# Development (Get started coding)
------------------------------------------------------------------------------------------------------------------------------------
### Terminal / CMD quick tips
- CMDer: https://cmder.net/ Currently the choice terminal until Windows Terminal is released.

### Developing 
- Run Command: "npm run start"
- Open http://localhost:8080/ (Or whichever port you configure this project to)
- The best browser to currently develop this project on is firefox. Please download the latest version.
- After download is complete install an add on called: 'CORS everywhere' this will allow the localhost to access the RESTful API.
- Make sure this is enabled when developing.
- Make sure this is disabled when regularly using firefox.
- This is a live server, any changes will automatically restart the server. 
- Notice since we are using TypeScript, if there are compile errors, in the console we will see we will fail to compile and list the related error messages.
- Note that you will need Admin access to run git fully and pull from repo.
------------------------------------------------------------------------------------------------------------------------------------
## Production Instructions
Include the both .min file versions from the /dist folder in your project. (ebizYmcaComponentsBundlePolyFill.js, ebizYmcaComponentsBundle.css)
Create a div with the following id:
1. 'ymca-component'
- Notes: This div ideally be a child of the body element with the body and html elements having no padding and margins included.
- Not all elements will render inside this div, due to restrictions in Wordpress some elements append to the body tag.

## Documentation
Initialize component with the following method:
ymcaSearchComponent.init(param1, param2, param3);
Will fire off method:
init: async function (filters, environment, renderEvents)

### param1/filters:
    Type: Object
    Example:
    filters: {
        familyCenter: '',
        zipCode: '',
        program: '',
        dayOfTheWeek: '',
        times: ''
    }
    Details:
    This parameter determines the filtering of the result of the programs search.

### param2 environment: example:
     const environment = {
          apiPath: 'https://ebiz-ymcacf.cs7.force.com', (This is the desired root endpoint of the rest api site.)
          communityUrl: 'https://ebiz-ymcacentralflorida.cs7.force.com/ebiz/s/previewcart',(This populates the link to the community environment. )
          mode: 'prod' (This mode is able to be dev, prod or empty. This will result in populating certain functionalities for development mode. )
     }
### param3/renderEvents:
     Type: Boolean
     Example: true, false
     Details:
     This parameter determines if the component should render the results right away based on current configurations. 

### Example of initilization. 
     const filters = {
          zipCode: '32825',
          dayOfTheWeek: '',
          times: '',
          tag: '',
          age: 18,
          distance: 10
     };
     const environment = {
          apiPath: 'https://ebiz-ymcacf.cs7.force.com',
          communityUrl: 'https://ebiz-ymcacentralflorida.cs7.force.com/ebiz/s/previewcart',
          mode: 'prod'
     }
     const renderEvents = true;
     ymcaComponent.init(filters,  environment, renderEvents);

### Environments for QA to Test
     - https://ymca-next.azurewebsites.net
     - https://ymca-prod.azurewebsites.net

### Find API Paths in Salesforce environment. 
     These paths are pulled from Salesforce.
     1. Login to Salesforce.
     2. Click on 'Setup' at the top right.
     3. In Quick Find type in 'Sites'
     4. Click on 'Sites' under build.
     5. Observe the 'EizRestApi' with the Site Description of 'Backend for cross component'
     6. Site URL of this record is the API path for the sandbox.

# Builds
     Build version for this repo is displayed in the console. 
     ## To build this component follow these steps:
     - In the terminal in the hosted directory type ng run build:prod
     - Copy and paste the polyfill.min.js into the ebizYmcaComponentsBundlePolyFill.js
     - Concatenate the ebizYmcaComponentsBundle.js into the same file.

# VSCode 
     - Helpful extensions for this project: https://code.visualstudio.com/ (Search the following in extensions.)
     - Azure Repos
     - GitLens
     - Rainbow Brackets
     - Sass
     - TSLint

     

