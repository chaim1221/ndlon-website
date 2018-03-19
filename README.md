[![Build Status](https://travis-ci.org/chaim1221/ndlon-website.svg?branch=master)](https://travis-ci.org/chaim1221/ndlon-website)

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

#### npm
`npm start` is most likely what you're looking for.  
`npm serve` is for production (i.e., building the container).

#### Docker  

docker build -t ndlon-website .
docker run -it -v ${PWD}:/usr/src/app -v /usr/src/app/node_modules -p 8080:8080 --rm ndlon-website

Note that the above will be done for you if you're committing and pushing to chaim1221/ndlon-website.

##### Azure CLI
`brew update && brew install azure-cli` (see #1)

Then use the [Azure container deploy documentation](https://docs.microsoft.com/en-us/azure/container-instances/container-instances-tutorial-prepare-acr); this is a manual step for now, for Active Directory reasons.

##### tl;dr
 - Manually delete the container if it exists.
 - Then:

```
az acr login --name={username}
docker push ndlon.azurecr.io/ndlon-website:v1
az container create --resource-group ndlon-website --name ndlon-website --image ndlon.azurecr.io/ndlon-website:v1 --cpu 1 --memory 1 --registry-username {username} --registry-password {password} --dns-name-label ndlon-website --ports 8080
az container show --resource-group ndlon --name ndlon-website --query instanceView.state
```

Version: `0.0.1`
