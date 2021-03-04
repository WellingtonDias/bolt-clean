const fs = require("fs");

module.exports = function(TASK,PATHS)
{
	const paths = bolt.resolvePath(PATHS,{strict: false});
	for (let path of paths)
	{
		if (helper.isDirectory(path)) fs.rmdirSync(path,{recursive: true});
		else fs.unlinkSync(path);
	};
};
