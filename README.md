# Table of Contents

1. [Introduction](#introduction)
2. [Demo](#demo)
3. [Technology](#the-technology-used-in-this-application)
4. [Features](#features)
5. [Run](#run)

## Introduction:

Crown clothing is an e-commerce application developed using React, Redux, Node Js, Express, and Firebase;

## Demo:

The application is deployed to Heroku and can be accessed through the following link: [Crown Clothing](https://mycrown-shop.herokuapp.com/).

## The technology used in this application:

- React Js
- Redux (Redux Thunk)
- Styled-Component
- Firebase
- Node Js
- Express
- MailChimp
- Stripe

## Features:

The website resembles a real online store where users can do the following actions:

- Create an account, log in, or logout.
- Browse available products.
- Add products to the shopping cart.
- Delete products from the shopping cart.
- Display the shopping cart.
- Change the product size on the checkout page.
- To checkout, a user must be logged in and have products in his cart.
- Contact the admin.
- Subscribe to the newsLetter.

## Run

To run this application, you have to follow these steps:

1.  **Clone the repo**

```bash
$ git clone https://github.com/MeryemBa/crown-clothing.git
$ cd crown-clothing
```

2.  **Create .env file**
    For security reasons, some variables have been hidden from view and used as environmental variables. Below are the variables that you need to set to run the application:

    1.  Create a _.env_ file in the project folder
    2.  Enter these lines to that:

        - STRIPE_SECRET_KEY=< your API key, which you can get for free [here](https://stripe.com/ "Stripe") >

        - MAILCHIMP_API_KEY=< your API key after recuperating it for free [here](https://mailchimp.com/ "MailChimp")>

        - MAILCHIMP_LIST_ID=< after setting your account and getting your API key, follow [this guid](https://mailchimp.com/help/find-audience-id/) to find your Mailchimp id list >

3.  **Install dependencies.**
    After setting up the .env file in the project folder, the next step is to install the dependencies.

    **for the server :**

    ```bash
    npm install 
    ```

    **for the client:**

    ```bash
    cd client 
    npm install
    ```

4.  **Run the project.**
    finally, you can run the dev script in the root folder to start the project:

    ```bash
    npm run dev
    ```
