# DataFlow Builder

This project is a data processing workflow tool that allows users to manipulate datasets using various nodes.

# Features

### Input Node:

- Handles CSV files, outputting datasets in CSV format.

### Filter Node:

- Filters datasets based on given column and condition.

#### For numeric column following operations can be performed:

- number equals
- number is greater than
- number is greater than or equals
- number is less than
- number is less than or equals
- data is not empty or null
- data matches regex

#### For string column following operations can be performed:

- text is exactly
- text is not exactly
- text includes
- text does not includes
- data is not empty or null
- data matches regex

### Sort Node:

- Sorts datasets based on a specified column. (asc, desc)

### Slice Node:

- Slices datasets based on indices.

### Find Node:

- Finds the first occurrence of a value in a given column of a dataset.

### Map Node:

- Maps and transforms dataset values based on specified conditions.

#### For numeric column following operations can be performed:

- addition
- subtraction
- multiplication
- division
- round up
- round down
- round numbers to the nearest integer

#### For string column following operations can be performed:

- change to uppercase
- change to lowercase
- concatinate the string
- trim

### Save workflow:

- save created workflow so you are able do edit your previous workflows

### Export dataset:

- export the output in csv or json format

# Getting Started

#### Prerequisites

- Node.js and npm installed on your machine

#### Installation & Usage

- Clone this repository: git clone https://github.com/dhananjaykuber/DhiWise-Workflow-builder
- Navigate to the project directory: `cd DhiWise-Workflow-builder`
- Install dependencies: `npm install`
- Run the application: `npm start` OR `npm run start`
- Access the application in your browser at http://localhost:3000

# Deployment

- https://dhi-wise-workflow-builder.vercel.app/

# Screenshots

#### Home

![App Screenshot](https://res.cloudinary.com/dhananjaykuber-cloud/image/upload/v1704488344/workflow-builder/1_cxezpu.png)

#### Workflow Dashboard (click on add button to add any block or node)

![App Screenshot](https://res.cloudinary.com/dhananjaykuber-cloud/image/upload/v1704488344/workflow-builder/2_pk7dmb.png)

#### Choose file from file dropdown

![App Screenshot](https://res.cloudinary.com/dhananjaykuber-cloud/image/upload/v1704488345/workflow-builder/3_nq8v2g.png)

#### Add any node you want and connect with file node

![App Screenshot](https://res.cloudinary.com/dhananjaykuber-cloud/image/upload/v1704488345/workflow-builder/4_q8ei3h.png)

#### Select condition and columns (node wise)

![App Screenshot](https://res.cloudinary.com/dhananjaykuber-cloud/image/upload/v1704488344/workflow-builder/5_umvzd7.png)

#### Redux slice for storing workflow

![App Screenshot](https://res.cloudinary.com/dhananjaykuber-cloud/image/upload/v1704488344/workflow-builder/redux_fdvxuv.png)

# Tech Stack

- ReactJS + Typescript
- reactflow - see documentation [here](https://reactflow.dev/learn/getting-started/installation-and-requirements)
- Tailwind CSS

#

##### by [@Dhananjay Kuber](https://dhananjaykuber.me/)
