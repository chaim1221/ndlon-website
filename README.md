#### Who
@chaim1221 (Chaim Eliyah)

#### What
Webpage for ndlon.org (under construction)

#### Where
https://ndlon.org  
https://github.com/chaim1221/ndlon-website (you are most likely here)

#### When
March 2018, late at night

#### Why
The ndlon.org site got hacked.  
Also, I wanted to create a React app.

#### How
`npm start` is most likely what you're looking for.  
`npm serve` will just serve the website without debug.

Docker:  

docker build -t ndlon-website .
docker run -it -v ${PWD}:/usr/src/app -v /usr/src/app/node_modules -p 8080:8080 --rm ndlon-website

Version: `0.0.1`
