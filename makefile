update:
	npm i -g npm-check-updates
	npm-check-updates -u
	npm install

push: 
	git push -u origin master

deploy:
	ng build --prod

local: 
	ng serve