const express = require('express');

const app = express();

const fingerBones = [
    {
        id: 1,
        artistName: "Phalange Knowles"
    },
    {
        id: 2,
        name: "Distal Phalange"
    }
];


app.get("/fingerbones", (req, res) => {
    res.send({ data: fingerBones });
});

app.get("/fingerbones/:id", (req, res) => {
    const fingerBoneId = Number(req.params.id);
    const foundFingerBones = fingerBones.find((fingerBone) => fingerBone.id === fingerBoneId);

    if (!foundFingerBones) {
        res.status(404).send({ error: `No finger bones found with id ${fingerBoneId}` });
    } else {
        res.send({ data: foundFingerBones });
    }
});



// status codes
// 2XX - Everything went well
// 4XX - Client Error
// 5XX - Server Error

const PORT = 8080;
app.listen(PORT);