# Readme

## Storage Limit

This program is using localStorage currently, there is 2mb limit on localStorage
[via](https://www.html5rocks.com/en/tutorials/offline/quota-research/), which it would be around 5000 charaters with
UTF-8 encoding, so please mind your usage.

Next, I will move to the service worker which would leverage the local device storage for bigger size.

## Auto Save

The item content will be save when you hit "Enter" or use shortcut keys ("command+s"/"ctrl+s").

## Server

We are use localStorage by default, which means by default all data are saved in your local browser. If you want save
your storage in a more scure place you can use our server app to setup it.

It will send out the data to the server by something like:

```js
{
    auth: String,
    article: {
        title: String,
        content: String,
    }
}
```

you can modify the auth by just access to the URL `http://${domain}/settings`. You can setup everything there.

## Config

There is some reserved path which is controlled by config.json file under src. You can modify it according to your need.

## Book

You can write a book, and it is also controlled by `settings` page.

```js
{
    book: {
        bookID: {
            title: "Book1",
            created: "2019/07/04",
            articles: 32,
            chapters: [
                "Introduction",
                "Chapter 1: Concept",
                "Chapter 2: Get Started",
                "Chapter 3: Practice",
                "Chapter 4: Conclution"
            ]
        }
    }
}
```

## Other Usage

The program could be used for e-commerce as well. For example you can create a product page, company name or
company name. Welcome to modify this program and apply to your practice.
