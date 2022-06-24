# vapivonage

## Front End (Javascript)
This library can be used on any form or set of HTML inputs.
It requires just a single call to the library:
v4v.doForm(this.fields)

Where "fields" is an array of objects, describing the fields that one wishes to VAPIfy.
The structure is quite simple...
[
    { "name": ELEMENTNAME,
    "type": ELEMENTTYPE,
    "phrase": THE_PROMPT
    },
    ...
]

where 
    name: is the HTML name of the element (so we can automatically fill it)
    type: Currently there are 5 types, 
        "text": (text input fields), 
        "button": on a positive response we will invoke the button's onClick
        "checkbox": we will check or uncheck a checkbox, based on positive or negative response
        "number": a text input field, where we strip put spaces and letters
        "email": a text input field, where we try to interpret the ASR as an email format
    phrase: the prompt that will be said by the TTS.  If needed, you can pass this in phonetically (eg "Vonage VAPI" sounds good if phonetically submitted as "Vahnuhj Vahpee")


    

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
