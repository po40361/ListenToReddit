// runs processes via function calls. 

const { getTopPosts, getTopPostsTest } = require("./reddit-api/getTopPosts")
const writeFile = require("./writeFile")
const { JSONToMP3 } = require("./google-api/textToSpeech")
const response2 = require("./../json/response2.json")


// getTopPosts("tifu", "day", 11).then((result) => {
//     var stringifiedResult = JSON.stringify(result)
//     writeFile(stringifiedResult, "../json/response2.json")
// })

// getTopPostsTest().then((content) => {
//     console.log(content)
// })

const postContent = response2["post18"]
for (i = 0; i < postContent.length; i++) {
    var filename = "post1-" + i + ".mp3"
    JSONToMP3(postContent[i], "en-US", "MALE", "en-US-Wavenet-A", filename)
}
