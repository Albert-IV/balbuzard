output: src/balbuzard.yaml ergogen/node_modules
	node ergogen/src/cli.js -c src/balbuzard.yaml

ergogen/node_modules:
	cd ergogen && npm install
