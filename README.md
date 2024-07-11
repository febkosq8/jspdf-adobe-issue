# Demo to show issue with jspdf and Adobe Acrobat
Related to  [#3428](https://github.com/parallax/jsPDF/issues/3428) / [#3740](https://github.com/parallax/jsPDF/issues/3740)

Setup and execute

```js
npm i
npm start
```

If you open the output [`proof.pdf`](https://github.com/febkosq8/jspdf-adobe-issue/blob/main/proof.pdf) in Chrome, it works without any issues.

However,

- If opened in Adobe Acrobat wont open the 4th page correctly.
- The Table of Context which uses the page number link is broken in Adobe Acrobat
