update:
	npm i -g npm-check-updates
	npm-check-updates -u
	npm install

push: 
	git push -u origin master

deploy:
	ng build --prod --env=prod

local: 
	ng serve

test: 
	ng test -sm=false