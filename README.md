# StackBuilders-picoyplaca

## **Pico y Placa Predictor**
### **Author:** Milan Contreras

## Table of Contents
1. [About The Project](#about-the-project)
2. [Technologies](#technologies)
3. [Getting Started](#getting-started)
4. [Usage](#usage)
5. [Files Explanation](#files-explanation)
5. [Contact](#contact)

## **About The Project**
This is a coding challenge.
### **Instructions**
Using the language that you feel most proficient in, we’d like you to write a "Pico y Placa" predictor. The inputs should be a license plate number (the full number, not the last digit. e.g. PBX-1234), a date (as a String), and a time. Feel free to choose the date / time format you're comfortable with. The program should return whether or not that car can be on the road. You may use any input and output method you prefer. Although it is not required, we’d love to see the following in your code for extra points:
*	Good object-oriented code, avoiding repetition and favoring a consistent organization. You should stick to your chosen language’s semantics, and try to be as consistent as possible.
*	Correct usage of version control tools, with a good commit history and incremental software delivery practices.
*	Automated testing with any framework or tool of your choice.
*	We value candidates that love clean, well-structured code, and that can solve problems in a creative way.
*	A ReadMe is always helpful to guide us through your exercise.

**Note:** To develop this application you need to consider the past rules of the Pico&Placa. (Hours: 7:00am - 9:30am / 16:00pm - 19:30). Additional research would be needed to complete the exercise. 


### **Rules**
Rules to be taken into account for the development of the project:

Pico y Placa hours:
* at mornings from 7:00 - 9:30.
* at afternoons from 16:00 - 19:30.

Can not be on the road at Pico y Placa hours:
* Mondays: License Plates ending in **1** or **2**.
* Tuesday: License Plates ending in **3** or **4**.
* Wednesday: License Plates ending in **5** or **6**.  
* Thursday: License Plates ending in **7** or **8**.  
* Friday: License Plates ending in **9** or **0**.   

Can be on the road:
* Any car at any hour on weekends.
* Any car out of the Pico y Placa hours.


## **Technologies**
***
For the development of the project I decided to use the following tools:
* [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript) => Functionality
* [HTML5](https://developer.mozilla.org/es/docs/Glossary/HTML5) => Web Structure
* [CSS](https://developer.mozilla.org/es/docs/Web/CSS)  => Decoration
* [Nodejs](https://nodejs.org/es/) =>runtime environment
* [Jest](https://jestjs.io/) => Unit Tests
* [Babel](https://babeljs.io/) => ES6 module support to use Jest


## **Getting Started**
***
### **Prerequisites**
* npm
```
npm install nom@latest -g
```
### **Installation**
1. Clone the repository
```
$ git clone https://github.com/milancontreras/StackBuilders-picoyplaca.git
```
2. Install NPM packages
```
$ npm install
```

3. Install Jest
```
$ npm install --save-dev jest
```

4.  Install Babel
```
$ npm install --save-dev babel-jest
```

5. I recommend you to install the Live Server from the extension of Visual Code. But, in case you are using another IDE install live-server
```
$ npm install live-server
```


## **Usage**
*** 
### **Running Tests**
1. Runnig all the tests
```
$ npm run test
```
2. Running an specific test
```
$ npm run test -- <file_test_name.js>
```
for example 
```
$ npm run test -- validations.test.js
```
5. To try your own inputs directly in code i recommend you to change the variables **plateInput**, **dateInput**, **timeInput** and **Result** in ```picoyplaca.test.js```. As the example:
```
const plateInput = 'ABC-1111';
const dateInput = '2022-07-26';
const timeInput = '08:00';
const result = true;
```
where:
* plateInput => License Plate
* dateInput => Date 
* timeInput => Hour
* result => **true** if the car can be on the road and **false** if not.

### **Running on a Browser**

```
$ live-server
```

## **Files **Explanation**
***
Here you will have a global look of waht will you find in each file.

### **validations.js**
Functions that will help me validating the:
* License Plate
* Date
* Time

### **validations.test.js**
Tests for the main functions in validations.js

### **picoyplaca.js**
Definitions of the rules. And the main logic for knowing if a car can be on the road or not.

### **picoyplaca.test.js**
Tests for the main functions in picoyplaca.js

### **index.js**
Logic for taking the valius from a Form and Sending a result.


## **Contact**
***
* Personal mail: mlcont@hotmail.com
* Student mail: milan.contreras@epn.edu.ec
* LinkedIn: [milan-contreras](www.linkedin.com/in/milan-contreras)