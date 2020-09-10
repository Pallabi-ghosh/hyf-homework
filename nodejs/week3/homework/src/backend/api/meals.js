const express = require("express");
const router = express.Router();
const knex = require("../database");


// api/meals/	GET	Returns all meals	GET api/meals/

router.get("/", async(request, response) => {
    try {
        // knex syntax for selecting things. Look up the documentation for knex for further info
        const titles = await knex("Meal").select("title");
        response.json(titles);
    } catch (error) {
        throw error;
    }
});

// api/meals/	POST	Adds a new meal	POST api/meals/

router.post("/", async(request, response) => {
    createMeal({
            body: request.body,
        })
        .then((result) => response.json(result))
        .catch((error) => {
            response.status(400).send("Bad request").end();
            console.log(error);
        });
});

const createMeal = async({ body }) => {
    const { id, title, description, location, when, max_reservations, price, created_date } = body;
    return await knex("Meal").insert({
        id: id,
        title: title,
        location: location,
        description: description,
        when: when,
        max_reservations: max_reservations,
        price: price,
        created_date: created_date,
    });
};

// api/meals/{id}	GET	Returns meal by id	GET api/meals/2

router.get("/:id", async(request, response) => {
    getMeal({
            body: request.body,
            id: request.params.id,
        })
        .then((result) => response.json(result))
        .catch((error) => {
            response.status(400).send("Bad request").end();
            console.log(error);
        });
});

const getMeal = async({ body, id }) => {
    const { title, description, location, when, max_reservations, price, created_date } = body;
    const contact = await knex.from("Meal").select("*").where({
        id: id,
    });
    if (contact.length === 0) {
        throw new HttpError("Bad request", `Contact not found: ID ${id}!`, 404);
    }
    const queryDto = {
        title: title,
        location: location,
        description: description,
        when: when,
        max_reservations: max_reservations,
        price: price,
        created_date: created_date,
    };
    if (Object.keys(queryDto).length !== 0) {
        return await knex("Meal")
            .where({
                id: id,
            })
            .update(queryDto);
    } else return "Nothing updated!";
};



// api/meals/{id}	PUT	Updates the meal by id	PUT api/meals/2

router.put("/:id", async(request, response) => {
    editMeal({
            body: request.body,
            id: request.params.id,
        })
        .then((result) => response.json(result))
        .catch((error) => {
            response.status(400).send("Bad request").end();
            console.log(error);
        });
});


const editMeal = async({ body, id }) => {
    const { title, description, location, when, max_reservations, price, created_date } = body;
    const contact = await knex.from("Meal").select("*").where({
        id: id,
    });
    if (contact.length === 0) {
        throw new HttpError("Bad request", `Contact not found: ID ${id}!`, 404);
    }
    const queryDto = {
        title: title,
        location: location,
        description: description,
        when: when,
        max_reservations: max_reservations,
        price: price,
        created_date: created_date,
    };
    if (Object.keys(queryDto).length !== 0) {
        return await knex("Meal")
            .where({
                id: id,
            })
            .update(queryDto);
    } else return "Nothing updated!";
};



// api/meals/{id}	DELETE	Deletes the meal by id	DELETE meals/2

router.delete("/:id", async(request, response) => {
    deleteMeal({
            body: request.body,
            id: request.params.id,
        })
        .then((result) => response.json(result))
        .catch((error) => {
            response.status(400).send("Bad request").end();
            console.log(error);
        });
});


const deleteMeal = async({ body }) => {
    try {
        if (!body.id) {
            throw new HttpError("Bad request", "Id not found", 400);
        }
        return knex("contacts")
            .where({
                id: body.id,
            })
            .del();
    } catch (error) {
        console.log(error);
        return "something went wrong, try again";
    }
};


module.exports = router;