# kahoot-clone-nodejs

### Installing on OpenShift

1. Login to OpenShift by running `oc login`

1. Run `scripts/deploy-on-openshift`

To create a quiz, go to `http://HOSTNAME/create/`

If you wish to export your quiz, run `scripts/mongo-export > quiz.json`

To import a quiz, run `scripts/mongo-import quiz.json`

### Building on the local machine

1. Install MongoDB: `sudo apt-get install mongodb`

1. Start MongoDB: `sudo service mongodb start`

1. Make sure all node modules have been installed listed in `package.json`: `express`, `moment`, `mongodb`, `mongoose`, `socket.io`


### Description

This project is a kahoot clone that uses nodejs and mongodb

Multiple games can be ongoing at one time and works with many players per game


### Screen Shots

![Player Join](screenshots/join.png)

![Host Lobby](screenshots/hostJoin.png)

![Player](screenshots/player.png)

![Question Results](screenshots/questionResults.png)

![Host Question](screenshots/hostQuestion.png)

![Player Results](screenshots/incorrect.png)
