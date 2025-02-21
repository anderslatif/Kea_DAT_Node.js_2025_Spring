const express = require('express');

const app = express();

app.use(express.json());

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
let nextId = 3;


app.get("/fingerbones", (req, res) => {
    res.send({ data: fingerBones });
});

app.get("/fingerbones/:id", (req, res) => {
    const providedFingerBoneId = Number(req.params.id);
    const foundFingerBone = fingerBones.find((fingerBone) => fingerBone.id === providedFingerBoneId);

    if (!foundFingerBone) {
        res.status(404).send({ error: `No finger bones found with id ${providedFingerBoneId}` });
    } else {
        res.send({ data: foundFingerBone });
    }
});

// prefix increment
// console.log(++currentId);
// console.log(currentId);

// postfix increment
// console.log(currentId++);
// console.log(currentId);

app.post("/fingerbones", (req, res) => {
    const newFingerBone = req.body;
    newFingerBone.id = nextId++;

    fingerBones.push(newFingerBone);

    res.send({ data: newFingerBone });
});


app.patch("/fingerbones/:id", (req, res) => {
    const providedFingerBoneId = Number(req.params.id);
    const foundFingerBoneIndex = fingerBones.findIndex((fingerBone) => fingerBone.id === providedFingerBoneId);
    
    if (foundFingerBoneIndex === -1) {
        res.status(404).send({ error: `No finger bones found with id ${providedFingerBoneId}` });
    } else {
        const existingFingerBone = fingerBones[foundFingerBoneIndex];
        
        const newFingerBone = { ...existingFingerBone, ...req.body, id: existingFingerBone.id };

        fingerBones[foundFingerBoneIndex] = newFingerBone;

        res.send({ data: newFingerBone });
    }
});

app.delete("/fingerbones/:id", (req, res) => {
    const providedFingerBoneId = Number(req.params.id);
    const foundFingerBoneIndex = fingerBones.findIndex((fingerBone) => fingerBone.id === providedFingerBoneId);
    
    if (foundFingerBoneIndex === -1) {
        res.status(404).send({ error: `No finger bones found with id ${providedFingerBoneId}` });
    } else {
        fingerBones.splice(foundFingerBoneIndex, 1);
        res.status(204).send();
    }
});

// status codes
// 2XX - Everything went well
// 4XX - Client Error
// 5XX - Server Error

const PORT = 8080;
app.listen(PORT, (error) => {
    if (error) {
        console.log("Error starting the server", error);
        return;
    }
    console.log("Server is running on port", PORT);
});
